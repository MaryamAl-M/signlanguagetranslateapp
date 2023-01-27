import { createContext, useContext } from "react"
import React, { useEffect, useState } from "react"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageRead } from "../utils/storage"

// Context object is responsible of exposing the state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) //this returns an object which is the user and setuser
}

//Provider is responsible of managing state
const UserProvider = ({ children }) => {
    //magic strings/numbers
    const [ user, setUser ] = useState( storageRead(STORAGE_KEY_USER))

    //state is an object
    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
            { children }
        </UserContext.Provider>
    )
}
export default UserProvider
