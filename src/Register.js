import axios from "axios"
import React, { useState } from 'react'
import { backend_url } from "./config"

export default function Register() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const registerUser = async() => {
        let body = {
            email,
            password
        }
        await axios.post(`${backend_url}/users/register`, body).then((res) => console.log(res)).catch((err) => console.error(err))
        
    }

    return (
        <div>
            <label for="email">Email:</label>
            <input 
                id="email"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <label for="password">Password:</label>
            <input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <button
                onClick={() => registerUser()}
            >
                Register
            </button>
        </div>
    )
}
