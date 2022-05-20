let login = require('../mysql/login')
let jwt = require('jsonwebtoken')

exports.login = async (ctx)=>{
  let {username,password} = ctx.request.body
  let row = await login.findUserByName([username,password])
  // console.log(row)
  if (row.length == 0) {
    // throw Error("用户名或密码错误")
    ctx.throw(400,'用户名或密码错误')
  }
  let token = jwt.sign({
    username,
    id: row.id,
    role: row.role
  },'secret',{expiresIn: '100h'})
  ctx.body = {
    code: 200,
    message: '登陆成功',
    data: {
      token,
      username
    }
  }

  
}