import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPostForm from "./BlogPostForm";
import PostView from "./PostView";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/new"><BlogPostForm /></Route>
      <Route exact path="/:postId"><PostView /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}

export default Routes;
