import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Logo from '../../css/Logo.png';
import '../../css/Login.css';



const Login = ({users, setCurrentUser, currentUser}) => {

    const [formData, setFormData] = useState({})

    const [loginCheck, setLoginCheck] = useState(0)

    // Handler to update formData with the user input of 'username' and 'password'
    // We may want two handlers when we come to encrypting the password. One for username, one for pw
    const handleChange = (e) => {
      formData[e.target.id] = e.target.value;
      setFormData(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {

        // Re-initialise the state that provides us with the conditional render errors for wrong username/password
        setLoginCheck(0)

        // Find the user in the database with the same username
        const foundUser = users.find((user) => user.shortName === formData.username)

        // If a user has been found
        if (foundUser){

            // And if the password is the same as the one entered:
            if (foundUser.password === formData.password){
                setCurrentUser(foundUser);
                        } 
            // Else return an error, via setLoginCheck and conditional rendering
            else {
                setLoginCheck(1);
            }
        }
        // If the user has not been found, as above
        else {
            setLoginCheck(2);
        }
    }

    return(
        <>

        <div class="background" id="login-grid-container">

            <div id="logo-grid">
                <img class="logo" src={Logo} alt="Logo" />
            </div>

            <div id="polytunnel-grid" class="polytunnel" >
                <div id="poly-grid-container">
                    <form id="poly1" onSubmit={handleSubmit}>

                        <div class="form-inner">
                            <label class="label" name='username'>Username:</label>
                            <input class="input" type='text' placeholder='Username' name='username' id='username' onChange={handleChange} required/>
                        </div>
                        <div class="form-inner">
                            <label class="label" name='password'>Password:</label>
                            <input class="input" type='password' placeholder='******' name='password' id='password' onChange={handleChange} required/>
                        </div>
                        
                        <div class="form-inner">
                            <button class="loginPageButton" type='submit' >Login</button>
                        </div>
                        <div class="form-inner">
                            {loginCheck === 1 ? <h3 class="no-margin">Incorrect Password</h3> :null}
                            {loginCheck === 2 ? <h3 class="no-margin">User does not exist</h3> :null}
                        </div>
                        {currentUser ? <Redirect to="/" /> : null}
                    </form>

                    <div id="poly2" class="form-inner">
                        <button  class="createAccountButton">
                            <Link class="create-account" to="/users/new">Create Account</Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div id="account-grid" class="create-background">
              <button  class="createAccountButton">
                    <Link class="create-account" to="/users/new">Create Account</Link>
              </button>
            </div> */}  
        </div>
        </>
    )
}

export default Login;