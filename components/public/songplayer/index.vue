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
      const playlistId = 4989885272
      const { data: { playlist: { tracks }}} = await this.$axios(`https://v1.hitokoto.cn/nm/playlist/${playlistId}`)
      const Ids = []
      tracks.map(function(value) {
        Ids.push(value.id)
      })
      let ids = []
      switch (typeof Ids) {
        case 'number':
          ids = [Ids]
          break
        case 'object':
          if (!Array.isArray(Ids)) {
            err(new Error('Please enter array or number'))
            return
          }
          ids = Ids
          break
        default:
          err(new Error('Please enter array or number'))
          return
          break
      }
      const { data: { songs }} = await this.$axios(`https://v1.hitokoto.cn/nm/summary/${ids.join(',')}?lyric=true&common=true`)
      const formatsongs = []
      songs.map(function(song) {
        formatsongs.push({
          name: song.name,
          url: song.url,
          artist: song.artists.join('/'),
          album: song.album.name,
          pic: song.album.picture,
          lrc: song.lyric
        })
      })
      this.$nextTick(() => {
        new APlayer({
          container: this.$refs.player,
          fixed: true,
          audio: formatsongs
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
