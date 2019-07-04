/**
 * 数据库连接
 */
const mongoose = require('mongoose')
const {db} = require('../config')

mongoose.connect(db.name)

const connectObj = mongoose.connection

connectObj.on('open', () => {
    console.log('data connect success', db.name)
})

module.exports = connectObj

