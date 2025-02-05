import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";


export default function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const{setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})

    }
    return (
        <div >  
            <h2>Login</h2>
            <div className=" flex flex-wrap justify-center m-1" >
            < input type='text'
            className="  border-1 w-3/5 rounded-sm pl-1 mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />
            
            < input type='text'
            value={password}
            className=" border-1  w-3/5 rounded-sm pl-1 mb-2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            </div>
            <button 
            onClick={handleSubmit}>Submit</button>

        </div>
    )
}