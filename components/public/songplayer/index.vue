<template>
  <div ref="player" class="custom-aplayer" />
</template>

<script>
import 'aplayer/dist/APlayer.min.css'
let APlayer
if (process.client) {
  APlayer = require('aplayer')
}
export default {
  mounted() {
    this.$nextTick(() => {
      this.getSongList()
    })
  },
  methods: {
    async getSongList() {
      const { data } = await this.$axios('/blog/getHitokoto')
      this.$nextTick(() => {
        new APlayer({
          container: this.$refs.player,
          fixed: true,
          audio: data.data
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-aplayer{
  bottom: 40px;
  /deep/ .aplayer-body {
    bottom: 40px;
  }
}
</style>
