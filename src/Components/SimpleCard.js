import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
 
const useStyles = makeStyles({
 root: {
   maxWidth: 300,
   marginBottom: "10%"
 },
 bullet: {
   display: 'inline-block',
   margin: '0 2px',
   transform: 'scale(0.8)',
 },
 title: {
   fontSize: 14,
 },
 pos: {
   marginBottom: 12,
 },
});
 
export default function SimpleCard() {
 const classes = useStyles();
 const bull = <span className={classes.bullet}>•</span>;
 
 return (
   <Card className={classes.root}>
     <CardContent>
       <Typography variant="h5" component="h2">
         Course Name
       </Typography>
       <Typography className={classes.pos} color="textSecondary">
         Category
       </Typography>
       <Typography variant="body2" component="p">
         Course Description
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
 );
}
