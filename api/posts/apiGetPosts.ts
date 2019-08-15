import { DataStore } from '../../data/data';
import {RequestHandler} from 'express';
import { PostSummary } from "../../model/shared/postSummary";

export const apiGetPosts: RequestHandler = (req,res,next)=>{
  // res.json(DataStore.posts);
  res.json(DataStore.posts.map((item:any)=>new PostSummary(item)) );
}
export const apiGetPostsDetail: RequestHandler = (req,res,next)=>{
  // console.log('req.params.id',req.params.id)
  DataStore.posts.forEach((item:any)=>{
    // console.log(item)
    if(item.id == req.params.id){
      res.json(new PostSummary(item))
    }
  })
}