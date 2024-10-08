import React, {useEffect} from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Section3.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import assets
import bgsection2 from "../../../../assets/AboutUs/bgsection2.jpg";

function Section3() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  
  return (
    <div className="relative w-full min-h-screen md:p-0 pt-12">
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

      {/* Main Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <div className="absolute md:top-0 md:pt-10 top-0 pt-8 text-center">
          <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold tracking-wide drop-shadow-lg">
            Lộ trình ESG
          </h1>
        </div>

        {/* Timeline */}
        <div
          id="timeline"
          className="bg-[url('https://cdn.citics.vn/static/bg-home-cagent.webp')] w-full px-10 md:px-0"
        >
          <div className="tl-item">
            <div className="tl-bg"></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">2024</p>
            </div>
            <div className="tl-content md:bg-white md:rounded-lg md:p-6 md:mt-10">
              <h1>Thiết lập cơ sở, mục tiêu ESG</h1>
              <p className="md:text-gray-800">
                Thực hiện kế hoạch ESG và đo lường KPI
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg"></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">2025</p>
            </div>
            <div className="tl-content md:bg-white md:rounded-lg md:p-6 md:mt-10">
              <h1 className="f3 text--accent ttu">
                Tích hợp báo cáo ESG vào báo cáo kinh doanh
              </h1>
              <p className="md:text-gray-800">
                Trong giai đoạn 2025-2030, định hướng mục tiêu nghiên cứu định
                giá ESG, đồng thời tự đánh giá, theo dõi và phân tích thường
                xuyên
              </p>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-bg"></div>
            <div className="tl-year">
              <p className="f2 heading--sanSerif">2030</p>
            </div>
            <div className="tl-content md:bg-white md:rounded-lg md:p-6 md:mt-10">
              <h1 className="f3 text--accent ttu">Đạt được mục tiêu ESG</h1>
              <p className="md:text-gray-800">Báo cáo ESG độc lập</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main ESG Explanation Section */}
      <div className="relative z-10 min-h-screen bg-[url('https://cdn.citics.vn/static/bg-home-cvaluer.webp')] flex items-center justify-center text-white px-4 md:px-8">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 items-center justify-center w-full">
          {/* Environment Section */}
          <div
            className="flex flex-col items-center space-y-4 w-full md:w-1/3 px-4"
            data-aos="fade-up-right"
          >
            <div className="text-6xl md:text-9xl font-bold text-green-600">
              E
            </div>
            <h3 className="text-lg md:text-xl font-semibold">Environment</h3>
            <p className="text-center text-sm md:text-base">
              Tạo không gian làm việc xanh cho văn phòng.
              <br />
              Thực hiện các hoạt động đo lường lượng khí thải, tiêu thụ điện.
              <br />
              Phân loại rác thải và tham gia trồng cây xanh.
            </p>
          </div>

          {/* Social Section */}
          <div
            className="flex flex-col items-center space-y-4 w-full md:w-1/3 px-4"
            data-aos="fade-down-right"
            data-aos-delay="200"
          >
            <div className="text-6xl md:text-9xl font-bold text-[#e06d21]">
              S
            </div>
            <h3 className="text-lg md:text-xl font-semibold">Social</h3>
            <p className="text-center text-sm md:text-base">
              Xây dựng văn hóa công bằng, hoà nhập tại nơi làm việc.
              <br />
              Tôn trọng giới tính, chủng tộc, và tín ngưỡng.
              <br />
              Gói khám sức khỏe miễn phí và học bổng cho sinh viên.
            </p>
          </div>

          {/* Governance Section */}
          <div
            className="flex flex-col items-center space-y-4 w-full md:w-1/3 px-4"
            data-aos="fade-up-left"
            data-aos-delay="400"
          >
            <div className="text-6xl md:text-9xl font-bold text-[#2648b5]">
              G
            </div>
            <h3 className="text-lg md:text-xl font-semibold">Governance</h3>
            <p className="text-center text-sm md:text-base">
              Tăng cường bảo mật dữ liệu và tuân thủ luật pháp.
              <br />
              Phát triển hệ thống quản trị chất lượng.
              <br />
              Hoàn thiện bộ quy tắc đạo đức và trách nhiệm doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
