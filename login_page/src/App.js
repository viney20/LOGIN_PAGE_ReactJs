import React from "react";
import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Error from "./component/Error";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
