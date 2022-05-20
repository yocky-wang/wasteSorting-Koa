const article = require('../mysql/article')

exports.findArticle = async ctx => {
  let {category=''} = ctx.request.query
  if (!category){
    let res = await article.findArticle()
    ctx.body = {
      data: res,
      code: 200,
      message: '查询文章成功'
    }
  } else {
    let res = await article.findArticleByType(decodeURI(category))
    ctx.body = {
      data: res,
      code: 200,
      message: '查询文章成功'
    }
  }
}
exports.findArticleById = async ctx => {
  let {id} = ctx.request.query
  let res = await article.findArticleById(id)
  ctx.body = {
    data: res[0],
    code: 200,
    message: '查询文章成功'
  }
}
exports.addArticle = async ctx => {
  let {title,category,introduction='',content='',imgpath='image/default.jpg',status} = ctx.request.body
  let author = ctx.state.username
  let res = await article.addArticle([author,title,category,introduction,content,imgpath,status])
  ctx.body = {
    data: null,
    code: 200,
    message: '添加文章成功'
  }
}
exports.updateArticle = async ctx => {
  let {title,category,introduction='',content='',imgpath='image/default.jpg',status,id} = ctx.request.body
  let res = await article.updateArticle([title,category,introduction,content,imgpath,status,id])
  ctx.body = {
    data: null,
    code: 200,
    message: '更新文章成功'
  }
}
exports.updateArticleStatus = async ctx => {
  let {status,id} = ctx.request.body
  let res = await article.updateArticleStatus([status,id])
  ctx.body = {
    data: null,
    code: 200,
    message: '更新文章状态成功'
  }
}
exports.deleteArticle = async ctx => {
  let {id} = ctx.request.body
  let res = await article.deleteArticle(id)
  ctx.body = {
    data: null,
    code: 200,
    message: '删除文章成功'
  }
}
exports.findArticleType = async ctx => {
  let res = await article.findArticleType()
  ctx.body = {
    data: res,
    code: 200,
    message: '查询文章分类成功'
  }
}
exports.findArticleTypeById = async ctx => {
  let {id} = ctx.request.query
  let res = await article.findArticleTypeById(id)
  ctx.body = {
    data: res[0],
    code: 200,
    message: '查询文章分类成功'
  }
}
exports.addArticleType = async ctx => {
  let {typename, content} = ctx.request.body
  let res = await article.addArticleType([typename,content])
  ctx.body = {
    data: null,
    code: 200,
    message: '添加文章分类成功'
  }
}
exports.updateArticleType = async ctx => {
  let {typename, content, id} = ctx.request.body
  let res = await article.updateArticleType([typename,content,id])
  ctx.body = {
    data: null,
    code: 200,
    message: '更改文章分类成功'
  }
}
exports.deleteArticleType = async ctx => {
  let {id} = ctx.request.body
  let res = await article.deleteArticleType(id)
  ctx.body = {
    data: null,
    code: 200,
    message: '删除文章分类成功'
  }
}