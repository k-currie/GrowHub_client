import React from 'react';
import BulletinList from './bulletin/BulletinList.js'
import JobList from './job/JobList.js'

const Community = ({currentUser, sortedBulletins, jobs}) => {

    return(
        <>
        <BulletinList sortedBulletins={sortedBulletins} currentUser={currentUser} />

        <JobList jobs={jobs} currentUser={currentUser} />
        </>
    )
}

export default Community;