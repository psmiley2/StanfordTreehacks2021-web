import axios from "axios"
import React, { useState } from 'react'
import Cookies from "universal-cookie"
import { backend_url } from "./config"

export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

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
                onClick={() => loginUser()}
            >
                Login
            </button>
        </div>
    )
}
