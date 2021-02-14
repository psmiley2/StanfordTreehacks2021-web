import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/typography';
import React from 'react';
import SimpleCard from "../Components/SimpleCard";

export default function CoursePage(props) {

    let { courseID } = props.match.params

    return (
        <Box style={{ width: "100%" }}>
            <Typography variant = "h3" style = {{padding: 20}}>Community!</Typography>
            <Box display="flex" flexDirection="row" alignItems="space-around" style={{ width: "100%" }}>

                <Grid container spacing={3}>
                    {/* Somehow generate all simple cards from ones backend */}
                    <Grid item xs={3}><SimpleCard /></Grid>


                    <Grid item xs={3}><SimpleCard /></Grid>

                    <Grid item xs={3}><SimpleCard /></Grid>
                    <Grid item xs={3}><SimpleCard /></Grid>
                    <Grid item xs={3}><SimpleCard /></Grid>
                    <Grid item xs={3}><SimpleCard /></Grid>
                    <Grid item xs={3}><SimpleCard /></Grid>
                    <Grid item xs={3}><SimpleCard /></Grid>
                </Grid>


            </Box>
        </Box>
    )
}
