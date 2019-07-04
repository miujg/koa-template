/**
 * 所有的数据库模型存放
 */

 const mongoose = require('mongoose')

 // 任务模型
 const taskSchema = new mongoose.Schema({
     name: {type: String},
     // 待做（1） 正在做（2） 已完成（3）
     status: {type: Number, default: 1}, 
     // codeing(1) reading(2)
     type: {type: Number},
     cost: Number,
     logs: [
        {
            time: Number,
            date: {type: Date, default: Date.now()},
            remark: String
        }
     ],
     createTime: {type: Date, default: Date.now()},
     // 所属目标
     targetId: {type: mongoose.Types.ObjectId}
 })
 // 用户模型
 const userSchema = new mongoose.Schema({
      name: String,
      password: String,
      // 0为普通用户 1为管理员
      type: Number,
      // 该用户设定了哪些目标
      targets: {type: Array}
 })

 // 目标模型
 const targetSchema = new mongoose.Schema({
    name: String,
    createTime: {type: Date, default: Date.now()},
    // 开始时间
    startTime: {type: Date, default: Date.now()},
    // 结束时间
    endTime: {type: Date, default: Date.now()},
    // 目标下的任务（与task表中的id相关联）
    // tasks: {type: Array},
    // 最后一次修改的时间
    lastModify: {type: Date, default: Date.now()},
    // 用户id用于标明目标属于哪个
    userId: {type: mongoose.Types.ObjectId}
 })

 module.exports = {
     Task: mongoose.model('Task', taskSchema),
     User: mongoose.model('User', userSchema),
     Target: mongoose.model('Target', targetSchema)
 }