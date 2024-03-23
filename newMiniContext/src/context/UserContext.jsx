import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"

const userContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <userContext.Provider value={{user, setUser}} >
            {children}
        </userContext.Provider>
    )
}

export const useContextProvider = () => {
    return useContext(userContext)
}