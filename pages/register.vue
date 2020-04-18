<template>
  <div class="page-register">
    <section>
      <el-card>
        <h1>我叫罗小黑</h1>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="0">
          <el-form-item label="" prop="name">
            <el-input
              prefix-icon="el-icon-user"
              v-model="ruleForm.name" 
              placeholder="昵称" />
          </el-form-item>
          <el-form-item label="" prop="email">
            <el-input 
              prefix-icon="el-icon-message" 
              v-model="ruleForm.email" 
              placeholder="邮箱" />
            <span class="status">{{ statusMsg }}</span>
          </el-form-item>
          <el-form-item label="" prop="code">
            <el-input
              v-model="ruleForm.code"
              maxlength="4"
              placeholder="验证码">
              <el-button
                type="primary"
                slot="append"
                @click="sendMsg"
                icon="el-icon-send">
                发送验证码
              </el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="pwd">
            <el-input 
              prefix-icon="el-icon-lock"
              suffix-icon="el-icon-circle-check"
              v-model="ruleForm.pwd"
              type="password"
              placeholder="密码"/>
          </el-form-item>
          <el-form-item label="" prop="cpwd">
            <el-input
              prefix-icon="el-icon-lock"
              suffix-icon="el-icon-circle-check"
              v-model="ruleForm.cpwd"
              type="password"
              placeholder="确认密码"/>
          </el-form-item>
          <el-form-item>
            <el-button class="register" type="primary" @click="register">注册</el-button>
            <div class="error">{{ error }}</div>
          </el-form-item>
        </el-form>
        <div class="btn-groups">
          <el-button size="mini" type="text">
            <nuxt-link to="/">
              返回首页
            </nuxt-link>
          </el-button>
          <el-button size="mini" type="text">
            <nuxt-link to="/login">
              已有账号，直接登录 >
            </nuxt-link>
          </el-button>
        </div>
      </el-card>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
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
              callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pwd) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }]
      }
    }
  },
  layout: 'blank',
  methods: {
    sendMsg: function () {
      const self = this;
      let namePass
      let emailPass
      if (self.timerid) {
        return false
      }
      this.$refs['ruleForm'].validateField('name', (valid) => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs['ruleForm'].validateField('email', (valid) => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        console.log(111)
        self.$axios.post('/users/verify', {
          username: encodeURIComponent(self.ruleForm.name),
          email: self.ruleForm.email
        }).then(({
          status,
          data
        }) => {
          if (status === 200 && data && data.code === 0) {
            let count = 60;
            self.statusMsg = `验证码已发送,剩余${count--}秒`
            self.timerid = setInterval(function () {
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              if (count === 0) {
                clearInterval(self.timerid)
              }
            }, 1000)
          } else {
            self.statusMsg = data.msg
          }
        })
      }
    },
    register: function () {
      let self = this;
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          self.$axios.post('/users/signup', {
            username: window.encodeURIComponent(self.ruleForm.name),
            password: CryptoJS.MD5(self.ruleForm.pwd).toString(),
            email: self.ruleForm.email,
            code: self.ruleForm.code
          }).then(({
            status,
            data
          }) => {
            if (status === 200) {
              if (data && data.code === 0) {
                location.href = '/login'
              } else {
                self.error = data.msg
              }
            } else {
              self.error = `服务器出错，错误码:${status}`
            }
            setTimeout(function () {
              self.error = ''
            }, 1500)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
