import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyApplictions = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/job-applications?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data))
    //   .catch((err) => console.log(err));
    axios
      .get(`http://localhost:3000/job-applications?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, [user.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>job</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((jobs, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={jobs.company_logo} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{jobs.company}</div>
                      <div className="text-sm opacity-50">{jobs.location}</div>
                    </div>
                  </div>
                </td>

                <td>{jobs.title}</td>
                <td>
                  {jobs.salaryRange.min} - {jobs.salaryRange.max} BDT
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplictions;
