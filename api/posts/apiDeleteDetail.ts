import { DataStore } from '../../data/data';
import {RequestHandler} from 'express';

export const apiDeleteDetail: RequestHandler = (req,res,next)=>{
  // console.log("req.params.id:",req.params.id)
  const postIndex = DataStore.posts.findIndex((item:any)=>item.id == req.params.id)
  // console.log("postIndex：",postIndex)
  if(postIndex>-1){
    DataStore.posts.splice(postIndex,1)
    res.status(200).json({status:'success',message:'delete success'})
  }else{
    res.status(404).json({status:'failed',message:'delete failed'})
  }
}