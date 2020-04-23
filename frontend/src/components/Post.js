import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostFromAPI } from './actions';
import PostDisplay from "./PostDisplay";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostForm from "./PostForm";
import NotFound from "./NotFound";

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(getPostFromAPI({ postId }));
  }, [postId, dispatch]);

  const post = useSelector(st => st.posts[postId]);
  if (!post) return <NotFound />;

  const handleToggle = () => {
    setShowEditForm(showEditForm => !showEditForm);
  }

  const showPost = () => (
    <div>
      <PostDisplay
        handleToggle={handleToggle}
        {...post} />
      <section className="Post-comments mb-4">
        <h4>Comments</h4>
        <CommentList />
        <CommentForm />
      </section>
    </div >
  );

  return (
    <div>
      {!showEditForm
        ? showPost()
        : <PostForm postId={postId} {...post} />
      }
    </div>
  )
}

export default Post;