import { DataStore } from '../../data/data';
import {RequestHandler} from 'express';
import { PostDetail } from "../../model/shared/postDetail";

export const apiGetPostsDetail: RequestHandler = (req,res,next)=>{
  console.log('DataStore.posts:',JSON.stringify(DataStore.posts))
  const selectedPost = DataStore.posts.find((element:any)=>element.id == req.params.id)
  console.log('selectedPost:',selectedPost);

  if(selectedPost){
    const selectedTodos = DataStore.todos.filter((item:any)=>item.postId == req.params.id)
    res.json(new PostDetail(selectedPost,selectedTodos));
  }else{
    res.status(404).json({status:'failed',message:'post not found'})
  }

  // // console.log('req.params.id',req.params.id)
  // DataStore.posts.forEach((item:any)=>{
  //   // console.log(item)
  //   if(item.id == req.params.id){
  //     res.json(new PostSummary(item))
  //   }else{
  //     res.status(404).json({status:'failed',message:'post not found'})
  //   }
  // })
}