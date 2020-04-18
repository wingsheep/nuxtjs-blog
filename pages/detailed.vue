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
      <el-row class="detailed-content">
        hhhhhhaaaaaaaa
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '年末，往事清零；余生，爱恨随意;'
      }
    },
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