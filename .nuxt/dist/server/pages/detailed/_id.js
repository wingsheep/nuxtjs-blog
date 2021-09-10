exports.ids = [6];
exports.modules = {

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("f7bccfe4", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0fd7dd3b", content, true, context)
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4b19394a", content, true, context)
};

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(209);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d483f992", content, true, context)
};

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

/**
 * https://github.com/vue-bulma/click-outside/blob/master/index.js
 */
function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.');
    return false;
  }

  return true;
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements) {
    return false;
  }

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true;
      }

      if (elements[i].contains(popupItem)) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  return false;
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer;
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return; // Define Handler and cache it on the element

    function handler(e) {
      if (!vNode.context) return; // some components may have related popup item, on which we shall prevent the click outside event handler.

      var elements = e.path || e.composedPath && e.composedPath();
      elements && elements.length > 0 && elements.unshift(e.target);
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return;

      el.__vueClickOutside__.callback(e);
    } // add Event Listeners


    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    };
    !isServer(vNode) && document.addEventListener('click', handler);
    !isServer(vNode) && document.addEventListener('touchstart', handler);
  },
  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value;
  },
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler);
    !isServer(vNode) && document.removeEventListener('touchstart', el.__vueClickOutside__.handler);
    delete el.__vueClickOutside__;
  }
};

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_e678b1c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_e678b1c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_e678b1c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_e678b1c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_editor_vue_vue_type_style_index_0_id_e678b1c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fade-transform-enter-active[data-v-e678b1c6],.fade-transform-leave-active[data-v-e678b1c6]{transition:all .5s}.fade-transform-enter[data-v-e678b1c6]{opacity:0;transform:translateX(-30px)}.fade-transform-leave-to[data-v-e678b1c6]{opacity:0;transform:translateX(30px)}.mobile-slide-enter-active[data-v-e678b1c6],.mobile-slide-leave-active[data-v-e678b1c6]{transition:all .2s ease-in-out}.mobile-slide-enter[data-v-e678b1c6],.mobile-slide-leave-to[data-v-e678b1c6]{transform:translateX(100%)}.search-slide-enter-active[data-v-e678b1c6],.search-slide-leave-active[data-v-e678b1c6]{transition:all .35s ease-in-out}@media (max-width:1023px){.search-slide-enter-active[data-v-e678b1c6],.search-slide-leave-active[data-v-e678b1c6]{transition:all .25s ease-in-out}}.search-slide-enter[data-v-e678b1c6],.search-slide-leave-to[data-v-e678b1c6]{transform:translateX(100%)}.fade-enter-active[data-v-e678b1c6],.fade-leave-active[data-v-e678b1c6]{transition:opacity .3s}.fade-enter[data-v-e678b1c6],.fade-leave-active[data-v-e678b1c6]{opacity:0}.fade-move[data-v-e678b1c6]{transition:transform .3s}.fade-leave-active[data-v-e678b1c6]{position:absolute}.list-slide-enter[data-v-e678b1c6],.list-slide-leave-to[data-v-e678b1c6]{opacity:0;transform:translateY(30px)}.list-slide-leave-active[data-v-e678b1c6]{width:100%;position:absolute}.slide-up-enter-active[data-v-e678b1c6]{transition:all .3s ease .1s}.slide-up-leave-active[data-v-e678b1c6]{transition:all .3s ease}.slide-up-enter[data-v-e678b1c6],.slide-up-leave-active[data-v-e678b1c6]{transform:translateY(-20px);opacity:0}.slide-up-move[data-v-e678b1c6]{transition:all .5s}.editor-container[data-v-e678b1c6]{display:flex;justify-content:space-between;align-items:flex-start}.avatar[data-v-e678b1c6]{display:inline-block;width:36px;height:36px;border-radius:50%;background-color:#eee;line-height:36px;color:#fff}@media (max-width:479px){.avatar[data-v-e678b1c6]{display:none}}.slide-wrapper[data-v-e678b1c6]{position:relative}.message-container .comment-wrapper[data-v-e678b1c6]{width:100%}.message-container .slide-wrapper[data-v-e678b1c6]{display:flex;flex-direction:column}.message-container .slide-wrapper .user-item[data-v-e678b1c6]{order:1;margin:5px 0 10px}@media (max-width:767px){.message-container .slide-wrapper .user-item .user-input[data-v-e678b1c6]{width:100%}}@media (max-width:479px){.message-container .slide-wrapper .user-item .user-input[data-v-e678b1c6]{width:calc(100% - 20px)}}.message-container .slide-wrapper .editor-item[data-v-e678b1c6]{order:2}.message-container .slide-wrapper .tools-item[data-v-e678b1c6]{order:3}.comment-wrapper[data-v-e678b1c6]{width:calc(100% - 50px)}@media (max-width:479px){.comment-wrapper[data-v-e678b1c6]{width:100%}}.comment-wrapper .list-slide-item[data-v-e678b1c6]{transition:all .3s ease-in-out}.comment-wrapper .reply-target[data-v-e678b1c6]{box-sizing:border-box;position:relative;margin-bottom:10px;padding:10px;border:1px solid #ccc;border-radius:4px}.comment-wrapper .reply-target .icon-ant-close[data-v-e678b1c6]{display:flex;justify-content:center;align-items:center;position:absolute;top:5px;right:5px;width:30px;height:30px;font-size:16px;cursor:pointer}.comment-wrapper .reply-target .icon-ant-close[data-v-e678b1c6]:hover{color:#ccc}.comment-wrapper .editor[data-v-e678b1c6]{box-sizing:border-box;width:100%;min-height:120px;max-height:300px;padding:10px;font-size:14px;color:#222;border:1px solid #ccc;border-radius:4px;outline:none;overflow-y:auto;font-family:Microsoft Yahei;background-image:url(https://gravatar.ufile.ucloud.com.cn/static/photo/comment-bg.png);background-size:contain;background-repeat:no-repeat;background-position:100%;resize:vertical;text-align:left;background-color:#f4f5f7}.comment-wrapper .editor[data-v-e678b1c6]:empty:before{content:attr(placeholder);position:absolute;left:10px;top:10px;transform-origin:0 0;font-size:14px;pointer-events:none;transition:all .25s}.comment-wrapper .editor[data-v-e678b1c6]:focus,.comment-wrapper .editor[data-v-e678b1c6]:hover{border-color:#029fe9;background-color:#fff}.comment-wrapper .editor[data-v-e678b1c6]:focus:before{content:attr(placeholder);position:absolute;left:10px;top:10px;transform-origin:0 0;pointer-events:none;transition:all .25s;color:#fff;background-color:#029fe9;font-size:16px;padding:0 4px;transform:scale(.75) translateY(-24px);border-radius:3px}.comment-wrapper .user-wrapper[data-v-e678b1c6]{display:flex;justify-content:space-between;align-items:center;font-size:14px}@media (max-width:767px){.comment-wrapper .user-wrapper[data-v-e678b1c6]{flex-direction:column}}.comment-wrapper .user-wrapper .user-input[data-v-e678b1c6]{width:calc(32% - 20px);height:10px;line-height:normal;padding:8px 10px;outline:none;color:#222;white-space:nowrap;border:1px solid #ccc;border-radius:4px;background-color:#fff;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.comment-wrapper .user-wrapper .user-input[data-v-e678b1c6]:focus,.comment-wrapper .user-wrapper .user-input[data-v-e678b1c6]:hover{border-color:#222}@media (max-width:767px){.comment-wrapper .user-wrapper .user-input[data-v-e678b1c6]{width:calc(100% - 20px);margin:3px 5px}}.tools-wrapper[data-v-e678b1c6]{display:flex;justify-content:space-between;align-items:center}.tools-wrapper .tool-item[data-v-e678b1c6]{display:flex;justify-content:center;align-items:center;width:30px;height:30px;cursor:pointer}.tools-wrapper .tool-item[data-v-e678b1c6]:hover{background-color:#fff}.editor-tools[data-v-e678b1c6]{display:flex;justify-content:flex-start;margin:5px 0}.editor-tools>a[data-v-e678b1c6]{position:relative;margin-right:10px}.editor-tools>a[data-v-e678b1c6]:last-child{margin-right:0}.emoji-wrapper[data-v-e678b1c6]{box-sizing:border-box;display:flex;justify-content:flex-start;flex-wrap:wrap;position:absolute;top:30px;left:0;width:200px;padding:10px;background-color:#fff;cursor:default}.emoji-wrapper .emoji-item[data-v-e678b1c6]{display:flex;justify-content:center;align-items:center;box-sizing:border-box;font-size:16px;width:36px;height:36px}.emoji-wrapper .emoji-item[data-v-e678b1c6]:hover{background-color:#fff;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_1cb33853_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_1cb33853_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_1cb33853_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_1cb33853_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_list_vue_vue_type_style_index_0_id_1cb33853_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".comment-item[data-v-1cb33853]{display:flex;justify-content:space-between;align-content:flex-start;margin-bottom:25px}.comment-item[data-v-1cb33853]:last-child{margin-bottom:0}.comment-item .avatar[data-v-1cb33853]{display:inline-block;width:36px;height:36px;border-radius:50%;background-color:#eee;line-height:36px;color:#fff}.comment-item .comment-detail[data-v-1cb33853]{width:calc(100% - 50px)}.comment-item .comment-detail .nickname[data-v-1cb33853]{text-align:left;font-size:14px;color:#6d757a;font-weight:600}.comment-item .comment-detail .nickname[data-v-1cb33853]:hover{color:#00a1d6;cursor:pointer}.comment-item .comment-detail .nickname .website[data-v-1cb33853]{font-size:16px}.comment-item .comment-detail .content[data-v-1cb33853]{display:flex;align-items:center;min-height:42px;margin:8px 0;font-size:1rem}.comment-item .comment-detail .reply-wrapper[data-v-1cb33853]{box-sizing:border-box;padding:6px 10px;font-size:14px;border:1px solid #ccc;border-radius:4px;background-color:#fff}.comment-item .comment-detail .reply-wrapper .reply-nickname[data-v-1cb33853]{font-weight:600}.comment-item .comment-detail .comment-footer[data-v-1cb33853]{display:flex;justify-content:flex-start;align-items:center;color:#99a2aa;margin-bottom:10px}.comment-item .comment-detail .comment-footer .time[data-v-1cb33853]{font-size:12px}.comment-item .comment-detail .comment-footer .tools[data-v-1cb33853]{margin-left:15px;display:flex;justify-content:flex-start;align-items:center;font-size:12px}.comment-item .comment-detail .comment-footer .tools>i[data-v-1cb33853]{display:flex;justify-content:center;align-items:center;width:30px;height:30px;margin-right:10px;cursor:pointer;font-size:12px}.comment-item .comment-detail .comment-footer .tools>i[data-v-1cb33853]:last-child{margin-right:0}.comment-item .comment-detail .comment-footer .tools>i .like-count[data-v-1cb33853]{margin-left:5px}.comment-item .comment-detail .comment-footer .tools span.replay[data-v-1cb33853]{padding:0 5px;border-radius:4px;margin-right:15px;cursor:pointer;display:inline-block}.comment-item .comment-detail .comment-footer .tools span.replay[data-v-1cb33853]:hover{color:#00a1d6;background:#e5e9ef}.comment-item .comment-detail .comment-footer .tools .is-like[data-v-1cb33853]{color:red}.comment-item .comment-detail .split[data-v-1cb33853]{box-sizing:border-box;width:100%;height:1px;margin-top:15px;background-color:#ccc}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_6e41f00d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_6e41f00d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_6e41f00d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_6e41f00d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_comment_vue_vue_type_style_index_0_id_6e41f00d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".comment-list-wrapper[data-v-6e41f00d]{margin-top:25px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6d00570f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6d00570f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6d00570f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6d00570f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_6d00570f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-articleed .el-card[data-v-6d00570f]{background:transparent}.page-articleed .el-card[data-v-6d00570f] .el-card__header{padding:0;background:hsla(0,0%,100%,.56471)}.page-articleed .el-card[data-v-6d00570f] .el-card__header>div{padding:30px 0;height:100%}.page-articleed .el-card[data-v-6d00570f] .el-card__header h1{background:hsla(0,0%,95.3%,.50196);line-height:40px;text-align:center;color:#333;border-left:5px solid #1bc3fb;font-size:18px}.page-articleed .el-card[data-v-6d00570f] .el-card__header p{text-align:center;margin-top:10px}.page-articleed .el-card[data-v-6d00570f] .el-card__header p span{color:#fff;font-size:14px}.page-articleed .el-card[data-v-6d00570f] .el-card__body{background:#fff;padding:30px}.page-articleed .articleed-info[data-v-6d00570f]{width:100%}.page-articleed .articleed-info .el-col[data-v-6d00570f]{display:flex;justify-content:center}.page-articleed .articleed-info dl[data-v-6d00570f]{overflow:hidden}.page-articleed .articleed-info dl dd[data-v-6d00570f]{float:left;margin-right:20px;height:36px;line-height:1}.page-articleed .articleed-info dl dd a[data-v-6d00570f]{line-height:36px;color:#222;vertical-align:middle}.page-articleed .articleed-info dl dd i[data-v-6d00570f]{font-size:16px;color:#222;vertical-align:middle}.page-articleed .toc-aside[data-v-6d00570f]{position:fixed;left:100px;top:200px;width:120px;overflow:hidden;background:#fff;padding:15px;border-radius:10px}.page-articleed .toc-aside h2[data-v-6d00570f]{padding-bottom:10px;font-size:16px}.page-articleed .toc-aside ol[data-v-6d00570f]{padding-left:15px}.page-articleed .toc-aside ol li[data-v-6d00570f]{cursor:pointer;line-height:28px}.page-articleed .toc-aside ol li a[data-v-6d00570f]{color:rgba(34,34,34,.56471)}.page-articleed .toc-aside ol li a[data-v-6d00570f]:hover{color:#222}.page-articleed .toc-aside ol li a.on[data-v-6d00570f]{color:#409eff}.page-articleed .post-footer[data-v-6d00570f]{margin-top:30px;padding:15px 0;border-top:1px dashed #ddd;border-bottom:1px dashed #ddd;overflow:hidden}.page-articleed .post-footer .footer-tags[data-v-6d00570f]{float:left}.page-articleed .post-footer .footer-tags span a[data-v-6d00570f]{font-size:12px;line-height:16px;letter-spacing:.05em;color:#151c3d;margin-left:5px}.page-articleed .post-footer .footer-like[data-v-6d00570f]{float:right;text-align:center;transition:background .5s;cursor:pointer}.page-articleed .post-footer .footer-like i[data-v-6d00570f]{font-size:16px}.page-articleed .post-footer .footer-like span[data-v-6d00570f]{font-size:14px;line-height:14px;color:#151c3d}.page-articleed section.post-btns[data-v-6d00570f]{margin-top:15px;overflow:hidden}.page-articleed section.post-btns .last-post[data-v-6d00570f]{float:left}.page-articleed section.post-btns .next-post[data-v-6d00570f]{float:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/detailed/_id.vue?vue&type=template&id=6d00570f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scroll",staticClass:"page-articleed",attrs:{"id":"page_articleed"}},[_c('el-card',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h1',[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('el-row',{staticClass:"articleed-info"},[_c('el-col',{attrs:{"span":24}},[_c('dl',[_c('dd',{attrs:{"span":5}},[_c('i',{staticClass:"iconfont icon-rili"}),_vm._v(" "),_c('a',[_vm._v(_vm._s(_vm._f("filterDate")(_vm.article.date)))])]),_vm._v(" "),_c('dd',{attrs:{"span":3}},[_c('i',{staticClass:"iconfont icon-comment"}),_vm._v(" "),_c('a',[_vm._v(_vm._s(_vm.article.comment)+"条评论")])]),_vm._v(" "),_c('dd',{attrs:{"span":3}},[_c('i',{staticClass:"iconfont icon-read"}),_vm._v(" "),_c('a',[_vm._v(_vm._s(_vm.article.views)+"阅读")])]),_vm._v(" "),_c('dd',{attrs:{"span":3}},[_c('i',{staticClass:"iconfont icon-good"}),_vm._v(" "),_c('a',[_vm._v(_vm._s(_vm.articleLike)+"人点赞")])]),_vm._v(" "),_c('dd',{attrs:{"span":3}},[_c('i',{staticClass:"iconfont icon-user"}),_vm._v(" "),_c('a',[_vm._v("罗小黑")])])])])],1)],1),_vm._v(" "),_c('div',[_c('p',[_vm._v(_vm._s(_vm.article.description))])]),_vm._v(" "),_c('article',{directives:[{name:"show",rawName:"v-show",value:(_vm.markedContent),expression:"markedContent"}],ref:"markdown",staticClass:"markdown",domProps:{"innerHTML":_vm._s(_vm.markedContent)}}),_vm._v(" "),_c('footer',{staticClass:"post-footer"},[_c('div',{staticClass:"footer-tags"},[_c('i',{staticClass:"iconfont icon-shengqian"}),_vm._v(" "),_vm._l((_vm.article.labels),function(item){return _c('span',{key:item.id},[_c('nuxt-link',{attrs:{"to":("/category/" + (item.name) + "/" + (item.id))}},[_vm._v(_vm._s(item.name))])],1)})],2),_vm._v(" "),_c('div',{staticClass:"footer-like",on:{"click":function($event){return _vm.giveAlike(_vm.article.id)}}},[_c('i',{staticClass:"iconfont",class:_vm.isLike ? 'icon-good-fill' : 'icon-good',style:({color: _vm.isLike ? 'red' : ''})}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.articleLike))])])]),_vm._v(" "),_c('section',{staticClass:"post-btns"},[(_vm.article.last_id)?_c('nuxt-link',{staticClass:"last-post",attrs:{"to":("/detailed/" + (_vm.article.last_id))}},[_c('el-button',{attrs:{"plain":"","icon":"el-icon-arrow-left"}},[_vm._v("\n          上一篇\n        ")])],1):_vm._e(),_vm._v(" "),(_vm.article.next_id)?_c('nuxt-link',{staticClass:"next-post",attrs:{"to":("/detailed/" + (_vm.article.next_id))}},[_c('el-button',{attrs:{"plain":""}},[_vm._v("\n          下一篇\n          "),_c('i',{staticClass:"el-icon-arrow-right el-icon--right"})])],1):_vm._e()],1)]),_vm._ssrNode(" "),_c('el-card',{staticStyle:{"margin-top":"15px","text-align":"center"}},[_c('div',{ref:"commentArea",staticClass:"article-container comment-container"},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"comment-wrapper"},[_c('comment',{attrs:{"comments":_vm.comments,"article-id":_vm.id,"loading":_vm.loading},on:{"createCommentSuccess":_vm.getComments}})],1)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/detailed/_id.vue?vue&type=template&id=6d00570f&scoped=true&

// EXTERNAL MODULE: ./plugins/marked.js
var marked = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/public/comment/comment.vue?vue&type=template&id=6e41f00d&scoped=true&
var commentvue_type_template_id_6e41f00d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-container"},[_c('comment-editor',{ref:"editor",on:{"closeReplyContent":_vm.closeReply,"send":_vm.onSend}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comment-list-wrapper\" data-v-6e41f00d>","</div>",[_c('comment-list',{attrs:{"comments":_vm.comments,"loading":_vm.loading},on:{"reply":_vm.onReply}})],1)],2)}
var commentvue_type_template_id_6e41f00d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/public/comment/comment.vue?vue&type=template&id=6e41f00d&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/public/comment/comment-list.vue?vue&type=template&id=1cb33853&scoped=true&
var comment_listvue_type_template_id_1cb33853_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"comment-list"},[_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<li class=\"comment-item\" data-v-1cb33853>","</li>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.gravatar(comment.user_email)))+(_vm._ssrAttr("alt",comment.user_nickname || '匿名用户'))+" class=\"avatar\""+(_vm._ssrStyle(null,null, { display: (!comment.flag) ? '' : 'none' }))+" data-v-1cb33853> <span class=\"avatar\""+(_vm._ssrStyle(null,{backgroundColor: _vm.randomRgbColor()}, { display: (comment.flag) ? '' : 'none' }))+" data-v-1cb33853>"+_vm._ssrEscape(_vm._s(comment.user_nickname.slice(0, 1)))+"</span> "),_vm._ssrNode("<section class=\"comment-detail markdown\" data-v-1cb33853>","</section>",[_vm._ssrNode("<div class=\"nickname\" data-v-1cb33853><span data-v-1cb33853>"+_vm._ssrEscape(_vm._s(comment.user_nickname))+"</span></div> <div class=\"content\" data-v-1cb33853>"+(_vm._s(comment.content))+"</div> "+((comment.parent_id)?("<section class=\"reply-wrapper markdown\" data-v-1cb33853>"+((comment.replyName)?("<div class=\"reply-nickname\" data-v-1cb33853>"+_vm._ssrEscape("@"+_vm._s(comment.replyName)+":")+"</div>"):"<!---->")+" <div data-v-1cb33853>"+(_vm._s(comment.replyContent))+"</div></section>"):"<!---->")+" <footer class=\"comment-footer\" data-v-1cb33853><time"+(_vm._ssrAttr("datetime",_vm._f("filterDate")(comment.createdAt)))+" class=\"time\" data-v-1cb33853>"+_vm._ssrEscape(_vm._s(_vm._f("filterDate")(comment.createdAt,'YYYY-MM-DD HH:mm')))+"</time> <div class=\"tools\" data-v-1cb33853><i"+(_vm._ssrClass("iconfont icon-good",{'is-like': _vm.isLike(comment.id)}))+" data-v-1cb33853><span class=\"like-count\" data-v-1cb33853>"+_vm._ssrEscape(_vm._s(comment.like_count))+"</span></i> <span class=\"replay\" data-v-1cb33853>回复</span></div></footer> "),(comment.showReplay)?_c('comment-editor',{ref:"replayEditor",refInFor:true,attrs:{"placeholder":("回复：" + (comment.user_nickname))},on:{"send":function($event){return _vm.sendReplay($event, comment)}}}):_vm._e(),_vm._ssrNode(" <div class=\"split\" data-v-1cb33853></div>")],2)],2)}),_vm._ssrNode(" "),(_vm.loading)?_c('loading'):_vm._e(),_vm._ssrNode(" "+((!_vm.loading && !_vm.comments.length)?("<div data-v-1cb33853>还没有评论 /(ㄒoㄒ)/~~</div>"):"<!---->"))],2)}
var comment_listvue_type_template_id_1cb33853_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/public/comment/comment-list.vue?vue&type=template&id=1cb33853&scoped=true&

