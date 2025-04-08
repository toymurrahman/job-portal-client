import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    company,
    company_logo,
    salaryRange,
    description,
    status,
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
      </div>
      <div className="flex flex-wrap gap-2 ml-5">
        <span className="badge badge-dash badge-primary"> {jobType} </span>
        <span className="badge badge-dash badge-accent"> {category} </span>
      
      </div>
      <div className="card-body">
        <h2 className="card-title">  {title} </h2>
        <p>
          {description}
        </p>           
        <div className="flex items-center justify-between ">
        <div className="">
          <h4 className="text-xs "> Salary: {salaryRange.min} - {salaryRange.max} BDT </h4>          
        </div>
        <div >
          <Link to={`/jobs/${_id}`} > 
          <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default HotJobsCard;
