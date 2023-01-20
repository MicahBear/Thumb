import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./pages/Calender";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/ErrorPage";
import First from "./pages/first";

let router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
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
