import React, { useRef, useState, useEffect } from "react";

import NavBar from "../Navbar/navBar.jsx"
import Carousels from "../Carousel/Carousels.jsx";

function Home() {

  return (
    <div>
      <NavBar />
      <Carousels />
    </div>
  );
}

export default Home