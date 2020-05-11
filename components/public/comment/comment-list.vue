<template>
  <ul class="comment-list">
    <li class="comment-item" v-for="comment in comments" :key="comment.id">
      <img class="avatar" :src="gravatar(comment.user_email)" :alt="comment.user_nickname || '匿名用户'">
      <section class="comment-detail markdown">
        <div class="nickname">
          <!-- <a v-if="comment.user_url" class="website icon icon-planet" :href="comment.user_url" target="_blank"></a> -->
          <span>{{comment.user_nickname}}</span>
        </div>
        <div class="content" v-html="comment.content"></div>
        <section class="reply-wrapper markdown" v-if="comment.parent_id">
          <div class="reply-nickname" v-if="comment.replyName">@{{comment.replyName}}:</div>
          <div v-html="comment.replyContent"></div>
        </section>
        <footer class="comment-footer">
          <time class="time" :datetime="comment.createdAt | filterDate">{{comment.createdAt | filterDate('YYYY-MM-DD HH:mm')}}</time>
          <div class="tools">
            <i class="iconfont icon-good" :class="{'is-like': isLike(comment.id)}" @click="likeComment(comment)">
              <span class="like-count">{{comment.like_count}}</span>
            </i>
            <span class="replay" @click="reply(comment)">回复</span>
          </div>
        </footer>
        <comment-editor v-if="comment.showReplay" :placeholder="`回复：${comment.user_nickname}`"></comment-editor>
        <div class="split"></div>
      </section>
    </li>
    <loading v-if="loading"></loading>
    <div v-if="!loading && !comments.length">还没有评论 /(ㄒoㄒ)/~~</div>
  </ul>
</template>

<script>
import gravatar from '@/services/gravatar/gravatar'
import CommentEditor from "@/components/comment-editor/comment-editor";
export default {
  components: {
    CommentEditor
  },
  props: {
    comments: {
      type: Array,
      required: true
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      likeComments: []
    }
  },

  methods: {
    isLike(commentId) {
      return this.likeComments.includes(commentId)
    },

    reply(comment) {
      console.log(comment)
      this.$store.commit('article/setCommentShowReplay', comment.id)
      // this.$emit('reply', commentId)
    },

    gravatar(email) {
      return gravatar(email)
    },

    async likeComment(item) {
      if (this.likeComments.includes(item.id)) {
        return
      }
      try {
        const res = this.$store.dispatch('article/likeComment', item.id)
        this.likeComments.push(item.id)
        if (process.client) {
          window.localStorage.setItem('LIKE_COMMENTS', JSON.stringify(this.likeComments))
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },

    getLikeComments() {
      if (process.client) {
        this.likeComments = JSON.parse(window.localStorage.getItem('LIKE_COMMENTS') || '[]')
      }
    }
  },

  created() {
    this.getLikeComments()
  }
}
</script>

<style lang="scss" scoped>

.comment-item {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  .avatar {
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #eee;
  }

  .comment-detail {
    width: calc(100% - 50px);
    .nickname {
      text-align: left;
      font-size: 14px;
      color: #6d757a;
      font-weight: 600;
      &:hover {
        color: #00a1d6;
        cursor: pointer;
      }
      .website {
        font-size: 16px;
      }
    }

    .content {
      display: flex;
      align-items: center;
      min-height: 42px;
      margin: 8px 0;
      font-size: 1rem;
    }

    .reply-wrapper {
      box-sizing: border-box;
      padding: 6px 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;

      .reply-nickname {
        font-weight: 600;
      }
    }

    .comment-footer {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #99a2aa;
      margin-bottom: 10px;
      .time {
        font-size: 12px;
      }

      .tools {
        margin-left: 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 12px;
        >i {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          margin-right: 10px;
          cursor: pointer;
          font-size: 12px;
          &:last-child {
            margin-right: 0;
          }

          .like-count {
            margin-left: 5px;
          }
        }
        span.replay {
          padding: 0 5px;
          border-radius: 4px;
          margin-right: 15px;
          cursor: pointer;
          display: inline-block;
          &:hover {
            color: #00a1d6;
            background: #e5e9ef;
          }
        }
        .is-like {
          color: red;
        }
      }
    }

    .split {
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      margin-top: 15px;
      background-color: #ccc;
    }
  }
}
</style>
