<template>
  <div class="editor-container" :class="{'message-container': isMessageEditor}">
    <img v-if="!isMessageEditor && !flag" class="avatar" :src="avatar" :alt="form.nickname || '匿名用户'" @load="flag = false" @error="flag = true">
    <span v-show="flag" class="avatar" :style="{backgroundColor: 'green'}">{{ form.nickname ? form.nickname.slice(0, 1) : '匿' }}</span>
    <section class="comment-wrapper">
      <transition-group class="slide-wrapper" tag="div" name="list-slide">
        <!-- 回复内容区域 -->
        <!-- <section class="list-slide-item reply-item" v-if="isShowReplyContent" :key="1">
          <div v-if="isShowReplyContent" class="reply-target">
            <i class="icon icon-ant-close" @click="closeReplyContent"></i>
            <strong class="reply-author">@{{reply.nickname}}</strong>
            <div class="reply-content markdown" v-html="reply.content"></div>
          </div>
        </section> -->
        <!-- 评论内容区域 -->
        <section :key="2" class="list-slide-item editor-item">
          <div
            ref="editContent"
            class="editor"
            contenteditable="true"
            :placeholder="placeholder"
            @keyup="contentChange"
            @click="getCursorPosition"
          />
        </section>
        <!-- 工具栏 -->
        <section :key="3" class="list-slide-item tools-wrapper tools-item">
          <div class="editor-tools">
            <a v-click-outside="() => {isShowEmoji = false}" class="tool-item" @click="isShowEmoji = true">
              <i class="iconfont icon-biaoqing" />
              <ul v-show="isShowEmoji" class="emoji-wrapper">
                <li v-for="(emoji, index) in emojiList" :key="index" class="emoji-item" @click.stop="insertEmoji(emoji)">
                  {{ emoji }}
                </li>
              </ul>
            </a>
            <a class="tool-item" @click="insertContent('image')">
              <i class="iconfont icon-tupian" />
            </a>
            <a class="tool-item" @click="insertContent('link')">
              <i class="iconfont icon-lianjie" />
            </a>
            <a class="tool-item" @click="insertContent('code')">
              <i class="iconfont icon-code" />
            </a>
          </div>
          <a class="tool-item" @click="debouncedSend">
            <i class="iconfont icon-send" />
          </a>
        </section>
        <div :key="4" class="list-slide-item user-item">
          <section key="4" class="user-wrapper">
            <input
              v-model="form.nickname"
              maxlength="32"
              class="user-input"
              :required="isMessageEditor ? false : true"
              name="text"
              type="text"
              :placeholder="isMessageEditor ? '昵称（非必填）' : '昵称（必填）'"
            >
            <input
              v-if="!isMessageEditor"
              v-model="form.email"
              class="user-input"
              :required="isMessageEditor ? false : true"
              name="email"
              type="email"
              placeholder="邮箱（必填）"
            >
            <input
              v-if="!isMessageEditor"
              v-model="form.website"
              class="user-input"
              name="url"
              type="url"
              placeholder="个人网站（完整域名，非必填）"
            >
          </section>
        </div>
      </transition-group>
    </section>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'
import Uitls from '@/services/utils/util'
import ClickOutside from '@/services/directives/click-outside'
import { getCursorPosition, setCursorPosition } from '@/services/utils/dom'
import gravatar from '@/services/gravatar/gravatar'

const emojiList = [
  '😃', '😂', '😅', '😉', '😌', '😔', '😓', '😘', '😡', '😭', '😱', '😳', '😵',
  '🌚', '👍', '👎', '💪', '🌹', '💊'
]

