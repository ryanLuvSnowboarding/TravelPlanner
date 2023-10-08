import React from "react";
import "./App.css";
import Home from "./HomePage/Home";
import Profile from "./Profile";
import Test from "./TestPage/Test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/test" component={() => <Test />} />
      </Switch>
    </Router>
  );
};

export default App;
