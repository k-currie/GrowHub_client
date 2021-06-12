import React from 'react';
import Plot from './Plot';

// Props Incoming = plots, user and onClick of some kind

// Props outgoing: 
    //  Plot = Plot, and maybe our onclick methodology, selecting plot for plotDetail
    //  PlotDetail = SelectedPlot

// Initially this will render a list of all Plots
// Then when we click on a Plot, it will render PlotDetail
// Conditional rendering, useState. If selected plot, render plotdetail. If not, continue rendering plotlist


// Requires a function to map through our plots prop, and render all our Plot objects, that takes in the plot prop

const PlotList = ({currentUser, plots}) =>{

    const plotArray = plots.map((plot, index) => {
        return(
            <li key={index}><Plot plot={plot} currentUser={currentUser}/></li>
        )
    })

    return(
        <>
            <h3>This is our list of plots, that renders many Plot objects</h3>
            <p> We can click on a Plot, to access PlotDetail</p>
            <ul>
                {plotArray}
            </ul>
        </>
    )

}

export default PlotList