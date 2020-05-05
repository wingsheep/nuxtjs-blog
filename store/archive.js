
import Utils from '../services/utils/util'

export const state = () => ({

  // 归档
  starArticles: [],
  archive: [],
  archiveTotal: 0
})

export const mutations = {
  setArchive(state, { archive, total }) {
    state.archive = archive
    state.archiveTotal = total
  }
}

export const actions = {
  async getArchive({ commit }) {
    try {
      let {data: {result, data} }= await this.$axios.get('/blog/getArchiveList')
      if (result) {
        data.forEach(v => {
          v.created_at = Utils.timestampToTime(v.created_at)
          v.updated_at = Utils.timestampToTime(v.updated_at)
        })
      }

      function format(month, day) {
        return month.toString().padStart(2, '0') + '.' + day.padStart(2, '0')
      }

      const total = data.length
      let archive = []
      // 按年份月份重新组合
      let curYear = ''
      let curMonth = 0
      let yearIndex = -1
      let monthIndex = 0
      data.forEach(v => {
        const hash = Utils.timestampToTime(v.created_at, 'Y-m')
        let dateArr = v.created_at.split('-')
        let year = dateArr[0]
        let month = parseInt(dateArr[1])
        let time = dateArr[2].split(' ')[0]
        if (year === curYear) {
          if (month === curMonth) {
            v.created_at = format(month, time)
            archive[yearIndex].monthList[monthIndex].articles.push(v)
          } else {
            v.created_at = format(month, time)
            archive[yearIndex].monthList.push({
              month,
              hash,
              articles: [v]
            })
            monthIndex++
            curMonth = month
          }
        } else {
          v.created_at = format(month, time)
          archive.push({
            year,
            monthList: [{
              month,
              hash,
              articles: [v]
            }]
          })
          yearIndex++
          monthIndex = 0
          curMonth = month
          curYear = year
        }
      })
      commit('setArchive', { archive, total })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
