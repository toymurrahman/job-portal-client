import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../components/JobsDetails/JobDetails";
import PrivateRoute from "./Private/PrivateRoute";
import Jobapply from "../pages/JobApply/Jobapply";
import MyApplictions from "../pages/MyApplications/MyApplictions";
import Addjobs from "../pages/AddJobs/Addjobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewAppications/ViewApplications";
import ProductCard from "../pages/Products/ProductCard";
import Shop from "../pages/Products/Shop";
import Alljob from "../pages/AllJobs/Alljob";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      errorElement: <div>Not Found</div>,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/jobs",
            element: <Alljob />,
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoute> <JobDetails /> </PrivateRoute> ,
          loader: ({params}) => fetch(`https://server-job-portal.vercel.app/jobs/${params.id}`)
        },
        {
          path: '/JobApply/:id',
          element: <PrivateRoute> <Jobapply/> </PrivateRoute> ,
          // loader: ({params}) => fetch(`https://server-job-portal.vercel.app/JobApply/${params.id}`)
        },
        {
          path: '/myApplications',
          element: <PrivateRoute> <MyApplictions/> </PrivateRoute> ,
        },
        {
          path: '/addJobs',
          element: <PrivateRoute> <Addjobs/> </PrivateRoute> ,
        },
        {
          path: '/myPostedJobs',
          element: <PrivateRoute> <MyPostedJobs/> </PrivateRoute> ,
        },
        {
          path:"/viewApplications/:job_id",
          element: <PrivateRoute> <ViewApplications/> </PrivateRoute> ,
          loader: ({params}) => fetch(`https://server-job-portal.vercel.app/job-applications/jobs/${params.job_id}`) 
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        },
        {
            path: "/products",
            element: <Shop />,
            loader: () => fetch("http://localhost:3000/productsCount")
        }
      ]
    },
  ]);

  export default router;


