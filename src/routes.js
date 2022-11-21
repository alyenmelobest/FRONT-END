import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./containers/Login/index";
import Users from "./containers/Users/index";
import Form from "./containers/Form/index";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/userslist" component={Users} />
        <Route exact path="/form" component={Form} />
      </Switch>
    </Router>
  );
}

export default Routes;
