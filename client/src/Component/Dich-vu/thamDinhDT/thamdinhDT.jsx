import React, { useRef } from "react";
import { FaBuilding, FaCircleNotch, FaUserTie } from "react-icons/fa";
import { FaArrowsToCircle } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrOptimize } from "react-icons/gr";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdNetworkCheck } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ParallaxBanner } from "react-scroll-parallax";
import Footer from "../../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import "./thamdinhDT.css";

// import assets
import bgsection2 from "../../../assets/AboutUs/bgsection2.jpg";
import bg from "../../../assets/DichVu/ThamdinhDT/bg.jpg";

function thamdinhDT() {
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
                  THẨM ĐỊNH GIÁ ĐẦU TƯ - ĐẢM BẢO GIÁ TRỊ THỰC, TỐI ƯU HÓA QUYẾT
                  ĐỊNH ĐẦU TƯ
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
                  Thẩm định giá dự án đầu tư
                </h3>
              </div>

              {/* Hover State: Details */}
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Dự án đầu tư
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Thẩm định giá dự án đầu tư là quá trình phân tích, đánh giá và
                  xác định giá trị của một dự án trước khi thực hiện đầu tư. Quá
                  trình này giúp các nhà đầu tư nắm bắt được các thông tin quan
                  trọng về tài chính, kỹ thuật, pháp lý và các yếu tố thị
                  trường, từ đó đưa ra các quyết định đầu tư sáng suốt và hiệu
                  quả.
                </p>
              </div>
            </div>
          </div>

          <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
            <div className="absolute items-center justify-center h-auto">
              <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
                <center>Tại sao cần thẩm định giá dự án đầu tư?</center>
              </span>
            </div>
          </div>

          {/* Section with Four Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-20 mx-auto w-[90%]">
            {/* Card 1 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[18rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <IoShieldCheckmark className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Xác định giá trị thực
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá dự án đầu tư
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Giúp xác định giá trị thực
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Giúp các nhà đầu tư hiểu rõ giá trị thực của dự án, đảm bảo
                  rằng số vốn đầu tư sẽ mang lại giá trị tương xứng.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[18rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <MdNetworkCheck className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Đánh giá rủi ro
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá dự án đầu tư
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Giúp đánh giá rủi ro
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Phân tích rủi ro tiềm ẩn của dự án để giúp các nhà đầu tư đưa
                  ra quyết định phòng ngừa và quản lý rủi ro hiệu quả.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[18rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <GrOptimize className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Tối ưu hóa nguồn lực
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá dự án đầu tư
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Giúp tối ưu hóa nguồn lực
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Thẩm định giúp đánh giá khả năng tài chính và mức độ phù hợp
                  của dự án với các mục tiêu đầu tư, từ đó tối ưu hóa nguồn lực
                  đầu tư.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="property-card-container w-full md:w-1/4 h-[14rem] md:h-[18rem]">
              <div className="card-title-section flex flex-col justify-center items-center h-full transition-all duration-300 ease-in-out">
                <GiReceiveMoney className="mb-5 text-[#747576] text-[60px] transition-transform transform group-hover:scale-105" />
                <h3 className="text-[#2648b5] font-bold text-[28px] md:text-[30px] text-center">
                  Quyết định tài trợ
                </h3>
              </div>
              <div className="card-details-section absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden text-black opacity-0 transition-all duration-500 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100">
                <p className="text-[#747576] mx-5 mt-5 uppercase leading-[1.2em] font-semibold">
                  Thẩm định giá dự án đầu tư
                </p>
                <h2 className="text-[30px] font-bold mx-5 mb-[10px] leading-[1.2em] text-[#2648b5]">
                  Tạo cơ sở cho quyết định tài trợ
                </h2>
                <p className="text-left mx-5 text-[15px] text-[#333] leading-[1.5em]">
                  Giúp các bên liên quan như ngân hàng, quỹ đầu tư và các nhà
                  tài trợ hiểu rõ hơn về dự án, từ đó có cơ sở vững chắc để ra
                  quyết định tài trợ.
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
                  Với nhiều năm kinh nghiệm trong lĩnh vực thẩm định giá, chúng
                  tôi đã phục vụ hàng nghìn doanh nghiệp lớn nhỏ, và nhận được
                  sự tin tưởng tuyệt đối từ khách hàng.
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
                <FaCircleNotch className="text-blue-500 text-[40px] mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Quy trình làm việc minh bạch và tận tâm
                </h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết làm việc với quy trình minh bạch, cung cấp
                  thông tin rõ ràng và chi tiết đến khách hàng trong suốt quá
                  trình thẩm định.
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
              Nếu bạn đang có nhu cầu thẩm định giá dự án đầu tư, hãy liên hệ
              với chúng tôi để được tư vấn chi tiết và nhận báo giá hợp lý.
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

export default thamdinhDT;
