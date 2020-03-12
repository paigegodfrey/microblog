import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import { getPostsFromAPI } from "./actions"

function TitleList() {

  const titlesObj = useSelector(st => st.titles);
  const dispatch = useDispatch();

  let titles = [];

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);

  for (let [key, value] of Object.entries(titlesObj)) {
    titles.push({ id: key, post: value })
  }

  return (
    <div>
      {titles.map(t => <PostCard {...t.post} key={t.id} id={t.id} />)}
    </div>
  )
}

export default TitleList;