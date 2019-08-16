// console.log('node-typescript-api');

import express from 'express';
import bodyParser from "body-parser"; // 使用post传递数据解析
import path from "path";
import { apiGetPosts } from "./api/posts/apiGetPosts";
import { apiGetPostsDetail } from "./api/posts/apiGetPostsDetail";
import { apiCreatePost } from "./api/posts/apiCreatePost";
import { apiDeleteDetail } from "./api/posts/apiDeleteDetail";
import { apiUpdateDetail } from "./api/posts/apiUpdateDetail";
import { apiUploadImage } from "./api/posts/apiUploadImage";
import { aipErrorHandler } from './api/general/errorHanding';
import { APIError } from './model/shared/message';
import { dateParam } from './api/general/reqParams/dateParam';
import { apiCheckPostFilter } from './api/posts/apiCheckPostFilter';
import { apiDownloadImage } from './api/posts/apiDownloadImage';
// import { CustomRequestHandler } from "./interface/express"; // 中间件
const app = express();

// 使用post传递数据解析
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// 配置static指向的路径
app.use('/static',express.static(path.resolve('./','public','img')))

// 设置允许跨域
app.use((req,res,next)=>{
  res.set({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE',
  });
  next();
})

// console.log(JSON.parse(JSON.stringify(DataStore.posts)))

/*
// 中间件
const authenticator: CustomRequestHandler = (req,res,next)=>{
  const username = 'misterwu';
  req.user = username;
  next();
}
const logger: CustomRequestHandler = (req,res,next)=>{
  console.log(
    'user:'+req.user+' - ' +
    new Date()+'-'+req.method+'-'+'Request to ' + req.path
  );
  next();
}
app.use(authenticator);
app.use('/posts/:id',logger);

// routes
app.get('/',(req,res,next)=>{
  res.send('node typescript api is working...')
})
*/

// app.get('/posts',apiGetPosts)
app.get('/posts', apiCheckPostFilter, apiGetPosts);
app.get('/posts/:id',apiGetPostsDetail)
app.post('/posts',apiCreatePost)
app.delete('/posts/:id',apiDeleteDetail)
app.put('/posts/:id',apiUpdateDetail)
app.get('/tours',(req,res,next)=>{
  res.send('get tours...')
})
app.post('/tours',(req,res,next)=>{
  res.send('post a new tours...')
})

// 上传图片
app.post('/posts/:id/img',apiUploadImage)

// 处理错误信息
app.use(aipErrorHandler)

// GET http://localhost:8091/posts/id2/todeos?star=5

/**
 * GET : req.method 
 * http : req.protocol
 * lhost : req.hostname
 * port : environment
 * posts/id2/todos : req.originalURL
 * id2 : req.params = {postID: id2}
 * ?star=5 : req.query={star:5}
 * req.app // 获取生产环境
 * req.body
 * req.header
 * req.app
 * req.body
 * req.secure,req.cookies,req.fresh...
*/

/*
app.use((req,res,next)=>{
  if(req.accepts('application/json')){
    next()
  }else{
    next(new APIError(
      'Content Type Not supported',
      'This API only supports application/json',
      404
    ))
  }
})
app.get('/headers',(req,res,next)=>{
  res.json(req.headers)
})
app.post('/headers',(req,res,next)=>{
  res.json(req.headers)
})
*/

/*
// app.get('/booking/:id(\\d{4})',(req,res,next)=>{
//   res.json(req.params)
// })

// const dateFormat = '\\d{4}-\\d{1,2}-\\d{1,2}'
// app.get(`/booking/:fromDate(${dateFormat})/:toDate(${dateFormat})`,(req,res,next)=>{
//   res.json(req.params);
// })
app.get(`/booking/:fromDate/:toDate`,(req,res,next)=>{
  res.json(req.params);
})
app.param('fromDate',dateParam);
app.param('toDate',dateParam);
*/


/** Response Object
 * res.send
 * res.json
 * res.format
 * res.sendFile
 * res.download
 * 
 * res.headers res.get res.set
 * res.status
 * 
 */

 app.get('/static/download/:id',apiDownloadImage)
 app.disable('x-powered-by') // 隐藏请求框架

 /**
  * 2xx - success
  * 3xx - redirect 重定向
  * 4xx = client error 客户端
  * 5xx - server error 服务端
  */
 /**
  * 200 - ok 数据请求成功并返回
  * 201 - 创建（post,put,patch）
  * 204 - 删除 请求成功 但没数据返回
  */
 /**
  * 400 - 请求错误 客户端问题
  * 401 - 未授权 未携带token
  * 404 - 未找到页面 页面不存在
  * 405 - 方法未经允许 post到只读数据中
  */

app.listen(process.env.PORT || 8091,()=>{
  console.log('Server started...')
})