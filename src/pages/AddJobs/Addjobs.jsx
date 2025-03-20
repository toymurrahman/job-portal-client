import React from "react";
import { motion } from "framer-motion";
const Addjobs = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
      >
        <h2 className="text-3xl  font-extrabold text-center  mb-6">
          Post a Job
        </h2>

        <form className="space-y-6">
          {/* Job Details */}
          <motion.div whileHover={{ scale: 1.02 }} className="border-b pb-4">
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
                <select className="select select-bordered">
                  <option disabled>Pick a Job Type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className="form-control flex flex-col gap-1.5">
                <label className="label font-medium">Job Field</label>
                <select className="select select-bordered">
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
          <motion.div whileHover={{ scale: 1.02 }} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Salary & Compensation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="form-control">
                <label className="label font-medium">Min Salary</label>
                <input
                  type="number"
                  name="minSalary"
                  placeholder="Min"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-medium">Max Salary</label>
                <input
                  type="number"
                  name="maxSalary"
                  placeholder="Max"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label font-medium">Currency</label>
                <select className="select select-bordered">
                  <option disabled>Select Currency</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Job Description */}
          <motion.div whileHover={{ scale: 1.02 }} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Job Description
            </h3>

            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Describe the job responsibilities and expectations..."
                rows="4"
                required
              ></textarea>
            </div>
          </motion.div>

          {/* Requirements & Responsibilities */}
          <motion.div whileHover={{ scale: 1.02 }} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Requirements & Responsibilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label font-medium">Job Requirements</label>
                <textarea
                  className="textarea textarea-bordered"
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
                  placeholder="List responsibilities here..."
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </motion.div>

          {/* Company & HR Info */}
          <motion.div whileHover={{ scale: 1.02 }} className="border-b pb-4">
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
                <label className="label font-medium">Company Logo URL</label>
                <input
                  type="text"
                  name="companyLogo"
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
                  name="hrName"
                  placeholder="HR Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control flex flex-col gap-1.5">
                <label className="label font-medium">HR Email</label>
                <input
                  type="email"
                  name="hrEmail"
                  placeholder="HR Email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* Deadline */}
          <div className="form-control flex flex-col gap-1.5">
            <label className="label font-medium">Application Deadline</label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              type="submit"
              className="btn btn-primary w-full text-lg font-semibold transition-all duration-300"
            >
              Submit Job Posting
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Addjobs;
