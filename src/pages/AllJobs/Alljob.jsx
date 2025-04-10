import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobsCard from "../Home/HotJobsCard";

const Alljob = () => {
  const { jobs, loading } = useJobs();
  const [sort,setSort] = useState(false);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">All Jobs</h1>
      <div className="bg-base-200 py-5 p-3 flex items-center">
        <button onClick={() => setSort(!sort)} className="btn btn-primary btn-sm">Sort by</button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Alljob;
