<template>
  <el-card class="archive">
    <template slot="header">
      <div class="post-badge">
        <span>标签聚合</span>
      </div>
    </template>
    <nuxt-link v-for="(item, index) in tagsList" :key="index" :to="{path: `/category/${item.name}/${item.id}`}">
      <el-tag :type="types[index % 5]" style="margin: 5px">{{ item.name }} ({{ item.count }})</el-tag>
    </nuxt-link>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      types: ['primary', 'danger', 'warning', 'info', 'success']
    }
  },
  computed: {
    tagsList() {
      return this.$store.state.tagsList
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
