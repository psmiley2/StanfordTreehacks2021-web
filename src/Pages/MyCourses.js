import { Box } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import { backend_url } from "../config";
import MyCourseCard from './MyCourseCard';

export default function MyCourses() {
    const [user, setuser] = useState(null)
    const cookies = new Cookies();
    const config = {
        headers: { Authorization: `Bearer ${cookies.get('token')}` }
    };
   useEffect(() => {
       axios.get(`${backend_url}/users/me`, config)
        .then((res) => {
          console.log(res)
            setuser(res)
        }).catch((err) => {
            console.error(err)
        })
   }, []) 

   if (!user) {
     return <>Loading...</>
   }
    return (
        <Box>
            <h1>My Courses</h1>
            <Box display="flex" >
              {user.data.courses.map((courseID, index) => {
                return <MyCourseCard key={index} courseID={courseID} />
              })}
            </Box>
        </Box>
    );
}