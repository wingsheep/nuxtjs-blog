// 引入koa-passport 是node passport的封装
// 引入passport-local 本地策略
import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

//  api写法 具体查看 koa-passport passport-local 文档
passport.use(new LocalStrategy(async function(username, password, done) {
  const where = {
    username
  }
  const result = await UserModel.findOne(where)
  if (result != null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

// 序列化
passport.serializeUser(function(user, done) {
  done(null, user)
})

// 反序列化
passport.deserializeUser(function(user, done) {
  return done(null, user)
})

export default passport
