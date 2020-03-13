import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import { getPostsFromAPI } from "./actions"

function TitleList() {

  const state = useSelector(st => st);
  console.log(state);

  const titles = useSelector(st => st.titles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);

  return (
    <div>
      {titles.map(title => <PostCard {...title} key={title.id} />)}
    </div>
  )
}

export default TitleList;