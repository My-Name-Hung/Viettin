import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

// Import component
import Home from "./Component/Trang-chu/Home/Home";
import VeVietTin from "./Component/Gioi-thieu/Ve-Viet-Tin/VeVietTin.jsx";
import Career from "./Component/Gioi-thieu/tuyen-dung/tuyenDung.jsx";
import Dichvu from "./Component/Dich-vu/dichVu.jsx"
import Tintuc from "./Component/Gioi-thieu/tin-tuc/tinTuc.jsx"
import Lienhe from "./Component/Gioi-thieu/lien-he/lienHe.jsx"

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
  {
    path: "/tuyen-dung",
    element: (
      <div>
        <Career />
      </div>
    ),
  },
  {
    path: "/tin-tuc",
    element: (
      <div>
        <Tintuc />
      </div>
    ),
  },
  {
    path: "/lien-he",
    element: (
      <div>
        <Lienhe />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-bds",
    element: (
      <div>
        <Dichvu />
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
