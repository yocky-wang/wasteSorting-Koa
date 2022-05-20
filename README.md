# 垃圾分类管理平台后端(Koa)
功能：用户管理，垃圾分类数据，垃圾图像识别，垃圾知识题库，垃圾资讯文章以及数据报表

模型训练仓库：<https://github.com/1537309430/wasteSorting-tfjs>(将output文件下内容复制到assets/tensorflow中)
接口文档：<https://github.com/1537309430/wasteSorting-Koa/blob/master/api.md>
## 项目整体文件说明
- `assets` 静态资源
  - `image` 存放图片
  - `tensorflow` 分类模型
- `config` 配置文件
  - `cors.js` 跨域配置
  - `mysql.js` 数据库配置
- `controller` 路由的处理函数
- `middelware` 中间件
  - `checktoken.js` 验证token
  - `error.js` 处理错误
  - `mylogger.js` 日志中间件
- `mysql` 编写mysql语句
- `router` 建立路由
- `utils`
  - `db.js` 封装mysql库
  - `deleteImg.js` 清理垃圾图片
- `app.js` 项目入口
