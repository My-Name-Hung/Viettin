import React, { useRef } from "react";
import { FaBuilding, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { FaArrowsToCircle } from "react-icons/fa6";
import { GiSellCard } from "react-icons/gi";
import { GrPlan } from "react-icons/gr";
import { IoIosArrowRoundDown } from "react-icons/io";
import { PiTreeStructure } from "react-icons/pi";
import { TbBusinessplan } from "react-icons/tb";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ParallaxBanner } from "react-scroll-parallax";
import Footer from "../../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import "./thamdinhDN.css";

// import assets
import bgsection2 from "../../../assets/AboutUs/bgsection2.jpg";
import bg from "../../../assets/DichVu/ThamdinhDN/bg.jpg";

function thamdinhDN() {
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
                <span className="text-3xl lg:text-5xl font-extrabold fade-in-slide-up">
                  THẨM ĐỊNH GIÁ TRỊ DOANH NGHIỆP - GIẢI PHÁP TOÀN DIỆN CHO DOANH
                  NGHIỆP CỦA BẠN
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
                  Thẩm định giá trị Doanh Nghiệp
                </h3>
              </div>

              {/* Hover State: Details */}
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Giá Trị Doanh Nghiệp
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Thẩm định giá doanh nghiệp là quá trình xác định giá trị thực
                  của một công ty dựa trên nhiều yếu tố như tài sản, nợ phải
                  trả, thu nhập, tiềm năng tăng trưởng, và vị thế cạnh tranh
                  trên thị trường. Điều này không chỉ giúp doanh nghiệp hiểu rõ
                  giá trị hiện tại mà còn cung cấp cái nhìn chiến lược cho các
                  kế hoạch tương lai.
                </p>
              </div>
            </div>
          </div>

          <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
            <div className="absolute items-center justify-center h-auto">
              <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
                <center>Tại sao cần định giá giá trị doanh nghiệp?</center>
              </span>
            </div>
          </div>

          {/* Section with Four Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20 mx-auto w-[90%]">
            {/* Card 1 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[19rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <GiSellCard className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Mua bán và sáp nhập (M&A)
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá trị doanh nghiệp
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Trong mua bán và sáp nhập
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Định giá chính xác giúp các bên tham gia hiểu rõ giá trị của
                  công ty, từ đó đưa ra quyết định hợp lý trong các thương vụ
                  mua bán, hợp nhất hoặc sáp nhập.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[19rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <GrPlan className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Kế hoạch phát triển
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá trị doanh nghiệp
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Cho việc xây dựng kế hoạch phát triển
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Xác định giá trị doanh nghiệp giúp các chủ doanh nghiệp xây
                  dựng kế hoạch phát triển bền vững và tối ưu hóa nguồn lực.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[19rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <TbBusinessplan className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Đầu tư
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá trị doanh nghiệp
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Trong đầu tư
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Các nhà đầu tư cần biết doanh nghiệp họ dự định đầu tư có giá
                  trị thực sự là bao nhiêu để đưa ra những quyết định tài chính
                  đúng đắn.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[19rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <PiTreeStructure className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Tái cấu trúc hoặc thoái vốn
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá trị doanh nghiệp
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Trong tái cấu trúc hoặc thoái vốn
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Khi doanh nghiệp muốn tái cơ cấu hoặc thoái vốn, định giá là
                  bước quan trọng để xác định mức giá phù hợp cho các cổ phần
                  hoặc tài sản cần thoái.
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
            <div className="grid grid-cols-1 md:flex md:flex-row lg:flex lg:flex-row gap-8">
              {/* Card 1 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <FaUserTie className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Kinh nghiệm chuyên sâu
                </h3>
                <p className="text-gray-600">
                  Đội ngũ chuyên gia của chúng tôi có nhiều năm kinh nghiệm
                  trong lĩnh vực định giá và đã thực hiện thành công nhiều dự án
                  lớn.
                </p>
              </div>

              {/* Card 2 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <FaArrowsToCircle className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Phương pháp tiếp cận toàn diện
                </h3>
                <p className="text-gray-600">
                  Chúng tôi áp dụng các phương pháp định giá tiên tiến, kết hợp
                  với sự hiểu biết sâu rộng về thị trường để đảm bảo mang lại
                  kết quả chính xác và khách quan nhất.
                </p>
              </div>

              {/* Card 3 */}
              <div className="reason-card flex flex-col justify-center items-center text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                <FaShieldAlt className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Dịch vụ tận tâm và bảo mật cao
                </h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết bảo mật tuyệt đối thông tin của khách hàng
                  và luôn tận tâm phục vụ để đạt được sự hài lòng cao nhất.
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
              Nếu bạn đang có nhu cầu thẩm định giá trị doanh nghiệp, hãy liên
              hệ với chúng tôi để được tư vấn chi tiết và nhận báo giá hợp lý.
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

export default thamdinhDN;
