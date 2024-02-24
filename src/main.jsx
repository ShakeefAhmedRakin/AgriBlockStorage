import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import DashboardHome from "./components/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      // SHARED ROUTES
      {
        path: "/",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/seedstools",
        element: <></>,
      },
      {
        path: "/machines",
        element: <></>,
      },
      {
        path: "/seedstools",
        element: <></>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
