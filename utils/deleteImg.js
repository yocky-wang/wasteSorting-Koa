const db = require('./db')
const fs = require('fs')
const path = require('path')

const getImgSrc = ()=>{
  let _sql = `select imgpath from article_copy1;`
  return db.query( _sql )
}
const deleteImg = async ()=>{
  main()
  setInterval(main,3600000)
}
const main = async()=>{
  const imgList = await getImgSrc()
  const imgpathList = imgList.map(item=>item.imgpath)
  const dirs = fs.readdirSync(path.join(__dirname,'../assets/image'))
  dirs.forEach((item)=>{
    if(imgpathList.indexOf('image/'+item)<0 && item!='default.jpg'){
      fs.unlinkSync(path.join(__dirname,'../assets/image/'+item))
      console.log('删除：'+item)
    }
  })
}
module.exports = deleteImg