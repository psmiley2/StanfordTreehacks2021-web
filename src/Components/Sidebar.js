import { Dialog } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import axios from "axios";
import clsx from 'clsx';
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { backend_url } from "../config";
import { mainListItems, secondaryListItems } from '../listInfo';
import Login from "../Login";
import Logout from '../Logout';
const drawerWidth = 200;
const topicOptions = {'1':'Math',
                      '2':'Music',
                      '3':'English',
                      '4': 'Social Studies',
                      '5': 'Computer Science'};


const useStyles = makeStyles((theme) => ({
root: {
  display: 'flex',
  width: "25%"
},
toolbar: {
  paddingRight: 24, // keep right padding when drawer closed
},
toolbarIcon: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 8px',
  ...theme.mixins.toolbar,
},
appBar: {
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
},
appBarShift: {
  marginLeft: drawerWidth,
  width: `calc(100% + ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
menuButton: {
  marginRight: 36,
},
menuButtonHidden: {
  display: 'none',
},
title: {
  flexGrow: 1,
},
drawerPaper: {
  position: 'relative',
  top: 50,
  whiteSpace: 'nowrap',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
drawerPaperClose: {
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: theme.spacing(7),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
  },
},
appBarSpacer: theme.mixins.toolbar,
content: {
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
},
container: {
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
},
paper: {
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
},
fixedHeight: {
  height: 240,
},
}));
export default function Sidebar() {
const classes = useStyles();
const [open, setOpen] = React.useState(true);
const [proposalOpen, setproposalOpen] = useState(false);

  // prob combine both of these into an arraystate
  const [newProposalTitle, setNewProposalTitle] = useState("")
  const [newProposalDescription, setNewProposalDescription] = useState("")

  const [Topics, setTopics] = React.useState('');
  const [dropdownOption, setdropdownOption] = useState("");
  

  const handleTopicsChange = (event) => {
    setTopics(event.target.value);
    console.log("New topic: " + Topics);
};

const handleAddProposal = async() => {
  const cookies = new Cookies();
  const config = {
      headers: { Authorization: `Bearer ${cookies.get('token')}` }
  };
  let body = {
    description: newProposalDescription,
    title: newProposalTitle,
    topic: Topics
  }
  await axios.post(`${backend_url}/courses`, body, config) .then((res) => console.log(res)).catch((err) => console.error(err))
    setNewProposalDescription("");
    setNewProposalTitle("")
}
const handleProposalClose = () => {
setNewProposalDescription("");
setNewProposalTitle("");
setproposalOpen(false);
};

const handleProposalOpen= () => {
      setproposalOpen(true);
  }

const handleDrawerOpenClose = () => {
  setOpen(!open);
};
const changeDirectionIcon = () => {
  if (open) return (
    <ChevronLeftIcon />
  );
  return (<ChevronRightIcon />);

};
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
const auth = () => {
  const cookies = new Cookies();
  let token = cookies.get("token");
  if (token && token.length > 0) {
    return <Logout />
  };
  return <Login />
}
  const handleDropdownChange= (event) => {
      setdropdownOption(event.target.value)
      //do something with the option picked
      console.log("You changed the dropdown to: " + dropdownOption);

      //set back to default
     // setdropdownOption(0);
  }
  


return (
  <div> 
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>

        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Educ8 <img className="img-fluid"
            src={`${process.env.PUBLIC_URL}/assets/logo-32x32.png`}
            alt="logo" />
        </Typography>



          {/* Dropdown menu */}
          <InputLabel id="label"></InputLabel>
                        <Select
                            value={dropdownOption}
                            onChange={handleDropdownChange}
                        >
                            <MenuItem value={0}>Communities</MenuItem>
                            <MenuItem value={1}>Math</MenuItem>
                            <MenuItem value={2}>Music</MenuItem>
                            <MenuItem value={3}>English</MenuItem>
                            <MenuItem value={4}>Social Studies</MenuItem>
                            <MenuItem value={5}>Computer Science</MenuItem>
                            <MenuItem value={6}>Electrical Engineering</MenuItem>
                            <MenuItem value={7}>Art</MenuItem>
                            <MenuItem value={8}>Philosophy</MenuItem>
                            <MenuItem value={9}>Science</MenuItem>
                            <MenuItem value={10}>Chemical Engineering</MenuItem>
                        </Select>


          <div>
            <Button onClick={handleProposalOpen} color="secondary">
              Add A Proposal
			</Button>
            <Dialog open={proposalOpen} onClose={handleProposalClose}>
              <DialogTitle>Add A Course Proposal</DialogTitle>
              <DialogContent>
                <TextField
                  value={newProposalTitle}
                  onChange={(e) => setNewProposalTitle(e.target.value)}
                  margin="dense"
                  id="proposal-title"
                  label="New Course Title"
                  type="text"
                  fullWidth
                />

<FormControl className={classes.formControl}>
                      <InputLabel id="label">Topics</InputLabel>
                      <Select
                          value={Topics}
                          onChange={handleTopicsChange}
                      >
                          <MenuItem value={1}>Math</MenuItem>
                          <MenuItem value={2}>Music</MenuItem>
                          <MenuItem value={3}>English</MenuItem>
                          <MenuItem value={4}>Social Studies</MenuItem>
                          <MenuItem value={5}>Computer Science</MenuItem>
                          <MenuItem value={6}>Electrical Engineering</MenuItem>
                          <MenuItem value={7}>Art</MenuItem>
                          <MenuItem value={8}>Philosophy</MenuItem>
                          <MenuItem value={9}>Science</MenuItem>
                          <MenuItem value={10}>Chemical Engineering</MenuItem>
                      </Select>
                  </FormControl>

              <TextField
                value={newProposalDescription}
                onChange={(e) => setNewProposalDescription(e.target.value)}
                margin="dense"
                id="proposal-description"
                label="New Course Description"
                multiline
                          rows={3}
                          rowsMax={8}
                          size = "medium"
                type="text"
                fullWidth
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleProposalClose} color="primary">
                Cancel
        </Button>
              <Button
                onClick={() => {
                  handleAddProposal();
                  handleProposalClose();
                }}
                color="secondary"
              >
                Add Proposal
        </Button>
            </DialogActions>

            </Dialog>

      </div>

          
        <IconButton color = "inherit">
        <ExitToAppIcon />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {auth()}
      </Toolbar>
    </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerOpenClose}>

            {changeDirectionIcon()}

          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
</div>
);
}