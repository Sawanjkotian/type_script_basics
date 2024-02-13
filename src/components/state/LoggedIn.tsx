import { useState } from "react"

export const LoggedIn = () =>{


    const [isloggedIn, setisloggedIn] = useState(false)

    const handleLogin = () =>{
        setisloggedIn(true)
    }

    const handleLogout = () =>{
        setisloggedIn(false)
    }
    
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isloggedIn ? 'loggedIn' : 'Logged out'}</div>
        </div>
    )
}