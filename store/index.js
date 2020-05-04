const state = () => ({
  tagsList: [],
  menusList: [],
  tocList: [],
  tocState: '',
  hideSideBar: false
})

const mutations = {
  setTagsList(state, val) {
    state.tagsList = val
  },
  setMenusList(state, val) {
    state.menusList = val
  },
  setHideSideBar(state, val) {
    state.hideSideBar = val
  },
  setTocState(state, val) {
    state.tocState = val
  },
  setTocList(state, val) {
    state.tocList = val
  }
}

const actions = {
  async nuxtServerInit({
    commit
  }, { app }) {
    const {data: {result, data}} = await app.$axios.get('/blog/getTagsList')
    commit('setTagsList', result ? data : [])
    const {data:{result: result1, data: data1}} = await app.$axios.get('/blog/getMenusList')
    commit('setMenusList',  result1 ? data1 : [])
  }
}

export default {namespaced: true, state, mutations, actions}
