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
  login_btn: {},
  Container_login: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardstyle: { padding: 10, maxWidth: 400, height: 400 },
  textfield: { width: "100%" },
});

function Login() {
  const classes = useStyles();
  return (
    <>
      <Container className="Container_login" component="div" fixed>
        <Card className={classes.cardstyle}>
          <TextField
            className={classes.textfield}
            required
            id="outlined-basic"
            label="EmailId"
            variant="outlined"
            fullWidth
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <br />
          <Button className="login_btn" variant="contained" color="secondry">
            Login
          </Button>
          <br />
          <Typography variant="span">
            new user? <Link to="/signup">Signup</Link>
          </Typography>
        </Card>
      </Container>
    </>
  );
}

export default Login;
