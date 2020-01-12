import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;
