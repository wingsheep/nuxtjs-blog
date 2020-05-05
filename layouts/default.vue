<template>
  <el-container ref="layout" class="layout-default">
    <el-header :height="!$store.state.hideSideBar ? '300px' : '60px'">
      <my-header />
    </el-header>
    <el-main>
      <el-row class="main-content" :gutter="15">
        <el-col :span="16">
          <nuxt />
        </el-col>
        <el-col class="sidebar-box" :span="8">
          <SideBar />
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <my-footer />
    </el-footer>
    <SongPlayer />
    <el-backtop target=".layout-default" />
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
import SideBar from '@/components/public/sidebar/index.vue'
import SongPlayer from '@/components/public/songplayer/index.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
    SideBar,
    SongPlayer
  },
  data() {
    return {
    }
  },
  watch: {
    '$route': {
       handler(val) {
         console.log(val)
        if (process.client) {
          this.$store.commit('setHideSideBar', false)
          if (val.name === 'detailed-id') {
            this.$store.commit('setHideSideBar', true)
          } else {
            if (document.querySelector('.layout-default')) {
              document.querySelector('.layout-default').scrollTo(0, 0)
            }
          }
        }
       },
       deep: true,
       immediate: true
     }
  }
}
</script>

<style lang="scss" scoped>
</style>
