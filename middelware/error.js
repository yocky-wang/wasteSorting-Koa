const myerror = ()=>{
  return async (ctx,next)=>{
    try {
      await next()
      if(!ctx.body){
        ctx.body = {
          data:null,
          code:404,
          message: '404 not found'
        }
      }
      if(ctx?.body?.code&&ctx?.body?.message){
        ctx.logger.info(ctx.body.code, ctx.body.message)
      }     
    } catch (err) {
      // console.log(err)
      // ctx.status = err.status || err.statusCode || 500
      let code = err.status || err.statusCode || 500
      ctx.status = 200
      ctx.body = {
        data:null,
        code,
        message: err.message
      }
      console.error(err.message)
      ctx.logger.error(err.message)
      // console.error(err.message)
    }
  }
}
module.exports = myerror