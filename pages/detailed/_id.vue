<template>
  <div class="page-articleed" id="page_articleed" ref="scroll">
    <el-card>
      <div slot="header">
        <h1>{{ article.title }}</h1>
        <el-row class="articleed-info">
          <el-col :span="24">
            <dl>
              <dd :span="5">
                <i class="el-icon-date" />
                <a>{{article.date | filterDate}}</a>
              </dd>
              <dd :span="3">
                <i class="el-icon-s-comment" />
                <a>15条评论</a>
              </dd>
              <dd :span="3">
                <i class="el-icon-reading" />
                <a>{{article.views}}阅读</a>
              </dd>
              <dd :span="3">
                <i class="el-icon-thumb" />
                <a>3人点赞</a>
              </dd>
              <dd :span="3">
                <i class="el-icon-user-solid" />
                <a>罗小黑</a>
              </dd>
            </dl>
          </el-col>
        </el-row>
      </div>
      <div>
        <p>{{ article.description }}</p>
      </div>
      <article v-show="markedContent" ref="markdown" class="markdown" v-html="markedContent" />
    </el-card>
    <el-card>
      123
    </el-card>
  </div>
</template>

<script>
import markdown from '@/plugins/marked'
import { mapState, mapMutations } from 'vuex'

export default {
  scrollToTop: true,
  head() {
    return {
      title: this.article.title
    }
  },
  data() {
    return {
      code: '',
      menuData: [],
      menuState: ''
    }
  },
  computed: {
    ...mapState({
      article(state) {
        const article = state.article.article
        if (!article) {
          return {}
        }
        this.articleLike = article.like
        return article
      },
      // comments: state => state.article.comments
    }),
    markedContent() {
      if (this.article.content) {
        return markdown(this.article.content)
      } else {
        return ''
      }
    },
  },
  async fetch({ store, params }) {
    await store.dispatch('article/getArticleDetail', {
      id: params.id
    })
    // await store.dispatch('article/getComments', {
    //   articleId: params.id
    // })
  },
  methods: {
    getAPs() {
      const nodeArr = ['H1', 'H2', 'H3', 'H4']
      let nodeInfo = [] // 存储目录信息
      let temp = {}
      let index = 0
      // 对文档根节点的每一个子节点进行遍历，选出所有需要解析的目录标题
      this.$refs.markdown.childNodes.forEach((item) => {
        // console.log(item.nodeName)
        if (nodeArr.includes(item.nodeName)) {
          nodeInfo.push({
            type: item.nodeName, // 存储该标题的类型
            txt: item.getAttribute('id'), // 存储该标题的文本 [ps：marked解析出来的h1-h6标题会在id里填上对应的标题文本]
            offsetTop: item.offsetTop, // 存储该标题离页面顶部的距离
            heading: `#heading-${index++}`
          });
        }
      });
      this.menuData = nodeInfo
      this.menuState =  nodeInfo[0].txt
      this.$store.commit('setTocList', nodeInfo)
      this.$store.commit('setTocState', nodeInfo[0].txt)
      this.checkMenuScroll()
      if(this.$route.hash) {
        const item = this.menuData.find(_ => _.heading === this.$route.hash)
        this.scrollPage(item)
      } else {
        document.querySelector('.layout-default').scrollTo(0, 0)
      }
    },
    checkMenuScroll() {
      const scroll = document.querySelector('.layout-default')
      // this.scroll 为整个页面的根节点，用来监听滚动
      scroll.addEventListener('scroll', () => {
        let scrollTop = scroll.scrollTop; // 获取当前页面的滚动距离
        let menuState = this.menuData[0].txt; // 设置menuState对象默认值为第一个标题的文字
        
        // 对menuData循环检测，
        // 如果当前页面滚动距离 大于 一个标题离页面顶部 的距离，则将该标题的文字赋值给menuState，循环继续
        // 如果当前页面滚动距离 小于 一个标题离页面顶部 的距离，说明页面还没滚动到该标题的位置，当前标题尚未命中，之后的标题也不可能命中。 循环结束
        for(let item of this.menuData) {
          if (scrollTop >= item.offsetTop) {
            menuState = item.txt;
          } else {
            break;
          }
        }
        
        // 如果滑动到了页面的底部，则命中最后一个标题
        if (scroll.clientHeight + scrollTop === scroll.scrollHeight) {
          menuState = this.menuData[this.menuData.length - 1].txt;
        }
        
        // 如果当前命中标题和前一个命中标题的文本不一样，说明当前页面处于其他标题下的内容，切换menuState
        if (menuState !== this.menuState) {
          this.menuState = menuState
          this.$store.commit('setTocState', menuState)
        }
      });
    },
    // 点击目录切换
    scrollPage(item){
      const scroll = document.querySelector('.layout-default')
      // 创建一个setInterval，每16ms执行一次，接近60fps
      let scrollToTop = window.setInterval(() => {
        let currentScroll =scroll.scrollTop;
        if (currentScroll > item.offsetTop) {
          // 当页面向上滚动时操作
         scroll.scrollTo(0, currentScroll - Math.ceil((currentScroll - item.offsetTop) / 5));
        } else if (currentScroll < item.offsetTop) {
          // 页面向下滚动时的操作
          if (scroll.clientHeight + currentScroll ===scroll.scrollHeight) {
            // 如果已经滚动到了底部，则直接跳出
            this.menuState = item.txt
            this.$store.commit('setTocState', nodeInfo[0].txt)
            window.clearInterval(scrollToTop);
          } else {
           scroll.scrollTo(0, currentScroll + Math.ceil((item.offsetTop - currentScroll) / 5));
          }
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16); 
    }
  },
  
  mounted() {
    this.$nextTick(() => {
      this.getAPs();
    })
  }
}
</script>

<style lang="scss" scoped>
.page-articleed {
  .el-card {
    background: transparent;
    /deep/ .el-card__header {
      padding: 0;
      background: #ffffff90;
      & > div {
        padding: 30px 0;
        height: 100%;
      }
      h1 {
        background: #f3f3f380;
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
          color: #fff;
          font-size: 14px;
        }
      }
    }
    /deep/ .el-card__body {
      background: #fff;
      padding: 30px;
    }
  }
  .articleed-info {
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
  .toc-aside {
    position: fixed;
    left: 100px;
    top: 200px;
    width: 120px;
    overflow: hidden;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    h2 {
      padding-bottom: 10px;
      font-size: 16px;
    }
    ol {
      padding-left: 15px;
      li {
        cursor: pointer;
        line-height: 28px;
        a {
          color: #22222290;
          &:hover {
            color: #222222;
          }
          &.on {
            color: #409EFF
          }
        }
      }
    }
  }
}
</style>
