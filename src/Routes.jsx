import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";
import DashboardOne from "pages/DashboardOne";
import CarownerResponce from "pages/CarownerResponce";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "dashboardone",
      element: <DashboardOne />,
    },
    {
      path: "carownerresponce",
      element: <CarownerResponce />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
