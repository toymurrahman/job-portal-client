import React from "react";
import {
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  Bookmark,
  DollarSign,
} from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    responsibilities,
    location,
    jobType,
    category,
    company,
    requirements,
    company_logo,
    salaryRange,
    description,
    applicationDeadline,
  } = job;
  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <figure>
              <img className="w-16" src={company_logo} alt="Company Logo" />
            </figure>

            {/* Job Title & Tags */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{company}</h2>
              <div className="flex items-center text-gray-600 text-sm space-x-3 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin size={16} className="text-blue-500" /> {location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={16} className="text-blue-500" /> {jobType}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign size={16} className="text-blue-500" />{" "}
                  {salaryRange.min} - {salaryRange.max} BDT
                </span>
              </div>
            </div>

            {/* Apply Button & Save */}
            <div className="flex items-center gap-3">
              <Link to={`/JobApply/${_id}`}> 
              <button className="btn btn-primary">Apply for Job</button>
              </Link>
              <button className="btn btn-outline btn-circle">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content: Job Details & Sidebar */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Job Details */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Job Description
            </h2>
            <p className="text-gray-600">{description}</p>

            <h3 className="text-xl font-semibold mt-5 text-gray-800">
              Key Responsibilities
            </h3>
            <div>
              {responsibilities.map((resp, index) => (
                <div
                  key={index}
                  className="text-gray-600 flex items-center ml-2 gap-2"
                >
                  <li> {resp}</li>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold mt-5 text-gray-800">
              Requirements
            </h3>
            <div className="flex items-center ml-2 gap-3">
              <span>
                {requirements.map((req, index) => (
                  <div key={index}>
                    <li>{req}</li>
                  </div>
                ))}
              </span>
            </div>
          </div>

          {/* Job Overview Sidebar */}
          <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Job Overview
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-500" size={20} />
                <span>
                  Expiration date: <strong>{applicationDeadline}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" size={20} />
                <span>
                  Location: <strong>{location}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-500" size={20} />
                <span>
                  Job Title: <strong>{title}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-blue-500" size={20} />
                <span>
                  Hours: <strong>50h/week</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <DollarSign className="text-blue-500" size={20} />
                <span>
                  Salary:{" "}
                  <strong>
                    {" "}
                    {salaryRange.min} - {salaryRange.max} BDT
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
