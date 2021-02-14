import { Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

export default function AddLecture() {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
        setOpen(true);
    }
    const [newLectureTitle, setNewLectureTitle] = useState("")
    const [newLectureDescription, setNewLectureDescription] = useState("")

    const handleAddLecture = () => {
        console.log("Adding Lecture")
    }
	const handleClose = () => {
		setNewLectureDescription("");
		setNewLectureTitle("");
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen} color="secondary">
				Add A Lecture
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add A Lecture</DialogTitle>
				<DialogContent>
					<TextField
						value={newLectureTitle}
						onChange={(e) => setNewLectureTitle(e.target.value)}
						margin="dense"
						id="lecture-title"
						label="New Lecture Title"
						type="text"
						fullWidth
					/>
					<TextField
						value={newLectureDescription}
						onChange={(e) => setNewLectureDescription(e.target.value)}
						margin="dense"
						id="lecture-description"
						label="New Lecture Description"
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
							handleAddLecture();
							handleClose();
						}}
						color="secondary"
					>
						Add Lecture
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}