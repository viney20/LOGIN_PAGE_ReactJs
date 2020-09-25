import React from "react";
import { Button } from "@material-ui/core";
import "./Home.css";
import Login from "./Login";
import Signup from "./Signup";
function home() {
  return (
    <div className="home">
      <Login />
      <Signup />
    </div>
  );
}

export default home;