// EXTERNAL MODULE: ./services/utils/util.js
var util = __webpack_require__(14);

// EXTERNAL MODULE: ./plugins/gravatar.js
var gravatar = __webpack_require__(30);

// CONCATENATED MODULE: ./services/gravatar/gravatar.js
// import defaultAvatar from '@/assets/image/default.png'


/**
 * gravatar 头像服务
 */

/* harmony default export */ var gravatar_gravatar = (email => {
  if (!email) {
    return '';
  }

  if (!util["a" /* default */].validateEmail(email)) {
    return '';
  }

  return gravatar["a" /* default */].url(email, {
    protocol: 'https'
  });
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/comment-editor/comment-editor.vue?vue&type=template&id=e678b1c6&scoped=true&
var comment_editorvue_type_template_id_e678b1c6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-container",class:{'message-container': _vm.isMessageEditor}},[_vm._ssrNode(((!_vm.isMessageEditor && !_vm.flag)?("<img"+(_vm._ssrAttr("src",_vm.avatar))+(_vm._ssrAttr("alt",_vm.form.nickname || '匿名用户'))+" class=\"avatar\" data-v-e678b1c6>"):"<!---->")+" <span class=\"avatar\""+(_vm._ssrStyle(null,{backgroundColor: 'green'}, { display: (_vm.flag) ? '' : 'none' }))+" data-v-e678b1c6>"+_vm._ssrEscape(_vm._s(_vm.form.nickname ? _vm.form.nickname.slice(0, 1) : '匿'))+"</span> "),_vm._ssrNode("<section class=\"comment-wrapper\" data-v-e678b1c6>","</section>",[_c('transition-group',{staticClass:"slide-wrapper",attrs:{"tag":"div","name":"list-slide"}},[_c('section',{key:2,staticClass:"list-slide-item editor-item"},[_c('div',{ref:"editContent",staticClass:"editor",attrs:{"contenteditable":"true","placeholder":_vm.placeholder},on:{"keyup":_vm.contentChange,"click":_vm.getCursorPosition}})]),_vm._v(" "),_c('section',{key:3,staticClass:"list-slide-item tools-wrapper tools-item"},[_c('div',{staticClass:"editor-tools"},[_c('a',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(function () {_vm.isShowEmoji = false}),expression:"() => {isShowEmoji = false}"}],staticClass:"tool-item",on:{"click":function($event){_vm.isShowEmoji = true}}},[_c('i',{staticClass:"iconfont icon-biaoqing"}),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowEmoji),expression:"isShowEmoji"}],staticClass:"emoji-wrapper"},_vm._l((_vm.emojiList),function(emoji,index){return _c('li',{key:index,staticClass:"emoji-item",on:{"click":function($event){$event.stopPropagation();return _vm.insertEmoji(emoji)}}},[_vm._v("\n                "+_vm._s(emoji)+"\n              ")])}),0)]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('image')}}},[_c('i',{staticClass:"iconfont icon-tupian"})]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('link')}}},[_c('i',{staticClass:"iconfont icon-lianjie"})]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":function($event){return _vm.insertContent('code')}}},[_c('i',{staticClass:"iconfont icon-code"})])]),_vm._v(" "),_c('a',{staticClass:"tool-item",on:{"click":_vm.debouncedSend}},[_c('i',{staticClass:"iconfont icon-send"})])]),_vm._v(" "),_c('div',{key:4,staticClass:"list-slide-item user-item"},[_c('section',{key:"4",staticClass:"user-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.nickname),expression:"form.nickname"}],staticClass:"user-input",attrs:{"maxlength":"32","required":_vm.isMessageEditor ? false : true,"name":"text","type":"text","placeholder":_vm.isMessageEditor ? '昵称（非必填）' : '昵称（必填）'},domProps:{"value":(_vm.form.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "nickname", $event.target.value)}}}),_vm._v(" "),(!_vm.isMessageEditor)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.email),expression:"form.email"}],staticClass:"user-input",attrs:{"required":_vm.isMessageEditor ? false : true,"name":"email","type":"email","placeholder":"邮箱（必填）"},domProps:{"value":(_vm.form.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "email", $event.target.value)}}}):_vm._e(),_vm._v(" "),(!_vm.isMessageEditor)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.website),expression:"form.website"}],staticClass:"user-input",attrs:{"name":"url","type":"url","placeholder":"个人网站（完整域名，非必填）"},domProps:{"value":(_vm.form.website)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "website", $event.target.value)}}}):_vm._e()])])])],1)],2)}
var comment_editorvue_type_template_id_e678b1c6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/comment-editor/comment-editor.vue?vue&type=template&id=e678b1c6&scoped=true&

