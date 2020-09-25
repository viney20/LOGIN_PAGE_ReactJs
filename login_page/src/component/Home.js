import React from "react";
import { Button } from "@material-ui/core";
import "./Home.css";
function home() {
  return (
    <div className="home">
      <Login />
      <Signup />
    </div>
  );
}

export default home;
