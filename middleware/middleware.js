/**
 * 自定义中间件
 */

 const {User} = require('../db/model')
 const {failTemp, successTemp} = require('../tools')

 module.exports = {
    async admin (context, next) {
        const name = context.state.user.name
        const user = await User.findOne({name})
        if(user && user.type) {
            await next()
        } else {
            context.body = failTemp('用户无权限操作')
        }
    } 
 }