import React from 'react'
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import LanguageTranslator from '../../Trang-chu/LanguageTranslator/LanguageTranslator';
import Footer from '../../Trang-chu/Footer/Footer.jsx'
import Section from './Section/Section.jsx';

function tuyenDung() {
  return (
    <div>
      <NavBar />
      <LanguageTranslator />
      <Section />
      <Footer />
    </div>
  );
}

export default tuyenDung