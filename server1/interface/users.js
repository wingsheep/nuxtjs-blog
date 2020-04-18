// 引入koa路由 redis 以及邮箱服务包
import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/users'
import Passport from './utils/passport'
import axios from './utils/axios'
import Email from '../dbs/config'

// 创建接口路由对象

let router = new Router({
	prefix: '/users'
})

// 创建redis对象
let Store = new Redis().client

// 注册接口
router.post('/signup', async (ctx) => {
  const {username, password, email, code} = ctx.request.body;

  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }
  let user = await User.find({username})
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return
  }
	let nuser = await User.create({username, password, email})
  if (nuser) {
		let res = await axios.post('/users/signin', {username, password})
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})


// 用户登录接口
router.post('/signin', async (ctx, next) => {
	return Passport.authenticate('local', function(err, user, info, status) {
		if (err) {
			ctx.body = {
				code: -1,
				msg: err
			}
		} else {
			if (user) {
				ctx.body = {
					code: 0,
					msg: '登录成功',
					user
				}
				return ctx.login(user)
			} else {
				ctx.body = {
					code: 1,
					msg: info
				}
			}
		}
	})(ctx, next)
})

// 邮箱验证码验证接口
router.post('/verify', async (ctx, next) => {
	// 验证码多次请求验证
	let username = ctx.request.body.username
	const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
	console.log(saveExpire)
	if (saveExpire && new Date().getTime() - saveExpire < 0){
		ctx.body = {
			code: -1,
			msg: '发送验证请求过于频繁，一分钟一次'
		}
		// 邮箱配置
		return false
	}
	// 创建邮件
	// 发送方邮箱配置
	let transporter = nodeMailer.createTransport({
		service: 'qq',
		// host: Email.smtp.host,
		// port: 587,
		// secure: false,
		auth: {
			user: Email.smtp.user,
			pass: Email.smtp.pass
		}
	})
	// 收件方邮箱配置
	let ko = {
		code: Email.smtp.code(),
		expire: Email.smtp.expire(),
		email: ctx.request.body.email,
		user: ctx.request.body.username
	}
	// 发送内容
	let mailOptions = {
		from: `"认证邮件"<${Email.smtp.user}>`,
		to: ko.email,
		subject: '注册码',
		html: `${ko.code}`
	}
	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log('error')
		} else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
		}
	})
	ctx.body = {
		code: 0,
		msg: '验证码已发送， 可能会有延时，有效期一分钟'
	}
})

// 退出
router.get('/exit', async (ctx, next) => {
	await ctx.logout()
	if (!ctx.isAuthenticated()) {
		ctx.body = {
			code: 0
		}
	} else {
		ctx.body = {
			code: -1
		}
	}
})

// 获取用户名
router.get('/getUser', async (ctx) => {
	if (ctx.isAuthenticated()) {
		const {username, email} = ctx.session.passport.user
		ctx.body = {
			user: username,
			email
		}
	} else {
		ctx.body = {
			user: '',
			email: ''
		}
	}
})

export default router
