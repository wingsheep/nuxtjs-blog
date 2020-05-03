const state = () => ({
  tagsList: []
})

const mutations = {
  setTagsList(state, val) {
    state.tagsList = val
  }
}

const actions = {
  async nuxtServerInit({
    commit
  }, { app }) {
    const {data: {result, data}} = await app.$axios.get('/blog/getTagsList')
    console.log(result, data)
    commit('setTagsList', result ? data : [])
  }
}

export default {namespaced: true, state, mutations, actions}
