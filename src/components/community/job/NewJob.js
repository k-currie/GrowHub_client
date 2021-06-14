import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const NewJob = ({currentUser, postJob, communalAreas, getDate}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: "",
        area: {},
        deadline: "",
        difficulty: 0
    })

    const [formCheck, setFormCheck] = useState(null);


    const communalAreaOptions = communalAreas.map((communalArea, index) => {
        return <option value={index} key={index}>{communalArea.areaName}</option>
    });


    const handleChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
      }

    const handleArea = (e) => {
        formData.area = communalAreas[e.target.value];
        // If we want to make plots selectable, when we select a plot we need to make area['type'] = plot
        formData.area['type'] = 'communal';
        setFormData(formData);
    }

    const handleDifficulty = (e) => {
        formData['difficulty'] = parseInt(e.target.value)
        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postJob(formData);
        setFormCheck(1);
    }

    return(
    <>
        <h3>Use this form to enter a new job needing doing</h3>

        <form onSubmit={handleSubmit}>
            <label name='title'>Title:</label>
            <input type='text' name='title' id='title' onChange={handleChange} required />

            <label name='body'>The Job:</label>
            <input type='text' name='body' id='body' onChange={handleChange} required /> 

            <label name='area'>Area it applies to:</label>
            <select name='area' id='area' onChange={handleArea}>
                <option selected disabled>Area</option>
                {communalAreaOptions}
            </select>
            
            <label name='deadline'>Due Date:</label>
            <input type='text' name='deadline' id='deadline' placeholder={date} onChange={handleChange} required />

            <label name='difficulty'>Difficulty:</label>
            <input type='number' name='difficulty' id='difficulty' min='1' max='5' onChange={handleDifficulty} required />

            <button type='submit'>Submit New Job</button>
        </form>

        {formCheck ? <Redirect to="/community" />:null}

    </>
    )
}

export default NewJob;