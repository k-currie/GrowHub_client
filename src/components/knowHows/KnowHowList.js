import React from 'react';
import KnowHow from './KnowHow.js'

// Props Incoming:
    // knowHows & user

// Props Outgoing:
    // KnowHow - knowHow, user

// Functions:
    // Map through all the prop knowHows and render a KnowHow, passing in the knowHow object

// Purpose:
    // Render a list of all KnowHows
    // Allow us in the future to then click on a KnowHow to edit etc
    // Also renders the form for a NewKnowHow

const KnowHowList = ({currentUser, knowHows}) =>{

    const knowHowArray = knowHows.map((knowHow, index) => {
        return(
            <li key={index}><KnowHow knowHow={knowHow} currentUser={currentUser}/></li>
        )
    })

    return(
        <>
            <h3>This will be our KnowHowList</h3>
            <p> And a button for a 'Add your knowHow!'</p>
            <ul>
                {knowHowArray}
            </ul>
        </>
    )
}

export default KnowHowList;