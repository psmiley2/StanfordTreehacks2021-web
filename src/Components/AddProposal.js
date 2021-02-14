import { Dialog } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

export default function AddProposal() {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
        setOpen(true);
    }
    const [newProposalTitle, setNewProposalTitle] = useState("")
    const [newProposalDescription, setNewProposalDescription] = useState("")

    const handleAddProposal = () => {
        console.log("Adding Proposal")
    }
	const handleClose = () => {
		setNewProposalDescription("");
		setNewProposalTitle("");
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen} color="secondary">
				Add A Proposal
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add A Proposal</DialogTitle>
				<DialogContent>
					<TextField
						value={newProposalTitle}
						onChange={(e) => setNewProposalTitle(e.target.value)}
						margin="dense"
						id="proposal-title"
						label="New Proposal Title"
						type="text"
						fullWidth
					/>
					<TextField
						value={newProposalDescription}
						onChange={(e) => setNewProposalDescription(e.target.value)}
						margin="dense"
						id="proposal-description"
						label="New Proposal Description"
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
							handleAddProposal();
							handleClose();
						}}
						color="secondary"
					>
						Add Proposal
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}