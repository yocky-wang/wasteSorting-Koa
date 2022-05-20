const Router = require('koa-router')
const router = new Router()
const question = require('../controller/question')

router.get('/',question.findQuestion)
router.get('/find',question.findQuestionById)
router.post('/add',question.addQuestion)
router.post('/update',question.updateQuestion)
router.post('/delete',question.deleteQuestion)

module.exports = router