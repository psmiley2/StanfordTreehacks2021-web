import { Paper } from "@material-ui/core"
import React from 'react'
import AddThread from "./AddThread"
import Thread from "./Thread"

export default function Forum({id}) {
    let message = "This is a message about this hackathon! Treehacks2021! Yeah! Snitches get stiches."
    let author = "Pop Smoke"

    return (
        <Paper style={{width: "45%", padding: "1%", margin: "1%"}}>
            <Thread message={message} author={author}/>
            <Thread message={message} author={author}/>
            <Thread message={message} author={author}/>
            <AddThread id={id}/>
        </Paper>
    )
}
