import {RequestHandler} from 'express';
import uuid from "uuid/v4";
import { DataStore } from '../../data/data';
import { NewPost } from "../../interface/newPost";
import { APIError, PublicInfo } from '../../model/shared/message';

export const apiCreatePost: RequestHandler = (req,res,next)=>{
  // console.log('req.body:',req.body);
  const requireFields = ['title','body'];
  const givenFields = Object.getOwnPropertyNames(req.body)
  if(!requireFields.every(field=>givenFields.includes(field))){
    return next(new APIError('Data missing','not all required fields supplied',400))
  }
  const newPost: NewPost = {
    id: uuid(),
    userId: req.body.userId || 1,
    title: req.body.title,
    body: req.body.body,
    price: req.body.price,
    currency: req.body.currency,
    img: [],
  }

  DataStore.posts.push(newPost);
  // res.send('数据添加成功');
  // res.json(newPost);
  res.json(new PublicInfo('post added',200,{post:newPost}))
}