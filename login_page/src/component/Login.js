import React from "react";
import { Button, TextField, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  login_btn: {},
  Container_login: {
    margin: 10,
    display: "flex",

    flexDirection: "column",
  },
});

function Login() {
  return (
    <>
      <Container className="Container_login" component="div" fixed>
        <TextField
          required
          id="outlined-basic"
          label="EmailId"
          variant="outlined"
        />
        <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br />
        <Button className="login_btn" variant="contained" color="secondry">
          Login
        </Button>
        <br />
        <Typography variant="span">
          new user? <Link to="/signup">Signup</Link>
        </Typography>
      </Container>
    </>
  );
}

export default Login;
