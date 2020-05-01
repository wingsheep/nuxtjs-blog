<template>
  <el-card class="page-archive">
    <div slot="header">
      <h1>文章归档</h1>
      <p>
        <span>当前共有12篇日志，记录一只菜鸟的漫漫人生路！</span>
      </p>
    </div>
    <el-divider content-position="left">
      <h4>标签云</h4>
    </el-divider>
    <div>
      <el-tag v-for="(item, index) in tagsList" :key="index" :type="item.type" style="margin: 5px">{{ item.name }}</el-tag>
    </div>
    <el-divider content-position="left">
      <h4>时间线</h4>
    </el-divider>
    <div class="block">
      <el-timeline>
        <el-timeline-item :hide-timestamp="true" placement="top" color="#409EFF">
           <h1 style="padding-bottom: 10px">2019</h1>
           <el-timeline>
            <el-timeline-item timestamp="4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <h4 style="font-size: 12px; margin-top: 10px">最后提交于20:46, 共修改了8次</h4>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-timeline-item>
        <el-timeline-item timestamp="2018" placement="top">
          <el-timeline>
            <el-timeline-item timestamp="4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-timeline-item>
        <el-timeline-item timestamp="2017" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
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
}
</style>