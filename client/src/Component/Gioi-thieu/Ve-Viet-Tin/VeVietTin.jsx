import React from 'react'

// Import Component
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator.jsx";
import Section1 from './Section1.jsx';
import Section2 from './section2/Section2.jsx';
import Section3 from './section3/Section3.jsx';
import Footer from '../../Trang-chu/Footer/Footer.jsx';
import Section4 from './section4/Section4.jsx';
import Section5 from "./section5/Section5.jsx";

function VeVietTin() {
  return (
    <div>
      <NavBar />
      <LanguageTranslator />
      <Section1 /> {/* Nền và thông điệp từ ban quản trị */}
      <Section2 /> {/* Sứ mệnh và tầm nhìn */}
      <Section3 /> {/* Lộ trình ESG */}
      <Section4 /> {/* Mạng lưới chi nhánh/văn phòng đại diện */}
      <Section5 /> {/* Đọc pdf */}
      <Footer />
    </div>
  );
}

export default VeVietTin