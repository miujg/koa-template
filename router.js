/**
 * 路由
 */

 const Router = require('koa-router')
 const router = new Router()
 // 登陆不用做token验证
 const login = new Router()
 const user = require('./action/user')
 const {successTemp, failTemp} = require('./tools')
 // 自定义中间件
 const {admin} = require('./middleware/middleware')
 // 用户登陆 增加...
 login.post('/user/login', async (context, next) => {
   let res = await user.login(context.request.body)
    if(res.code) {
       let user = {userId: res.user._id, token: res.token}
       context.body = successTemp(user)
    }else {
       context.body = res
    }
 })

 // 获取用户
 router.get('/user', async (context, next) => {
    context.body = await user.getUser()
 })

 module.exports = {
    router,
    login
 }