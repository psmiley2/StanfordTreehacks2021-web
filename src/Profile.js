import axios from "axios";
import React from 'react';
import Cookies from "universal-cookie";
import { backend_url } from "./config";

export default function Profile() {
    const cookies = new Cookies();
    const config = {
        headers: { Authorization: `Bearer ${cookies.get('token')}` }
    };
    
    const getProfileInfo = async () => {
        await axios.get(`${backend_url}/users/me`, config)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }

    getProfileInfo()
    return (
        <div>
            Profile
            <button onClick={() => getProfileInfo()}>Get Info</button>
        </div>
    )
}
