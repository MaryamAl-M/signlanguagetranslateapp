import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";

// Context object is responsible of exposing the state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext) //this returns an object which is the user and setuser
}

//Provider is responsible of managing state
const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)

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
