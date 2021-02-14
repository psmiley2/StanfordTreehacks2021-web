import { Button } from "@material-ui/core"
import axios from "axios"
import React from 'react'
import Cookies from "universal-cookie"
import { backend_url } from "./config"

export default function Logout() {
    const logoutUser = async () => {
        const cookies = new Cookies();
        const config = {
            headers: { Authorization: `Bearer ${cookies.get('token')}` }
        };

        await axios.post(`${backend_url}/users/logout`, {}, config).then((res) =>{
            console.log(res)
        }).catch((err) => {
            console.error(err)
        })
        cookies.set("token", "")
    }

    return (
        <div>
            <Button color="secondary"
                onClick={() => {logoutUser()}}
            >
                Logout
            </Button>
        </div>
    )
}
