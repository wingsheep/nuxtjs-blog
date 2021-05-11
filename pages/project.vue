<template>
  <el-card class="page-archive">
    <div slot="header">
      <h1>资源库</h1>
      <p>
        <span>收集一些优秀的项目资源，在每个项目下尝试写一些demo，以便不时之需</span>
      </p>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(tabItem, tabIndex) in tabList" :key="tabIndex" :label="tabItem.title" :name="tabItem.name">
        <div class="list">
          <el-card v-for="(item, index) in tabItem.list" :key="index">
            <h1>
              <a :href="item.url" target="_blank">{{ item.name }}</a>
              <svg t="1620744196999" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" width="20" height="20"><path d="M588.0064 898.304l-342.4384-111.6032V322.048l342.4384 111.6032V898.304z" fill="#CCD0D3" p-id="1222"></path><path d="M684.7744 898.304l342.4384-111.6032V322.048l-342.4384 111.6032V898.304z" fill="#B3B3B3" p-id="1223"></path><path d="M245.5808 278.2464l393.4592 105.5616 388.1728-106.6624-342.4384-74.4192-439.1936 75.52z" fill="#515151" p-id="1224"></path></svg>
            </h1>
            <p v-if="!Array.isArray(item.desc)">{{ item.desc }}</p>
            <ul v-for="(desc, descIndex) in item.desc" v-else :key="descIndex">
              <li>
                <p>{{ desc }}</p>
              </li>
            </ul>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  scrollToTop: true,
  async fetch({ store, params }) {
    await store.dispatch('archive/getArchive')
  },
  data() {
    return {
      activeName: '0',
      tabList: [
        {
          title: 'Html5 && Css3',
          name: '0',
          list: [
            {
              url: 'https://www.pugjs.cn/api/getting-started.html',
              name: 'Pug',
              desc: 'Pug 是一款健壮、灵活、功能丰富的模板引擎，专门为Node.js 平台开发。Pug 是由Jade 改名而来。',
              demo: ''
            },
            {
              url: 'https://www.tailwindcss.cn/',
              name: 'Tailwindcss',
              desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。',
              demo: ''
            },
            {
              url: 'https://www.sass.hk/docs/',
              name: 'Sass',
              desc: 'Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。',
              demo: ''
            }
          ]
        },
        {
          title: 'JS && TS',
          name: '6',
          list: [
            {
              url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
              name: 'JavaScript',
              desc: 'JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，例如 Node.js、 Apache CouchDB 和 Adobe Acrobat。JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。',
              demo: ''
            },
            {
              url: 'https://www.tslang.cn/',
              name: 'TypeScript',
              desc: 'TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准, 由微软开发的自由和开源的编程语言。设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。',
              demo: ''
            }
          ]
        },
        {
          title: '动画资源库',
          name: '1',
          list: [
            {
              url: 'https://animate.style/',
              name: 'Animate.css',
              desc: '一个跨浏览器的动效基础库，是许多基础动效的解决方案。从经典的弹跳动效到独特的扭曲动效，一应俱全',
              demo: ''
            },
            {
              url: 'http://bouncejs.com/',
              name: 'Bouncejs',
              desc: [
                '可以直接在浏览器中进行设计和设置的动画库，带有一个完整的网页构建器，只需添加一个组件，选择预设，然后你就可以得到CSS 代码了',
                '和其他的同类工具不同的地方在于，它不仅仅是一个库，而是有这用户可以直接操作的实际功能，它带有一个完整的网页构建器。Bounce.js 是为数不多的可以直接在浏览器中进行设计和设置的动画库之一'
              ],
              demo: ''
            },
            {
              url: 'https://animejs.com/',
              name: 'Animejs',
              desc: [
                '支持 CSS，DOM，SVG，和JS对象, 将动画加持在LOGO、按钮、图像等各种各样的元素上',
                '支持各种常见的触发机制，比如点击、悬停、滑动，你可以借助它定义一系列的动画。缺少自定义特效, 作为Three JS的潜在替代方案'
              ],
              demo: ''
            },
            {
              url: 'https://github.com/mrdoob/three.js/',
              name: 'Three.js',
              desc: '这个流行的库是在浏览器上创建 3D 动画的最好的一种方式，它用了 WebGL 。通过提供<canvas>、<svg>、CSS3D 和 WebGL 渲染器，该库可以让我们跨设备和浏览器创建丰富的交互式体验',
              demo: ''
            }
          ]
        },
        {
          title: '可视化图表库',
          name: '2',
          list: [
            {
              url: 'https://echarts.apache.org/zh/index.html',
              name: 'Echarts',
              desc: '一个基于 JavaScript 的开源可视化图表库',
              demo: ''
            },
            {
              url: 'https://antv.vision/zh',
              name: 'Antv',
              desc: '蚂蚁集团全新一代数据可视化解决方案',
              demo: ''
            }
          ]
        },
        {
          title: 'Vue技术栈',
          name: '3',
          list: []
        },
        {
          title: 'React技术栈',
          name: '4',
          list: []
        },
        {
          title: 'NodeJs技术栈',
          name: '5',
          list: []
        }
      ]
    }
  },
  computed: {
  },
  mounted() {
    if (this.$route.hash) {
      window.location.href = this.$route.hash
    }
  }
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
  .list {
    background: #fff;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .el-card {
      margin: 10px;
      svg {
        float: right;
        cursor: pointer;
      }
      &:hover {
        h1 {
          text-decoration: underline;
          color: #409EFF;
        }
        /deep/ p {
          overflow: auto;
          white-space: normal !important;
          text-overflow: inherit;
        }
      }
      /deep/ p {
        transition: all 3s ease;
        width: 180px;
        font-size: 14px;
        line-height: 20px;
        color: #999;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /deep/ ul {
        li {
          list-style-type: none;
        }
      }
    }
  }
}
</style>
