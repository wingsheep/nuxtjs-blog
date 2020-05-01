<template>
  <div class="motto">
    <div class="motto-content">
      <div id="hitokoto" class="hitokoto-fullpage">
        <div class="bracket left">『</div>
        <div id="hitokoto_text" class="word">{{ hitokoto.hitokoto }}</div>
        <div class="bracket right">』</div>
        <div id="hitokoto_author" class="author">—— 「{{ hitokoto.from }}」</div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      hitokoto: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('https://v1.hitokoto.cn')
        .then(({ data }) => {
          this.hitokoto = data
        })
        .catch(console.error)
    }
  }
}
</script>

<style lang="scss" scoped>
.motto {
  text-align: center;
  height: 260px;
  background: rgba(66,64,64,.2);
  // background-image: url('https://img.moedog.org/images/2019/08/21/site_head.png');
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  h1 {
    margin-top: 60px;
    color: #000;
    font-size: 32px;
    font-weight: 600;
    text-shadow: 0 0 16px #000;
  }
  .hitokoto-fullpage {
    position: relative;
    font-size: 22px;
    color: #fff;
    text-shadow: 0 0 12px #fff;
    width: 60%;
    margin: 0 auto;
    .word {
      text-align: center;
      line-height: 50px;
      word-break: normal;
      margin: 0;
      padding: 15px 50px;
    }
    .bracket {
      position: absolute;
      &.left {
        left: 0;
        top: 0
      }
      &.right {
        right: 0;
        bottom: 0
      }
    }
    .author {
      float: right;
      margin-top: 30px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8)
    }
  }
}
</style>
