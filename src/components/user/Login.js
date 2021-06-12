import React, {useEffect, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';


const Login = ({users, setCurrentUser, currentUser}) => {

    const [formData, setFormData] = useState({})

    // Handler to update formData with the user input of 'username' and 'password'
    // We may want two handlers when we come to encrypting the password. One for username, one for pw
    const handleChange = (e) => {
      formData[e.target.id] = e.target.value;
      setFormData(formData)
    }

    // When we click submit for form, run findUser function
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const handleLogin = () => {
        console.log("findUser function starting to run")

        // Find the user in the database with the same username
        const foundUser = users.find((user) => user.shortName === formData.username)

        // If a user has been found
        if (foundUser){
            console.log("user has been found")

            // And if the password is the same as the one entered:
            if (foundUser.password === formData.password){
                console.log("user found, password matched")
                setCurrentUser(foundUser);
            } 
            // Otherwise reload the login page (Would like some kind of rendered error here, probably another component at /login/fail route)
            else {
                console.log("user password not match")
                refreshPage();
            }
        }
        // If the user has not been found
        else {
            console.log("user not found")
            refreshPage();
        }
    }

    return(
        <>
            <h4>Please Login to Continue.</h4>

            <form onSubmit={handleSubmit}>
                <label name='username'>Enter your username:</label>
                <input type='text' placeholder='Username' name='username' id='username' onChange={handleChange} required/>

                <label name='password'>Enter your password:</label>
                <input type='password' placeholder='******' name='password' id='password' onChange={handleChange} required/>

                <button type='submit' >Login</button>

                {currentUser ? <Redirect to="/" /> : null}
            </form>
        </>
    )
}

export default Login;