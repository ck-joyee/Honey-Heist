import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Components/Layout/Main";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
            //   {
            //     path: "",
            //     element: ,
            //   },
             
      ]
    },
  ]);