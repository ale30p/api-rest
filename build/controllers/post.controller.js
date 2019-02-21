"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = require("../models/post");
function statusError(res, error) {
    res.status(500).json({ error: error });
}
;
function statusSuccess(res, result) {
    res.status(200).json(result);
}
;
function statusUnprocessableEntity(res, message) {
    res.status(422).json({ error: message });
}
function getAllPosts(req, res, next) {
    post_1.default.find(function (err, posts) {
        if (err)
            statusError(res, err);
        statusSuccess(res, { posts: posts });
    });
}
exports.getAllPosts = getAllPosts;
;
function getPostById(req, res, next) {
    var id = req.params.id;
    post_1.default.findById(id, function (err, post) {
        if (err)
            statusError(res, err);
        statusSuccess(res, { post: post });
    });
}
exports.getPostById = getPostById;
;
function createPost(req, res, next) {
    var _a = req.body, title = _a.title, content = _a.content;
    if (!title)
        statusUnprocessableEntity(res, 'title is required');
    if (!content)
        statusUnprocessableEntity(res, 'title is required');
    var post = new post_1.default({
        title: title,
        content: content
    });
    post.save(function (err, post) {
        if (err)
            statusError(res, err);
        statusSuccess(res, { post: post });
    });
}
exports.createPost = createPost;
function updatePost(req, res, next) {
    var id = req.params.id;
    post_1.default.findByIdAndUpdate(id, req.body, function (err, post) {
        if (err)
            statusError(res, err);
        statusSuccess(res, { post: post });
    });
}
exports.updatePost = updatePost;
function deletePost(req, res, next) {
    var id = req.params.id;
    post_1.default.findByIdAndRemove(id, function (err, post) {
        if (err)
            statusError(res, err);
        statusSuccess(res, { post: post });
    });
}
exports.deletePost = deletePost;
//# sourceMappingURL=post.controller.js.map