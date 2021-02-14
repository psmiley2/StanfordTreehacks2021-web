import { Box } from '@material-ui/core';
import React from 'react';
import Forum from "../Components/Forum";
import Proposals from "../Components/Proposals";

export default function CoursePage(props) {
    
    let {courseID} = props.match.params
    console.log(courseID)

    return (
        <Box style={{width:"100%"}}>
            Course Page
            <Box display="flex" flexDirection="row" alignItems="space-around" style={{width: "100%"}}>
                <Proposals />
                <Forum />
            </Box>
        </Box>
    )
}
