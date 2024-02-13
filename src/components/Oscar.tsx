import React from "react"

type oscarCont = {
    children: React.ReactNode
}

export const Oscar = (props:oscarCont) =>{
    return <div>{props.children}</div>
}