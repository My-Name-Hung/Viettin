import React, { useEffect, useRef, useState } from "react";
import "./Carousels.css";

//import assets
// video
import section1 from "../../../assets/carousel/section1.mp4";
// image
import background from "../../../assets/Section2/Background.jpg";
import image3 from "../../../assets/Section2/details.png";
import image2 from "../../../assets/Section2/map.png";
import image1 from "../../../assets/Section2/onevalue.png";

//import react-icon
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

// import component
import { Button, Link } from "@nextui-org/react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

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
      {/* Section 1 hiển thị giới thiệu đánh chữ */}
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

      {/* Section 2 hiển thị image giới thiệu */}
      <section ref={section2Ref} className="relative">
        <ParallaxBanner
          layers={[
            {
              image: background,
              speed: -20,
              scale: [1, 1.6],
            },
          ]}
          style={{
            aspectRatio: "2/1",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        ></ParallaxBanner>

        <div className="flex relative z-10 items-center w-full h-full justify-center p-[10vh_0]">
          <div className="w-[80%] max-w-[16rem] h-auto">
            <img src={image1} alt="Hình ảnh định giá OV" />
          </div>
        </div>

        <Parallax speed={10} scale={[0.6, 1.2]}>
          <div className="relative z-10 flex flex-col items-center w-full h-full p-[5vh_0] text-center">
            <h1 className="font-['Quicksand'] text-[25px] font-bold">
              Nền tảng định giá tự động
            </h1>
            <h2 className="font-['Quicksand'] text-[25px] font-light text-blue-600">
              dành cho ngân hàng và doanh nghiệp
            </h2>

            <p className="font-['Quicksand'] text-[#747576] text-[15px] w-[80%] max-w-[670px] mb-[20px]">
              Định giá tài sản miễn phí, có kết quả định giá sơ bộ trong vài
              thao tác, nhận báo cáo định giá trực tiếp, thuận tiện. Viet Tin
              Valuation giúp các ngân hàng và doanh nghiệp tiết kiệm đến 90%
              thời gian trong công tác định giá tài sản.
            </p>

            <Link href="https://onevalue.com.vn/bat-dong-san">
              <Button
                color="primary"
                endContent={<IoArrowForwardCircleOutline />}
                radius="lg"
                className="mt-4"
              >
                Tìm hiểu ngay
              </Button>
            </Link>
          </div>
        </Parallax>

        <Parallax speed={20}>
          <div className="flex relative z-10 items-center justify-center p-[5vh_0]">
            <div className="w-[90%] max-w-[50rem] h-auto">
              <img src={image2} alt="Hình ảnh bản đồ dự án OV" />
            </div>
          </div>
        </Parallax>

        <Parallax speed={30} scale={[0.6, 1.2]}>
          <div className="relative z-10 flex flex-col items-center w-full h-full p-[5vh_0] text-center">
            <h1 className="font-['Quicksand'] text-[25px] font-bold">
              Định hình vị trí dự án
            </h1>
            <h2 className="font-['Quicksand'] text-[25px] font-light text-blue-600">
              dành cho các thẩm định viên bất động sản
            </h2>

            <p className="font-['Quicksand'] text-[#747576] text-[15px] w-[80%] max-w-[670px] mb-[20px]">
              Xem vị trí cùng thông tin dự án, bản đồ 3D thể hiện chi tiết tòa
              nhà, giúp thuận tiện định hình tài sản. Tối ưu hóa yếu tố xác thực
              vị trí dự án của các thẩm định viên bất động sản.
            </p>

            <Link href="https://onevalue.com.vn/bat-dong-san">
              <Button
                color="primary"
                endContent={<IoArrowForwardCircleOutline />}
                radius="lg"
                className="mt-4"
              >
                Tìm hiểu ngay
              </Button>
            </Link>
          </div>
        </Parallax>

        <Parallax speed={40}>
          <div className="flex relative z-10 items-center justify-center pt-[5vh]">
            <div className="w-[90%] max-w-[26rem] h-auto">
              <img src={image3} alt="Hình ảnh thông tin chi tiết dự án OV" />
            </div>
          </div>
        </Parallax>

        <Parallax speed={50} scale={[0.6, 1.2]}>
          <div className="relative z-10 flex flex-col items-center w-full h-full pt-[5vh] text-center">
            <h1 className="font-['Quicksand'] text-[25px] font-bold">
              Cung cấp thông tin chi tiết dự án
            </h1>
            <h2 className="font-['Quicksand'] text-[25px] font-light text-blue-600">
              dành cho các thẩm định viên bất động sản
            </h2>

            <p className="font-['Quicksand'] text-[#747576] text-[15px] w-[80%] max-w-[670px] mb-[20px]">
              Xem chi tiết thông tin về dự án, giúp định giá chính xác hơn, giảm
              thời gian tìm hiểu thông tin dự án, truy cập vào kho dữ liệu bất
              động sản khổng lồ cùng các thông tin chính xác và hữu ích.
            </p>

            <Link href="https://onevalue.com.vn/bat-dong-san">
              <Button
                color="primary"
                endContent={<IoArrowForwardCircleOutline />}
                radius="lg"
                className="mt-4"
              >
                Tìm hiểu ngay
              </Button>
            </Link>
          </div>
        </Parallax>
      </section>
    </div>
  );
}

export default Carousels;
