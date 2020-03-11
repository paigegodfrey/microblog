import React, { useContext } from "react";
import BlogPostContext from "./BlogPostContext";
import PostCard from "./PostCard";

function TitleList() {

  const { posts } = useContext(BlogPostContext);

  console.log(posts);

  return (
    <div>
      {posts.map(p => <PostCard post={p} key={p.id} id={p.id}/>)}
    </div>
  )
}

export default TitleList;