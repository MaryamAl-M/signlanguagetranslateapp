import { useForm } from 'react-hook-form'
import { loginUser } from '../../API/user'
import React, { useEffect, useState } from "react";

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [ loading, setLoading ] = useState(false)

    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, user] = await loginUser(username)
        setLoading(false);
    };

    console.log(errors);

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

            </form>
        </>

    )
}
export default LoginForm; 