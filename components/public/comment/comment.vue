<template>
  <div class="comment-container">
    <comment-editor
      ref="editor"
      :isShowReplyContent="isShowReplyContent"
      @closeReplyContent="closeReply"
      @send="onSend"
    ></comment-editor>
    <div class="comment-list-wrapper">
      <comment-list :comments="comments" @reply="onReply" :loading="loading"></comment-list>
    </div>
  </div>
</template>

<script>
import CommentList from "./comment-list";
import CommentEditor from "@/components/comment-editor/comment-editor";

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
      isShowReplyContent: false,
      parentId: 0
    };
  },

  methods: {
    onReply(comment) {
      this.parentId = comment.id
      this.$refs.editor.reply = {
        nickname: comment.nickname,
        content: comment.content
      }
      this.isShowReplyContent = true;
    },

    closeReply() {
      this.isShowReplyContent = false
      this.parentId = 0
      this.$refs.editor.reply = {
        nickname: '',
        content: ''
      }
      this.$refs.editor.resetField()
    },

    async onSend(data) {
      const params = {
        article_id: this.articleId,
        content: data.content,
        user_email: data.email,
        user_nickname: data.nickname,
        user_url: "https://www.happyfly.top",
        parent_id: data.parentId
      }
      if (!this.articleId) {
        return
      }
      if (this.isShowReplyContent) {
        // 回复评论
        if (!this.parentId) {
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
};
</script>

<style lang="scss" scoped>
.comment-list-wrapper {
  margin-top: 25px;
}
</style>
