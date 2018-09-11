import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import About from "./About";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Content;
