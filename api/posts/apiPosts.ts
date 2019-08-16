import { Router } from "express";
import { apiCheckPostFilter } from "./apiCheckPostFilter";
import { apiGetPosts } from "./apiGetPosts";
import { apiGetPostsDetail } from "./apiGetPostsDetail";
import { apiCreatePost } from "./apiCreatePost";
import { apiDeleteDetail } from "./apiDeleteDetail";
import { apiUpdateDetail } from "./apiUpdateDetail";

export let postsRouter = Router();

// app.get('',apiGetPosts)
postsRouter.get('/', apiCheckPostFilter, apiGetPosts);
postsRouter.get('/:id',apiGetPostsDetail)
postsRouter.post('/',apiCreatePost)
postsRouter.delete('/:id',apiDeleteDetail)
postsRouter.put('/:id',apiUpdateDetail)