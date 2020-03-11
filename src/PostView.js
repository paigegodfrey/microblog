import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {v4 as uuid } from "uuid";
import BlogPostContext from "./BlogPostContext";
import NotFound from "./NotFound";
import Comment from './CommentForm';
import CommentForm from './CommentForm';

function PostView() {
  const { postId } = useParams();
  const { posts } = useContext(BlogPostContext);

  const [comments, setComments] = useState([]);

  const post = posts.filter(p => p.id === postId)[0];
  if (!post) return <NotFound />;

  return (
    <div className="PostView">
      <div className="posts">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.body}</p>
      </div>
      <div>
        <h4>Comments</h4>
        {comments.map(c => <Comment key={uuid()} post={post} setComments={setComments}/>)}
        <CommentForm />
      </div>
    </div>
  )
}

export default PostView;