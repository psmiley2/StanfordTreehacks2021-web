import { Paper } from "@material-ui/core";
import React from 'react';

export default function Thread({author, message}) {
    return (
        <>
        <Paper style={{margin: "2%", padding: "%1"}}>
           {message} -{author}
        </Paper>
</>    )
}
