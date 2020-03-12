import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import { getPostsFromAPI } from "./actions"

function TitleList() {

  const postsObj = useSelector(st => st.posts);
  const dispatch = useDispatch();

  let posts = [];

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);

  for (let [key, value] of Object.entries(postsObj)) {
    posts.push({ id: key, post: value })
  }

  return (
    <div>
      {posts.map(p => <PostCard {...p.post} key={p.id} id={p.id} />)}
    </div>
  )
}

export default TitleList;