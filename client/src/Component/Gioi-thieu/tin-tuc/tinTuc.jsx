import React from 'react'
import Section1 from './Section1/Section1'
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator";
import Footer from "../../Trang-chu/Footer/Footer.jsx";
import Section2 from './Section2/Section2.jsx';

function tinTuc() {
  return (
    <div>
      <NavBar />
      <LanguageTranslator />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}

export default tinTuc