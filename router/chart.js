const Router = require('koa-router')
const router = new Router()
const chart = require('../controller/chart')

router.get('/:type',chart.findChart)

module.exports = router