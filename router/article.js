const Router = require('koa-router')
const router = new Router()
const article = require('../controller/article')

router.get('/',article.findArticle)
router.get('/find',article.findArticleById)
router.post('/add',article.addArticle)
router.post('/update',article.updateArticle)
router.post('/update/status',article.updateArticleStatus)
router.post('/delete',article.deleteArticle)
router.get('/category',article.findArticleType)
router.get('/category/find',article.findArticleTypeById)
router.post('/category/add',article.addArticleType)
router.post('/category/update',article.updateArticleType)
router.post('/category/delete',article.deleteArticleType)

module.exports = router