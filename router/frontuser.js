const Router = require('koa-router')
const router = new Router()
const frontuser = require('../controller/frontuser')

router.get('/',frontuser.findUsers)
router.get('/find',frontuser.findUserById)
router.post('/add',frontuser.addUser)
router.post('/update',frontuser.updateUser)
router.post('/update/status',frontuser.updateUserStatus)
router.post('/delete',frontuser.deleteUser)


module.exports = router