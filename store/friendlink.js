
export const state = () => ({
  // 友链
  friendlink: []
})

export const mutations = {
  setFriendlink(state, friendlink) {
    state.friendlink = friendlink
  }
}

export const actions = {
  async getFriendLinks({ commit }) {
    try {
      let {data: {result, data} }= await this.$axios.get('/blog/getFriendLinks')
      commit('setFriendlink', result ? data : [])
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
