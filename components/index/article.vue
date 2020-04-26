<template>
  <div class="article-card">
    <el-row class="card">
      <img :src="require('assets/img/test.jpg')" alt="">
      <div class="info">
        <div class="header">
          <nuxt-link to="/detailed" class="label">随笔</nuxt-link>
          <h2><nuxt-link to="/detailed" >年末，往事清零；余生，爱恨随意</nuxt-link></h2>
        </div>
        <p>天长地久有时尽，此爱绵绵终有期。回望刚刚过去的2019年，自己也许应该成长了许多吧</p>
      </div>
      <el-row class="content-footer">
        <el-col :span="20">
          <dl>
             <dd :span="5">
                <i class="el-icon-date"></i>
                <a>2020年3月25日</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-s-comment"></i>
                <a>15条评论</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-reading"></i>
                <a>1.14k阅读</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-thumb"></i>
                <a>3人点赞</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-user-solid"></i>
                <a>罗小黑</a>
             </dd>
          </dl>
        </el-col>
        <el-col :span="3" :push="1">
          <a>阅读全文</a>
          <i class="el-icon-right"></i>
        </el-col>
      </el-row>
    </el-row> 
  </div>
</template>

<script>
   export default {
     data() {
       return {
         key: ''
       }
     },
   }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/index/article.scss";
</style>