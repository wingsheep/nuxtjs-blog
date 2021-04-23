
export const state = () => ({
  // 友链
  friendList: []
})

export const getters = {
  friendList: (state) => {
    return state.friendList.slice()
  }
}

export const mutations = {
  setFriendlink(state, friendlink = []) {
    state.friendList = friendlink
  }
}

export const actions = {
  async getFriendLinks({ commit }) {
    try {
      const { data: { result, data }} = await this.$axios.get('/blog/getFriendLinks')
      commit('setFriendlink', result ? data : [])
      return data
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
