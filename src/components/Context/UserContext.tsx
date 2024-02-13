import { createContext } from "react"

export type AuthUser = {
    name:string
    email:string
}

export const UserContext = createContext(null)