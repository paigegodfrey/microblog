import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/new"><NewPost /></Route>
      <Route path="/:postId"><Post /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}

export default Routes;
