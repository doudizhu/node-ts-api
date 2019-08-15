// console.log('node-typescript-api');

import express from 'express';
const app = express();

// routes
app.get('/',(req,res,next)=>{
  res.send('node typescript api is working...')
})

app.get('/tours',(req,res,next)=>{
  res.send('get tours...')
})
app.post('/tours',(req,res,next)=>{
  res.send('post a new tours...')
})

app.listen(process.env.PORT || 8091,()=>{
  console.log('Server started...')
})