export default {
  directives: {
    ClickOutside
  },
  props: {
    isShowReplyContent: {
      type: Boolean,
      default: false
    },

    isMessageEditor: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '千生百世，缘起缘灭，皆已注定...'
    }
  },

  data() {
    return {
      flag: false,
      isShowEmoji: false,
      contentText: '',
      contentHtml: '',
      form: {
        nickname: '',
        content: '',
        email: '',
        website: ''
      },
      reply: {
        replyNickname: '',
        replyContent: ''
      },
      emojiList,
      cursorPosition: 0
    }
  },

  computed: {
    avatar() {
      return gravatar(this.form.email)
    }
  },

  created() {
    // 发送防抖
    this.debouncedSend = debounce(1000, true, () => {
      this.send()
    })
    if (process.client) {
      let user = window.localStorage.getItem('USER')
      if (user) {
        user = JSON.parse(user)
        this.form.nickname = user.nickname || ''
        this.form.email = user.email || ''
        this.form.website = user.website || ''
      }
    }
  },

  methods: {
    // 重置为空
    resetField() {
      this.form.content = ''
      this.contentText = ''
      this.contentHtml = ''
      this.$refs.editContent.innerHTML = ''
      this.$refs.editContent.innerText = ''
      this.cursorPosition = 0
    },

    closeReplyContent() {
      this.$emit('closeReplyContent')
    },

    contentChange() {
      const html = this.$refs.editContent.innerHTML
      const text = this.$refs.editContent.innerText
      if (!Object.is(html, this.comemntContentHtml)) {
        this.contentHtml = html
      }
      if (!Object.is(text, this.comemntContentText)) {
        this.contentText = text
      }
      this.cursorPosition = getCursorPosition(this.$refs.editContent)
    },

    getCursorPosition() {
      this.cursorPosition = getCursorPosition(this.$refs.editContent)
    },

    send() {
      this.contentChange()
      const inValidMsg = this.getInValidMsg()
      if (inValidMsg) {
        this.$message.warning(inValidMsg)
        return
      }
      if (process.client) {
        const user = {
          nickname: this.form.nickname,
          email: this.form.email,
          website: this.form.website
        }
        window.localStorage.setItem('USER', JSON.stringify(user))
      }
      this.$emit('send', this.form)
    },

    getInValidMsg() {
      this.form.content = this.contentText
      if (!this.isMessageEditor) {
        if (!this.form.email) {
          return '邮箱不能为空'
        }
        if (Uitls.validateEmail(this.form.email) === false) {
          return '请填写正确的email格式'
        }
      }
      if (this.form.website && Uitls.validateUrl(this.form.website) === false) {
        return '请填写正确的url格式'
      }
      if (!this.form.content || !this.form.content.replace(/\s/g, '')) {
        if (this.form.content.length > 1000 || this.form.content.split('\n').length > 30) {
          return `${this.isMessageEditor ? '留言' : '评论'}内容不能超过1000个字且控制在30行以内`
        }
        return this.isMessageEditor ? '留言内容不能为空' : '评论内容不能为空'
      }
      // 留言墙
      if (this.isMessageEditor) {
        if (this.form.nickname && this.form.nickname.length > 32) {
          return '昵称不能超过32个字符'
        }
      } else {
        if (!this.form.nickname || this.form.nickname.length > 32) {
          return '昵称不能为空且长度不能超过32个字符'
        }
      }
      return false
    },

    insertContent(type) {
      const contents = {
        image: {
          start: `![`,
          end: `]()`
        },
        link: {
          start: `[`,
          end: `]()`
        },
        code: {
          start: '\n```\n',
          end: '\n```'
        }
      }
      if (contents[type]) {
        this.updateEditContent(contents[type])
      }
      this.focusSelection(this.$refs.editContent)
    },
    focusSelection(dom) {
      if (window.getSelection) { // ie11 10 9 ff safari
        dom.focus() // 解决ff不获取焦点无法定位问题
        const range = window.getSelection()// 创建range
        range.selectAllChildren(dom)// range 选择obj下所有子内容
        range.collapseToEnd()// 光标移至最后
      } else if (document.selection) { // ie10 9 8 7 6 5
        const range = document.selection.createRange()// 创建选择对象
        range.moveToElementText(dom)// range定位到obj
        range.collapse(false)// 光标移至最后
        range.select()
      }
    },
    insertEmoji(emoji) {
      const editor = this.$refs.editContent
      const text = editor.innerText
      // 插入 emoji
      editor.innerText = text.slice(0, this.cursorPosition) + `${emoji}` + text.slice(this.cursorPosition, text.length)
      // 光标位置后挪一位，以保证在刚插入的 emoji 后面
      setCursorPosition(editor, this.cursorPosition + 2)
      // 更新本地保存的光标位置变量（注意 emoji 占两个字节大小，所以要加1）
      this.cursorPosition = getCursorPosition(editor) + 2 // emoji 占两位
      this.contentChange()
    },

    updateEditContent({ start = '', end = '' }) {
      if (!start && !end) {
        return
      }
      const editor = this.$refs.editContent
      const selectedText = (window.getSelection || document.getSelection)().toString()
      const currentText = editor.innerText
      if (selectedText) {
        const newText = currentText.replace(selectedText, start + selectedText + end)
        editor.innerText = newText
      } else {
        editor.innerText = editor.innerText += (start + end)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/animation.scss";

.editor-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.avatar {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #eee;
  line-height: 36px;
  color: #fff;
  @media (max-width: 479px) {
    display: none;
  }
}

.slide-wrapper {
  position: relative;
}

.message-container {
  .comment-wrapper {
    width: 100%;
  }

  .slide-wrapper {
    display: flex;
    flex-direction: column;

    .user-item {
      order: 1;
      margin: 5px 0 10px;

      @media (max-width: 767px) {
        .user-input {
          width: 100%;
        }
      }

      @media (max-width: 479px) {
        .user-input {
          width: calc(100% - 20px);
        }
      }
    }

    .editor-item {
      order: 2;
    }

    .tools-item {
      order: 3;
    }
  }
}

.comment-wrapper {
  width: calc(100% - 50px);

  @media (max-width: 479px) {
    width: 100%;
  }

  .list-slide-item {
    transition: all 0.3s ease-in-out;
  }

  .reply-target {
    box-sizing: border-box;
    position: relative;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;

    .icon-ant-close {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 5px;
      right: 5px;
      width: 30px;
      height: 30px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        color: #ccc;
      }
    }
  }

  .editor {
    box-sizing: border-box;
    width: 100%;
    min-height: 120px;
    max-height: 300px;
    padding: 10px;
    font-size: 14px;
    color: #222;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    overflow-y: auto;
    font-family: Microsoft Yahei;
    background-image: url(https://gravatar.ufile.ucloud.com.cn/static/photo/comment-bg.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    resize: vertical;
    text-align: left;
    background-color: #f4f5f7;
    &:empty:before {
      content: attr(placeholder);
      position: absolute;
      left: 10px;
      top: 10px;
      transform-origin: 0 0;
      font-size: 14px;
      pointer-events: none;
      transition: all .25s;
    }

    &:hover {
      border-color: #029fe9;
      background-color: #fff;
    }

    &:focus {
      border-color: #029fe9;
      background-color: #fff;
      &:before {
        content: attr(placeholder);
        position: absolute;
        left: 10px;
        top: 10px;
        transform-origin: 0 0;
        pointer-events: none;
        transition: all .25s;
        color: #fff;
        background-color: #029fe9;
        font-size: 16px;
        padding: 0 4px;
        transform: scale(0.75) translate(0px, -24px);
        border-radius: 3px;
      }
    }
  }
  .user-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    .user-input {
      width: calc(32% - 20px);
      height: 10px;
      line-height: normal;
      padding: 8px 10px;
      outline: none;
      color: #222;
      white-space: nowrap;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        border-color: #222;
      }

      &:focus {
        border-color: #222;
      }

      @media (max-width: 767px) {
        width: calc(100% - 20px);
        margin: 3px 5px;
      }
    }
  }
}

.tools-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tool-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
    }
  }
}

.editor-tools {
  display: flex;
  justify-content: flex-start;
  margin: 5px 0;

  > a {
    position: relative;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.emoji-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: absolute;
  top: 30px;
  left: 0;
  width: 200px;
  padding: 10px;
  background-color: #fff;
  cursor: default;

  .emoji-item {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 16px;
    width: 36px;
    height: 36px;

    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>
