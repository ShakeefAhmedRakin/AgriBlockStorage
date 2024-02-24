import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import DashboardHome from "./components/DashboardHome";
import Seeds from "./components/Seeds";

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
        path: "/seeds",
        element: <Seeds></Seeds>,
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
