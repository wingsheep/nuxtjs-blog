<template>
  <el-container ref="layout" class="layout-default">
    <el-header height="280px">
      <my-header />
    </el-header>
    <el-main>
      <el-row class="main-content">
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
  watch: {
    '$route'(to,from){
      document.querySelector('.layout-default').scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
