import React, { useRef } from "react";
import { BiSolidReport } from "react-icons/bi";
import {
  FaBuilding,
  FaCheckCircle,
  FaHome,
  FaLandmark,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUserTie,
  FaWarehouse,
} from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ParallaxBanner } from "react-scroll-parallax";
import Footer from "../../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import "./thamdinhBDS.css";

// import assets
import bgsection2 from "../../../assets/AboutUs/bgsection2.jpg";
import bg from "../../../assets/DichVu/ThamdinhBDS/bg_bds.jpg";

function thamdinhBDS() {
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
                  <b className="text-blue-200">Dịch vụ thẩm định giá</b>
                </a>
                <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-lg lg:text-xl p-[2px]"></i>
              </div>

              <div>
                <span className="text-[28px] md:text-[50px] font-extrabold fade-in-slide-up">
                  THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN - XÁC ĐỊNH GIÁ TRỊ THỰC
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
            <div className="property-card-container relative w-[90%] h-[15rem] md:h-52">
              {/* Initial State: Title and Home Icon */}
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <FaBuilding className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[38px] leading-[1.2em] text-center group-hover:text-[#1d3a99] transition-colors duration-300">
                  Thẩm định giá Bất Động Sản
                </h3>
              </div>

              {/* Hover State: Details */}
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Bất Động Sản
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Thẩm định giá bất động sản là một quá trình quan trọng giúp
                  xác định giá trị thực tế của một tài sản, nhằm hỗ trợ các
                  quyết định mua bán, chuyển nhượng, đầu tư, hoặc các hoạt động
                  tài chính liên quan.
                </p>
              </div>
            </div>
          </div>

          <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
            <div className="absolute items-center justify-center h-auto">
              <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
                <center>Các Loại Bất Động Sản Chúng Tôi Thẩm Định</center>
              </span>
            </div>
          </div>

          {/* Section with Four Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20 mx-auto w-[90%]">
            {/* Card 1 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-52">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <FaHome className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Nhà ở, căn hộ
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Nhà ở và căn hộ
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Bao gồm các loại hình bất động sản dân cư như nhà phố, biệt
                  thự, căn hộ chung cư.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-52">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <FaMapMarkedAlt className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Đất nền
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Đất nền
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Bao gồm đất dự án, đất nông nghiệp, đất công nghiệp, đất
                  thương mại và dịch vụ.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-52">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <FaLandmark className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Bất động sản thương mại
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Bất động sản thương mại
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Văn phòng, trung tâm thương mại, cửa hàng, khách sạn, và khu
                  nghỉ dưỡng.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="property-card-container w-full md:w-1/4 h-[12rem] md:h-52">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <FaWarehouse className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Bất động sản Công nghiệp
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Bất động sản Công nghiệp
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Khu công nghiệp, nhà xưởng, kho bãi.
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

            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <FaUserTie className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Đội ngũ chuyên gia uy tín
                </h3>
                <p className="text-gray-600">
                  Với nhiều năm kinh nghiệm trong lĩnh vực thẩm định giá và am
                  hiểu sâu sắc về thị trường bất động sản.
                </p>
              </div>

              {/* Card 2 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <FaCheckCircle className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Phương pháp định giá chính xác
                </h3>
                <p className="text-gray-600">
                  Sử dụng các phương pháp tiên tiến và cập nhật xu hướng mới
                  nhất trên thị trường.
                </p>
              </div>

              {/* Card 3 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <FaShieldAlt className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Dịch vụ chuyên nghiệp
                </h3>
                <p className="text-gray-600">
                  Cam kết thời gian hoàn thành nhanh chóng, đáp ứng yêu cầu khắt
                  khe của khách hàng.
                </p>
              </div>

              {/* Card 4 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 pb-0 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <BiSolidReport className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Báo cáo minh bạch
                </h3>
                <p className="text-gray-600">
                  Cung cấp báo cáo chi tiết, dễ hiểu và được chấp nhận rộng rãi
                  bởi các tổ chức tài chính và pháp lý.
                </p>
              </div>
            </div>
          </div>

          <div className="relative px-4 py-8 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-blue-50 hover:shadow-lg hover:rounded-lg">
            {/* Title with effect */}
            <p className="text-[36px] leading-[1.2em] text-gray-800 mb-4 fade-in-slide-up">
              <b>Liên hệ</b> với chúng tôi
            </p>
            {/* Description with subtle animation */}
            <p className="text-[20px] leading-[1.5em] text-gray-600 mb-6 fade-in-slide-up delay-200">
              Hãy liên hệ ngay với chúng tôi để được tư vấn miễn phí và trải
              nghiệm dịch vụ thẩm định giá bất động sản chuyên nghiệp, chính xác
              và nhanh chóng.
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

export default thamdinhBDS;
