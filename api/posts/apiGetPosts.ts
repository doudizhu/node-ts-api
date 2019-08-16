import { DataStore } from '../../data/data';
import {RequestHandler} from 'express';
import { PostSummary } from "../../model/shared/postSummary";
import { PostFilter } from '../../model/shared/postFilter';

export const apiGetPosts: RequestHandler = (req,res,next)=>{
  const filters = new PostFilter(req.query)
  console.log('apiGet:',filters)
  const filtersedData = DataStore.posts.filter(
    (item:any) => {
      let condations = [
        filters.currency ? (item.currency == filters.currency) : true
      ]

      return condations.every(value=>value==true)
    }
  )
  // res.json(DataStore.posts);
  res.json(filtersedData.map((item:any)=>new PostSummary(item)) );
}