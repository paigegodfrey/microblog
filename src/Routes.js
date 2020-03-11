import React from "react";
import { Route, Switch } from "react-router-dom";
import NewPost from "./NewPost";
import Post from "./Post";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/new"><NewPost /></Route>
      <Route exact path="/:postId"><Post /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}

export default Routes;
