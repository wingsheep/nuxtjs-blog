<template>
  <div class="page-index">
    <div class="article-list">
      <Article v-for="(item, index) in articleList" :key="index" :article-data="item" />
      <pagination
        v-show="total>0"
        :total="total"
        layout="prev, pager, next"
        :page.sync="listQuery.offset"
        :limit.sync="listQuery.limit"
        @pagination="getArticleList"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/index/article.vue'
import Pagination from '@/components/public/Pagination' // Secondary package based on el-pagination
export default {
  scrollToTop: true,
  components: {
    Article,
    Pagination
  },
  async asyncData({ app }) {
  },
  data() {
    return {
      total: 0,
      articleList: [],
      listQuery: {
        offset: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      const { data: { result, data: { count, rows }}} = await this.$axios.get('blog/article/list', {
        params: {
          offset: this.listQuery.offset,
          limit: this.listQuery.limit
        }
      })
      if (result) {
        this.articleList = rows
        this.total = count
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
