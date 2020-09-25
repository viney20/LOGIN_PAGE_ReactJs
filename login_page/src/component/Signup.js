import React from "react";
import { Button, TextField, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  signup_btn: { margin: theme.spacing(1) },
  Container_signup: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardstyle: { padding: 10, maxWidth: 400, height: 400 },
  textfield: { width: "90%", margin: theme.spacing(3) },
}));

function Signup() {
  const classes = useStyles();
  return (
    <form>
      <TextField
        className={classes.textfield}
        fullWidth
        required
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
      />

      <TextField
        className={classes.textfield}
        fullWidth
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />

      <TextField
        className={classes.textfield}
        fullWidth
        required
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />

      <TextField
        className={classes.textfield}
        fullWidth
        required
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
      />

      <Button
        className={(classes.textfield, classes.signup_btn)}
        variant="contained"
        color="primary"
        fullWidth
      >
        Sign Up
      </Button>

      <Typography variant="span">
        Already Have Account?<Link to="/">LogIn</Link>
      </Typography>
    </form>
  );
}

export default Signup;
