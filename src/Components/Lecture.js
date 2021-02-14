import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function Lecture({upvotes, title, description, author}) {
     const [open, setOpen] = React.useState(false);
     const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
      <>
    <Card className={classes.root}>
         <Typography variant="h7" component="h3">
          <Button variant="contained" color="primary" onClick={handleClickOpen}>{title} </Button> by {author} {" "}
           <Button size="small">Upvote</Button> {upvotes} 
        </Typography>
    </Card>
    <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {description}
                </DialogContent>
            </Dialog>
    </>
  );  
   
}
