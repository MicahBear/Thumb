import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./pages/Calender";
import Dashboard from "./pages/Dashboard";
import First from "./pages/first";

let router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
