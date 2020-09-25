import React from "react";
import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Error from "./component/Error";
import { Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paperstyle: {
    width: "50%",
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    alignItems: "center",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Paper className={classes.paperstyle}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={Error} />
        </Switch>
      </Paper>
    </div>
  );
}

export default App;
