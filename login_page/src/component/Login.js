import React from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Card,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  login_btn: {},
  Container_login: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardstyle: { padding: 10, maxWidth: 400, height: 400 },
  textfield: { width: "90%", margin: theme.spacing(3) },
}));

function Login() {
  const classes = useStyles();
  return (
    <>
      <form className={classes.formm}>
        <TextField
          className={classes.textfield}
          required
          id="outlined-basic"
          label="EmailId"
          variant="outlined"
          fullWidth
        />

        <TextField
          className={classes.textfield}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
        />

        <Button
          className="login_btn"
          variant="contained"
          color="primary"
          fullWidth
        >
          Login
        </Button>
        <br />
        <Typography variant="span">
          New User? <Link to="/signup">Signup</Link>
        </Typography>
      </form>
    </>
  );
}

export default Login;
