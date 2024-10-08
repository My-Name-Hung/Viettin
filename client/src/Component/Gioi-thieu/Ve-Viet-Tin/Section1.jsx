import React, { useRef } from "react";
import "./section1.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import assets
import background from "../../../assets/AboutUs/section1.jpg";
import bgsection2 from "../../../assets/AboutUs/bgsection2.jpg";
import hdqt from "../../../assets/AboutUs/HĐQT.jpg";

// import react-icon
import { IoIosArrowRoundDown } from "react-icons/io";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

function Section1() {
  const section2Ref = useRef(null);
  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Section 1 */}
      <section className="relative w-full h-screen overflow-hidden">
        <LazyLoadImage
          src={background}
          alt="background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Wrapper for text content */}
        <div className="relative z-10 flex justify-start items-center h-full px-8 lg:px-20">
          <div className="text-white max-w-6xl">
            <div className="flex flex-row gap-1 pb-4 fade-in-animation">
              <a
                href="/ve-chung-toi"
                className="font-semibold text-lg lg:text-xl"
              >
                VỀ <b className="text-blue-200">VIETTIN VALUATION</b>
              </a>
              <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-lg lg:text-xl p-[2px]"></i>
            </div>

            <div>
              <span className="text-3xl xl:ml-14 lg:text-5xl font-extrabold fade-in-slide-up">
                CÔNG TY CỔ PHẦN THẨM ĐỊNH GIÁ VIỆT TÍN
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            className="text-white text-sm flex flex-col items-center focus:outline-none animate-bounce"
          >
            cuộn xuống
            <IoIosArrowRoundDown className="text-3xl" />
          </button>
        </div>
      </section>

      {/* Section 2 - Notice from the Board */}
      <section
        ref={section2Ref}
        className="relative w-full pb-40 md:pb-[18rem]"
      >
        <ParallaxBanner
          layers={[
            {
              image: bgsection2,
              speed: -20,
              scale: [1, 1.6],
            },
          ]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
          <div className="absolute items-center justify-center h-auto">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              <center>Thông điệp từ Hội đồng Quản trị </center>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-4">
          {/* Image of HĐQT */}
          <div className="relative z-10 flex w-full md:w-3/5 lg:w-1/2 justify-center mb-10 md:mb-0">
            <LazyLoadImage
              src={hdqt}
              alt="Board Message"
              loading="lazy"
              className="object-cover w-full  h-auto rounded-md shadow-xl hover:shadow-2xl border-gray-400 border-1 md:max-w-[60%] max-w-[70%]"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 w-full md:w-1/2 p-8 bg-[#eeeeef] rounded-lg shadow-lg text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed text-justify">
              Chúng tôi cam kết mang đến những giá trị tốt nhất cho khách hàng
              và đối tác của chúng tôi. Sự phát triển bền vững của công ty là
              nhờ sự tin tưởng và ủng hộ của các bạn. Hội đồng Quản trị chúng
              tôi sẽ không ngừng nỗ lực để đưa{" "}
              <a className="text-[#2648b5]"> VietTin Valuation </a> lên tầm cao
              mới.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
