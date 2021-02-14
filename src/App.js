import { Box } from "@material-ui/core";
import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SideBar from './Components/Sidebar';
import history from "./history";
import Register from "./Register";
import MyCourses from "./Pages/MyCourses";
function App() {
 

  return (
      <Router history={history}>
        {/* <SideBar /> */}
        <Box display="flex" flexDirection="row" textAlign="center" justifyContent='center' alignItems='center' style={{paddingTop: 20}}>
            <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/my-courses" exact component={MyCourses} />
              </Switch>
          </Box>
      </Router>
);
}

export default App;
