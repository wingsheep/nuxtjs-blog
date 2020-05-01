<template>
  <div class="article-card">
    <el-row class="card">
      <img :src="articleData.img_url" alt="">
      <div class="info">
        <div class="header">
          <nuxt-link to="/detailed" class="label">{{articleData.labels[0].name || 'BLOG'}}</nuxt-link>
          <h2><nuxt-link :to="`detailed/${articleData.id}`">{{ articleData.title }}</nuxt-link></h2>
        </div>
        <p>{{ articleData.description }}</p>
      </div>
      <el-row class="content-footer">
        <el-col :span="20">
          <dl>
            <dd :span="5">
              <i class="el-icon-date" />
              <a>{{ articleData.date }}</a>
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
        <el-col :span="3" :push="1">
          <a>阅读全文</a>
          <i class="el-icon-right" />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    articleData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      key: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/index/article.scss";
</style>
