import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://server-job-portal.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div>
      <h1>Total posted Jobs : {jobs.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
           
          {
            jobs.map((job , index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                 <Link to={`/viewApplications/${job._id}`} >
                 <button className="btn btn-link">View Applications</button>
                 </Link>
                </td>
              </tr>
            ))
          }
        
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
