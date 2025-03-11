import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";


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
            path: "/register",
            element: <Register />,
        }
      ]
    },
  ]);

  export default router;


