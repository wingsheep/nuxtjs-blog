<template>
  <el-card class="archive">
    <template slot="header">
      <div class="post-badge">
        <span>文章归档</span>
      </div>
    </template>
    <ul>
      <li v-for="(item, index) in $store.state.archiveListByMonth" :key="index">
        <i class="el-icon-date" />
        <span><nuxt-link to="">{{ item.month }}</nuxt-link></span>
        <span>({{ item.sum }})</span>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      archiveList: [
        {
          date: '2019年1月',
          count: 15
        },
        {
          date: '2019年1月',
          count: 15
        },
        {
          date: '2019年1月',
          count: 15
        },
        {
          date: '2019年1月',
          count: 15
        },
        {
          date: '2019年1月',
          count: 15
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.archive {
  ul {
    li {
      list-style: none;
      padding: 4px 0;
      span {
        color:#4c4c4c;
        margin-left: 4px;
        a {
          color:#4c4c4c;
        }

      }
      &:hover span {
        color: #00a1d6;
        a {
          color: #00a1d6;
        }
      }
    }
  }
}
</style>
