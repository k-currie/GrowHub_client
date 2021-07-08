import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../css/NewUser.css';
import LogoSmall from '../../css/LogoSmall.png';
import '../../css/Login.css';

const NewUser = ({postUser, getDate, newUserCheck}) => {

    const year = getDate().slice(6, 11)

    const [formData, setFormData] = useState({
            shortName: "",
            email: "",
            password: "",
            position: "ORDINARY",
            yearJoined: year
    })

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleYear = (e) => {
        formData['year'] = parseInt(e.target.value);
        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postUser(formData);
    }

    // Conditional renders set by state in MainContainer/postUser() for 'newUserCheck'
    const submitResponse = () => {
        if (newUserCheck === 1){
            console.log("login for submitresponse")
            return <h4>That username already exists. Please try another</h4>
        }
        if (newUserCheck === 2){
            return <h4>That email address already exists. Please try another or contact administrator</h4>
        }
        if (newUserCheck === 3){
            return <div>
                        <h4>Account created successfully. Click 'Login' to be redirected to the login page</h4>
                        <button>
                        <Link to='/login'>Login</Link>
                        </button>
                    </div>
        }
        if (newUserCheck === 4){
            return <h4>Max number of users allowed has been reached. Contact administrator</h4>
        }
    }

    return(
        <>
        <div id="new-user-container">

            <div id="logo-grid2">
                <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="text-grid">
                <p className="newUserHeader">Enter your details to create an account</p>
                <p className="newUserText">If you require administrator account functionality, please contact the site administrator at admin@allotmentplots.co.uk</p>
            </div>

            <div id="form-grid">
                <form onSubmit={handleSubmit}>
                    <div className="form-wrapper">

                    <div className="form_field form_input">
                    <label className="form_text" name='shortName'>Username:</label>
                    <input className="field_size" type='text' name='shortName' id='shortName' placeholder='Sharkanator' onChange={handleChange} required />
                    </div>

                    <div className="form_field form_input">
                    <label className="form_text" name='email'>Email Address:</label>
                    <input className="field_size" type='text' name='email' id='email' placeholder='soilmuncher96@yipee.com' onChange={handleChange} required /> 
                    </div>

                    <div className="form_field form_input">
                    <label className="form_text" name='password'>Password:</label>
                    <input className="field_size" type='password' name='password' id='password' onChange={handleChange} required /> 
                    </div>

                    <div className="form_field form_input">
                    <label className="form_text" name='yearJoined'>Year you first got your plot (yyyy) </label>
                    <input className="field_size2" type='number' name='yearJoined' id='yearJoined' min='1990' max={year} defaultValue={year} onChange={handleYear} required /> 
                    </div>

                    <button className="createButton" type='submit'>Create Account</button>

                    </div>
                </form>
                {submitResponse()}
            </div>
        </div>
        </>
    )

}

export default NewUser;