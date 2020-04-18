<template>
  <div class="motto">
    <h1>
      罗小黑
    </h1>
    <span class="msg">
      这是我的梦， 抓住吹来的风!
    </span>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.motto {
  text-align: center;
  height: 260px;
  background: rgba(66,64,64,.2);
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
  .msg {
    font-size: 22px;
    color: #000;
    text-shadow: 0 0 12px #000;
  }
}
</style>