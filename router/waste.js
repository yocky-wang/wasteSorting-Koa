const Router = require('koa-router')
const router = new Router()
const waste = require('../controller/waste')

router.get('/',waste.findWaste)
router.get('/find',waste.findWasteById)
router.get('/count',waste.findWasteCount)
router.post('/add',waste.addWaste)
router.post('/update',waste.updateWaste)
router.post('/delete', waste.deleteWaste)
router.get('/getbyname', waste.findWasteByNameType)
router.get('/category',waste.findWasteType)
router.get('/category/find',waste.findWasteTypeById)
router.post('/category/update',waste.updateWasteType)
router.post('/category/add',waste.addWasteType)
router.post('/category/delete',waste.deleteWasteType)


module.exports = router