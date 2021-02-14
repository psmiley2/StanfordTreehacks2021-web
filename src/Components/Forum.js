import { Paper } from "@material-ui/core"
import React from 'react'
import AddThread from "./AddThread"
import Thread from "./Thread"

export default function Forum({id, threads}) {
    let message = "This is a message about this hackathon! Treehacks2021! Yeah! Snitches get stiches."
    let author = "Pop Smoke"

    return (
        <Paper style={{width: "45%", padding: "1%", margin: "1%"}}>
            {threads.map((thread, index) => (
                <Thread message={thread.text} author={thread.author} key={index}/>
            ))}
            <AddThread id={id}/>
        </Paper>
    )
}
