import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
