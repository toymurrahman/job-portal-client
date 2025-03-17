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
          path: '/jobs/:id',
          element: <PrivateRoute> <JobDetails /> </PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/JobApply/:id',
          element: <PrivateRoute> <Jobapply/> </PrivateRoute> ,
          // loader: ({params}) => fetch(`http://localhost:3000/JobApply/${params.id}`)
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        }
      ]
    },
  ]);

  export default router;


