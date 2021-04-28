import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/:postId"><Post /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}

export default Routes;
