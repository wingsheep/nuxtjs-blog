<template>
  <div class="page-index">
    <div class="article-list">
      <Article v-for="i in 10" :key="i" />
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Article from '@/components/index/article.vue'

export default {
  components: {
    Article
  },
  methods: {
  },
  async asyncData(ctx){
    // const {result, data} = await ctx.$axios.get('/api/v1/users')
    // console.log(result, data)
    // let {keyword,type}=ctx.query;
    // let {status,data:{product,more:list,login}}=await ctx.$axios.get('/search/products',{
    //   params:{
    //     keyword,
    //     type,
    //     city:ctx.store.state.geo.position.city
    //   }
    // })
    // if(status===200){
    //   return {
    //     keyword,
    //     product,
    //     type,
    //     list,
    //     login
    //   }
    // }else{
    //   return {
    //     keyword,
    //     product:{},
    //     type,
    //     list:[],
    //     login:false
    //   }
    // }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
