let mysql = require('mysql')
let {MYSQL_CONFIG} = require('../config')

let pool = mysql.createPool({
    host: MYSQL_CONFIG.host, // 连接的服务器
    port: MYSQL_CONFIG.port, // mysql服务运行的端口
    database: MYSQL_CONFIG.database, // 选择的库
    user: MYSQL_CONFIG.user, // 用户名
    password: MYSQL_CONFIG.password // 用户密码   
})
let query = ( sql, values ) => {
    return new Promise(( resolve, reject ) => {
      pool.getConnection( (err, connection) => {
        if (err) {
          console.log('链接失败')
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            console.log(sql, values)
            if ( err ) {
              console.log('数据库操作错误:',err.message)
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
}

exports.query = query;