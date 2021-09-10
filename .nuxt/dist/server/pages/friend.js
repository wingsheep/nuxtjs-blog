exports.ids = [8];
exports.modules = {

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("563fc0aa", content, true, context)
};

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_vue_vue_type_style_index_0_id_48367d2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_vue_vue_type_style_index_0_id_48367d2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_vue_vue_type_style_index_0_id_48367d2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_vue_vue_type_style_index_0_id_48367d2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_friend_vue_vue_type_style_index_0_id_48367d2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-friend[data-v-48367d2e]{-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);background-color:hsla(0,0%,100%,.56471)}.page-friend[data-v-48367d2e] .el-card__header{padding:0;background:url(https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/friend.jpeg)}.page-friend[data-v-48367d2e] .el-card__header>div{padding:30px 0;height:100%;background:rgba(0,0,0,.18824)}.page-friend[data-v-48367d2e] .el-card__header h1{background:hsla(0,0%,95.3%,.70196);line-height:40px;text-align:center;color:#333;border-left:5px solid #1bc3fb;font-size:18px}.page-friend[data-v-48367d2e] .el-card__header p{text-align:center;margin-top:10px}.page-friend[data-v-48367d2e] .el-card__header p span{color:#fff;font-size:14px}.page-friend .friend[data-v-48367d2e]{padding:20px}.page-friend .friend ul[data-v-48367d2e]{overflow:hidden;display:flex;justify-content:space-between;flex-wrap:wrap}.page-friend .friend ul li[data-v-48367d2e]{width:calc(33.33333% - 30px);list-style:none;padding:15px 10px;margin:5px;border-radius:10px}.page-friend .friend ul li[data-v-48367d2e]:hover{background:transparent!important;transition:all .3s;box-shadow:0 2px 4px 0 rgba(0,0,0,.1),0 4px 8px 0 rgba(0,0,0,.1),0 8px 16px 0 rgba(0,0,0,.1),0 32px 64px 0 rgba(0,0,0,.1);transform:scale(1.05)}.page-friend .friend ul li:hover h4[data-v-48367d2e],.page-friend .friend ul li:hover p[data-v-48367d2e]{color:#000}.page-friend .friend ul li img[data-v-48367d2e],.page-friend .friend ul li span[data-v-48367d2e]{display:block;width:60px;height:60px;line-height:60px;border-radius:50%;background:#97dffd;float:left;text-align:center;color:#fff;font-size:18px;margin-right:10px}.page-friend .friend ul li h4[data-v-48367d2e],.page-friend .friend ul li p[data-v-48367d2e]{float:left;width:calc(100% - 100px);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#fff;font-size:18px;margin-top:10px}.page-friend .friend ul li p[data-v-48367d2e]{color:#fff;font-size:12px;margin-top:4px}.page-friend .el-divider .el-divider__text[data-v-48367d2e]{background:#1bc3fb;color:#fff;font-size:12px;line-height:16px;border-radius:2px}.page-friend .apply-info[data-v-48367d2e]{padding:10px;background:rgba(27,195,251,.1);border-left:4px solid #1bc3fb;border-radius:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/friend.vue?vue&type=template&id=48367d2e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"page-friend"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h1',[_vm._v("友人帐")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("我想要变强, 因为我遇到了许多的邂逅、有了想要守护的事物。 - 夏目友人帐")])])]),_vm._v(" "),(_vm.friendlinkList && _vm.friendlinkList.length)?_c('div',{staticClass:"friend"},[_c('ul',_vm._l((_vm.friendlinkList),function(item,index){return _c('li',{key:index,style:({ background: _vm.randomRgbColor() })},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_c('img',{attrs:{"src":item.img_url},on:{"error":function($event){item.img_url = ''}}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!item.img_url),expression:"!item.img_url"}]},[_vm._v(_vm._s(item.name.slice(0, 1)))]),_vm._v(" "),_c('h4',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.desc))])])])}),0)]):_vm._e(),_vm._v(" "),_c('el-divider',[_vm._v(" Tips ")]),_vm._v(" "),_c('div',{staticClass:"apply-info"},[_c('p',{staticStyle:{"margin-bottom":"10px"}},[_vm._v("走过路过不要错过，互加友链，交个朋友！")]),_vm._v(" "),_c('p',[_vm._v("链接名称：罗小黑")]),_vm._v(" "),_c('p',[_vm._v("链接地址：https://www.happyfly.top/")]),_vm._v(" "),_c('p',[_vm._v("\n      链接图片：https://cdn.jsdelivr.net/gh/Thawsoar/FigureBed@master/img/avatar.jpg\n    ")]),_vm._v(" "),_c('p',[_vm._v("链接描述：记录生活~")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"center","margin-top":"10px"}},[_c('el-button',{attrs:{"type":"primary","size":"medium"},on:{"click":_vm.addFriendlink}},[_vm._v("点我加友链！")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/friend.vue?vue&type=template&id=48367d2e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/friend.vue?vue&type=script&lang=js&
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

/* harmony default export */ var friendvue_type_script_lang_js_ = ({
  scrollToTop: true,

  async fetch({
    store,
    params
  }) {
    // console.log(this.friendlinkList)
    return await store.dispatch('friend/getFriendLinks');
  },

  data() {
    return {// friendlinkList: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      friendlinkList: state => state.friend.friendList.slice()
    }) // friendlinkList() {
    //   return this.$store.state.friend.friendList
    // }

  },
  methods: {
    // 随机生成RGB颜色
    randomRgbColor() {
      const r = Math.floor(Math.random() * 256); // 随机生成256以内r值

      const g = Math.floor(Math.random() * 256); // 随机生成256以内g值

      const b = Math.floor(Math.random() * 256); // 随机生成256以内b值

      return `rgb(${r},${g},${b})`; // 返回rgb(r,g,b)格式颜色
    },

    addFriendlink() {
      this.$message.warning('友链功能暂未开放');
    }

  }
});
// CONCATENATED MODULE: ./pages/friend.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_friendvue_type_script_lang_js_ = (friendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/friend.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_friendvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48367d2e",
  "58a6317c"
  
)

/* harmony default export */ var friend = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=friend.js.map