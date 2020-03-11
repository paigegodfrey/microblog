import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import {v4 as uuid } from "uuid";
import BlogPostContext from "./BlogPostContext";
import NotFound from "./NotFound";
import Comment from './Comment';
import CommentForm from './CommentForm';

function PostView() {
  const { postId } = useParams();
  const { posts, comments } = useContext(BlogPostContext);

  const post = posts.filter(p => p.id === postId)[0];
  if (!post) return <NotFound />;

  const postComments = comments.filter(c => c.postId === postId);

  console.log(postComments);

  return (
    <div className="PostView">
      <div className="posts">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.body}</p>
      </div>
      <div>
        <h4>Comments</h4>
        {postComments.map(c => <Comment key={c.id} comment={c}/>)}
        <CommentForm post={post}/>
      </div>
    </div>
  )
}

export default PostView;