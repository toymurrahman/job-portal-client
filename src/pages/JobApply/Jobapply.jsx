import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/submit.json";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Jobapply = () => {
 
  const {id} = useParams();
  const {user} = useAuth();
  console.log(id, user);
  const [submitted, setSubmitted] = useState(false);

  

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const formData = e.target;
    const github = formData.github.value;
    const linkedin = formData.linkedin.value;
    const coverLetter = formData.coverLetter.value;
    const resume = formData.resume.files[0];




    console.log("Application Submitted:", github, linkedin, coverLetter, resume);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        {submitted ? (
          <div className="text-center">
            <Lottie
              animationData={animationData}
              loop={false}
              className="w-48 mx-auto"
            />
            <h2 className="text-2xl font-bold text-green-600 mt-4">
              Application Submitted!
            </h2>
            <p className="text-gray-600">
              We will review your application and get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
              Apply for Job
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="url"
                name="github"
                placeholder="GitHub URL"
                className="input input-bordered w-full"
                required
              />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                className="input input-bordered w-full"
                required
              />
              <input
                type="file"
                accept=".pdf,.docx"
                name="resume"
                className="file-input file-input-bordered w-full"
                required
              />
              <textarea
                name="coverLetter"
                placeholder="Cover Letter"
                className="textarea textarea-bordered w-full"
                rows="4"
                required
              ></textarea>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button type="submit" className="btn btn-primary w-full btn-lg">
                  Submit Application
                </button>
              </motion.div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobapply;
