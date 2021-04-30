<template>
  <aplayer v-if="flag" class="custom-aplayer" :lrc-type="1" :audio="audio" fixed />
</template>

<script>
export default {

  data() {
    return {
      flag: false,
      audio: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getSongList()
    })
  },
  methods: {
    // aolyer文档地址 https://aplayer.netlify.app/docs/guide/options.html#fixed
    async getSongList() {
      this.flag = false
      const res = await this.$axios('/blog/getHitokoto')
      if (res.data.result) {
        this.audio = res.data.data.map((item, index) => {
          const { id, name, artists, url, album: { picture }, lyric: { base }, type } = item
          return {
            id: id || index, // 音频 id
            name: name, // 音频名称
            artist: artists.join('/'), // 音频艺术家
            url: url, // 音频播放地址
            cover: picture, // 音频封面
            lrc: base, // lrc 歌词
            // theme?: string; // 单曲主题色，它将覆盖全局的默认主题色
            type: type // 指定音频的类型
          }
        })
      }
      this.flag = true
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-aplayer{
  bottom: 50px!important;
  /deep/ .aplayer-body {
    bottom: 50px!important;
  }
  /deep/ .aplayer-lrc {
    text-align: left;
  }
}
</style>
