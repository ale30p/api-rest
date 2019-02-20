import Post from "../models/post";

function statusError(res ,err): void {
  res.status(500).json({err});
};

function statusSuccess(res, result): void {
  res.status(200).json(result);
};

function statusUnprocessableEntity(res, message): void {
  res.status(422).json({err: message});
}

export function getAllPosts(req, res, next) {
  Post.find((err, posts) => {
    if (err) statusError(res, err);
    statusSuccess(res, {posts});
  })
};

export function getPostById(req, res, next) {
  const id = req.params.id;
  Post.findById(id, (err, post) => {
    if (err) statusError(res, err);
    statusSuccess(res, {post});
  })
};


export function createPost(req, res, next) {
  const { title, content } = req.body;
  if (!title) statusUnprocessableEntity(res, 'title is required');
  if (!content) statusUnprocessableEntity(res, 'title is required');
  const post = new Post({
    title,
    content
  });
  post.save((err, post) => {
    if (err) statusError(res, err);
    statusSuccess(res, {post});
  })
}

export function updatePost(req, res, next) {
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body, (err, post) => {
    if (err) statusError(res, err);
    statusSuccess(res, {post});
  })
}

export function deletePost(req, res, next) {
  const id = req.params.id;
  Post.findByIdAndRemove(id, (err, post) => {
    if (err) statusError(res, err);
    statusSuccess(res, {post});
  })
}