import React, { useState } from 'react'

export default function Register() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div>
            <input 
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <input 
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
        </div>
    )
}
