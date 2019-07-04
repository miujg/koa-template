/**
 * 用户 登陆 token相关操作
 */
 const {User} = require('../db/model')
 const {successTemp, failTemp} = require('../tools')
 
 // token验证相关引用
 const {sign} = require('jsonwebtoken')
 const {secret} = require('../config')
 
 module.exports = {
    async login (accout) {
        let user = await User.findOne({name: accout.name, password: accout.password})
        if (user) {
            // 生成token
            const {name} = user
            const token = sign({name}, secret, { expiresIn: '1h'})
            return {code: 1, user: user, token: token}
        } else {
            return failTemp('用户不存在')
        }
    },

    async addUser (userObj) {
        const user = new User(userObj)
        let res = await user.save()
        return res ? successTemp() : failTemp()
    },

    async getUser () {
        const users = await User.find({})
        console.log(users)
        return successTemp(users)
    }

 }