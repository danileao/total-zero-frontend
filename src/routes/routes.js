import React from "react";

import { Switch, Route } from "react-router-dom";

import Register from "../components/Register";
import Home from "../components/Home";
import Login from "../components/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
