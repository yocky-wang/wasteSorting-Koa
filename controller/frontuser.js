let frontuser = require('../mysql/frontuser')

const isRepeatName = async (name)=>{
  let res = await frontuser.findUserByName(name)
  console.log(res.length)
  return res.length ? true : false
}

exports.findUsers = async (ctx) => {
  try {
    let res = await frontuser.findUsers()
    ctx.body = {
      data: res,
      code: 200,
      message: '查询所有用户成功',
    }
  } catch (e) {
    console.log(e)
    ctx.throw(400,'查询所有用户失败')
  }
}
// id超出，or res为空
exports.findUserById = async (ctx) => {
  try {
    let {id} = ctx.request.query
    let res = await frontuser.findUserById(id)
    if (res.length == 0){
      throw Error()
    }
    ctx.body = {
      data: res[0],
      code: 200,
      message: '查询用户成功'
    }
  } catch(e) {
    console.log(e.message)
    ctx.throw(400,'查询用户失败')
  }
}
exports.addUser = async (ctx) => {
  try {
    let {username,password,role,status,mobile='',email=''} = ctx.request.body
    if(username.length>2&&username.length<11&&password.length>5&&password.length<13){
      let isRepeat = await isRepeatName(username)
      if (isRepeat) {
        ctx.body = {
          data: null,
          code: 400,
          message: '用户名重复'
        }
      } else {
        let res = await frontuser.addUser([username,password,role,status,mobile,email])
        ctx.body = {
          data: null,
          code: 200,
          message: '添加用户成功'
        }
      }
    } else {
      ctx.body = {data:null,code:400,message: '用户名或密码长度错误'}
    }
  } catch(e) {
    ctx.throw(400,'添加用户失败')
  }
}
exports.updateUser = async (ctx) => {
  try {
    let {username,password,role,status,mobile="",email="",id} = ctx.request.body
    let res = await frontuser.updateUser([username,password,role,status,mobile,email,id])
    ctx.body = {
      data: null,
      code: 200,
      message: '更新用户成功'
    }
  } catch (e) {
    // console.log(e)
    ctx.throw(400,'更新用户失败')
  }
}
exports.updateUserStatus = async (ctx) => {
  try {
    let {status,id} = ctx.request.body
    let res = await frontuser.updateUserStatus([status,id])
    ctx.body = {
      data: null,
      code: 200,
      message: '更新用户状态成功'
    }
  } catch (e) {
    // console.log(e)
    ctx.throw(400,'更新用户状态失败')
  }
}
exports.deleteUser = async (ctx) => {
  try {
    let {id} = ctx.request.body
    let res = await frontuser.deleteUser(id)
    console.log(res)
    ctx.body = {
      data: null,
      code: 200,
      message: '删除用户成功'
    }
  } catch(e) {
    ctx.throw(400,'删除用户失败')
  }
}