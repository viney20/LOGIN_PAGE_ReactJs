import React from "react";
import { Button, TextField, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <Container className="Container_login" component="div" fixed>
        <TextField
          required
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <br />
        <Button className="login_btn" variant="contained" color="secondry">
          Sign Up
        </Button>
        <br />
        <Typography variant="span">
          already have account?<Link to="/">LogIn</Link>{" "}
        </Typography>
      </Container>
    </>
  );
}

export default Signup;
