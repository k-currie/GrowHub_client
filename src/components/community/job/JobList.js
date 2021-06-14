import React from 'react';
import Job from './Job.js';
import {Link} from 'react-router-dom';

const JobList = ({jobs, currentUser}) =>{

// Sorts jobs by deadline date, most urgent at top
const jobsByDeadline = jobs.sort((a, b) => {
    a = a.deadline.split('/').reverse().join('');
    b = b.deadline.split('/').reverse().join('');
    return a < b ? -1 : a > b ? 1 : 0;
});

const jobsRenderedByDeadline = jobsByDeadline.map((job, index) => {
    return(
        <li key={index}><Job job={job} currentUser={currentUser}/></li>
    )
});

return (
    <>
        <h1>This is the list of jobbies</h1>
        
        <ul>
            {jobsRenderedByDeadline}
        </ul>

        <button>
            <Link to='/jobs/new'>
                New Job
            </Link>
        </button>
    </>
);
}


export default JobList;