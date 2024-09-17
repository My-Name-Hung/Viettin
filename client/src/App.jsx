import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Import component
import Home from "./Component/Home/Home";

//Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
]);

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
