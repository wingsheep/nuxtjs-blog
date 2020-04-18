<template>
  <div class="sidebar">
    <el-card>
      站点作者信息 头像 寄语等
    </el-card>
    <el-card>
      登录信息 天气 ip地址 时间等
    </el-card>
    <el-card>
      文字归档
    </el-card>
    <el-card>
      tab页  热点文字 最新文章 随机文章
    </el-card>
    <el-card>
     标签聚合
    </el-card>
    <el-card>
     最近评论
    </el-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.sidebar {
  .el-card {
    width: 360px;
    height: 250px;
    margin-bottom: 15px;
  }
}
</style>