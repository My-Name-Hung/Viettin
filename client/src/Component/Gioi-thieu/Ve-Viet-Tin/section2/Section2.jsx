import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Section2.css";

// Import assets
import bgsection2 from "../../../../assets/AboutUs/bgsection2.jpg";
import core from "../../../../assets/Core Values/core.png";

function Section2() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("vision");

  // Content for each tab
  const tabContent = {
    vision:
      "Bằng khát vọng hướng đến sự minh bạch – độc lập – khách quan trong công tác thẩm định giá cùng chiến lược phát triển chậm mà chắc, bền vững, Việt Tín hướng đến một thương hiệu hàng đầu thị trường.",
    mission:
      "Xây dựng thương hiệu Việt Tín trở thành công ty thẩm định giá có uy tín và được ưa thích nhất tại Việt Nam",
    values: <img src={core} className="h-full w-full" />,
  };

  return (
    <div>
      <section className="relative w-full h-full pb-10">
        {/* Parallax Background */}
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

        <div className="flex relative z-10 items-center md:w-full md:h-full md:px-10 md:mx-0 mx-10 justify-center md:pb-[14.5rem] md:p-[10vh_0] p-[10vh_0]">
          <div className="absolute text-center h-auto">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              Sứ mệnh và Tầm nhìn của Việt Tín
            </span>

            {/* Tabs for Vision, Mission, Core Values */}
            <div className="Item flex justify-center mt-8">
              <button
                className={`relative px-6 py-2 mx-2 text-lg  ${
                  activeTab === "vision"
                    ? "font-bold border-4 border-solid border-[#00504c] border-t-0 border-l-0 border-r-0"
                    : "text-black font-medium ButtonItem"
                }`}
                onClick={() => setActiveTab("vision")}
              >
                Tầm nhìn
              </button>
              <button
                className={`relative px-6 py-2 mx-2 text-lg ${
                  activeTab === "mission"
                    ? "font-bold border-4 border-solid border-[#00504c] border-t-0 border-l-0 border-r-0"
                    : "text-black font-medium ButtonItem"
                }`}
                onClick={() => setActiveTab("mission")}
              >
                Sứ mệnh
              </button>
              <button
                className={`relative px-6 py-2 mx-2 text-lg ${
                  activeTab === "values"
                    ? "font-bold border-4 border-solid border-[#00504c] border-t-0 border-l-0 border-r-0"
                    : "text-black font-medium ButtonItem"
                }`}
                onClick={() => setActiveTab("values")}
              >
                Giá trị cốt lõi
              </button>
            </div>

            {/* Content Display */}
            <div className="py-[2.5rem] text-center">
              <p className="xl:text-lg bg-[#eeeeef] py-4 px-4 rounded-lg lg:text-md md:text-sm">
                {tabContent[activeTab]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
