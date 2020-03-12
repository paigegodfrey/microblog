import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

function TitleList() {

  const postsObj = useSelector(st => st.posts);
  
  const posts = [];
  
  for (let [key,value] of Object.entries(postsObj)){
    posts.push({id: key, post: value})
  }
  

  return (
    <div>
      {posts.map(p => <PostCard {...p.post} key={p.id} id={p.id}/>)}
    </div>
  )
}

export default TitleList;