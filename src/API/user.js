import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL

//Making a function that checks if the user that tries to login already has an acount
const checkForUser = async (username) => {

    try {
        //fetching data from the API
        const response = await fetch(`${apiUrl}?username=${username}`)
        console.log(apiUrl)

        if (!response.ok) {
            throw new Error('Could not complete request. ')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//A function that creates new users
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if(!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error){
        return [ error.message, [] ]
    }
}

//A functions that returns errors if there is an error or redirect the user to createUser function
export const loginUser = async (username) => {
    const [ checkError, user ] = await checkForUser(username)
    
    if (checkError !== null) {
        return [ checkError, null ]
    }

    if (user.length > 0) {
        //if user does not exist...
        return [ null, user.pop() ]
    }
   return await createUser(username)
}