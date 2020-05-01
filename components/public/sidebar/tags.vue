<template>
  <el-card class="archive">
    <template slot="header">
      <div class="post-badge">
        <span>标签聚合</span>
      </div>
    </template>
    <el-tag v-for="(item, index) in tagsList" :key="index" :type="item.type" style="margin: 5px">{{ item.name }}</el-tag>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tagsList: [
        {
          type: 'primary',
          name: 'vue',
          count: 15
        },
        {
          type: 'danger',
          name: 'react',
          count: 5
        },
        {
          type: 'info',
          name: 'Flutter',
          count: 3
        },
        {
          type: 'warning',
          name: 'CSS',
          count: 10
        },
        {
          type: 'warning',
          name: 'Javascript',
          count: 5
        },
        {
          type: 'danger',
          name: 'EggJS',
          count: 5
        },
        {
          type: 'Koa2',
          name: 'Koa2',
          count: 5
        },
        {
          type: 'danger',
          name: 'Nodejs',
          count: 5
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
