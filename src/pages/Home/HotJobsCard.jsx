import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const HotJobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    company,
    requirements,
    company_logo,
    salaryRange,
    description,
    status,
    applicationDeadline
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2 p-4">
      <figure>
        <img
            className="w-16"
          src={company_logo}
          alt="Company Logo"
        />
      </figure>
      <div>
        <h4 className="text-xl">{company}</h4>
        <h4 className="flex gap-1 items-center text-sm">  <FaMapMarkerAlt />  {location}</h4>
      </div>
      {/* <div className="flex gap-2 items-center ml-auto">
      <div className="status status-info animate-bounce"> </div> 
        <span className="text-sm text-gray-500">{status}</span>
      </div> */}
      </div>
      <div className="flex flex-wrap gap-2 ml-5">
        <span className="badge badge-dash badge-primary"> {jobType} </span>
        <span className="badge badge-dash badge-accent"> {category} </span>
        <span className="badge badge-dash badge-secondary"> {status} </span>
      </div>
      <div className="card-body">
        <h2 className="card-title">  {title} </h2>
        <p>
          {description}
        </p>
        <div className="flex gap-2 flex-wrap">
            {
                requirements.map((req, index) => (
                    <span key={index} className="badge badge-soft badge-primary gap-2">{req}</span>
                ))
            }
        </div>
            <div className="badge  text-xs">Application Deadline:    {applicationDeadline} </div>
        <div className="flex items-center justify-between ">
        <div className="">
          <h4 className="text-xs "> Salary: {salaryRange.min} - {salaryRange.max} BDT </h4>          
        </div>
        <div className=" ">
          <button className="btn btn-primary">Apply</button>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default HotJobsCard;
