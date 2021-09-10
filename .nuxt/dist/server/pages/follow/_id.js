exports.ids = [7];
exports.modules = {

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("693894cc", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_773b17b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_773b17b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_773b17b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_773b17b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_773b17b5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".follow-page[data-v-773b17b5]{background:hsla(0,0%,100%,.25098);position:relative;overflow:inherit}.follow-page[data-v-773b17b5] .el-card__header{padding:0}.follow-page[data-v-773b17b5] .el-card__header>div{padding:30px 0;height:100%;background:rgba(0,0,0,.18824)}.follow-page[data-v-773b17b5] .el-card__header h1{background:hsla(0,0%,95.3%,.70196);line-height:40px;text-align:center;color:#333;border-left:5px solid #1bc3fb;font-size:18px}.follow-page[data-v-773b17b5] .el-card__header p{text-align:center;margin-top:10px}.follow-page[data-v-773b17b5] .el-card__header p span{color:#fff;font-size:14px}.follow-page .tabs[data-v-773b17b5]{position:absolute;top:30px;left:-42px;transition:top .4s ease-in}.follow-page .tabs dd[data-v-773b17b5]{color:#222;background:hsla(0,0%,100%,.50196);border:1px solid #fff;border-right:none;border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;margin-bottom:10px;letter-spacing:3px;display:block;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.follow-page .tabs dd a[data-v-773b17b5]{color:#222;padding:20px 10px;display:block}.follow-page .tabs dd.active[data-v-773b17b5]{background:rgba(27,195,251,.37647);border:1px solid #1bc3fb;border-left-width:2px;box-shadow:0 0 10px #fff}.follow-page .tabs dd.active a[data-v-773b17b5]{color:#fff}.follow-page .el-card[data-v-773b17b5]{margin-bottom:15px;background:hsla(0,0%,100%,.56471)}.follow-page .el-card[data-v-773b17b5]:hover{background:#fff}.follow-page .el-card:hover img[data-v-773b17b5]{opacity:1}.follow-page .el-card:hover span[data-v-773b17b5]{color:#999}.follow-page img[data-v-773b17b5]{width:100%;height:300px;opacity:.8}.follow-page h2[data-v-773b17b5]{font-weight:600;line-height:24px;font-size:16px;padding:0 10px 0 0;white-space:nowrap}.follow-page h2[data-v-773b17b5],.follow-page p[data-v-773b17b5]{color:#222;overflow:hidden;text-overflow:ellipsis;margin:0 0 8px}.follow-page p[data-v-773b17b5]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;line-height:20px;max-height:40px;font-size:12px;font-weight:400}.follow-page .bottom[data-v-773b17b5]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.follow-page .bottom span[data-v-773b17b5]{font-size:12px;color:#222}.follow-page .bottom .el-divider--vertical[data-v-773b17b5]{margin:0 2px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/follow/_id.vue?vue&type=template&id=773b17b5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{ref:"followPage",staticClass:"follow-page"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h1',[_vm._v("我的番剧")]),_vm._v(" "),_c('p',[_c('span',[_vm._v("哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")])])]),_vm._v(" "),_c('dl',{staticClass:"tabs",style:({top: (_vm.scrollTop + "px")})},_vm._l((_vm.tabsList),function(item){return _c('dd',{key:item.CODE,class:{active: item.active}},[_c('nuxt-link',{attrs:{"to":("/follow/" + (item.CODE))}},[_vm._v(_vm._s(item.NAME))])],1)}),0),_vm._v(" "),_c('el-row',{attrs:{"gutter":10}},_vm._l((_vm.followList),function(item){return _c('el-col',{key:item.media_id,attrs:{"span":8}},[_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_c('el-card',{attrs:{"body-style":{ padding: '0px' },"shadow":"hover"}},[_c('img',{staticClass:"image",attrs:{"src":item.cover}}),_vm._v(" "),_c('div',{staticStyle:{"padding":"14px"}},[_c('h2',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.evaluate))]),_vm._v(" "),_c('div',{staticClass:"bottom clearfix"},[_c('span',[_vm._v(_vm._s(item.season_type_name))]),_vm._v(" "),_c('el-divider',{attrs:{"direction":"vertical"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.areas[0].name))])],1),_vm._v(" "),_c('div',{staticClass:"bottom clearfix"},[_c('span',[_vm._v(_vm._s(item.progress))]),_vm._v(" "),_c('el-divider',{attrs:{"direction":"vertical"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.new_ep.index_show))])],1)])])],1)])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/follow/_id.vue?vue&type=template&id=773b17b5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/follow/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async fetch({
    store,
    params
  }) {
    await store.dispatch('follow/getFollowList', params.id);
  },

  async asyncData({
    app,
    params
  }) {
    const tabsList = [{
      CODE: '1',
      NAME: '追番',
      active: true
    }, {
      CODE: '2',
      NAME: '追剧',
      active: false
    }];
    tabsList.forEach(item => {
      item.active = false;

      if (item.CODE === params.id) {
        item.active = true;
      }
    });
    return {
      tabsList
    };
  },

  data() {
    return {
      scrollTop: 150,
      timer: null
    };
  },

  computed: {
    followList() {
      return this.$store.state.follow.followList.list || [];
    }

  },

  destroyed() {
    document.querySelector('.layout-default').removeEventListener('scroll', this.handleScroll);
    this.timer = null;
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelector('.layout-default').addEventListener('scroll', this.handleScroll);
    });
  },

  methods: {
    handleScroll() {
      const dom = document.querySelector('.layout-default');
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const scrollTop2 = dom.scrollTop || document.body.scrollTop;

        if (scrollTop2 == scrollTop1) {
          this.scrollTop = scrollTop2 <= 300 ? 150 : scrollTop2 - 150;
        }
      }, 300);
      const scrollTop1 = dom.scrollTop || document.body.scrollTop;
    }

  }
});
// CONCATENATED MODULE: ./pages/follow/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var follow_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/follow/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(210)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  follow_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "773b17b5",
  "83239c00"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map