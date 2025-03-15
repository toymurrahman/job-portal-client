import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [jobs,setJobs] = useState([]);

    // Fetching data from API
    useEffect(() => {
        fetch('https://http://localhost:3000/jobs')
       .then(response => response.json())
       .then(data => setJobs(data))
    }
    ,[]);

    return (
        <div>
            <div>
                {
                    jobs.map(job => (
                        <HotJobsCard key={job._id} job={job} />
                    ))
                }
            </div>
        </div>
    );
};

export default HotJobs;