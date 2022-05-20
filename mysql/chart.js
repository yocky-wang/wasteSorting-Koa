let db = require('../utils/db')

exports.findChart1 = ()=>{
  let _sql = `select * from chart1;`
  return db.query( _sql )
}
exports.findChart2 = ()=>{
  let _sql = `select * from chart2;`
  return db.query( _sql )
}