"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var post_controller_1 = require("../controllers/post.controller");
exports.default = (function (app) {
    var apiRouter = express.Router();
    var postRouter = express.Router();
    apiRouter.use('/post', postRouter);
    postRouter.get('/', post_controller_1.getAllPosts);
    postRouter.get('/:id', post_controller_1.getPostById);
    postRouter.post('/', post_controller_1.createPost);
    postRouter.put('/:id', post_controller_1.updatePost);
    postRouter.delete('/:id', post_controller_1.deletePost);
    app.use('/api', apiRouter);
});
//# sourceMappingURL=v1.js.map