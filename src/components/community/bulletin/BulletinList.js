import React from 'react';
import Bulletin from './Bulletin.js';
import {Link} from 'react-router-dom';

const BulletinList = ({currentUser, sortedBulletins}) =>{

// map through BulletinItems prop and render a Bulletin.js for each bulletin it comes across
const bulletinArray = sortedBulletins.map((bulletin, index) => {
    return(
        <li key={index}><Bulletin bulletin={bulletin} currentUser={currentUser}/></li>
    )
})

return (
    <>
        <h3>This is the list of bulletin items</h3>
        <ul>
            {bulletinArray}
        </ul>

        <button>
            <Link to='/bulletins/new'>
                New Bulletin
            </Link>
        </button>
    </>
);
}


export default BulletinList;