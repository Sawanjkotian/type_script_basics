import React from "react"

type Buttonprops = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

export const Button = (props:Buttonprops) =>{
    return  <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
}