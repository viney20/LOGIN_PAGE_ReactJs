import React from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  signup_btn: {},
  Container_signup: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardstyle: { padding: 10, maxWidth: 400, height: 400 },
  textfield: { width: "100%" },
});

function Signup() {
  const classes = useStyles();
  return (
    <Container className="Container_signup" component="div" fixed>
      <Card className={classes.cardstyle}>
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />
        <br />
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          fullWidth
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
        <Button className="signup_btn" variant="contained" color="secondry">
          Sign Up
        </Button>
        <br />
        <Typography variant="span">
          already have account?<Link to="/">LogIn</Link>
        </Typography>
      </Card>
    </Container>
  );
}

export default Signup;
