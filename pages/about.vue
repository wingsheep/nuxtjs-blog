<template>
  <el-card class="page-about">
    <div slot="header">
      <h1>关于</h1>
      <p>
        <span>后续会上线微信小程序 && React重构版本</span>
      </p>
    </div>
    <div class="header">
      <h1>关于我</h1>
      <p>我有一个梦，也许有一天，灿烂的阳光能照进黑暗森林。</p>
      <ul class="list">
        <li>
          <span>姓名：</span><span>陶翔</span>
        </li>
        <li>
          <span>民族：</span><span>汉</span>
        </li>
        <li>
          <span>地区：</span><span>上海</span>
        </li>
        <li>
          <span>籍贯：</span><span>江苏 连云港</span>
        </li>
        <li>
          <span>职业：</span><span>前端码农</span>
        </li>
        <li>
          <span>职业状态：</span><span>在职看机会</span>
        </li>
        <li>
          <span>简历：</span>
          <span>
            <a href="https://www.wondercv.com/cvs/6TGmN2dT-jdlfiecgbendlglfihmgjh/share" target="_blank">在线简历</a>
          </span>
        </li>
        <li>
          <span>QQ：</span>
          <span>
            <a @click="goToQq($event)">1306750238</a>
          </span>
        </li>
        <li>
          <span>Email：</span><span>
            <a @click="goToEmail($event)">1306750238@qq.com</a>
          </span>
        </li>
        <li>
          <span>爱好：</span><span>科幻相关、动漫相关</span>
        </li>
      </ul>
    </div>
    <div class="header">
      <h1>关于小站</h1>
      <p>
        小站为SSR项目，采用Vue+Eggjs+NuxtJs技术开发, 使用Travis ci技术实现自动测试部署至阿里云服务器
      </p>
    </div>
    <el-table :data="siteData">
      <el-table-column prop="title" label="名称" width="100" />
      <el-table-column prop="url" label="网址">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank">{{ scope.row.url }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="sourceUrl" label="源码">
        <template slot-scope="scope">
          <a :href="scope.row.sourceUrl" target="_blank">{{ scope.row.sourceUrl }}</a>
        </template>
      </el-table-column>
    </el-table>
    <div class="header">
      <h1>关于技术</h1>
      <p>数据值为估算，部分数据采集自Github Analysis</p>
      <div class="progress-wrap">
        <div class="progress">
          <span>Javascript</span>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="90" status="success" />
        </div>
        <div class="progress">
          <span>Nodejs</span>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="90" status="success" />
        </div>
        <div class="progress">
          <span>Vue</span>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="80" />
        </div>
        <div class="progress">
          <span>Nuxtjs</span>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
        </div>
        <div class="progress">
          <span>Eggjs</span>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="60" />
        </div>
        <div class="progress">
          <span>Scss</span>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="30" status="warning" />
        </div>
        <div class="progress">
          <span>Travis ci</span>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="20" status="warning" />
        </div>
        <div class="progress">
          <span>Other</span>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="10" status="exception" />
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      siteData: [
        {
          title: '前端展示',
          url: 'https://www.happyfly.top',
          sourceUrl: 'https://github.com/Thawsoar/nuxtjs-blog'
        },
        {
          title: '后台管理',
          url: 'https://admin.happyfly.top',
          sourceUrl: 'https://github.com/Thawsoar/vue-cms'
        },
        {
          title: '后台服务',
          url: 'https://www.happyfly.top',
          sourceUrl: 'https://github.com/Thawsoar/eggjs-service'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {},
  methods: {
    goToQq(e) {
      window.open(`tencent://message/?uin=${e.target.innerHTML}`)
    },
    goToEmail(e) {
      console.log(e)
      window.open(`mailto:${e.target.innerHTML}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-about {
  backdrop-filter: blur(50px);
  background-color: #ffffff90;
  /deep/ .el-card__header {
    padding: 0;
    background: url("https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/3t.jpg");
    background-size: contain;
    & > div {
      padding: 30px 0;
      height: 100%;
      background: #00000030;
    }
    h1 {
      background: #f3f3f3b3;
      line-height: 40px;
      text-align: center;
      color: #333333;
      border-left: 5px solid #1bc3fb;
      font-size: 18px;
    }
    p {
      text-align: center;
      margin-top: 10px;
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  /deep/ .el-card__body {
    padding: 0;
  }
  /deep/ .header {
    padding: 0;
    h1 {
      background: #f3f3f3b3;
      line-height: 40px;
      text-align: left;
      color: #333333;
      border-left: 5px solid #1BC3FB;
      font-size: 18px;
      padding-left: 15px;
    }
    p {
      text-align: left;
      margin: 10px 0;
      padding-left: 15px;
      color: #999;
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }
  .list {
    display: grid;
    grid-template-columns: repeat(2,50%);
    margin-bottom: 20px;
    a {
      cursor: pointer;
    }
    li {
      padding: 10px;
      list-style-type: none;
      &:nth-child(4n+1),&:nth-child(4n+2) {
        background-color: #f0f0f0;
      }
      span:nth-child(2) {
        color: #999;
      }
    }
  }
  .progress-wrap {
    padding: 0 10px;
    .progress {
      position: relative;
      margin: 10px 0;
      span {
        position: absolute;
        top: 4px;
        z-index: 1;
        color: #fff;
        left: 10px;
        font-size: 12px;
      }
      .el-progress {
          // position: absolute;
      }
    }
  }
}
</style>
