let db = require('../utils/db')

exports.findUserByName = ( list ) => {
  let _sql = `select * from users where username=? and password=?;`
  return db.query( _sql , list)
}
