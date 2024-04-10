import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Signup from "./Signup";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
let allRoutes=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'Sign Up',
    element:<Signup/>

  },
  {
    path:'Contact Us',
    element:<Contact/>
  }
 
])

root.render(
  <React.StrictMode>
     <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);
