<template>
  <el-card class="article-tabs" :body-style="{paddingTop: 0}">
    <template slot="header">
      <div class="post-badge">
        <span>{{tabList[Number(activeName)].NAME}}</span>
      </div>
    </template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in tabList" :key="item.CODE" :label="item.NAME" :name="item.CODE"></el-tab-pane>
    </el-tabs>
    <ul>
      <li v-for="(item, index) in articleList" :key="index">
        <i class="el-icon-edit-outline"></i>
        <span><nuxt-link to="">{{item.name}}</nuxt-link></span>
      </li>
    </ul>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '0',
        tabList: [
          {
            CODE: '0',
            NAME: '最新文章',
            active: true
          },
          {
            CODE: '1',
            NAME: '热点文章'
          },
          {
            CODE: '2',
            NAME: '随机文章'
          },
        ],
        articleList: [
          {
            name: '我是文章标题',
            count: 15
          },
          {
            name: '我是文章标题我是文章标题我是文章标题',
            count: 15
          },
          {
            name: '我是文章标题我是文章标题我是文章标题',
            count: 15
          },
          {
            name: '我是文章标题我是文章标题我是文章标题',
            count: 15
          },
          {
            name: '我是文章标题我是文章标题我是文章标题',
            count: 15
          },
        ]
      }
    },
    methods: {
      handleClick() {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
.article-tabs {
  /deep/ .el-tabs .el-tabs__item {
    color: #666;
    font-size: 14px;
  }
  ul {
    li {
      list-style: none;
      padding: 8px 0;
      border-bottom: 1px dashed #b4afaf;
      overflow: hidden;
      span {
        color: #666;
        margin-left: 4px;
        a {
          color:#666;
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
.article-tabs {
  .post-badge {
    margin: 0 4px;
  }
}
</style>