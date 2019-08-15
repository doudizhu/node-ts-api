import { DataStore } from '../../data/data';
import {RequestHandler} from 'express';
import { PostSummary } from "../../model/shared/postSummary";

export const apiGetPosts: RequestHandler = (req,res,next)=>{
  // res.json(DataStore.posts);
  res.json(DataStore.posts.map((item:any)=>new PostSummary(item)) );
}