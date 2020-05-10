<template>
  <div class="article-card">
    <el-row class="card">
      <img :src="articleData.img_url" alt="">
      <div class="info">
        <div class="header">
          <nuxt-link :to="`/detailed/${articleData.id}`" class="label">{{articleData.labels.length && articleData.labels[0].name || 'BLOG'}}</nuxt-link>
          <h2><nuxt-link :to="`/detailed/${articleData.id}`">{{ articleData.title }}</nuxt-link></h2>
        </div>
        <p>{{ articleData.description }}</p>
      </div>
      <el-row class="content-footer">
        <el-col :span="20">
          <dl>
            <dd :span="5">
              <i class="iconfont icon-calendar" />
              <a>{{ articleData.date | filterDate }}</a>
            </dd>
            <dd :span="3">
              <i class="iconfont icon-comments" />
              <a>{{articleData.comment}}条评论</a>
            </dd>
            <dd :span="3">
              <i class="iconfont icon-read" />
              <a>{{ articleData.views || 0}}阅读</a>
            </dd>
            <dd :span="3">
              <i class="iconfont icon-good" />
              <a>{{ articleData.like_count }}人点赞</a>
            </dd>
            <dd :span="3">
              <i class="iconfont icon-bussiness-man" />
              <a>罗小黑</a>
            </dd>
          </dl>
        </el-col>
        <el-col :span="3" :push="1">
          <nuxt-link :to="`/detailed/${articleData.id}`">阅读全文</nuxt-link>
          <i class="iconfont icon-arrow-right" />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    articleData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/index/article.scss";
</style>
