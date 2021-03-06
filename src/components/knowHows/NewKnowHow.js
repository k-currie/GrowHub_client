import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../css/Knowhow.css';
import '../../css/NewUser.css';
import LogoSmall from '../../css/LogoSmall.png';


const NewKnowHow = ({currentUser, postKnowHow, months, getDate}) =>{

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: "",
        month: ""
    })
    const [formCheck, setFormCheck] = useState(null);


    const monthOptions = months.map((month, index) => {
        return <option value={index} key={index}>{month}</option>
    });

    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const handleMonth = (e) => {
        formData['month'] = months[e.target.value].toUpperCase();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
        postKnowHow(formData);
        setFormCheck(1);
    }

    // Date string, User object, Title string, Body string, Month ENUM (currently string made here)

    return(
        <>

        <div id="knowledge-container">

            <div id="logo-grid2">
                 <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="header-grid">
                <p class="new-kHw">Enter your knowhow</p>
            </div>

            <div id="form-grid2">
                <form onSubmit={handleSubmit}>

                <div class="form-wrapper">

                    <div class="form_field form_input">
                        <label class="form_text" name='title'>Title:</label>
                        <input class="field_size" type='text' name='title' id='title' onChange={handleChange} required />
                    </div>

                    <div class="form_field form_input">
                        <label class="form_text" name='body'>Your Know How:</label>
                        <input class="field_size3" type='text' name='body' id='body' maxlength="255" onChange={handleChange} required /> 
                    </div>

                    <div class="form_field form_input">
                        <label class="form_text" name='month'>Month your knowhow applies to:</label>
                        <select class="field_size" name='month' id='month' onChange={handleMonth}>
                            <option selected disabled>Month</option>
                            {monthOptions}
                        </select>
                    </div>

                    <div id="form-button2">
                        <button class="edit-button2" type='submit'>Submit new knowhow</button>
                    </div>
                </div>
                </form>

                {formCheck ? <Redirect to="/knowhows" />:null}
            </div>
        </div>
        </>
    )

}

export default NewKnowHow;