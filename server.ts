// console.log('node-typescript-api');

import express from 'express';
import bodyParser from "body-parser"; // 使用post传递数据解析
import { apiGetPosts } from "./api/posts/apiGetPosts";
import { apiGetPostsDetail } from "./api/posts/apiGetPostsDetail";
import { apiCreatePost } from "./api/posts/apiCreatePost";
const app = express();

// 使用post传递数据解析
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// console.log(JSON.parse(JSON.stringify(DataStore.posts)))

// routes
app.get('/',(req,res,next)=>{
  res.send('node typescript api is working...')
})

app.get('/posts',apiGetPosts)
app.get('/posts/:id',apiGetPostsDetail)
app.post('/posts',apiCreatePost)
app.get('/tours',(req,res,next)=>{
  res.send('get tours...')
})
app.post('/tours',(req,res,next)=>{
  res.send('post a new tours...')
})

app.listen(process.env.PORT || 8091,()=>{
  console.log('Server started...')
})