import { Box } from "@material-ui/core";
import React from 'react';
import MyCourseCard from "../Pages/MyCourseCard";
 
export default function HomePage() {
   return (
        <Box display="flex" flexDirection="column" style={{height: "100%", width: "100%"}}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" style={{width: "100%", height: "100%"}}>
                <Box style={{width: 300, fontSize: 36}} >
                    Trending Courses
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around" style={{width: "100%"}}>
                    <MyCourseCard/>
                    <MyCourseCard/> 
                    <MyCourseCard/> 
                </Box>
            </Box><Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" style={{width: "100%", height: "100%"}}>
                <Box style={{width: 300, fontSize: 36}} >
                    New Courses
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around" style={{width: "100%"}}>
                    <MyCourseCard/>
                    <MyCourseCard/> 
                    <MyCourseCard/> 
                </Box>
            </Box><Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" style={{width: "100%", height: "100%"}}>
                <Box style={{width: 300, fontSize: 36}} >
                   Starting Soon 
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around" style={{width: "100%"}}>
                    <MyCourseCard/>
                    <MyCourseCard/> 
                    <MyCourseCard/> 
                </Box>
            </Box>
        </Box>
   )
}
