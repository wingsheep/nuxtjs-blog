// import Vue from 'vue'
// import Vuex from 'vuex'
// import geo from './geo'
// import home from './home'
// Vue.use(Vuex)

// const store = () => new Vuex.Store({
// modules: {
//   geo,
//   home
// },
//   actions: {
//     async nuxtServerInit({
//       commit
//     }, {req}) {
//       const {
//         status,
//         data: {
//           province,
//           city
//         }
//       } = await axios.get('/geo/getPosition')
//       commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})
//       const {status:status2,data:{menu}}=await store.get('geo/menu')
//       commit('home/setMenu',status2===200?menu:[])
//       const {status:status3,data:{result}}=await store.get('/search/hotPlace',{
//         params:{
//           city: store.state.geo.position.city.replace('市','')
//         }
//       })
//       commit('home/setHotPlace',status3===200?result:[])
//     }
//   }
// })

// export default store
// export const actions = {
//   async nuxtServerInit({
//     commit
//   }, {req, app}) {
//     const {
//       status,
//       data: {
//         province,
//         city
//       }
//     } = await axios.get('/geo/getPosition')
//     commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})
//     const {status:status2,data:{menu}}=await axios.get('geo/menu')
//     commit('home/setMenu',status2===200?menu:[])
//     const {status:status3,data:{result}}=await axios.get('/search/hotPlace',{
//       params:{
//         city: app.store.state.geo.position.city.replace('市','')
//       }
//     })
//     commit('home/setHotPlace',status3===200?result:[])
//   }
// }
