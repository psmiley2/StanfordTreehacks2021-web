import { Box } from "@material-ui/core"
import React from 'react'
import MyCourseCard from "../Pages/MyCourseCard"
export default function CourseRow(props) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" style={{width: "100%", height: "100%"}}>
            <Box style={{width: 300, fontSize: 36}} >
                {props.title}
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-around" style={{width: "100%"}}>
                <MyCourseCard/>
                <MyCourseCard/> 
                <MyCourseCard/> 
            </Box>
        </Box>
    )
}
