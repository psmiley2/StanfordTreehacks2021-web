import { Paper } from '@material-ui/core'
import React from 'react'
import AddLecture from './AddLecture'
import Lecture from "./Lecture"

export default function Lectures() {
    let votes = 5
    let title = "Cool Lecture"
    let description = "Description for cool lecture...... End of Description."
    let author = "God Himself"

    return (
        <Paper style={{width: "45%", padding: "1%", margin: "1%"}}>
            Lectures
            <Lecture upvotes={votes} title={title} description={description} author={author}/>
            <Lecture upvotes={votes} title={title} description={description} author={author}/>
            <Lecture upvotes={votes} title={title} description={description} author={author}/>
            <Lecture upvotes={votes} title={title} description={description} author={author}/>
            <AddLecture />
        </Paper>
    )
}
