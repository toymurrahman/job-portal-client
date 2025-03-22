import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const Application = useLoaderData();
  console.log(Application);

  return (
    <div>
      <h2>View: {Application.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {Application.map((application, index) => (
              <tr key={application._id}>
                <td>{index + 1}</td>
                <td>{application.applicant_email}</td>
                <td>{application.job_id}</td>
                <td>{application.favoriteColor}</td>
              </tr>
            ))}
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
