<template>
  <div class="m-nav">
    <ul class="nav">
      <li v-for="(item, index) in navList" :key="index" class="list">
        <nuxt-link :to="item.path">
          <i :class="item.icon" />
          {{ item.name }}
        </nuxt-link>
      </li>
      <li class="list right">
        <nuxt-link to="/login">登录</nuxt-link>
      </li>
      <li class="list right">
        <nuxt-link to="/register">注册</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: '/',
          name: '首页',
          icon: 'el-icon-s-home'
        },
        // {
        //   path: '/cloud',
        //   name: '网盘',
        //   icon: 'el-icon-cloudy'
        // },
        // {
        //   path: '/project',
        //   name: '项目',
        //   icon: 'el-icon-document-copy'
        // },
        // {
        //   path: '/note',
        //   name: '笔记',
        //   icon: 'el-icon-edit-outline'
        // },
        // {
        //   path: '/life',
        //   name: '生活',
        //   icon: 'el-icon-camera'
        // },
        {
          path: '/archive',
          name: '归档',
          icon: 'el-icon-takeaway-box'
        },
        {
          path: '/friend',
          name: '友人帐',
          icon: 'el-icon-connection'
        },
        {
          path: '/follow/1',
          name: '番剧リスト',
          icon: 'el-icon-monitor'
        },
        {
          path: '/book',
          name: '书籍',
          icon: 'el-icon-notebook-1'
        },
        {
          path: '/about',
          name: '关于',
          icon: 'el-icon-user'
        }

      ]
    }
  },
  mounted() {
  },
  methods: {
    name() {

    }
  }
}
</script>

<style lang="css">
</style>
