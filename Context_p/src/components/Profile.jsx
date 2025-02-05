import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
export  default function Profile(props) {
    
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}
