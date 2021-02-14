import { Grid } from "@material-ui/core"
import React from 'react'
import SimpleCard from "./SimpleCard"
export default function CourseRow(props) {
    return (
        <>
        {props.title}
        <Grid container direction="column" justify="center" alignItems="center">
            <SimpleCard/>
            <SimpleCard/> 
            <SimpleCard/> 
        </Grid>
        </>
    )
}
