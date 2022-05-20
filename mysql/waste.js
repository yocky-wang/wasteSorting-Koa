let db = require('../utils/db')

exports.findWasteByPage = ( page = 1 ) => {
  let pageSize = 50
  let _sql = `select * from waste limit ${(page-1)*pageSize},${pageSize};`
  return db.query( _sql )
}
exports.findWasteByType = ( page, category ) => {
  let pageSize = 50
  let _sql = `select * from waste where category=${category} limit ${(page-1)*pageSize},${pageSize};`
  return db.query( _sql )
}
exports.findWasteCount = (category)=>{
  let _sql
  if(category==undefined){
     _sql = `select count(*) from waste`
  } else {
     _sql = `select count(*) from waste where category=${category}`
  }
  return db.query( _sql)
}
exports.findWasteById = (id) => {
  let _sql = `select * from waste where id=${id};`
  return db.query( _sql )
}
exports.addWaste = ( list ) => {
  let _sql = `insert into waste set name=?, category=?;`
  return db.query( _sql, list )
}
exports.updateWaste = ( list ) => {
  let _sql = `update waste set name=?, category=? where id=?;`
  return db.query( _sql, list )
}
exports.deleteWaste = ( id ) => {
  let _sql = `delete from waste where id=${id};`
  return db.query( _sql )
}
exports.findWasteByNameLike = (name) => {
  let _sql = `select * from waste where name like '%${name}%'`
  return db.query( _sql)
}
exports.findWasteByNameType = (name,category) => {
  let _sql = `select * from waste where name like '%${name}%' and category=${category}`
  return db.query( _sql)
}
exports.findWasteType = ()=>{
  let _sql = `select * from waste_type;`
  return db.query( _sql )
}
exports.findWasteTypeById = (id)=>{
  let _sql = `select * from waste_type where id=${id};`
  return db.query( _sql )
}
exports.updateWasteType = (list)=>{
  let _sql = `update waste_type set typename=?, content=? where id=?;`
  return db.query( _sql, list )
}
exports.addWasteType = (list)=>{
  let _sql = `insert into waste_type set id=?, typename=?, content=?;`
  return db.query( _sql, list )
}
exports.deleteWasteType = (id)=>{
  let _sql = `delete from waste_type where id=${id};`
  return db.query( _sql )
}