import { Box, Button } from '@material-ui/core';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import Forum from "../Components/Forum";
import Lectures from "../Components/Lectures";
import { backend_url } from "../config";

export default function CoursePage(props) {
    let id = props.match.params.courseID
    const [course, setcourse] = useState(false)
    const [user, setuser] = useState({})
    const cookies = new Cookies();
    const config = {
        headers: { Authorization: `Bearer ${cookies.get('token')}` }
    };
    useEffect(async () => {
        axios.get(`${backend_url}/courses/id/${id}`, config)
        .then((res) => {
            setcourse(res)
        }).catch((err) => {
            console.error(err)
        })
        axios.get(`${backend_url}/users/me`, config)
        .then((res) => {
            setuser(res)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    const addUserToCourse = async () => {
        await axios.post(`${backend_url}/courses/id/${id}`, {}, config)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.error(err)
        })
    }

    const joinCourse = () => {
        if (!user || !course) {
            return <></>
        } 
        let stop = user.data.courses.includes(course.data._id)
        if (stop) {
            return <></>
        }
        return <Button
            onClick={() => addUserToCourse()}
        >
            Join Course!
        </Button>
    }

    if (!course) {
        return <>Loading</>
    } else {
        return (
            <Box style={{width:"100%"}}>
                <Box style={{fontSize: 36}}>
                    {course.data.title}
                </Box><br />
                {course.data.description} 
                <br />
                {joinCourse()}
                <Box display="flex" flexDirection="row" alignItems="space-around" style={{width: "100%"}}>
                    <Lectures id={id} lectures={course.data.lectures} />
                    <Forum id={id} threads={course.data.threads} />
                </Box>
            </Box>
        )
    } 
}