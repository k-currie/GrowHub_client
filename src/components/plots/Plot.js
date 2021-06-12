import React from 'react';
import {Link} from 'react-router-dom'

// Props Incoming:
    // Takes in a plot prop


// Will return an li element with plot name, plot picture, whatever we add down the line

// will need to link to the plot detail page with an onclick

const Plot = ({plot, currentUser}) =>{

    const url = "/plots" + plot.id;

    return(
        <>
        <p> This is a plot.js </p>
        <Link to={url}><p> This is {plot.number} </p></Link>
        </>
    )

}

export default Plot;