import React, { useState } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';
import BlogPostContext from "./BlogPostContext";

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <BlogPostContext.Provider value={{ posts, setPosts, comments, setComments }}>
          <Nav />
          <Routes />
        </BlogPostContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;

