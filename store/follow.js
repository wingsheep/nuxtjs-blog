
export const state = () => ({
  // 追番列表
  followList: []
})

export const mutations = {
  setFollowList(state, data) {
    state.followList = data
  }
}

export const actions = {
  async getFollowList({ commit }, type) {
    try {
      let {data: {result, data} }= await this.$axios.get('/blog/getFollowList', {
        params: {
          vmid: 126384053,
          type
        }
      })
      commit('setFollowList', result ? data : [])
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
