import { Box } from "@material-ui/core";
import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SideBar from './Components/Sidebar';
import history from "./history";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Register from "./Register";

function App() {
  return (
      <Router history={history}>
        <SideBar />
        <Box display="flex" flexDirection="row" textAlign="center" justifyContent='center' alignItems='center' style={{paddingTop: 20}}>
            <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/logout" exact component={Logout} />
                  <Route path="/profile" exact component={Profile} />
              </Switch>
          </Box>
      </Router>
);
}

export default App;
