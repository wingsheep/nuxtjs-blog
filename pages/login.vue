<template>
  <div class="page-login">
    <el-card class="login-panel">
      <div class="form">
        <h1>我叫罗小黑</h1>
        <el-input
          v-model="username"
          prefix-icon="profile"
        />
        <el-input
          v-model="password"
          prefix-icon="password"
          type="password"
        />
        <h4
          v-if="error"
          class="tips"
        ><i />{{ error }}</h4>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
        </div>
        <el-button
          class="btn-login"
          type="primary"
          size="mini"
          @click="login"
        >登录</el-button>
      </div>
      <div class="btn-groups">
        <el-button size="mini" type="text">
          <nuxt-link to="/">返回首页</nuxt-link>
        </el-button>
        <el-button size="mini" type="text">
          <nuxt-link to="/register">立即注册</nuxt-link>
        </el-button>
        <el-button size="mini" type="text">
          <nuxt-link to="/">忘记密码？</nuxt-link>
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data: () => {
    return {
      checked: '',
      username: '',
      password: '',
      error: ''
    }
  },
  layout: 'blank',
  methods: {
    login: function() {
      const self = this
      self.$axios.post('/users/signin', {
        username: window.encodeURIComponent(self.username),
        password: CryptoJS.MD5(self.password).toString()
      }).then(({ status, data }) => {
        if (status === 200) {
          if (data && data.code === 0) {
            location.href = '/'
          } else {
            self.error = data.msg
          }
        } else {
          self.error = `服务器出错`
        }
      })
    }
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>
