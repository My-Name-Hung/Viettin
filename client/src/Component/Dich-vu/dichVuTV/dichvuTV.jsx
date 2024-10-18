import React, { useRef } from "react";
import { FaBuilding } from "react-icons/fa";
import { GiBuyCard, GiTakeMyMoney } from "react-icons/gi";
import { IoIosArrowRoundDown } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { PiStrategy, PiTreeStructure } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ParallaxBanner } from "react-scroll-parallax";
import Footer from "../../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import "./dichvuTV.css";

// import assets
import bgsection2 from "../../../assets/AboutUs/bgsection2.jpg";
import bg from "../../../assets/DichVu/DichvuTV/bg.jpg";

function dichvuTV() {
  const section2Ref = useRef(null);
  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar />
      <LanguageTranslator />
      <div className="h-full w-full">
        <section className="relative w-full h-screen overflow-hidden">
          <LazyLoadImage
            src={bg}
            alt="background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

          {/* Wrapper for text content */}
          <div className="relative z-10 flex justify-start items-center h-full px-8 lg:px-20">
            <div className="text-white max-w-6xl">
              <div className="flex flex-row gap-1 pb-4 fade-in-animation">
                <a className="font-semibold text-lg lg:text-xl">
                  <b className="text-blue-200">Dịch vụ tư vấn</b>
                </a>
                <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-lg lg:text-xl p-[2px]"></i>
              </div>

              <div>
                <span className="text-3xl lg:text-5xl leading-[1.2em] font-extrabold fade-in-slide-up">
                  TƯ VẤN DOANH NGHIỆP TOÀN DIỆN: M&A, <br /> QUẢN LÝ, ĐẦU TƯ,
                  CHIẾN LƯỢC, TÁI CẤU TRÚC.
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

        {/* Section 2 - Property Search Card */}
        <section ref={section2Ref} className="relative w-full pb-6">
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
                <center>Giới thiệu</center>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="property-card-container relative w-[90%] h-[20rem] md:h-52">
              {/* Initial State: Title and Home Icon */}
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <FaBuilding className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[38px] leading-[1.2em] text-center group-hover:text-[#1d3a99] transition-colors duration-300">
                  Tư vấn doanh nghiệp
                </h3>
              </div>

              {/* Hover State: Details */}
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Dịch vụ tư vấn
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Doanh nghiệp
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Trong môi trường kinh doanh đầy thách thức và cạnh tranh ngày
                  nay, các doanh nghiệp cần có những đối tác tư vấn chuyên
                  nghiệp để xây dựng, phát triển và duy trì sự bền vững. Với mục
                  tiêu mang đến giải pháp toàn diện, chúng tôi cung cấp dịch vụ
                  tư vấn hỗ trợ doanh nghiệp ở mọi giai đoạn phát triển, từ giai
                  đoạn đầu tư đến giai đoạn sáp nhập và mua bán.
                </p>
              </div>
            </div>
          </div>

          <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
            <div className="absolute items-center justify-center h-auto">
              <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
                <center>Tại sao cần tư vấn Doanh nghiệp?</center>
              </span>
            </div>
          </div>

          {/* Section with Four Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20 mx-auto w-[90%]">
            {/* Card 1 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-[17rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <MdManageHistory className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Quản Lý
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Dịch vụ tư vấn
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Cải thiện quy trình quản Lý
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Giúp các doanh nghiệp nâng cao hiệu quả hoạt động và quy trình
                  quản lý doanh nghiệp.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-[17rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <GiTakeMyMoney className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Đầu Tư
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Dịch vụ tư vấn
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Hỗ trợ các quyết định đầu tư
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Hỗ trợ các doanh nghiệp trong việc đưa ra các quyết định sáng
                  suốt và đúng đắn trong các dự án đầu tư.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-[17rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <PiStrategy className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Chiến Lược
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Dịch vụ tư vấn
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Tư vấn chiến lược
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Giúp doanh nghiệp định hướng các chiến lược phát triển bền
                  vững trong tương lai.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-[17rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <PiTreeStructure className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <a className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Tái Cấu Trúc <br /> Doanh Nghiệp
                </a>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Dịch vụ tư vấn
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Tái cấu trúc doanh nghiệp
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Tư vấn các giải pháp tối ưu cấu trúc vận hành cho doanh
                  nghiệp.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-[17rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <GiBuyCard className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <a className="text-[#2648b5] font-bold text-[20px] md:text-[24px] 2xl:hidden text-center">
                  M&A (Sáp Nhập và Mua Bán Doanh Nghiệp)
                </a>
                <a className="hidden 2xl:text-[#2648b5] 2xl:font-bold 2xl:text-[20px] 2xl:block 2xl:text-center">
                  M&A (Sáp Nhập và <br /> Mua Bán Doanh Nghiệp)
                </a>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Dịch vụ tư vấn
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  M&A (Sáp nhập và Mua bán)
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Tư vấn các chính sách, chiến lược tăng trưởng doanh nghiệp
                  thông qua hợp tác.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[10vh_0] p-[10vh_0]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800">
                Tại sao chọn chúng tôi?
              </h2>
            </div>

            <div>
              <p>
                Với đội ngũ chuyên gia dày dặn kinh nghiệm và hiểu biết sâu sắc
                về thị trường, chúng tôi cam kết mang lại giá trị tối đa cho
                doanh nghiệp thông qua các dịch vụ tư vấn toàn diện. Cho dù bạn
                đang tìm kiếm sự tăng trưởng, tối ưu hóa, hay chuẩn bị cho các
                thương vụ M&A, chúng tôi sẵn sàng đồng hành và cung cấp các giải
                pháp phù hợp nhất.
              </p>
            </div>
          </div>

          <div className="relative px-4 py-8 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-blue-50 hover:shadow-lg hover:rounded-lg">
            {/* Title with effect */}
            <p className="text-[36px] leading-[1.2em] text-gray-800 mb-4 fade-in-slide-up">
              <b>Liên hệ</b> với chúng tôi
            </p>
            {/* Description with subtle animation */}
            <p className="text-[20px] leading-[1.5em] text-gray-600 mb-6 fade-in-slide-up delay-200">
              Ngay bây giờ, hãy liên hệ với chúng tôi để thảo luận về nhu cầu
              của bạn và khám phá cách chúng tôi có thể giúp bạn đạt được mục
              tiêu kinh doanh!
            </p>

            {/* Button with hover effect */}
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-[#2648b5] text-white text-lg font-semibold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none"
            >
              Liên hệ ngay
            </a>
          </div>
        </section>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default dichvuTV;
