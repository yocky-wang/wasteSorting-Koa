const Router = require('koa-router')
const router = new Router()
const upload = require('../controller/upload')

router.post('/',upload.uploadFile)

module.exports = router