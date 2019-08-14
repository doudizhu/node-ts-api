// console.log('node-typescript-api');

import express from 'express';
const app = express();

// routes
app.get('/',(req,res,next)=>{
  res.send('node typescript api is working...')
})

app.listen(process.env.PORT || 8091,()=>{
  console.log('Server started...')
})