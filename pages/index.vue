<template>
  <div class="page-index">
    <div class="article-list">
      <Article :articleData="item" v-for="(item, index) in articleList" :key="index" />
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
      <pagination v-show="total>0" :total="total" layout="prev, pager, next" :page.sync="listQuery.offset" :limit.sync="listQuery.limit"/>
      <div id="player"></div>
    </div>
  </div>
</template>

<script>
import Article from '@/components/index/article.vue'
import Pagination from '@/components/public/Pagination' // Secondary package based on el-pagination
export default {
  components: {
    Article,
    Pagination
  },
  data() {
    return {
      listQuery: {
        offset: this.$route.query.offset || 1,
        limit: this.$route.query.limit || 10,
      },
    }
  },
  methods: {
    name() {
      
    }
  },
  watchQuery: ['listQuery.offset'],
  async asyncData({app, query}) {
    console.log(query)
    const { data: {result, data: {count, rows}} } = await app.$axios.get('/article/list', {
      offset: query.offset || 1,
      limit: query.limit || 10,
    })
    if (result) {
      return {
        articleList: rows,
        total: count
      }
    } else {
      return {
        articleList: [],
        total: 0
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
