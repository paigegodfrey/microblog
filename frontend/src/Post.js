import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { 
  getPostFromAPI, 
  editPostFromAPI, 
  deletePostFromAPI, 
  addCommentToAPI, 
  deleteComment } 
from './actions';
import PostView from "./PostView";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import BlogPostForm from "./BlogPostForm";
import NotFound from "./NotFound";

function Post() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(getPostFromAPI({postId}));
  }, [postId, dispatch]);

  const post = useSelector(st => st.posts[postId]);
  if (!post) return <NotFound />;
  
  const handleToggle = () => {
    setShowEditForm(showEditForm => !showEditForm);
  }
  const handleEditPost = (data) => {
    dispatch(editPostFromAPI(data));
  }
  const handleDeletePost = (data) => {
    dispatch(deletePostFromAPI(data));
    history.push('/');
  }
  const handleAddComment = (data) => {
    dispatch(addCommentToAPI(data));
  }
  const handleDeleteComment = (data) => {
    dispatch(deleteComment(data));
  }

  const showPost = () => (
    <div>
      <PostView
        handleToggle={handleToggle}
        handleDeletePost={handleDeletePost}
        {...post} />
      <CommentList handleDeleteComment={handleDeleteComment} />
      <CommentForm handleAddComment={handleAddComment} />
    </div>
  );

  return (
    <div>
      {!showEditForm
        ? showPost()
        : <BlogPostForm
          handleEditPost={handleEditPost}
          postId={postId}
          {...post}
        />
      }
    </div>
  )
}

export default Post;