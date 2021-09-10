exports.ids = [13];
exports.modules = {

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("233b8eb2", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page-register{height:100%;display:flex;justify-content:center}.page-register>section{width:400px;margin-top:15vh;box-sizing:border-box}.page-register>section h1{margin-bottom:15px;text-align:center}.page-register>section .status{font-size:12px;margin-left:20px;color:#e6a23c}.page-register>section .el-button.register{width:100%}.page-register>section .error{color:red}.page-register>section .btn-groups{overflow:hidden}.page-register>section .btn-groups>.el-button{float:right}.page-register>section .btn-groups>.el-button:first-child{float:left}.page-register>section .btn-groups>.el-button:first-child a{color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=782e6b36&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-register"},[_vm._ssrNode("<section>","</section>",[_c('el-card',[_c('h1',[_vm._v("我叫罗小黑")]),_vm._v(" "),_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"0"}},[_c('el-form-item',{attrs:{"label":"","prop":"name"}},[_c('el-input',{attrs:{"prefix-icon":"el-icon-user","placeholder":"昵称"},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"","prop":"email"}},[_c('el-input',{attrs:{"prefix-icon":"el-icon-message","placeholder":"邮箱"},model:{value:(_vm.ruleForm.email),callback:function ($$v) {_vm.$set(_vm.ruleForm, "email", $$v)},expression:"ruleForm.email"}}),_vm._v(" "),_c('span',{staticClass:"status"},[_vm._v(_vm._s(_vm.statusMsg))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"","prop":"code"}},[_c('el-input',{attrs:{"maxlength":"4","placeholder":"验证码"},model:{value:(_vm.ruleForm.code),callback:function ($$v) {_vm.$set(_vm.ruleForm, "code", $$v)},expression:"ruleForm.code"}},[_c('el-button',{attrs:{"slot":"append","type":"primary","icon":"el-icon-send"},on:{"click":_vm.sendMsg},slot:"append"},[_vm._v("\n              发送验证码\n            ")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"","prop":"pwd"}},[_c('el-input',{attrs:{"prefix-icon":"el-icon-lock","suffix-icon":"el-icon-circle-check","type":"password","placeholder":"密码"},model:{value:(_vm.ruleForm.pwd),callback:function ($$v) {_vm.$set(_vm.ruleForm, "pwd", $$v)},expression:"ruleForm.pwd"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"","prop":"cpwd"}},[_c('el-input',{attrs:{"prefix-icon":"el-icon-lock","suffix-icon":"el-icon-circle-check","type":"password","placeholder":"确认密码"},model:{value:(_vm.ruleForm.cpwd),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cpwd", $$v)},expression:"ruleForm.cpwd"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{staticClass:"register",attrs:{"type":"primary"},on:{"click":_vm.register}},[_vm._v("注册")]),_vm._v(" "),_c('div',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])],1)],1),_vm._v(" "),_c('div',{staticClass:"btn-groups"},[_c('el-button',{attrs:{"size":"mini","type":"text"}},[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n            返回首页\n          ")])],1),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"text"}},[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("\n            已有账号，直接登录 >\n          ")])],1)],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=782e6b36&

// EXTERNAL MODULE: external "crypto-js"
var external_crypto_js_ = __webpack_require__(162);
var external_crypto_js_default = /*#__PURE__*/__webpack_require__.n(external_crypto_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  data() {
    return {
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
        name: [{
          required: true,
          type: 'string',
          message: '请输入昵称',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          type: 'email',
          message: '请输入邮箱',
          trigger: 'blur'
        }],
        pwd: [{
          required: true,
          message: '创建密码',
          trigger: 'blur'
        }],
        cpwd: [{
          required: true,
          message: '确认密码',
          trigger: 'blur'
        }, {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pwd) {
              callback(new Error('两次输入密码不一致'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }]
      }
    };
  },

  layout: 'blank',
  methods: {
    sendMsg: function () {
      const self = this;
      let namePass;
      let emailPass;

      if (self.timerid) {
        return false;
      }

      this.$refs['ruleForm'].validateField('name', valid => {
        namePass = valid;
      });
      self.statusMsg = '';

      if (namePass) {
        return false;
      }

      this.$refs['ruleForm'].validateField('email', valid => {
        emailPass = valid;
      });

      if (!namePass && !emailPass) {
        console.log(111);
        self.$axios.post('/users/verify', {
          username: encodeURIComponent(self.ruleForm.name),
          email: self.ruleForm.email
        }).then(({
          status,
          data
        }) => {
          if (status === 200 && data && data.code === 0) {
            let count = 60;
            self.statusMsg = `验证码已发送,剩余${count--}秒`;
            self.timerid = setInterval(function () {
              self.statusMsg = `验证码已发送,剩余${count--}秒`;

              if (count === 0) {
                clearInterval(self.timerid);
              }
            }, 1000);
          } else {
            self.statusMsg = data.msg;
          }
        });
      }
    },
    register: function () {
      const self = this;
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          self.$axios.post('/users/signup', {
            username: window.encodeURIComponent(self.ruleForm.name),
            password: external_crypto_js_default.a.MD5(self.ruleForm.pwd).toString(),
            email: self.ruleForm.email,
            code: self.ruleForm.code
          }).then(({
            status,
            data
          }) => {
            if (status === 200) {
              if (data && data.code === 0) {
                location.href = '/login';
              } else {
                self.error = data.msg;
              }
            } else {
              self.error = `服务器出错，错误码:${status}`;
            }

            setTimeout(function () {
              self.error = '';
            }, 1500);
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f6dd2472"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map