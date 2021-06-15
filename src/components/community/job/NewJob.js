import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const NewJob = ({currentUser, postJob, communalAreas, getDate}) => {

    const date = getDate();

    const [formData, setFormData] = useState({
        date: date,
        author: currentUser,
        title: "",
        body: "",
        communal: {},
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
        formData.communal = communalAreas[e.target.value];
        setFormData(formData);
    }

    const handleDeadline = () => {
        const stringDate = formData.deadline
        const dd = stringDate.slice(8, 10);
        const mm = stringDate.slice(5, 7);
        const yyyy = stringDate.slice(0, 4);
        const newDeadline = `${dd}/${mm}/${yyyy}`
        console.log(newDeadline)
        formData.deadline = newDeadline;
        setFormData(formData);
    }

    const handleDifficulty = (e) => {
        formData['difficulty'] = parseInt(e.target.value)
        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleDeadline();
        postJob(formData);
        setFormCheck(1);
    }

    const getMinDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${yyyy}-${mm}-${dd}`
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
            <select name='area' id='area' min={date} onChange={handleArea}>
                <option selected disabled>Area</option>
                {communalAreaOptions}
            </select>
            
            <label name='deadline'>Due Date:</label>
            <input type='date' name='deadline' id='deadline' min={getMinDate()} default={getMinDate()} onChange={handleChange} required />

            <label name='difficulty'>Difficulty:</label>
            <input type='number' name='difficulty' id='difficulty' min='1' max='5' onChange={handleDifficulty} required />

            <button type='submit'>Submit New Job</button>
        </form>

        {formCheck ? <Redirect to="/community" />:null}

    </>
    )
}

export default NewJob;