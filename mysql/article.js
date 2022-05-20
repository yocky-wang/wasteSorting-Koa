let db = require('../utils/db')

exports.findArticle = ()=>{
  let _sql = `select * from article_copy1;`
  return db.query( _sql )
}
exports.findArticleById = (id )=>{
  let _sql = `select * from article_copy1 where id=${id};`
  return db.query( _sql )
}
exports.addArticle = (list)=>{
  let _sql = `insert into article_copy1 set author=?,title=?,category=?,introduction=?,content=?,imgpath=?,status=?;`
  return db.query( _sql, list )
}
exports.updateArticle = (list)=>{
  let _sql = `update article_copy1 set title=?,category=?,introduction=?,content=?,imgpath=?,status=? where id=?;`
  return db.query( _sql, list )
}
exports.updateArticleStatus = (list)=>{
  let _sql = `update article_copy1 set status=? where id=?;`
  return db.query( _sql, list )
}
exports.deleteArticle = (id)=>{
  let _sql = `delete from article_copy1 where id=${id}`
  return db.query(_sql)
}
exports.findArticleType= ()=>{
  let _sql = `select * from article_type;`
  return db.query( _sql )
}
exports.findArticleTypeById = (id )=>{
  let _sql = `select * from article_type where id=${id};`
  return db.query( _sql )
}
exports.addArticleType = (list)=>{
  let _sql = `insert into article_type set typename=?, content=? where id=?;`
  return db.query( _sql, list )
}
exports.updateArticleType = (list)=>{
  let _sql = `update article_type set typename=?, content=? where id=?;`
  return db.query( _sql, list )
}
exports.deleteArticleType = (id)=>{
  let _sql = `delete from article_type where id=${id}`
  return db.query(_sql)
}