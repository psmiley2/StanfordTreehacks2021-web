import { Paper } from '@material-ui/core'
import React from 'react'
import AddLecture from './AddLecture'
import Lecture from "./Lecture"

export default function Lectures({id, lectures}) {
 
    return (
        <Paper style={{width: "45%", padding: "1%", margin: "1%"}}>
            Lectures
            {lectures.map((lecture, index) => (
                <Lecture courseID={id} lectureID={lecture._id} key={index} upvotes={lecture.votes} title={lecture.title} description={lecture.description} author={lecture.author}/>
            ))}
            <AddLecture id={id}/>
        </Paper>
    )
}
