import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostFromAPI } from "../actions/posts";
import PostForm from "./PostForm";
import PostDisplay from "./PostDisplay";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import NotFound from "./NotFound";
import "./Post.css";

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(getPostFromAPI({ postId }));
  }, [postId, dispatch]);

  const post = useSelector(st => st.posts[postId]);
  if (!post) return <NotFound />;

  const toggleEdit = () => {
    setShowEditForm(showEditForm => !showEditForm);
  }

  const showPost = () => (
    <div>
      <PostDisplay
        toggleEdit={toggleEdit}
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