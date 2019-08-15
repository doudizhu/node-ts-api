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
// import { CustomRequestHandler } from "./interface/express"; // 中间件
const app = express();

// 使用post传递数据解析
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// 配置static指向的路径
app.use('/static',express.static(path.resolve('./','public','img')))

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

app.get('/posts',apiGetPosts)
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

app.listen(process.env.PORT || 8091,()=>{
  console.log('Server started...')
})