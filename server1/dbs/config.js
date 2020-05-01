export default {
  // 本机mongodb数据库地址
  dbs: 'mongodb://127.0.0.1:27017/student',
  // 本机redis配置
  redis: {
    // ip地址
    get host() {
      return '127.0.0.1'
    },
    // 端口
    get post() {
      return 6379
    }
  },
  // QQ邮箱服务配置
  smtp: {
    // 域名
    get host() {
      return 'smtp.qq.com'
    },
    //  用户名
    get user() {
      return '1306750238@qq.com'
    },
    // 授权码
    get pass() {
	      return 'stnttwtuwbqujgfc'
	    },
	    // 随机生成验证码
	    get code() {
	      return () => {
	        return Math.random().toString(16).slice(2, 6).toUpperCase()
	      }
	    },
	    // 验证码过期时间 有效时间一分钟
	    get expire() {
	      return () => {
	        return new Date().getTime() + 60 * 60 * 1000
	      }
	    }
  }
}
