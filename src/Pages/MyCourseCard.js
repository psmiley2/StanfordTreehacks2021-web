import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import { backend_url } from "../config";
import history from "../history";

export default function MyCourseCard({courseID}) {
  const [course, setcourse] = useState(false)
    const cookies = new Cookies();
    const config = {
        headers: { Authorization: `Bearer ${cookies.get('token')}` }
    };
    useEffect(async () => {
        axios.get(`${backend_url}/courses/id/${courseID}`, config)
        .then((res) => {
            setcourse(res)
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    if (!course) {
        return <>Loading...</>
    }
 return (
   <Card style={{paddingLeft: 50, paddingRight: 50, marginRight: "3%", marginLeft: "3%"}}>
       
     <CardContent>
       <Typography variant="h5" component="h2">
         {course.data.title}
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" color="primary" variant="contained"
        onClick={() => {history.push(`/course/${course.data._id}`)}}
       >View Course</Button>
     </CardActions>
   </Card>
 );
}

