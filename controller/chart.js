const chart = require('../mysql/chart')

exports.findChart = async ctx => {
  let res
  switch (ctx.params.type){
    case '1':
      res = await chart.findChart1()
      ctx.body = {
        data: res,
        code: 200,
        message: '查询图表数据成功'
      }
      break
    case '2':
      res = await chart.findChart2()
      ctx.body = {
        data: res,
        code: 200,
        message: '查询图表数据成功'
      }
      break
    default:
      ctx.body = {
        data: null,
        code: 400,
        message: '请输入正确type'
      }
  }
}