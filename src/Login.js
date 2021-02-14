import { Dialog } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"
import axios from "axios"
import React, { useState } from "react"
import Cookies from "universal-cookie"
import { backend_url } from "./config"


export default function Login() {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
        setOpen(true);
    }
     const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

   
	const handleClose = () => {
	    setemail("");
		setpassword("");
		setOpen(false);
	};
    const loginUser = async() => {
        let body = {
            email,
            password
        }
        await axios.post(`${backend_url}/users/login`, body)
        .then((res) => {
            const cookies = new Cookies();
            cookies.set("token", res.data.token)
        })
        .catch((err) => console.error(err))
        
    }
	return (
		<div>
			<Button onClick={handleClickOpen} color="secondary">
                Login
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Login</DialogTitle>
				<DialogContent>
					<TextField
						margin="dense"
						label="Email"
						type="text"
						fullWidth
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
					/>
					<TextField
						margin="dense"
						id="password"
						label="Password"
						type="text"
						fullWidth
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
					/>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						onClick={() => {
							loginUser()
							handleClose();
						}}
						color="secondary"
					>
						Login
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}