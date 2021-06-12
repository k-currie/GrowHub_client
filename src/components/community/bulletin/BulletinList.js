import React from 'react';
import Bulletin from './Bulletin.js'

// The purpose of this file is to render a list of bullletins and also render the 
// new bulletin file

// Inward props = user & BulletinItems & onClick

// Outgoing props = user

const BulletinList = ({bulletins, currentUser}) =>{

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = bulletins.map((bulletin, index) => {
    return(
        <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
    )
})
//will need to reverse this ^ array to put it into descending date order. 

return (
    <>
        <h1>This is the list of bulletin items</h1>
        <p>Also have a button to add a new bulletin item</p>
        <ul>
            {bulletinArray}
        </ul>
    </>
);
}


export default BulletinList;