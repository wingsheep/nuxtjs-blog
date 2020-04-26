<template>
  <div class="page-detailed">
    <el-card>
      <header>
        <h1>{{title}}</h1>
      </header>
      <el-row class="detailed-info">
        <el-col :span="24">
          <dl>
             <dd :span="5">
                <i class="el-icon-date"></i>
                <a>2020年3月25日</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-s-comment"></i>
                <a>15条评论</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-reading"></i>
                <a>1.14k阅读</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-thumb"></i>
                <a>3人点赞</a>
             </dd>
             <dd :span="3">
                <i class="el-icon-user-solid"></i>
                <a>罗小黑</a>
             </dd>
          </dl>
        </el-col>
      </el-row>
      <div v-show="formatCODE" class="markdown" v-html="formatCODE">
      </div>
    </el-card>
  </div>
</template>

<script>
  import markdown from '@/plugins/marked'

  export default {
    data() {
      return {
        title: '年末，往事清零；余生，爱恨随意;',
        formatCODE: '',
        code:`
#### 前端
  - 跳转到github授权页 回调拿到code 
  - 将code传递给前端 

#### ![](https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/20200418224757.png) 

#### 后台服务

> https://eggjs.org/zh-cn/tutorials/passport.html

1. 安装包

2. 配置
 
   

3. 写接口

   - 拿到前端传入的code值 请求token

   - 拿到token 再请求用户信息 返回给前端

     > https://eggjs.org/zh-cn/core/httpclient.html#get

![](https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/20200418224421.png)
`
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.formatCODE = markdown(this.code)
      })
    }
  }
</script>

<style lang="scss" scoped>
.page-detailed {
  .el-card {
    header {
      text-align: center;
    }
  } 
  .detailed-info {
    background: #fff;
    width: 100%;
    .el-col {
      display: flex;
      justify-content: center;
    }
    dl {
      overflow: hidden;
      dd {
        float: left;
        margin-right: 20px;
        height: 36px;
        line-height: 1;
        a {
          line-height: 36px;
          color: #222;
        }
        
      }
    }
  }
}
</style>