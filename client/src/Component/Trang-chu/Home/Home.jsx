import React from "react";

import Carousels from "../Carousel/Carousels.jsx";
import Footer from "../Footer/Footer.jsx";
import LanguageTranslator from "../LanguageTranslator/LanguageTranslator.jsx";
import NavBar from "../Navbar/navBar.jsx";
import Partners from "../Partners/Partners.jsx";
import Procedure from "../Procedure/Procedure.jsx";
import Project from "../Project/Project.jsx";
import Thank from "../Thank/Thank.jsx";
import Customer from "../Customer/customer.jsx";

function Home() {
  return (
    <div>
      <LanguageTranslator /> {/* Thay đổi ngôn ngữ */}
      <NavBar /> {/* Thanh điều hướng */}
      <Carousels /> {/* Section 1 (video) + Section 2 (Scroll) */}
      <Procedure /> {/* Section 3 (Quy Trình) */}
      <Project /> {/* Section 3 (Các dự án) */}
      <Thank /> {/* Section 4 (lời cam kết) */}
      <Customer /> {/* Section 5 (Gia tri DN) */}
      <Partners /> {/* Section 6 (các đối tác và ngân hàng) */}
      <Footer /> {/* Section 7 */}
    </div>
  );
}

export default Home;
