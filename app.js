const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
// 跨域解决
const cors = require('koa2-cors')
// 自定义路由
const {router, login} = require('./router')
// 数据库连接
const db = require('./db/connect')
// token验证
const {secret} = require('./config')
const jwt = require('koa-jwt')({ secret })

const app = new Koa

app.use(bodyParse()) 

app.use(cors({
    origin: function(ctx) {
      if (ctx.url === '/test') {
        return false;
      }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }))


// 不做token验证
app.use(login.routes())

// token验证
// app.use(jwt)

// 做token验证
app.use(router.routes())

app.listen(3000, () => {
    console.log('server start ....')
})