//oliviertassinari https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/listItems.js
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import history from './history';
import HomeIcon from '@material-ui/icons/Home';
//change icon by going to this website: https://material-ui.com/components/material-icons/
//Then click one and copy the import code
//Then paste the name of icon tag below <ListItemIcon> 
//for ex. see first icon at <PersonIcon/>



export const mainListItems = (
  <div>
    <ListItem button onClick={() => {history.push("/");}}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button onClick={() => {history.push("/profile");}}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Feed" />
    </ListItem>

    <ListItem button onClick={() => {history.push("/my-courses");}}>
      <ListItemIcon>
        <ImportContactsIcon />
      </ListItemIcon>
      <ListItemText primary="My Courses" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    
    <ListItem button>
      <ListItemIcon>
        <HelpIcon/>
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon/>
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
 
  </div>
);