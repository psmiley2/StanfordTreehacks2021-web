import { Box } from "@material-ui/core";
import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SideBar from './Components/Sidebar';
import history from "./history";
import Login from "./Login";
import Logout from "./Logout";
import CoursePage from "./Pages/CoursePage";
import MyCourses from './Pages/MyCourses';
import ProposalForm from './Pages/ProposalForm';
import Profile from "./Profile";
import Register from "./Register";
import CommunityPage from "./Pages/CommunityPage";

function App() {
  return (
      <Box display="flex" flexDirection="row">
        <Router history={history}>
            <SideBar />
            <Box display="flex" flexDirection="row" textAlign="center" justifyContent='center' alignItems='center' style={{paddingTop: 60, height: "100%", width: "100%"}}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/my-courses" exact component={MyCourses} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/proposal-form" exact component={ProposalForm} />
                    <Route path="/course/:courseID" exact component={CoursePage} />
                    <Route path="/communities/:communityID" exact component={CommunityPage} />
                </Switch>
            </Box>
        </Router>
    </Box>
);
}

export default App;
