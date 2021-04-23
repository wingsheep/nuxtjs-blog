<template>
  <div class="page-category">
    <el-card>
      <div slot="header">
        <h1>标签: <span>{{ params.name }}</span></h1>
      </div>
      <p>至今为止已转载或分享了{{ params.count }}篇{{ params.name }}相关的博文了哟，加油！ヾ(◍°∇°◍)ﾉﾞ</p>
    </el-card>

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
  validate({ app, params }) {
    return !!(app.store.state.tagsList.find(_ => _.id === params.id && _.name === params.name))
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
  computed: {
    params() {
      const { id, name } = this.$route.params
      return this.$store.state.tagsList.find(_ => _.id === id && _.name === name)
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
          limit: this.listQuery.limit,
          label_id: this.params.id,
          name: this.params.name
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
  .page-category {
    .el-card {
      backdrop-filter: blur(50px);
      background-color: #ffffff90;
      margin-bottom: 15px;
      border-radius: 10px;
      .el-card__header {
        padding: 0;
        h1 {
          background: #f3f3f3b3;
          line-height: 40px;
          text-align: center;
          color: #333333;
          border-left: 5px solid #1BC3FB;
          font-size: 18px;
          span {
            margin-left: 10px
          }
        }
      }
      p {
        text-align: center;
      }
    }
  }
</style>
