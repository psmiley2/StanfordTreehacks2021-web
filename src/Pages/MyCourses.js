import React from 'react';
import Sidebar from '../Components/Sidebar';
import SimpleCard from '../Components/SimpleCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';


const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
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
        width: `calc(100% - ${drawerWidth}px)`,
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
export default function MyCourses() {
    
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <CssBaseline />
            <Sidebar />
           
            <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
            <h1>My Courses</h1>
          <Grid container spacing={3}>
            
            <Grid item xs={3} md = {5}>
              <SimpleCard />
            </Grid>
            
            <Grid item xs={3} md = {5}>
              <SimpleCard />
            </Grid>
            
            <Grid item xs={3} md = {5}>
              <SimpleCard />
            </Grid>
          </Grid>
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <h1>Auditing courses</h1>
          <Grid container spacing={3}>
            
            <Grid item xs={3} md = {5}>
              <SimpleCard />
            </Grid>
            
            <Grid item xs={3} md = {5}>
              <SimpleCard />
            </Grid>
            
            <Grid item xs={3} md = {5}>
              <SimpleCard />
            </Grid>
          </Grid>
          </Container>
            </main>
        </div>
    );
}