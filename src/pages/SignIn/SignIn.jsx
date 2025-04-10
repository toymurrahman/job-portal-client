import React, { useContext } from "react";
import { motion } from "framer-motion";
import animationData from "../../../public/signinLottie.json"; 
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const forme = location?.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res.user.email);
        const user = { email: res.user.email };
        axios
          .post("https://server-job-portal.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
        // navigate(forme)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-green-300 opacity-30 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 opacity-30 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
      <div className="flex flex-row-reverse items-center justify-between w-full max-w-screen-lg relative z-10">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white p-8 rounded-2xl shadow-2xl w-full md:w-1/3 relative"
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            SignIn
          </h2>
          <form onSubmit={handleSignIn} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button type="submit" className="btn btn-primary w-full btn-lg">
                Sign-In
              </button>
            </motion.div>
          </form>
          <SocialLogin />
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
