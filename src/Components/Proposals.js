import { Paper } from '@material-ui/core'
import React from 'react'
import AddProposal from './AddProposal'
import Proposal from "./Proposal"

export default function Proposals() {
    let votes = 5
    let title = "Cool Proposal"
    let description = "Description for cool proposal...... End of Description."
    let author = "God Himself"

    return (
        <Paper style={{width: "45%", padding: "1%", margin: "1%"}}>
            Proposals
            <Proposal upvotes={votes} title={title} description={description} author={author}/>
            <Proposal upvotes={votes} title={title} description={description} author={author}/>
            <Proposal upvotes={votes} title={title} description={description} author={author}/>
            <Proposal upvotes={votes} title={title} description={description} author={author}/>
            <AddProposal />
        </Paper>
    )
}
