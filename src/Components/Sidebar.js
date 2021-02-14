import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import React from 'react';
import Cookies from "universal-cookie";
import { mainListItems, secondaryListItems } from '../listInfo';
import Login from "../Login";
import Logout from '../Logout';

const drawerWidth = 200;
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
export default function Sidebar(){
const classes = useStyles();
const [open, setOpen] = React.useState(true);

const handleDrawerOpenClose = () => {
    setOpen(!open);
};
const changeDirectionIcon = () =>{
    if(open) return(
        <ChevronLeftIcon/>
    );
    return (<ChevronRightIcon/>);
    
};
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

const auth = () => {
  const cookies = new Cookies();
  let token = cookies.get("token")
  if (token.length > 0) {
    return <Logout />
  }

  return (
    <Login />
  )
}

return (
   <div> 
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Educ8 <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/logo-32x32.png`} 
     alt="logo"/>
          </Typography>
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