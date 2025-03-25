import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/submit.json";
import { Link, useNavigate, useParams } from "react-router-dom";
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

    const jobApplication = {
        job_id: id,
        applicant_email: user.email,
        github,
        linkedin,
        coverLetter,
        resume,
    }
    fetch('http://localhost:3000/job-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobApplication),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
    .catch(err => console.log(err))

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
            <div className="mt-6 flex gap-4 justify-center">

            <div className="mb-4">
             <Link to={'/myApplications'}>
             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button type="submit" className="btn btn-success w-full btn-lg text-white ">
                 View applictions
                </button>
              </motion.div>
             </Link>
            </div>

            <div >
             <Link to={'/'}>
             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button type="submit" className="btn btn-success w-full btn-lg text-white">
                  Apply More
                </button>
              </motion.div>
             </Link>
            </div>



            </div>
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
