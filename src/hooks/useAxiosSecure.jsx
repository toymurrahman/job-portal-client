import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://server-job-portal.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      error => {
        if (error.status === 401 || error.status === 403) {
          console.log("unauthorized access");
          signOutUser()
            .then(() => {
              console.log('User signed out due to unauthorized access');
              navigate("/signin", { replace: true });
            })
            .catch((err) => console.log(err));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;




