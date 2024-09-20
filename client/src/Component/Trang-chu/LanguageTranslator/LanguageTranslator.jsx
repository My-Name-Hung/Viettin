import React, { useEffect } from "react";

function LanguageTranslator() {
  useEffect(() => {
    // Set gtranslate settings before loading the script
    window.gtranslateSettings = {
      default_language: "vi", // Keep Vietnamese as the default language
      languages: ["vi", "ko", "en"],
      wrapper_selector: ".gtranslate_wrapper",
    };
    console.log(window.gtranslateSettings);

    // Load the gtranslate script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    // Clean up: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return <div className="gtranslate_wrapper"></div>;
}

export default LanguageTranslator;
