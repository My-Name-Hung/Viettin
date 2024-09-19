import React from "react";

import NavBar from "../Navbar/navBar.jsx";
import Procedure from "../Procedure/Procedure.jsx";
import Project from "../Project/Project.jsx";
import Carousels from "../Carousel/Carousels.jsx";
import Thank from "../Thank/Thank.jsx";
import Partners from "../Partners/Partners.jsx";
import Footer from "../Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <NavBar />
      <Carousels />
      <Procedure />
      <Project />
      <Thank />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
