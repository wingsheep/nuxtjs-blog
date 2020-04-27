<template>
  <div class="page-index">
    <div class="article-list">
      <Article :articleData="item" v-for="(item, index) in articleList" :key="index" />
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
export default {
  components: {
    Article
  },
  async asyncData({app}) {
    const { data: {result, data} } = await app.$axios.get('/api/v1/articles')
    console.log(data)
    if (result) {
      return {
        articleList: data
      }
    } else {
      return {
        articleList: []
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
