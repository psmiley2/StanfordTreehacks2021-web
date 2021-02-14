import { Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import React, { useState } from "react";
import Cookies from "universal-cookie";
import { backend_url } from "../config";
export default function AddThread({id}) {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
        setOpen(true);
    }
    const [newThreadText, setNewThreadText] = useState("")

    const handleAddThread = async () => {
		const cookies = new Cookies();
		const config = {
			headers: { Authorization: `Bearer ${cookies.get('token')}` }
		};
        let body = {
			text: newThreadText,
		}
         await axios.post(`${backend_url}/courses/id/${id}/thread`, body, config )
        .then((res) => {
           console.log(res) 
        }).catch((err) => {
            console.error(err)
        })       
    }

	const handleClose = () => {
		setNewThreadText("");
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen} color="secondary">
				Add A Thread
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add A Thread</DialogTitle>
				<DialogContent>
					<TextField
						value={newThreadText}
						onChange={(e) => setNewThreadText(e.target.value)}
						margin="dense"
						id="proposal-description"
						label="New Thread Text"
						type="text"
						fullWidth
					/>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							handleAddThread();
							handleClose();
						}}
						color="secondary"
					>
						Add Thread
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}