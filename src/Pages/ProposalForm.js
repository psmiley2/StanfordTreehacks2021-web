import TextField from '@material-ui/core/TextField';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/typography'
import { SettingsOutlined, SettingsOverscanOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    gridLayout: {
        top: 50,
        padding: 30,
    },
}));

export default function ProposalForm() {
    const classes = useStyles();
    const [Topics, setTopics] = React.useState('');
    const [Title, setTitle] = React.useState('');
    const [Description, setDescription] = React.useState('');

    const handleChange = (event) => {
        setTopics(event.target.value);
    };

    return (
        <div>
            <Grid container spacing={3} className={classes.gridLayout}>
                <Grid item xs={4}>
                    <Typography wrap="nowrap" variant="p">Select the most relevant topic of your course</Typography>
                </Grid>

                <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="label">Topics</InputLabel>
                        <Select
                            value={Topics}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Math</MenuItem>
                            <MenuItem value={2}>Science</MenuItem>
                            <MenuItem value={3}>English</MenuItem>
                            <MenuItem value={4}>Social Studies</MenuItem>
                            <MenuItem value={5}>Computer Science</MenuItem>
                            <MenuItem value={6}>Electrical Engineering</MenuItem>
                            <MenuItem value={7}>Chemical Engineering</MenuItem>
                            <MenuItem value={8}>Philosophy</MenuItem>
                            <MenuItem value={9}>Music</MenuItem>
                            <MenuItem value={10}>Art</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={10}>
                    <form className={classes.root} noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="Course Title" variant="outlined"
                            value={Title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </form>
                </Grid>

                <Grid item xs={19} md={10} lg={9}>
                    <form className={classes.root} noValidate autoComplete="off" >
                        <TextField
                            placeholder="Course Description"
                            multiline
                            rows={3}
                            rowsMax={8}
                            size = "medium"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </form>
                </Grid>
            </Grid>

        </div>



    );
}
