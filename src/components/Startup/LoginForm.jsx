import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { loginUser } from '../../API/user'
import { storageRead, storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    //Local state
    //set loading efter pressing on the submit button and disable the button once it's clicked
    const [ loading, setLoading ] = useState(false)
    //if something went wring while trying to log in
    const [ apiError, setApiError ] = useState(null)

    //Side Effects
    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [ user, navigate ]) //Empty depencencies only run once
    //Event Handlers
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResp] = await loginUser(username)
        if (error !==null) {
            setApiError(error)
        }
        if (userResp !== null) {
            storageSave(STORAGE_KEY_USER, userResp)
            setUser(userResp)
        }
        setLoading(false);
    };


    //Render functions
    const errorMessage = (() => {
        if(!errors.username) {
            return null
        }

        if(errors.username.type === 'required'){

            return <span> Username is required</span>
        }
        if(errors.username.type === 'minLength') {

            return <span> Username is too short, it has to be at least 3 characters</span>
        }
    })()
     return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        placeholder="Maryam"
                        {...register("username", usernameConfig)} 
                        />
                        { errorMessage }
                        
                </fieldset>

                <button type="submit" disabled={ loading }>Continue</button>
                { loading && <p>Logging in...</p> }
                { apiError && <p>{ apiError }</p> }
            </form>
        </>

    )
}
export default LoginForm; 