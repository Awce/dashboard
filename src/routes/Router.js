import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

// function PrivateRoute({ path, component, ...rest }) {
//   let storage = localStorage.getItem("user");
//   storage = JSON.parse(storage);
//   if (storage && storage.user) {
//     return <Route path={path} component={component} {...rest} />;
//   } else {
//     return <Redirect to="/login" {...rest} />;
//   }
// }

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;
