import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/typography';
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { backend_url } from "../config";
import MyCourseCard from './MyCourseCard';
export default function CoursePage(props) {
    const [courses, setcourses] = useState([])
    const cookies = new Cookies();
    const config = {
        headers: { Authorization: `Bearer ${cookies.get('token')}` }
    };
    let id = props.match.params.communityID
    useEffect(() => {
       axios.get(`${backend_url}/courses/community/${id}`, config)
        .then((res) => {
            setcourses(res.data)
        }).catch((err) => {
            console.error(err)
        })
   }, []) 

    return (
        <Box style={{ width: "100%" }}>
            <Typography variant = "h3" style = {{padding: 20}}>Community!</Typography>
            <Box display="flex" flexDirection="row" alignItems="space-around" style={{ width: "100%" }}>
                {courses.map((course, index) => {
                    return <MyCourseCard key={index} courseID={course._id}/>
                })}
            </Box>
        </Box>
    )
}
