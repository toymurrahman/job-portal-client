import axios from "axios";
import React, { useEffect, useState } from "react";


const useJobs = () => {
  const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://server-job-portal.vercel.app/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);
  return { jobs, loading };
};

export default useJobs;
