const fs = require('fs')
const path = require('path')
const { Console } = require('console')

const mylogger = (level='trace')=>{
  const levelList = ['trace','debug','info','warn','error']
  const date = new Date()
  let time = [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-')
  fs.mkdirSync(path.join(process.cwd(),`/logdir/${time}`),{ recursive: true })
  // 保存在logdir文件夹中
  const output = fs.createWriteStream(`./logdir/${time}/stdout.log`)
  const errorOutput = fs.createWriteStream(`./logdir/${time}/stderr.log`)
  const myConsole = new Console({ stdout: output, stderr: errorOutput, colorMode: 'auto' })
  let mylogger = {}
  let leverIndex = levelList.indexOf(level)
  for (let i=leverIndex;i<levelList.length;i++){
    mylogger[levelList[i]]= (...res)=>{
      let nowtime = new Date().toLocaleTimeString()
      myConsole[levelList[i]](`[${nowtime}][${levelList[i].toUpperCase()}] --${res.join('--')}`)
    }
  }
  return async (ctx,next)=>{
    let {method,url} = ctx.request
    myConsole.log(`[${new Date().toLocaleTimeString()}][LOG] --${method} --${url}`)
    ctx.logger = mylogger
    await next()
  }
}
module.exports = mylogger