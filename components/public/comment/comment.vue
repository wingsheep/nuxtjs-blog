<template>
  <div class="comment-container">
    <comment-editor
      ref="editor"
      @closeReplyContent="closeReply"
      @send="onSend"
    />
    <div class="comment-list-wrapper">
      <comment-list :comments="comments" :loading="loading" @reply="onReply" />
    </div>
  </div>
</template>

<script>
import CommentList from './comment-list'
import CommentEditor from '@/components/comment-editor/comment-editor'

export default {
  components: {
    CommentEditor,
    CommentList
  },

  props: {
    comments: {
      type: Array,
      default: () => []
    },

    articleId: {
      type: String
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      parentId: 0
    }
  },

  methods: {
    onReply(data) {
      // this.parentId = comment.id
      // this.$refs.editor.reply = {
      //   nickname: comment.nickname,
      //   content: comment.content
      // }
      console.log(data)
      this.onSend(data, true)
    },

    closeReply() {
      // this.parentId = 0
      this.$refs.editor.reply = {
        nickname: '',
        content: ''
      }
      this.$refs.editor.resetField()
    },

    async onSend(data, flag) {
      const params = {
        article_id: this.articleId,
        content: data.content,
        user_email: data.email,
        user_nickname: data.nickname,
        user_url: data.website,
        parent_id: data.parentId
      }
      if (!this.articleId) {
        return
      }
      if (flag) {
        // 回复评论
        if (!params.parent_id) {
          return
        }
        try {
          const res = await this.$store.dispatch('article/replyComment', params)
          if (res.data.result) {
            this.closeReply()
            this.$emit('createCommentSuccess')
          }
        } catch (e) {
          console.log(e)
        }
      } else {
        // 创建评论
        try {
          const res = await this.$store.dispatch('article/createComment', params)
          if (res.data.result) {
            this.$refs.editor.resetField()
            this.$emit('createCommentSuccess')
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-list-wrapper {
  margin-top: 25px;
}
</style>
