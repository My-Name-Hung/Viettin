import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

// Import component
import Home from "./Component/Trang-chu/Home/Home";
import VeVietTin from "./Component/Gioi-thieu/Ve-Viet-Tin/VeVietTin.jsx"
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
  {
    path: "/ve-chung-toi",
    element: (
      <div>
        <VeVietTin />
      </div>
    ),
  },
]);

function App() {
  return (
    <NextUIProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </NextUIProvider>
  );
}

export default App;
