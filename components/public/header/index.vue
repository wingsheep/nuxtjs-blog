<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar />
      </el-col>
      <el-col>
        <motto />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topBar from './topbar.vue'
import searchBar from './searchbar.vue'
import motto from './motto.vue'
export default {
  components: {
    topBar,
    searchBar,
    motto
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
</style>
