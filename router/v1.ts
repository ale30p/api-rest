import * as express from "express";
import {
  getAllPosts, 
  getPostById, 
  createPost, 
  updatePost, 
  deletePost 
} from "../controllers/post.controller";

export default (app) => {
  const apiRouter = express.Router();
  const postRouter = express.Router();

  apiRouter.use('/post', postRouter);

  postRouter.get('/', getAllPosts);
  postRouter.get('/:id', getPostById);
  postRouter.post('/', createPost);
  postRouter.put('/:id', updatePost);
  postRouter.delete('/:id', deletePost);

  app.use('/', apiRouter);
}