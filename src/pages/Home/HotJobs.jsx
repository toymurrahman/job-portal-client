import React, { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://server-job-portal.vercel.app/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="container mx-auto px-4 pt-4">
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mt-10">Hot Jobs</h1>
        <p className="text-gray-600 text-center">
          Find the best opportunities for your career now
        </p>
      </div>
      <br />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
