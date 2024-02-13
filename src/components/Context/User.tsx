import { Button } from "../Button"

export const User = () =>{

    const handleLogin =()=>{

    }

    const handleLogout = () =>{
        
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User name is</div>
            <div>Email Id is</div>
        </div>
    )
}