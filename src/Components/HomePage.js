import { Box } from "@material-ui/core";
import React from 'react';
import CourseRow from './CourseRow';

const drawerWidth = 240;
 
export default function HomePage() {
   return (
        <Box display="flex" flexDirection="column" style={{height: "100%", width: "100%"}}>
            <CourseRow title="Trending Courses" />
            <CourseRow title="New Courses" />
            <CourseRow title="Starting Soon" />
        </Box>
   )
}
