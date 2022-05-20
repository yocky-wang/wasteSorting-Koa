const Koa = require('koa');
const app = new Koa();
const port = 3000;
// const bodyParser = require('koa-bodyparser')
const path = require('path')
const koaBody = require('koa-body')
const router = require('./router/index')
const cors = require('@koa/cors')
const {CORS_CONFIG} = require('./config')
const myerror = require('./middelware/error')
const checktoken = require('./middelware/checktoken')
const static = require('koa-static')
const mylogger = require('./middelware/mylogger')
const deleteImg = require('./utils/deleteImg')

deleteImg()
app.use(mylogger('info'))
app.use(cors(CORS_CONFIG))
// app.use(cors())
app.use(myerror())
app.use(static(path.join(__dirname,'assets')))
app.use(koaBody({multipart: true}))
app.use(checktoken([/^\/api\/login/],'secret'))
app.use(router.routes(),router.allowedMethods())

app.listen(port, ()=>{
    console.log('Server is running at http://localhost:'+port);
})
