import { Box } from '@material-ui/core';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import Forum from "../Components/Forum";
import Lectures from "../Components/Lectures";
import { backend_url } from "../config";

export default function CoursePage(props) {
    const [course, setcourse] = useState(false)
    let id = props.match.params.courseID
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
    }, [])

    if (!course) {
        return <>Loading</>
    } else {
        return (
            <Box style={{width:"100%"}}>
                Course Page
                <Box display="flex" flexDirection="row" alignItems="space-around" style={{width: "100%"}}>
                    <Lectures id={id} />
                    <Forum id={id}/>
                </Box>
            </Box>
        )
    } 
}