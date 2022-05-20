const question = require('../mysql/question')

exports.findQuestion = async (ctx) => {
  let res = await question.findQuestion()
    ctx.body = {
      data: res,
      code: 200,
      message: '查询题库成功',
    }
}
exports.findQuestionById = async (ctx) => {
  let {id} = ctx.request.query
  let res = await question.findQuestionById(id)
  ctx.body = {
    data: res[0],
    code: 200,
    message: '查询题目成功',
  }
}
exports.addQuestion = async ctx => {
  let {title, optionA, optionB, optionC, optionD, daan} = ctx.request.body
  let res = await question.addQuestion([title, optionA, optionB, optionC, optionD, daan])
  ctx.body = {
    data: null,
    code: 200,
    message: '添加题目成功',
  }
}
exports.updateQuestion = async ctx => {
  let {title, optionA, optionB, optionC, optionD, daan, id} = ctx.request.body
  let res = await question.updateQuestion([title, optionA, optionB, optionC, optionD, daan, id])
  ctx.body = {
    data: null,
    code: 200,
    message: '更改题目成功',
  }
}
exports.deleteQuestion = async ctx => {
  let {id} = ctx.request.body
  let res = await question.deleteQuestion(id)
  ctx.body = {
    data: null,
    code: 200,
    message: '删除题目成功',
  }
}