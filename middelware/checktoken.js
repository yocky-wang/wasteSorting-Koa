let jwt = require('jsonwebtoken')
const checktoken = (regList,secret)=>{
  return async (ctx,next)=>{
    if (!regList.some((reg)=>reg.test(ctx.request.path))) {
      // console.log(ctx.request.headers)
      let token = ctx.request.headers.authorization
      // console.log(token,'token')
      try {
          const user=jwt.verify(token,secret);
          // console.log(user,'verify') //{ username: 'test2', iat: 1651747936, exp: 1651751536 }
          ctx.state.username=user.username
      }catch (err){
          ctx.throw(401,err.message);//401验证不符合
      }
    }
    await next()
  }
}
module.exports = checktoken