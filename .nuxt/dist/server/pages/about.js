exports.ids = [1];
exports.modules = {

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("01dcdbe3", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_c614e15c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_c614e15c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_c614e15c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_c614e15c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_c614e15c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-about[data-v-c614e15c]{-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);background-color:hsla(0,0%,100%,.56471)}.page-about[data-v-c614e15c] .el-card__header{padding:0;background:url(https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/3t.jpg);background-size:contain}.page-about[data-v-c614e15c] .el-card__header>div{padding:30px 0;height:100%;background:rgba(0,0,0,.18824)}.page-about[data-v-c614e15c] .el-card__header h1{background:hsla(0,0%,95.3%,.70196);line-height:40px;text-align:center;color:#333;border-left:5px solid #1bc3fb;font-size:18px}.page-about[data-v-c614e15c] .el-card__header p{text-align:center;margin-top:10px}.page-about[data-v-c614e15c] .el-card__header p span{color:#fff;font-size:14px}.page-about[data-v-c614e15c] .el-card__body,.page-about[data-v-c614e15c] .header{padding:0}.page-about[data-v-c614e15c] .header h1{background:hsla(0,0%,95.3%,.70196);line-height:40px;text-align:left;color:#333;border-left:5px solid #1bc3fb;font-size:18px;padding-left:15px}.page-about[data-v-c614e15c] .header p{text-align:left;margin:10px 0;padding-left:15px;color:#999}.page-about[data-v-c614e15c] .header p span{color:#999;font-size:14px}.page-about .list[data-v-c614e15c]{display:grid;grid-template-columns:repeat(2,50%);margin-bottom:20px}.page-about .list a[data-v-c614e15c]{cursor:pointer}.page-about .list li[data-v-c614e15c]{padding:10px;list-style-type:none}.page-about .list li[data-v-c614e15c]:nth-child(4n+1),.page-about .list li[data-v-c614e15c]:nth-child(4n+2){background-color:#f0f0f0}.page-about .list li span[data-v-c614e15c]:nth-child(2){color:#999}.page-about .progress-wrap[data-v-c614e15c]{padding:0 10px}.page-about .progress-wrap .progress[data-v-c614e15c]{position:relative;margin:10px 0}.page-about .progress-wrap .progress span[data-v-c614e15c]{position:absolute;top:4px;z-index:1;color:#fff;left:10px;font-size:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=c614e15c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"page-about"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h1',[_vm._v("关于")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("后续会上线微信小程序 && React重构版本")])])]),_vm._v(" "),_c('div',{staticClass:"header"},[_c('h1',[_vm._v("关于我")]),_vm._v(" "),_c('p',[_vm._v("我有一个梦，也许有一天，灿烂的阳光能照进黑暗森林。")]),_vm._v(" "),_c('ul',{staticClass:"list"},[_c('li',[_c('span',[_vm._v("姓名：")]),_c('span',[_vm._v("陶翔")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("民族：")]),_c('span',[_vm._v("汉")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("地区：")]),_c('span',[_vm._v("上海")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("籍贯：")]),_c('span',[_vm._v("江苏 连云港")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("职业：")]),_c('span',[_vm._v("前端码农")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("职业状态：")]),_c('span',[_vm._v("在职看机会")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("简历：")]),_vm._v(" "),_c('span',[_c('a',{attrs:{"href":"https://www.wondercv.com/cvs/6TGmN2dT-jdlfiecgbendlglfihmgjh/share","target":"_blank"}},[_vm._v("在线简历")])])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("QQ：")]),_vm._v(" "),_c('span',[_c('a',{on:{"click":function($event){return _vm.goToQq($event)}}},[_vm._v("1306750238")])])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("Email：")]),_c('span',[_c('a',{on:{"click":function($event){return _vm.goToEmail($event)}}},[_vm._v("1306750238@qq.com")])])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("爱好：")]),_c('span',[_vm._v("科幻相关、动漫相关")])])])]),_vm._v(" "),_c('div',{staticClass:"header"},[_c('h1',[_vm._v("关于小站")]),_vm._v(" "),_c('p',[_vm._v("\n      小站为SSR项目，采用Vue+Eggjs+NuxtJs技术开发, 使用Travis ci技术实现自动测试部署至阿里云服务器\n    ")])]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.siteData}},[_c('el-table-column',{attrs:{"prop":"title","label":"名称","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"url","label":"网址"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{attrs:{"href":scope.row.url,"target":"_blank"}},[_vm._v(_vm._s(scope.row.url))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"sourceUrl","label":"源码"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{attrs:{"href":scope.row.sourceUrl,"target":"_blank"}},[_vm._v(_vm._s(scope.row.sourceUrl))])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"header"},[_c('h1',[_vm._v("关于技术")]),_vm._v(" "),_c('p',[_vm._v("数据值为估算，部分数据采集自Github Analysis")]),_vm._v(" "),_c('div',{staticClass:"progress-wrap"},[_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Javascript")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":24,"percentage":90,"status":"success"}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Nodejs")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":24,"percentage":90,"status":"success"}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Vue")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":26,"percentage":80}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Nuxtjs")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":26,"percentage":70}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Eggjs")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":26,"percentage":60}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Scss")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":22,"percentage":30,"status":"warning"}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Travis ci")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":22,"percentage":20,"status":"warning"}})],1),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('span',[_vm._v("Other")]),_vm._v(" "),_c('el-progress',{attrs:{"text-inside":true,"stroke-width":20,"percentage":10,"status":"exception"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=c614e15c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  scrollToTop: true,

  data() {
    return {
      siteData: [{
        title: '前端展示',
        url: 'https://www.happyfly.top',
        sourceUrl: 'https://github.com/Thawsoar/nuxtjs-blog'
      }, {
        title: '后台管理',
        url: 'https://admin.happyfly.top',
        sourceUrl: 'https://github.com/Thawsoar/vue-cms'
      }, {
        title: '后台服务',
        url: 'https://www.happyfly.top',
        sourceUrl: 'https://github.com/Thawsoar/eggjs-service'
      }]
    };
  },

  computed: {},

  mounted() {},

  methods: {
    goToQq(e) {
      window.open(`tencent://message/?uin=${e.target.innerHTML}`);
    },

    goToEmail(e) {
      console.log(e);
      window.open(`mailto:${e.target.innerHTML}`);
    }

  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c614e15c",
  "1d634d19"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map