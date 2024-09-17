import React, { useEffect, useRef, useState } from "react";
import "./Carousels.css";

//import assets
import section1 from "../../assets/carousel/section1.mp4";

//import react-icon
import { IoIosArrowRoundDown } from "react-icons/io";

function Carousels() {
  //Effect Text _ Section 1
  const [text, setText] = useState("");
  const fullText = "Nền tảng định giá tự động, nhanh chóng và chính xác";
  const textRef = useRef(null);
  const headingRef = useRef(null);

  // Effect Scrolldow from section 1 to section 2
  const section2Ref = useRef(null);

  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    //Effect Text_Section 1
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
        if (headingRef.current) {
          headingRef.current.classList.remove("typing-animation");
        }
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.classList.add("show-subtitle");
          }
        }, 85);
      }
    }, 75);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={section1} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-85 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1
            ref={headingRef}
            className="typing-animation text-4xl md:text-5xl lg:text-5xl font-bold mb-8"
            style={{
              background:
                "linear-gradient(to right, #FFFFFF, #e0f0ff, #6dd5fa)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {text}
          </h1>
          <p
            ref={textRef}
            className="text-base md:text-lg lg:text-xl opacity-0 transition-opacity duration-1000" // Removed 'typing-animation-subtitle'
            style={{
              color: "rgba(255, 255, 255, 0.8)", // Slightly transparent white
              textShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // Subtle text shadow for contrast
            }}
          >
            <span className="company-name">Việt Tín</span> cung cấp dịch vụ thẩm
            định giá bất động sản cùng nền tảng thẩm định giá tự động, xác định
            giá trị doanh nghiệp, đào tạo thẩm định giá Online một cách chuyên
            nghiệp và chất lượng
          </p>
        </div>

        {/* ... Scroll Down ... */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            className="text-white text-sm flex flex-col items-center focus:outline-none animate-bounce" // Apply animation directly
          >
            cuộn xuống
            <IoIosArrowRoundDown className="text-3xl" />
          </button>
        </div>
      </section>

      <section ref={section2Ref} className="pt-10">
        hh
      </section>
    </div>
  );
}

export default Carousels;
