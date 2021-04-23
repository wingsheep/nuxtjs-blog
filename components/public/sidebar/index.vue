<template>
  <div class="sidebar">
    <userInfo v-if="!$store.state.hideSideBar" />
    <articleTabs />
    <tags v-if="!$store.state.hideSideBar && $route.name !== 'archive'" />
    <archive v-if="!$store.state.hideSideBar && $route.name !== 'archive'" />
    <comment v-if="false" />
    <toc v-if="$store.state.hideSideBar && $store.state.tocList.length" />
  </div>
</template>

<script>
import userInfo from './userInfo'
import archive from './archive'
import articleTabs from './articleTabs'
import tags from './tags'
import comment from './comment'
import toc from './toc'
export default {
  components: {
    userInfo,
    archive,
    articleTabs,
    tags,
    comment,
    toc
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  /deep/ .el-card {
    overflow: inherit;
    width: 360px;
    min-height: 250px;
    margin-bottom: 20px;
    .el-card__header {
      padding: 0;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #e5e5e5;
    }
  }
  /deep/ .post-badge {
    border-color: #47456d;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    box-shadow:0px 2px 4px -2px #000;
    background-color: #97dffd;
    color: #fff;
    font-size: 14px;
    border-radius:4px;
    display: inline-block;
    padding: 8px 15px;
    line-height: 1;
    transform: translateY(-14px);
  }
}
</style>