// EXTERNAL MODULE: external "throttle-debounce"
var external_throttle_debounce_ = __webpack_require__(66);

// EXTERNAL MODULE: ./services/directives/click-outside.js
var click_outside = __webpack_require__(201);
var click_outside_default = /*#__PURE__*/__webpack_require__.n(click_outside);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./services/utils/dom.js

const isServer = external_vue_default.a.prototype.$isServer;
const on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
}();
const off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
}();
/**
 * 获取光标位置
 * @param {DOMElement} element 输入框的dom节点
 * @return {Number} 光标位置
 */

const getCursorPosition = element => {
  let caretOffset = 0;
  const doc = element.ownerDocument || element.document;
  const win = doc.defaultView || doc.parentWindow;
  const sel = win.getSelection();

  if (sel.rangeCount > 0) {
    const range = win.getSelection().getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    caretOffset = preCaretRange.toString().length;
  }

  return caretOffset;
};
/**
 * 设置光标位置
 * @param {DOMElement} element 输入框的dom节点
 * @param {Number} cursorPosition 光标位置的值
 */

const setCursorPosition = (element, cursorPosition) => {
  const range = document.createRange();

  if (element.firstChild.length < cursorPosition) {
    return;
  }

  range.setStart(element.firstChild, cursorPosition);
  range.setEnd(element.firstChild, cursorPosition);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/comment-editor/comment-editor.vue?vue&type=script&lang=js&
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





const emojiList = ['😃', '😂', '😅', '😉', '😌', '😔', '😓', '😘', '😡', '😭', '😱', '😳', '😵', '🌚', '👍', '👎', '💪', '🌹', '💊'];
/* harmony default export */ var comment_editorvue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: click_outside_default.a
  },
  props: {
    isShowReplyContent: {
      type: Boolean,
      default: false
    },
    isMessageEditor: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '千生百世，缘起缘灭，皆已注定...'
    }
  },

  data() {
    return {
      flag: false,
      isShowEmoji: false,
      contentText: '',
      contentHtml: '',
      form: {
        nickname: '',
        content: '',
        email: '',
        website: ''
      },
      reply: {
        replyNickname: '',
        replyContent: ''
      },
      emojiList,
      cursorPosition: 0
    };
  },

  computed: {
    avatar() {
      return gravatar_gravatar(this.form.email);
    }

  },

  created() {
    // 发送防抖
    this.debouncedSend = Object(external_throttle_debounce_["debounce"])(1000, true, () => {
      this.send();
    });

    if (false) {}
  },

  methods: {
    // 重置为空
    resetField() {
      this.form.content = '';
      this.contentText = '';
      this.contentHtml = '';
      this.$refs.editContent.innerHTML = '';
      this.$refs.editContent.innerText = '';
      this.cursorPosition = 0;
    },

    closeReplyContent() {
      this.$emit('closeReplyContent');
    },

    contentChange() {
      const html = this.$refs.editContent.innerHTML;
      const text = this.$refs.editContent.innerText;

      if (!Object.is(html, this.comemntContentHtml)) {
        this.contentHtml = html;
      }

      if (!Object.is(text, this.comemntContentText)) {
        this.contentText = text;
      }

      this.cursorPosition = getCursorPosition(this.$refs.editContent);
    },

    getCursorPosition() {
      this.cursorPosition = getCursorPosition(this.$refs.editContent);
    },

    send() {
      this.contentChange();
      const inValidMsg = this.getInValidMsg();

      if (inValidMsg) {
        this.$message.warning(inValidMsg);
        return;
      }

      if (false) {}

      this.$emit('send', this.form);
    },

    getInValidMsg() {
      this.form.content = this.contentText;

      if (!this.isMessageEditor) {
        if (!this.form.email) {
          return '邮箱不能为空';
        }

        if (util["a" /* default */].validateEmail(this.form.email) === false) {
          return '请填写正确的email格式';
        }
      }

      if (this.form.website && util["a" /* default */].validateUrl(this.form.website) === false) {
        return '请填写正确的url格式';
      }

      if (!this.form.content || !this.form.content.replace(/\s/g, '')) {
        if (this.form.content.length > 1000 || this.form.content.split('\n').length > 30) {
          return `${this.isMessageEditor ? '留言' : '评论'}内容不能超过1000个字且控制在30行以内`;
        }

        return this.isMessageEditor ? '留言内容不能为空' : '评论内容不能为空';
      } // 留言墙


      if (this.isMessageEditor) {
        if (this.form.nickname && this.form.nickname.length > 32) {
          return '昵称不能超过32个字符';
        }
      } else {
        if (!this.form.nickname || this.form.nickname.length > 32) {
          return '昵称不能为空且长度不能超过32个字符';
        }
      }

      return false;
    },

    insertContent(type) {
      const contents = {
        image: {
          start: `![`,
          end: `]()`
        },
        link: {
          start: `[`,
          end: `]()`
        },
        code: {
          start: '\n```\n',
          end: '\n```'
        }
      };

      if (contents[type]) {
        this.updateEditContent(contents[type]);
      }

      this.focusSelection(this.$refs.editContent);
    },

    focusSelection(dom) {
      if (window.getSelection) {
        // ie11 10 9 ff safari
        dom.focus(); // 解决ff不获取焦点无法定位问题

        const range = window.getSelection(); // 创建range

        range.selectAllChildren(dom); // range 选择obj下所有子内容

        range.collapseToEnd(); // 光标移至最后
      } else if (document.selection) {
        // ie10 9 8 7 6 5
        const range = document.selection.createRange(); // 创建选择对象

        range.moveToElementText(dom); // range定位到obj

        range.collapse(false); // 光标移至最后

        range.select();
      }
    },

    insertEmoji(emoji) {
      const editor = this.$refs.editContent;
      const text = editor.innerText; // 插入 emoji

      editor.innerText = text.slice(0, this.cursorPosition) + `${emoji}` + text.slice(this.cursorPosition, text.length); // 光标位置后挪一位，以保证在刚插入的 emoji 后面

      setCursorPosition(editor, this.cursorPosition + 2); // 更新本地保存的光标位置变量（注意 emoji 占两个字节大小，所以要加1）

      this.cursorPosition = getCursorPosition(editor) + 2; // emoji 占两位

      this.contentChange();
    },

    updateEditContent({
      start = '',
      end = ''
    }) {
      if (!start && !end) {
        return;
      }

      const editor = this.$refs.editContent;
      const selectedText = (window.getSelection || document.getSelection)().toString();
      const currentText = editor.innerText;

      if (selectedText) {
        const newText = currentText.replace(selectedText, start + selectedText + end);
        editor.innerText = newText;
      } else {
        editor.innerText = editor.innerText += start + end;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/comment-editor/comment-editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_editor_comment_editorvue_type_script_lang_js_ = (comment_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/comment-editor/comment-editor.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(202)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comment_editor_comment_editorvue_type_script_lang_js_,
  comment_editorvue_type_template_id_e678b1c6_scoped_true_render,
  comment_editorvue_type_template_id_e678b1c6_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "e678b1c6",
  "14fb494f"
  
)

/* harmony default export */ var comment_editor = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/comment/comment-list.vue?vue&type=script&lang=js&
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


/* harmony default export */ var comment_listvue_type_script_lang_js_ = ({
  components: {
    CommentEditor: comment_editor
  },
  props: {
    comments: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      likeComments: []
    };
  },

  created() {
    this.getLikeComments();
  },

  methods: {
    randomRgbColor() {
      const r = Math.floor(Math.random() * 256); // 随机生成256以内r值

      const g = Math.floor(Math.random() * 256); // 随机生成256以内g值

      const b = Math.floor(Math.random() * 256); // 随机生成256以内b值

      return `rgb(${r},${g},${b})`; // 返回rgb(r,g,b)格式颜色
    },

    hide(item) {
      item.flag = true;
      this.$forceUpdate();
    },

    isLike(commentId) {
      return this.likeComments.includes(commentId);
    },

    reply(comment) {
      // console.log(comment)
      this.$store.commit('article/setCommentShowReplay', comment.id);
      this.$nextTick(() => {
        console.log(this.$refs.replayEditor[0].insertContent()); // this.$refs.replayEditor.focus()
      }); // this.$emit('reply', commentId)
    },

    sendReplay(params, comment) {
      const data = { ...params,
        parentId: comment.id,
        articleId: comment.article_id
      };
      console.log(data);
      this.$emit('reply', data);
    },

    gravatar(email) {
      return gravatar_gravatar(email);
    },

    async likeComment(item) {
      if (this.likeComments.includes(item.id)) {
        return;
      }

      try {
        await this.$store.dispatch('article/likeComment', item.id);
        this.likeComments.push(item.id);

        if (false) {}
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },

    getLikeComments() {
      if (false) {}
    }

  }
});
// CONCATENATED MODULE: ./components/public/comment/comment-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_comment_listvue_type_script_lang_js_ = (comment_listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/public/comment/comment-list.vue



function comment_list_injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var comment_list_component = Object(componentNormalizer["a" /* default */])(
  comment_comment_listvue_type_script_lang_js_,
  comment_listvue_type_template_id_1cb33853_scoped_true_render,
  comment_listvue_type_template_id_1cb33853_scoped_true_staticRenderFns,
  false,
  comment_list_injectStyles,
  "1cb33853",
  "7d983bbc"
  
)

/* harmony default export */ var comment_list = (comment_list_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/comment/comment.vue?vue&type=script&lang=js&
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


/* harmony default export */ var commentvue_type_script_lang_js_ = ({
  components: {
    CommentEditor: comment_editor,
    CommentList: comment_list
  },
  props: {
    comments: {
      type: Array,
      default: () => []
    },
    articleId: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      parentId: 0
    };
  },

  methods: {
    onReply(data) {
      // this.parentId = comment.id
      // this.$refs.editor.reply = {
      //   nickname: comment.nickname,
      //   content: comment.content
      // }
      console.log(data);
      this.onSend(data, true);
    },

    closeReply() {
      // this.parentId = 0
      this.$refs.editor.reply = {
        nickname: '',
        content: ''
      };
      this.$refs.editor.resetField();
    },

    async onSend(data, flag) {
      const params = {
        article_id: this.articleId,
        content: data.content,
        user_email: data.email,
        user_nickname: data.nickname,
        user_url: data.website,
        parent_id: data.parentId
      };

      if (!this.articleId) {
        return;
      }

      if (flag) {
        // 回复评论
        if (!params.parent_id) {
          return;
        }

        try {
          const res = await this.$store.dispatch('article/replyComment', params);

          if (res.data.result) {
            this.closeReply();
            this.$emit('createCommentSuccess');
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        // 创建评论
        try {
          const res = await this.$store.dispatch('article/createComment', params);

          if (res.data.result) {
            this.$refs.editor.resetField();
            this.$emit('createCommentSuccess');
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/public/comment/comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var comment_commentvue_type_script_lang_js_ = (commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/public/comment/comment.vue



function comment_injectStyles (context) {
  
  var style0 = __webpack_require__(206)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var comment_component = Object(componentNormalizer["a" /* default */])(
  comment_commentvue_type_script_lang_js_,
  commentvue_type_template_id_6e41f00d_scoped_true_render,
  commentvue_type_template_id_6e41f00d_scoped_true_staticRenderFns,
  false,
  comment_injectStyles,
  "6e41f00d",
  "114e3c79"
  
)

/* harmony default export */ var comment = (comment_component.exports);
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detailed/_id.vue?vue&type=script&lang=js&
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



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  scrollToTop: true,
  components: {
    Comment: comment
  },

  data() {
    return {
      code: '',
      menuData: [],
      menuState: '',
      articleLike: 0,
      likeArticles: [],
      id: '',
      loading: false // comments: []

    };
  },

  head() {
    return {
      title: this.article.title
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      article(state) {
        const article = state.article.article;

        if (!article) {
          return {};
        }

        this.articleLike = article.like_count;
        return article;
      },

      comments: state => state.article.comments
    }),

    markedContent() {
      if (this.article.content) {
        return Object(marked["a" /* default */])(this.article.content);
      } else {
        return '';
      }
    },

    isLike() {
      return this.likeArticles.includes(this.id);
    }

  },

  async fetch({
    store,
    params
  }) {
    await store.dispatch('article/getArticleDetail', {
      id: params.id
    });
    await store.dispatch('article/getComments', {
      articleId: params.id
    });
  },

  mounted() {
    this.$nextTick(() => {
      this.id = this.$route.params.id;
      this.getAPs();
      this.getLikeArticles();
    });
  },

  methods: {
    // 获取评论
    getComments() {
      console.log(2323);
      this.$store.dispatch('article/getComments', {
        articleId: this.id
      });
    },

    // 点赞
    async giveAlike(id) {
      if (this.isLike) {
        return;
      }

      const result = await this.$store.dispatch('article/likeArticle', id);

      if (result) {
        this.articleLike++;
        this.likeArticles.push(id);
        window.localStorage.setItem('LIKE_ARTICLES', JSON.stringify(this.likeArticles));
      }
    },

    getLikeArticles() {
      if (false) {}
    },

    getAPs() {
      const nodeArr = ['H1', 'H2', 'H3', 'H4'];
      const nodeInfo = []; // 存储目录信息

      const temp = {};
      let index = 0; // 对文档根节点的每一个子节点进行遍历，选出所有需要解析的目录标题

      this.$refs.markdown.childNodes.forEach(item => {
        // console.log(item.nodeName)
        if (nodeArr.includes(item.nodeName)) {
          nodeInfo.push({
            type: item.nodeName,
            // 存储该标题的类型
            txt: item.getAttribute('id'),
            // 存储该标题的文本 [ps：marked解析出来的h1-h6标题会在id里填上对应的标题文本]
            offsetTop: item.offsetTop,
            // 存储该标题离页面顶部的距离
            heading: `#heading-${index++}`
          });
        }
      });
      this.menuData = nodeInfo;
      this.menuState = nodeInfo.length ? nodeInfo[0].txt : '';
      this.$store.commit('setTocList', nodeInfo);
      this.$store.commit('setTocState', this.menuState);
      this.checkMenuScroll();

      if (this.$route.hash) {
        const item = this.menuData.find(_ => _.heading === this.$route.hash);
        this.scrollPage(item);
      } else {
        document.querySelector('.layout-default').scrollTo(0, 0);
      }
    },

    checkMenuScroll() {
      const scroll = document.querySelector('.layout-default'); // this.scroll 为整个页面的根节点，用来监听滚动

      scroll.addEventListener('scroll', () => {
        const scrollTop = scroll.scrollTop; // 获取当前页面的滚动距离

        let menuState = this.menuData.length ? this.menuData[0].txt : ''; // 设置menuState对象默认值为第一个标题的文字
        // 对menuData循环检测，
        // 如果当前页面滚动距离 大于 一个标题离页面顶部 的距离，则将该标题的文字赋值给menuState，循环继续
        // 如果当前页面滚动距离 小于 一个标题离页面顶部 的距离，说明页面还没滚动到该标题的位置，当前标题尚未命中，之后的标题也不可能命中。 循环结束

        for (const item of this.menuData) {
          if (scrollTop >= item.offsetTop) {
            menuState = item.txt;
          } else {
            break;
          }
        } // 如果滑动到了页面的底部，则命中最后一个标题


        if (scroll.clientHeight + scrollTop === scroll.scrollHeight) {
          menuState = this.menuData.length ? this.menuData[this.menuData.length - 1].txt : '';
        } // 如果当前命中标题和前一个命中标题的文本不一样，说明当前页面处于其他标题下的内容，切换menuState


        if (menuState !== this.menuState) {
          this.menuState = menuState;
          this.$store.commit('setTocState', menuState);
        }
      });
    },

    // 点击目录切换
    scrollPage(item) {
      const scroll = document.querySelector('.layout-default'); // 创建一个setInterval，每16ms执行一次，接近60fps

      const scrollToTop = window.setInterval(() => {
        const currentScroll = scroll.scrollTop;

        if (currentScroll > item.offsetTop) {
          // 当页面向上滚动时操作
          scroll.scrollTo(0, currentScroll - Math.ceil((currentScroll - item.offsetTop) / 5));
        } else if (currentScroll < item.offsetTop) {
          // 页面向下滚动时的操作
          if (scroll.clientHeight + currentScroll === scroll.scrollHeight) {
            // 如果已经滚动到了底部，则直接跳出
            this.menuState = item.txt;
            this.$store.commit('setTocState', item.txt);
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
});
// CONCATENATED MODULE: ./pages/detailed/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detailed_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/detailed/_id.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(208)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  detailed_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "6d00570f",
  "102448ff"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map