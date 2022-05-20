const db = require('../utils/db')

exports.findUsers = ( ) => {
  let _sql = `select * from users;`
  return db.query( _sql )
}
exports.findUserById = ( id ) => {
  let _sql = `select * from users where id=${id};`
  return db.query( _sql )
}
exports.findUserByName = ( name ) => {
  let _sql = `select * from users where username="${name}";`
  console.log(_sql)
  return db.query( _sql )
}
exports.addUser = ( list ) => {
  let _sql = "insert into users set username=?,password=?,role=?,status=?,mobile=?,email=?;"
  return db.query( _sql , list)
}
exports.updateUser = ( list ) => {
  let _sql = "update users set username=?,password=?,role=?,status=?,mobile=?,email=? where id=?;"
  return db.query( _sql , list)
}
exports.updateUserStatus = ( list ) => {
  let _sql = "update users set status=? where id=?;"
  return db.query( _sql , list)
}
exports.deleteUser = ( id ) => {
  let _sql = `delete from users where id=${id};`
  return db.query( _sql )
}
