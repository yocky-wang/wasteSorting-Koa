const waste = require('../mysql/waste')

exports.findWaste = async (ctx) => {
  try {
    let {page, category} = ctx.request.query
    if (category == undefined) {
      let res = await waste.findWasteByPage(page)
      ctx.body = {
        data: res,
        code: 200,
        message: '查询垃圾数据成功',
      }
    } else {
      let res = await waste.findWasteByType(page, category)
      ctx.body = {
        data: res,
        code: 200,
        message: '查询分类垃圾数据成功',
      }
    }
  } catch (e) {
    ctx.throw(400,'查询垃圾数据失败')
  }
}
exports.findWasteById = async ctx => {
  let {id} = ctx.request.query
  let res = await waste.findWasteById(id)
  ctx.body = {
    data: res[0],code:200,message:'查询垃圾数据成功'
  }
}
exports.findWasteCount = async ctx =>{
  let {category} = ctx.request.query
  // if(category==undefined){
  let res = await waste.findWasteCount(category)
  let count = res[0]['count(*)']
  ctx.body = {
    data: {
      count
    },
    code: 200,
    message: '查询垃圾数量成功'
  }
  
  
}
exports.addWaste = async ctx => {
  let {name, category} = ctx.request.body
  let res = await waste.addWaste([name,category])
  ctx.body = {
    data: null,
    code: 200,
    message: '填加数据成功',
  }
}
exports.updateWaste = async ctx => {
  let {name, category, id} = ctx.request.body
  let res = await waste.updateWaste([name,category,id])
  ctx.body = {
    data: null,
    code: 200,
    message: '更新数据成功',
  }
}
exports.deleteWaste = async (ctx) => {
  let {id} = ctx.request.body
  let res = await waste.deleteWaste(id)
  ctx.body = {
    data: null,
    code: 200,
    message: '删除数据成功'
  } 
}
// 通过name查询返回所有数据，未分页
exports.findWasteByNameType = async (ctx) => {
  let {name, category} = ctx.request.query
  if (category == undefined) {
    let res = await waste.findWasteByNameLike(name)
    ctx.body = {
      data: res,
      code: 200,
      message: '查询数据成功'
    }
  } else {
    let res = await waste.findWasteByNameType(name, category)
    ctx.body = {
      data: res,
      code: 200,
      message: '查询数据成功'
    }
  }
}
exports.findWasteType = async ctx => {
  let res = await waste.findWasteType()
  ctx.body = {
    data: res,
    code: 200,
    message: '查询分类成功'
  }
}
exports.findWasteTypeById = async ctx => {
  let {id} = ctx.request.query
  let res = await waste.findWasteTypeById(id)
  ctx.body = {
    data: res[0],
    code: 200,
    message: '查询分类成功'
  }
}
exports.updateWasteType = async ctx => {
  let {typename, content, id} = ctx.request.body
  let res = await waste.updateWasteType([typename, content, id])
  ctx.body = {
    data: null,
    code: 200,
    message: '编辑分类成功'
  }
}
exports.addWasteType = async ctx => {
  let {typename, content, id} = ctx.request.body
  let res = await waste.addWasteType([id, typename, content])
  ctx.body = {
    data: null,
    code: 200,
    message: '添加分类成功'
  }
}
exports.deleteWasteType = async ctx => {
  let {id} = ctx.request.body
  let res = await waste.deleteWasteType(id)
  ctx.body = {
    data: null,
    code: 200,
    message: '删除分类成功'
  }
}