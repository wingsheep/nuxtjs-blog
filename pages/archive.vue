<template>
  <el-card class="page-archive">
    <div slot="header">
      <h1>文章归档</h1>
      <p>
        <span>当前共有{{archiveTotal}}篇日志，记录一只菜鸟的漫漫人生路！</span>
      </p>
    </div>
    <el-divider content-position="left">
      <h4>标签云</h4>
    </el-divider>
    <div>
      <nuxt-link v-for="(item, index) in tagsList" :key="index" :to="{path: `/category/${item.name}/${item.id}`}">
        <el-tag :type="types[index % 5]" style="margin: 5px">{{ item.name }} ({{ item.count }})</el-tag>
      </nuxt-link>
    </div>
    <el-divider content-position="left">
      <h4>时光轴</h4>
    </el-divider>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="item in archiveList"
          :key="item.year"
          :hide-timestamp="true"
          placement="top">
           <h1 style="padding-bottom: 10px">{{item.year}}年</h1>
           <el-timeline>
            <el-timeline-item
              class="item-month"
              v-for="monthItem in item.monthList"
              :key="monthItem.month"
              :hide-timestamp="true" placement="top">
              <h5 style="padding-bottom: 10px">
                <span :id="monthItem.hash" class="heading">{{`${monthItem.month}月 (${monthItem.articles.length}篇)`}}</span>
              </h5>
              <el-card v-for="dayItem in monthItem.articles" :key="dayItem.id" shadow="hover">
                <nuxt-link :to="`/detailed/${dayItem.id}`"><h3>{{dayItem.title}}</h3></nuxt-link>
                <h4>发布于{{dayItem.created_at}}, 共编辑了{{dayItem.version + 1}}次</h4>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
  export default {
    scrollToTop: true,
    data() {
      return {
        types: ['primary', 'danger', 'warning', 'info', 'success']
      }
    },
    computed: {
      tagsList () {
        return this.$store.state.tagsList
      },
      archiveList () {
        return this.$store.state.archive.archive
      },
      archiveTotal () {
        return this.$store.state.archive.archiveTotal
      }
    },
    async fetch({ store, params }) {
      await store.dispatch('archive/getArchive')
    },
    mounted () {
      if (this.$route.hash) {
        window.location.href = this.$route.hash
      }
    },
  }
</script>

<style lang="scss" scoped>
.page-archive {
  /deep/ .el-card__header {
    padding: 30px 0;
    h1 {
      background: #f3f3f3b3;
      line-height: 40px;
      text-align: center;
      color: #333333;
      border-left: 5px solid #1BC3FB;
      font-size: 18px;
    }
    p {
      text-align: center;
      margin-top: 10px;
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }
  .el-timeline {
    .el-card {
      margin-bottom: 14px;
      h3 {
        color: #222;
      }
      h4 {
        font-size: 12px;
        margin-top: 10px;
      }
      
      &:hover {
        border-left: 4px solid #1BC3FB;
      }
    }
    .heading {
      &:target {
        padding-top: 60px;
        margin-top: -60px;
      }
    }
    .el-timeline-item {
      /deep/ .el-timeline-item__tail {
        border-color: #1BC3FB80;
      }
      /deep/ .el-timeline-item__node {
        border: 2px solid #1BC3FB;
        background: #fff;
        box-sizing: border-box;
      }
      .item-month {
        /deep/ .el-timeline-item__tail {
          border-color: #E4E7ED;
        }
        /deep/ .el-timeline-item__node {
          border: 2px solid #E4E7ED;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>