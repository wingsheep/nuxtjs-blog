<template>
  <div class="page-index">
    <div class="article-list">
      <Article v-for="i in 10" :key="i" />
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
      <div id="player"></div>
    </div>
  </div>
</template>

<script>
import Article from '@/components/index/article.vue'
// import 'aplayer/dist/APlayer.min.css';
// if (process.client) {
//   const APlayer = require('aplayer')
// }
export default {
  components: {
    Article
  },
  // async asyncData({app}){
  //   const playlistId = 2158283120
  //   const {data: {playlist: {tracks}}} = await app.$axios(`https://v1.hitokoto.cn/nm/playlist/${playlistId}`)
  //   const Ids = [];
  //   tracks.map(function (value) {
  //     Ids.push(value.id);
  //   });
  //   let ids = []
  //   switch (typeof Ids) {
  //     case 'number':
  //       ids = [Ids];
  //       break;
  //     case 'object':
  //       if (!Array.isArray(Ids)) {
  //         err(new Error('Please enter array or number'));
  //         return;
  //       }
  //       ids = Ids;
  //       break;
  //     default:
  //       err(new Error('Please enter array or number'));
  //       return;
  //       break;
  //   }  
  //   const {data: {songs}} = await app.$axios(`https://v1.hitokoto.cn/nm/summary/${ids.join(',')}?lyric=true&common=true`)
  //   let formatsongs = [];
  //   songs.map(function (song) {
  //     formatsongs.push({
  //       name: song.name,
  //       url: song.url,
  //       artist: song.artists.join('/'),
  //       album: song.album.name,
  //       pic: song.album.picture,
  //       lrc: song.lyric
  //     });
  //   });
  //   return {
  //     formatsongs
  //   };
  //   // const {result, data} = await ctx.$axios.get('/api/v1/users')
  //   // console.log(result, data)
  //   // let {keyword,type}=ctx.query;
  //   // let {status,data:{product,more:list,login}}=await ctx.$axios.get('/search/products',{
  //   //   params:{
  //   //     keyword,
  //   //     type,
  //   //     city:ctx.store.state.geo.position.city
  //   //   }
  //   // })
  //   // if(status===200){
  //   //   return {
  //   //     keyword,
  //   //     product,
  //   //     type,
  //   //     list,
  //   //     login
  //   //   }
  //   // }else{
  //   //   return {
  //   //     keyword,
  //   //     product:{},
  //   //     type,
  //   //     list:[],
  //   //     login:false
  //   //   }
  //   // }
  // },
  // mounted () {
  //   this.$nextTick(() => {
  //     // this.generateAplyer()
  //     console.log(document.getElementById('player'))
  //     const ap = new APlayer({
  //         container: document.getElementById('player'),
  //         fixed: true,
  //         audio: this.formatsongs
  //     });
    
  //   })
  // },
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
