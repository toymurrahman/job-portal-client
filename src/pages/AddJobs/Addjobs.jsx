import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/submit.json";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Addjobs = () => {
     const [submitted, setSubmitted] = useState(false);
     const {user} = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("https://server-job-portal.vercel.app/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
      >
        {submitted ? (
          <div className="text-center ">
            <Lottie
              animationData={animationData}
              loop={false}
              className="w-48 mx-auto"
            />
            <h2 className="text-2xl font-bold text-green-600 mt-4">
              Job Posted Successfully!
            </h2>
            <p className="text-gray-600">
              We will review your job post and get back to you soon.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <div className="mb-4">
                <Link to={"/"}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      type="submit"
                      className="btn btn-success w-full btn-lg text-white "
                    >
                      View Jobs
                    </button>
                  </motion.div>
                </Link>
              </div>

              <div>
                <Link to={"/addJobs"}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <button
                      type="button"
                      className="btn btn-success w-full btn-lg text-white"
                      onClick={() => window.location.reload()}
                    >
                      Add More
                    </button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl  font-extrabold text-center  mb-6">
              Post a Job
            </h2>

            <form onSubmit={handleAddJob} className="space-y-6">
              {/* Job Details */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-b pb-4"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Job Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Job Title"
                      className="input input-bordered focus:ring focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Job Location"
                      className="input input-bordered focus:ring focus:ring-blue-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">Job Type</label>
                    <select name="jobType" className="select select-bordered">
                      <option disabled>Pick a Job Type</option>
                      <option>Hybrid</option>
                      <option>Remote</option>
                      <option>Part-Time</option>
                      <option>Full-Time</option>
                      <option>Contractual</option>
                      <option>Intern</option>
                    </select>
                  </div>

                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">Job Field</label>
                    <select name="category" className="select select-bordered">
                      <option disabled>Pick a Job Field</option>
                      <option>Engineering</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                      <option>Education</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Salary & Compensation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-b pb-4"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Salary & Compensation
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="form-control">
                    <label className="label font-medium">Min Salary</label>
                    <input
                      type="number"
                      name="min"
                      placeholder="Min"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">Max Salary</label>
                    <input
                      type="number"
                      name="max"
                      placeholder="Max"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">Currency</label>
                    <select name="currency" className="select select-bordered">
                      <option disabled>Select Currency</option>
                      <option>USD</option>
                      <option>EUR</option>
                      <option>BDT</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Job Description */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-b pb-4"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Job Description
                </h3>

                <div className="form-control">
                  <textarea
                    className="textarea textarea-bordered"
                    name="description"
                    placeholder="Describe the job responsibilities and expectations..."
                    rows="4"
                    required
                  ></textarea>
                </div>
              </motion.div>

              {/* Requirements & Responsibilities */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-b pb-4"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Requirements & Responsibilities
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label font-medium">
                      Job Requirements
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      name="requirements"
                      placeholder="List job requirements here..."
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">
                      Job Responsibilities
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      name="responsibilities"
                      placeholder="List responsibilities here..."
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
              </motion.div>

              {/* Company & HR Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-b pb-4"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Company & HR Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">
                      Company Logo URL
                    </label>
                    <input
                      type="text"
                      name="company_logo"
                      placeholder="Company Logo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">HR Name</label>
                    <input
                      type="text"
                      name="hr_name"
                      placeholder="HR Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control flex flex-col gap-1.5">
                    <label className="label font-medium">HR Email</label>
                    <input
                      type="email"
                      name="hr_email"
                      defaultValue={user.email}
                      placeholder="HR Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              {/* Deadline */}
              <div className="form-control flex flex-col gap-1.5">
                <label className="label font-medium">
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg font-semibold transition-all duration-300"
                >
                  Submit Job Posting
                </button>
              </motion.div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Addjobs;
