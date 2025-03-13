import React from 'react';
import banner2 from "../../assets/banner2.jpg"
import icon from "../../assets/icon.png"

import { motion } from "motion/react"
import { FaUpload, FaEnvelopeOpenText, FaBriefcase } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white p-6">
      
        {/* Left Side - Text & Search */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            There Are <span className="text-blue-600">93,178</span> Postings <br />
            Here For You!
          </h1>
          <p className="text-gray-600">Find Jobs, Employment & Career Opportunities</p>
  
         
          <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4 w-full">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="input input-bordered w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="City or postcode"
              className="input input-bordered w-full md:w-1/3"
            />
            <button className="btn btn-primary w-full md:w-auto">Find Jobs</button>
          </div>
  
          {/* Popular Searches */}
          <p className="text-gray-500 text-sm">
            <span className="font-semibold">Popular Searches:</span> Designer, Developer, Web, iOS, PHP, Senior, Engineer
          </p>
        </div>
  
        {/* Right Side - Image & Floating Cards */}
        <div className="relative  w-md ">
          <img
            src={banner2} // Replace with real image
            alt="Professional"
            className="rounded-xl shadow-lg "
          />
  
          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-10 -left-10 bg-white p-3 shadow-lg rounded-lg flex items-center gap-3"
          >
            <FaEnvelopeOpenText className="text-yellow-500 text-2xl" />
            <p className="text-sm">Work Inquiry From Ali Tufan</p>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-32 right-0 bg-white p-3 shadow-lg rounded-lg flex items-center gap-3"
          >
            <FaBriefcase className="text-red-500 text-2xl" />
            <p className="text-sm">Creative Agency - Startup</p>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-10 left-5 bg-white p-3 shadow-lg rounded-lg flex items-center gap-3"
          >
            <FaUpload className="text-blue-500 text-2xl" />
            <p className="text-sm">Upload Your CV <br /><span className="text-gray-500 text-xs">It only takes a few seconds</span></p>
          </motion.div>
        </div>
      </div>
    );
};

export default Banner;