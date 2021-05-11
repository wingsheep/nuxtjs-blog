<template>
  <el-container ref="layout" class="layout-default">
    <el-header :height="!$store.state.hideSideBar ? '300px' : '60px'">
      <my-header />
    </el-header>
    <el-main>
      <el-row class="main-content" :gutter="15">
        <el-col :span="16">
          <transition name="fade-transform" mode="out-in">
            <nuxt />
          </transition>
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
    <Live2d />
    <el-backtop target=".layout-default" />
    
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
import SideBar from '@/components/public/sidebar/index.vue'
import SongPlayer from '@/components/public/songplayer/index.vue'
import Live2d from '@/components/public/live2d/index.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
    SideBar,
    SongPlayer,
    Live2d
  },
  data() {
    return {
    }
  },
  watch: {
    '$route': {
      handler(val) {
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
  },
  created() {
    this.openMsg()
  },
  methods: {
    openMsg() {
      const h = this.$createElement
      this.$notify({
        title: '紧急通知',
        message: h('i', { style: 'color: red' }, '公司倒闭，老板跑路，走过路过不要错过，救救孩子吧 Min Na！')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/animation.scss";
.el-backtop {
  right: 200px!important;
  background: #ffffff30;
}
</style>
