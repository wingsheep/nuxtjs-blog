<template>
  <div class="error-page">
    <!-- <h2 v-if="error.statusCode==404">404页面不存在</h2>
    <h2 v-else>500服务器错误</h2> -->
    <img src="https://static.hdslb.com/error/very_sorry.png">
    <el-button type="primary" @click="goBack">返回上一页</el-button>
    <div id="up" style="padding-top: 40px">
      <el-divider>
        休息一下，看哈2233娘~
      </el-divider>
    </div>
    <img :src="currentImg" referrer="no-referrer">
    <a href="#up">
      <el-button type="primary" @click="changeImg">换一张</el-button>
    </a>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data() {
    return {
      imgList: [],
      index: 0,
      currentImg: ''
    }
  },
  async created() {
    const { data: { result, data }} = await this.$axios.get('/blog/getErrorData')
    if (result) {
      this.imgList = data
      this.changeImg()
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    randomNumber(m = 0, n) {
      return Math.floor(Math.random() * (m - n) + n)
    },
    changeImg() {
      this.index = this.randomNumber(0, this.imgList.length)
      this.currentImg = `https:${this.imgList[this.index]}`
    }
  }
}
</script>

<style lang="scss">
.error-page {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  padding-bottom: 40px;
  text-align: center;
  img {
    width: 100%;
  }
  .el-button {
    margin-top: 20px;
  }
  .el-divider__text {
    color: #ccc;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
