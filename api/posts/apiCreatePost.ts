import {RequestHandler} from 'express';
import uuid from "uuid/v4";
import { DataStore } from '../../data/data';
import { NewPost } from "../../interface/newPost";

export const apiCreatePost: RequestHandler = (req,res,next)=>{
  console.log('req.body:',req.body);
  const newPost: NewPost = {
    id: uuid(),
    userId: req.body.userId || 1,
    title: req.body.title,
    body: req.body.body,
    price: req.body.price,
    currency: req.body.currency,
  }

  DataStore.posts.push(newPost);
  // res.send('数据添加成功');
  res.json(newPost);
}