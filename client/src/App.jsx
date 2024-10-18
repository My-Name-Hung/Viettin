import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

// Import component
import Home from "./Component/Trang-chu/Home/Home";
import VeVietTin from "./Component/Gioi-thieu/Ve-Viet-Tin/VeVietTin.jsx";
import Career from "./Component/Gioi-thieu/tuyen-dung/tuyenDung.jsx";
import Tintuc from "./Component/Gioi-thieu/tin-tuc/tinTuc.jsx";
import Lienhe from "./Component/Gioi-thieu/lien-he/lienHe.jsx";

// Import component dich vu
import ThamdinhBDS from "./Component/Dich-vu/thamDinhBDS/thamdinhBDS.jsx";
import ThamdinhDS from "./Component/Dich-vu/thamDinhDS/thamdinhDS.jsx";
import ThamdinhDN from "./Component/Dich-vu/thamDinhDN/thamdinhDN.jsx";
import ThamdinhDT from "./Component/Dich-vu/thamDinhDT/thamdinhDT.jsx";
import DichvuTV from "./Component/Dich-vu/dichVuTV/dichvuTV.jsx";

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
        <ThamdinhBDS />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-ds",
    element: (
      <div>
        <ThamdinhDS />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-tri-doanh-nghiep",
    element: (
      <div>
        <ThamdinhDN />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-du-an-dau-tu",
    element: (
      <div>
        <ThamdinhDT />
      </div>
    ),
  },
  {
    path: "/dich-vu-tu-van",
    element: (
      <div>
        <DichvuTV />
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
