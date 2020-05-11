// import article from '../models/article'
// import comment from '../models/comment'
import Utils from '../services/utils/util'
import marked from '../plugins/marked'

export const state = () => ({
  // 文章列表
  articles: [],
  total: 0,
  loading: false,
  // 详情
  article: null,
  comments: []
})

export const mutations = {
  setArticles(state, { rows, count }) {
    state.articles = rows
    state.total = count
  },

  setLoading(state, loading = false) {
    state.loading = loading
  },

  setArchive(state, { archive, total }) {
    state.archive = archive
    state.archiveTotal = total
  },

  setComments(state, comments = []) {
    comments.forEach(v => {
      v.showReplay = false
      v.content = marked(v.content)
      if (v.parent_id !== 0) {
        const reply = comments.find(target => target.id === v.parent_id)
        if (reply) {
          v.replyName = reply.nickname
          v.replyContent = marked(reply.content)
        } else {
          v.replyName = ''
          v.replyContent = '该评论已被删除'
        }
      }
    })
    state.comments = comments
  },
  setCommentShowReplay(state, commentId ) {
    state.comments.forEach(item => {
      item.showReplay = false
      if (item.id === commentId) {
        item.showReplay = true
      }
    })
  },
  setArticleDetail(state, article) {
    state.article = article
  },

  setLikeComment(state, id) {
    state.comments.forEach(v => {
      if (v.id === id) {
        v.like ++
      }
    })
  }
}

export const actions = {
  // 获取文章列表
  async getArticles({ commit }, params) {
    try {
      const { data: { result, data}} = await this.$axios.get('blog/article/list', {
        params: params
      })
      commit('setArticles', result ? data : {})
    } catch (e) {
      console.log(e)
    }
  },


  async getComments({ commit }, params) {
    try {
      const {data: {result, data:{count, rows}}} = await this.$axios.get('/blog/comment/getList', {
        params: params
      })
      commit('setComments', result ? rows : [])
    } catch (e) {
      console.log(e)
    }
  },

  async getArticleDetail({ commit }, params) {
    try {
      const {data:{result, data}} = await this.$axios.get(`blog/article/detail/${params.id}`, params)
      commit('setArticleDetail', result ? data : {})
    } catch (e) {
      console.log(e)
    }
  },

  async likeArticle(_, id) {
    return await await this.$axios.post(`blog/article/like/${id}`)
  },

  async likeComment({ commit}, id) {
    const res = await comment.likeComment(id)
    if (res.errorCode === 0) {
      commit('setLikeComment', id)
      return res
    }
  },

  async createComment(_, params) {
    return await this.$axios.post('/blog/comment/create', params)
  },

  async replyComment(_, params) {
    return await comment.replyComment(params)
  }
}
