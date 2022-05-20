let db = require('../utils/db')

exports.findQuestion = ( ) => {
  let _sql = `select * from question;`
  return db.query( _sql )
}
exports.findQuestionById = (id ) => {
  let _sql = `select * from question where id=${id};`
  return db.query( _sql )
}
exports.addQuestion = (list) => {
  let _sql = `insert into question set title=?, optionA=?, optionB=?, optionC=?, optionD=?, daan=?;`
  return db.query( _sql, list)
}
exports.updateQuestion = (list) => {
  let _sql = `update question set title=?, optionA=?, optionB=?, optionC=?, optionD=?, daan=? where id=?;`
  return db.query( _sql, list)
}
exports.deleteQuestion = (id) => {
  let _sql = `delete from question where id=${id}`
  return db.query( _sql)
}