// console.log('node-typescript-api');

import express from 'express';
import { apiGetPosts,apiGetPostsDetail } from "./api/posts/apiGetPosts";
const app = express();

// console.log(JSON.parse(JSON.stringify(DataStore.posts)))

// routes
app.get('/',(req,res,next)=>{
  res.send('node typescript api is working...')
})

app.get('/posts',apiGetPosts)
app.get('/posts/:id',apiGetPostsDetail)
app.get('/tours',(req,res,next)=>{
  res.send('get tours...')
})
app.post('/tours',(req,res,next)=>{
  res.send('post a new tours...')
})

app.listen(process.env.PORT || 8091,()=>{
  console.log('Server started...')
})