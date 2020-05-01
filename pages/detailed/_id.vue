<template>
  <div class="page-detailed">
    <el-card>
      <header>
        <h1>{{ detail.title }}</h1>
      </header>
      <el-row class="detailed-info">
        <el-col :span="24">
          <dl>
            <dd :span="5">
              <i class="el-icon-date" />
              <a>2020年3月25日</a>
            </dd>
            <dd :span="3">
              <i class="el-icon-s-comment" />
              <a>15条评论</a>
            </dd>
            <dd :span="3">
              <i class="el-icon-reading" />
              <a>1.14k阅读</a>
            </dd>
            <dd :span="3">
              <i class="el-icon-thumb" />
              <a>3人点赞</a>
            </dd>
            <dd :span="3">
              <i class="el-icon-user-solid" />
              <a>罗小黑</a>
            </dd>
          </dl>
        </el-col>
      </el-row>
      <div>
        <p>{{ detail.description }}</p>
        <img style="height: 200px;width: 100%" :src="detail.img_url" alt="">
      </div>
      <div v-show="formatCODE" class="markdown" v-html="formatCODE" />
    </el-card>
  </div>
</template>

<script>
import markdown from '@/plugins/marked'

export default {
  scrollToTop: true,
  async asyncData({ app, params }) {
    const url = `blog/article/detail/${params.id}`
    const { data: { result, data }} = await app.$axios.get(url)
    if (result) {
      return {
        detail: data
      }
    } else {
      return {
        articleList: []
      }
    }
  },
  data() {
    return {
      title: '年末，往事清零；余生，爱恨随意;',
      formatCODE: '',
      code: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.formatCODE = markdown(this.detail.content)
    })
  }
}
</script>

<style lang="scss" scoped>
.page-detailed {
  .el-card {
    header {
      text-align: center;
    }
  }
  .detailed-info {
    background: #fff;
    width: 100%;
    .el-col {
      display: flex;
      justify-content: center;
    }
    dl {
      overflow: hidden;
      dd {
        float: left;
        margin-right: 20px;
        height: 36px;
        line-height: 1;
        a {
          line-height: 36px;
          color: #222;
        }

      }
    }
  }
}
</style>
