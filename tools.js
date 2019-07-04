/**
 * 工具方法
 */

 module.exports = {
    // 构建成功返回模版 
    successTemp: (result = {}, msg = 'success') => ({code: 1, msg: msg, result: result}),
    // 构建失败返回模版
    failTemp: ( msg = 'fail') => ({code: 0, msg: msg})
 }