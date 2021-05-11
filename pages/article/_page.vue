<template>
  <div class="page-index">
    <div class="article-list">
      <Article v-for="(item, index) in $store.state.article.articles" :key="index" :article-data="item" />
      <pagination
        v-show="$store.state.article.total > 0"
        :total="$store.state.article.total"
        layout="total, prev, pager, next"
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
  async fetch({ store, query, params }) {
    console.table(params)
    await store.dispatch('article/getArticles', {
      offset: params.page,
      limit: 10
    })
  },
  data() {
    return {
      total: 0,
      articleList: [],
      listQuery: {
        offset: +this.$route.params.page || 1,
        limit: 10
      }
    }
  },
  watchQuery: ['offset'],
  methods: {
    async getArticleList() {
      this.$router.push({
        path: `/article/${this.listQuery.offset}`
      })
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>
