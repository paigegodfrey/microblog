import React, { useEffect, useState } from "react";
import "./Post.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getPostFromAPI,
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  removePostFromAPI
} from "../actions/posts";
import PostForm from "../components/PostForm";
import CommentList from "../components/CommentList";
import PostDisplay from "../components/PostDisplay";
import CommentForm from "../components/CommentForm";
import { PropagateLoader } from "react-spinners";

const Post = () => {

  const [showEditForm, setShowEditForm] = useState(false);
  const postId = Number(useParams().postId);
  const post = useSelector(st => st.posts[postId]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      dispatch(getPostFromAPI(postId));
    }
    getPost();
  }, [postId, dispatch]);

  /** Toggle editing on/off */

  const toggleEdit = () => {
    setShowEditForm(edit => !edit);
  }

  /** Handle post editing: adds to backend. */

  const edit = ({ title, description, body }) => {
    dispatch(updatePostInAPI(
      postId,
      title,
      description,
      body
    ));
    toggleEdit();
  }

  /** Handle post deletion: deletes from backend. */

  const deletePost = () => {
    dispatch(removePostFromAPI(postId));
    history.push("/");
  }

  /** Handle voting in backend. */

  const vote = direction => {
    dispatch(sendVoteToAPI(postId, direction));
  }

  /** Handle adding a comment: adds to backend. */

  const addComment = text => {
    dispatch(sendCommentToAPI(postId, text));
  }

  /** Handle deleting a comment in backend. */

  const deleteComment = commentId => {
    dispatch(removeCommentFromAPI(postId, commentId));
  }

  if (!post) return (
    <>
      <div className="text-center mt-4" style={{ fontSize: '18px' }}>Waiting for Heroku server...</div>
      <div className="d-flex align-items-center justify-content-center" style={{ height: '30vh' }}>
        <div className="fade-loader-container text-center">
          <PropagateLoader size='15px' color="#123abc" />
        </div>
      </div>
    </>
  );

  return (
    <div className="Post">

      {showEditForm
        ? <PostForm post={post} save={edit} close={toggleEdit} />
        : <PostDisplay 
            post={post}
            toggleEdit={toggleEdit}
            deletePost={deletePost}
            doVote={vote} 
          />}

      <section className="Post-comments mb-4">
        <h4>Comments</h4>
        <CommentList 
          comments={post.comments}
          deleteComment={deleteComment} 
        />
        <CommentForm submitCommentForm={addComment} />
      </section>

    </div>
  );
}

export default Post;