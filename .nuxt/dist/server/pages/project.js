exports.ids = [12];
exports.modules = {

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("02022c6e", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_style_index_0_id_a59c4a90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_style_index_0_id_a59c4a90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_style_index_0_id_a59c4a90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_style_index_0_id_a59c4a90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_style_index_0_id_a59c4a90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-archive[data-v-a59c4a90] .el-card__header{padding:30px 0}.page-archive[data-v-a59c4a90] .el-card__header h1{background:hsla(0,0%,95.3%,.70196);line-height:40px;text-align:center;color:#333;border-left:5px solid #1bc3fb;font-size:18px}.page-archive[data-v-a59c4a90] .el-card__header p{text-align:center;margin-top:10px}.page-archive[data-v-a59c4a90] .el-card__header p span{color:#999;font-size:14px}.page-archive .list[data-v-a59c4a90]{background:#fff;display:flex;justify-content:flex-start;flex-wrap:wrap}.page-archive .list .el-card[data-v-a59c4a90]{margin:10px}.page-archive .list .el-card svg[data-v-a59c4a90]{float:right;cursor:pointer}.page-archive .list .el-card:hover h1[data-v-a59c4a90]{text-decoration:underline;color:#409eff}.page-archive .list .el-card[data-v-a59c4a90]:hover p{overflow:auto;white-space:normal!important;text-overflow:inherit}.page-archive .list .el-card[data-v-a59c4a90] p{transition:all 3s ease;width:180px;font-size:14px;line-height:20px;color:#999;margin-top:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-archive .list .el-card[data-v-a59c4a90] ul li{list-style-type:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/project.vue?vue&type=template&id=a59c4a90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"page-archive"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h1',[_vm._v("资源库")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("收集一些优秀的项目资源，在每个项目下尝试写一些demo，以便不时之需")])])]),_vm._v(" "),_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.tabList),function(tabItem,tabIndex){return _c('el-tab-pane',{key:tabIndex,attrs:{"label":tabItem.title,"name":tabItem.name}},[_c('div',{staticClass:"list"},_vm._l((tabItem.list),function(item,index){return _c('el-card',{key:index},[_c('h1',[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('svg',{staticClass:"icon",attrs:{"t":"1620744196999","viewBox":"0 0 1280 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1221","width":"20","height":"20"}},[_c('path',{attrs:{"d":"M588.0064 898.304l-342.4384-111.6032V322.048l342.4384 111.6032V898.304z","fill":"#CCD0D3","p-id":"1222"}}),_c('path',{attrs:{"d":"M684.7744 898.304l342.4384-111.6032V322.048l-342.4384 111.6032V898.304z","fill":"#B3B3B3","p-id":"1223"}}),_c('path',{attrs:{"d":"M245.5808 278.2464l393.4592 105.5616 388.1728-106.6624-342.4384-74.4192-439.1936 75.52z","fill":"#515151","p-id":"1224"}})])]),_vm._v(" "),(!Array.isArray(item.desc))?_c('p',[_vm._v(_vm._s(item.desc))]):_vm._l((item.desc),function(desc,descIndex){return _c('ul',{key:descIndex},[_c('li',[_c('p',[_vm._v(_vm._s(desc))])])])})],2)}),1)])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/project.vue?vue&type=template&id=a59c4a90&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/project.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var projectvue_type_script_lang_js_ = ({
  scrollToTop: true,

  async fetch({
    store,
    params
  }) {
    await store.dispatch('archive/getArchive');
  },

  data() {
    return {
      activeName: '0',
      tabList: [{
        title: 'Html5 && Css3',
        name: '0',
        list: [{
          url: 'https://www.pugjs.cn/api/getting-started.html',
          name: 'Pug',
          desc: 'Pug 是一款健壮、灵活、功能丰富的模板引擎，专门为Node.js 平台开发。Pug 是由Jade 改名而来。',
          demo: ''
        }, {
          url: 'https://www.tailwindcss.cn/',
          name: 'Tailwindcss',
          desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。',
          demo: ''
        }, {
          url: 'https://www.sass.hk/docs/',
          name: 'Sass',
          desc: 'Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。',
          demo: ''
        }]
      }, {
        title: 'JS && TS',
        name: '6',
        list: [{
          url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
          name: 'JavaScript',
          desc: 'JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，例如 Node.js、 Apache CouchDB 和 Adobe Acrobat。JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。',
          demo: ''
        }, {
          url: 'https://www.tslang.cn/',
          name: 'TypeScript',
          desc: 'TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准, 由微软开发的自由和开源的编程语言。设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。',
          demo: ''
        }]
      }, {
        title: '动画资源库',
        name: '1',
        list: [{
          url: 'https://animate.style/',
          name: 'Animate.css',
          desc: '一个跨浏览器的动效基础库，是许多基础动效的解决方案。从经典的弹跳动效到独特的扭曲动效，一应俱全',
          demo: ''
        }, {
          url: 'http://bouncejs.com/',
          name: 'Bouncejs',
          desc: ['可以直接在浏览器中进行设计和设置的动画库，带有一个完整的网页构建器，只需添加一个组件，选择预设，然后你就可以得到CSS 代码了', '和其他的同类工具不同的地方在于，它不仅仅是一个库，而是有这用户可以直接操作的实际功能，它带有一个完整的网页构建器。Bounce.js 是为数不多的可以直接在浏览器中进行设计和设置的动画库之一'],
          demo: ''
        }, {
          url: 'https://animejs.com/',
          name: 'Animejs',
          desc: ['支持 CSS，DOM，SVG，和JS对象, 将动画加持在LOGO、按钮、图像等各种各样的元素上', '支持各种常见的触发机制，比如点击、悬停、滑动，你可以借助它定义一系列的动画。缺少自定义特效, 作为Three JS的潜在替代方案'],
          demo: ''
        }, {
          url: 'https://github.com/mrdoob/three.js/',
          name: 'Three.js',
          desc: '这个流行的库是在浏览器上创建 3D 动画的最好的一种方式，它用了 WebGL 。通过提供<canvas>、<svg>、CSS3D 和 WebGL 渲染器，该库可以让我们跨设备和浏览器创建丰富的交互式体验',
          demo: ''
        }]
      }, {
        title: '可视化图表库',
        name: '2',
        list: [{
          url: 'https://echarts.apache.org/zh/index.html',
          name: 'Echarts',
          desc: '一个基于 JavaScript 的开源可视化图表库',
          demo: ''
        }, {
          url: 'https://antv.vision/zh',
          name: 'Antv',
          desc: '蚂蚁集团全新一代数据可视化解决方案',
          demo: ''
        }]
      }, {
        title: 'Vue技术栈',
        name: '3',
        list: []
      }, {
        title: 'React技术栈',
        name: '4',
        list: []
      }, {
        title: 'NodeJs技术栈',
        name: '5',
        list: []
      }]
    };
  },

  computed: {},

  mounted() {
    if (this.$route.hash) {
      window.location.href = this.$route.hash;
    }
  }

});
// CONCATENATED MODULE: ./pages/project.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectvue_type_script_lang_js_ = (projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/project.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a59c4a90",
  "19cc41a5"
  
)

/* harmony default export */ var project = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project.js.map