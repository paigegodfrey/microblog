import React from "react";
import { Route, Switch } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";
import PostForm from "./PostForm";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/new"><PostForm /></Route>
      <Route exact path="/:postId"><Post /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}

export default Routes;
