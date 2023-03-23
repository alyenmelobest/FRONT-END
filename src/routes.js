import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./containers/Login/index";
import Posts from "./containers/Posts/index";
import Form from "./containers/Form/index";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/postslist" component={Posts} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </Router>
  );
}

export default Routes;
