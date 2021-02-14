import { Box } from "@material-ui/core"
import React from 'react'
import SimpleCard from "./SimpleCard"

export default function CourseRow(props) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" style={{width: "100%", height: "100%"}}>
            <Box style={{width: 300,}} >
                {props.title}
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-around" style={{width: "100%"}}>
                <SimpleCard/>
                <SimpleCard/> 
                <SimpleCard/> 
            </Box>
        </Box>
    )
}
