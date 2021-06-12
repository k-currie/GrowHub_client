import React from 'react';
import BulletinList from './bulletin/BulletinList.js'
import JobList from './job/JobList.js'


// The purpose of this file is to render our BulletinList AND JobList

// Incoming props = BulletinItems, Jobs, User, onClick, onSubmit

// Outgoing props = BulletinItems, Jobs, User, onClick, onSubmit

const Community = ({currentUser, bulletins, jobs}) => {


    return(
        <>
        <h3>This is the Community page, where 2 lists will be rendered</h3> 
        <BulletinList bulletins={bulletins} currentUser={currentUser} />
        <JobList jobs={jobs} currentUser={currentUser} />
        </>
    )
}

export default Community;