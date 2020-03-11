import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { addPost, deletePost, addComment, deleteComment } from './actions';
import PostView from "./PostView";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import BlogPostForm from "./BlogPostForm";
import NotFound from "./NotFound";

function Post() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false)
  const post = useSelector(st => st.posts[postId]);
  if (!post) return <NotFound />;

  const handleToggle = () => {
    setShowEditForm(showEditForm => !showEditForm)
  }
  const handleAddPost = (data) => {
    dispatch(addPost(data));
  }
  const handleDeletePost = (data) => {
    dispatch(deletePost(data));
  }
  const handleAddComment = (data) => {
    dispatch(addComment(data))
  }
  const handleDeleteComment = (data) => {
    dispatch(deleteComment(data))
  }

  const showPost = () => (
    <div>
      <PostView 
        handleToggle={handleToggle}
        handleDeletePost={handleDeletePost} 
        {...post}/>
      <CommentList handleDeleteComment={handleDeleteComment} comments={post.comments}/>
      <CommentForm handleAddComment={handleAddComment}/>
    </div>
  );

  return (
    <div>
      {!showEditForm
        ? showPost()
        : <BlogPostForm handleAddPost={handleAddPost} {...post}/>
      }
    </div>
  )
}

export default Post;