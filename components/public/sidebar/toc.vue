<template>
  <el-card class="archive">
    <template slot="header">
      <div class="post-badge">
        <span>文章目录</span>
      </div>
    </template>
    <section class="toc-aside">
      <ol>
        <li
          v-for="(item, index) in $store.state.tocList"
          :class="`${item.type}type`"
          :key="index"
          @click="scrollPage(item)"
        >
          <a :class="$store.state.tocState === item.txt ? 'on' : ''" >{{item.txt}}</a>
        </li>
      </ol>
    </section>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
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
            this.$store.state.commit('setTocState', item.txt)
            window.clearInterval(scrollToTop);
          } else {
           scroll.scrollTo(0, currentScroll + Math.ceil((item.offsetTop - currentScroll) / 5));
          }
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16); 
    }
  }
}
</script>

<style lang="scss" scoped>

.toc-aside {
    background: #fff;
    border-radius: 10px;
    h2 {
      padding-bottom: 10px;
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
</style>
