import React from "react"


type Inputprops = {
    value?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: Inputprops) =>{
    return <input type='text' value={props.value} onChange={props.handleChange}/>
}