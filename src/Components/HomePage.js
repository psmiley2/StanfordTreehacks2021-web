import React from 'react';
import CourseRow from './CourseRow';
 
 
 const drawerWidth = 240;
 
export default function HomePage() {
   return (
        <>
            <CourseRow title="Trending Courses" />
            <CourseRow title="New Courses" />
            <CourseRow title="Starting Soon" />
        </>
   )
}
