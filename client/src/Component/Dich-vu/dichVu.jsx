import React from 'react'

import ThamdinhBDS from "./thamDinhBDS/thamdinhBDS.jsx"
import NavBar from "../Trang-chu/Navbar/navBar.jsx";
import LanguageTranslator from "../Trang-chu/LanguageTranslator/LanguageTranslator";

function dichVu() {
  return (
    <div>
      <NavBar />
      <LanguageTranslator />
      <ThamdinhBDS />
    </div>
  )
}

export default dichVu