const fs = require('fs')
const path = require('path')

exports.uploadFile = async ctx => {
  console.log('upload')
  let {originalFilename, size, mimetype, filepath} = ctx.request.files['file']
  if (mimetype.includes('image')) {
    let [name, ext] = originalFilename.split('.') // [name,ext]
    //处理ext与size 处理name按时间更改名称 ...
    let time = new Date().getTime()
    let filename = name+'+'+time+'.'+ext
    // console.log(path.join(__dirname,'../assets/images', filename),__dirname)
    const reader = fs.createReadStream(filepath)
    const stream = fs.createWriteStream(path.join(__dirname,'../assets/image', filename))
    reader.pipe(stream)
    ctx.body = {
      data: {
        path:'image/'+filename
      },
      code: 200,
      message: '上传图片成功'
    }
  } else {
    ctx.body = {
      data: null,
      code: 400,
      message: '请上传图片类型'
    }
  }
}