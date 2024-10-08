import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react"; // Import NextUI components
import React, { useEffect, useRef, useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Section4.css";

// Import assets
import bgsection2 from "../../../../assets/AboutUs/bgsection2.jpg";
import vanphongtrang1 from "../../../../assets/AboutUs/Van-phong-dai-dien-trang1.png";
import vanphongtrang2 from "../../../../assets/AboutUs/Van-phong-dai-dien-trang2.png";

// Import component
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const customersPartners = [
  {
    name: "Văn phòng đại diện trang 1",
    logo: vanphongtrang1,
  },
  {
    name: "Văn phòng đại diện trang 2",
    logo: vanphongtrang2,
  },
];

// Hook to animate the counter
const useCounter = (endValue, isVisible) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // Duration of the counter (2 seconds)
    const increment = Math.ceil(endValue / (duration / 100));

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setValue(start);
    }, 100);

    return () => clearInterval(timer);
  }, [endValue, isVisible]);

  return value;
};

function Section4() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1, // Show 5 logos at a time
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const sectionRef = useRef(null);

  // Intersection observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counters for each item
  const branches = useCounter(7, isVisible);
  const provinces = useCounter(13, isVisible);
  const staff = useCounter(150, isVisible);
  const projects = useCounter('50.000', isVisible);
  const partners = useCounter(11, isVisible);

  // Function to handle modal close
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <section className="relative w-full min-h-screen" ref={sectionRef}>
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

        {/* Counter Section */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4">
          <div className="items-center justify-center h-auto pt-10 md:pt-0 pb-10 md:pb-[7rem]">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              <center>Mạng lưới chi nhánh/Văn phòng đại diện</center>
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center w-full max-w-screen-lg">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#2648b5]">
                {branches}
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-black">
                Chi nhánh
              </p>
            </div>
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#2648b5]">
                {provinces}
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-black">
                Văn phòng đại diện
              </p>
            </div>
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#2648b5]">
                {staff}
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-black">
                Nhân viên
              </p>
            </div>
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#2648b5]">
                {projects}+
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-black">
                Hồ sơ thẩm định giá
              </p>
            </div>
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#2648b5]">
                {partners}+
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-black">
                Ngân hàng liên kết
              </p>
            </div>
          </div>

          {/* Button to open modal */}
          <Button
            auto
            color="primary"
            onClick={() => setIsModalOpen(true)}
            className="mt-10"
            size="lg"
            endContent={<IoArrowForwardCircleOutline />}
          >
            Xem chi tiết
          </Button>
        </div>
        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="mt-5">
                  <Slider {...settings}>
                    {customersPartners.map((partner, index) => (
                      <div key={index} className="">
                        <Image
                          width={400}
                          height={500}
                          loading="lazy"
                          alt="Văn phòng đại diện"
                          src={partner.logo}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}

export default Section4;
