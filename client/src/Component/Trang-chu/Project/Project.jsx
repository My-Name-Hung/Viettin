import React from "react";

//Import Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

//Import assests
import image1 from "../../../assets/project/du-an-water-bay.jpg"
import image2 from "../../../assets/project/CHARM-CITY-39-1200x675.jpg";
import image3 from "../../../assets/project/cong-ty-anh-nguyen.jpg";
import image4 from "../../../assets/project/du-an-happy-land.jpg";

// Carousel Data
const carouselData = [
  {
    id: 1,
    name: "Dự án Water Bay - Quận 2",
    imageUrl: image1,
  },
  {
    id: 2,
    name: "Dự án Charm City - Bình Dương",
    imageUrl: image2,
  },
  {
    id: 3,
    name: "Dự án Công ty Anh Nguyễn - Nha Trang",
    imageUrl: image3,
  },
  {
    id: 4,
    name: "Dự án Happy Land - Long An",
    imageUrl: image4,
  },
];

function Project() {
  // Set up Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true, // Enable partial visibility of next/previous slides
    centerPadding: "15%", // Show a portion of the next/previous slide
    responsive: [
      {
        breakpoint: 768, // On smaller screens, disable centerMode for better UX
        settings: {
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div>
      {/* Title Above Carousel */}
      <section className="relative">
        <div className="bg-white py-10">
          <div className="container mx-auto text-center mb-8">
            {/* Title */}
            <h1 className="font-['Quicksand'] text-3xl md:text-4xl font-bold">
              Một số dự án tiêu biểu
            </h1>
            <p className="text-gray-600 font-['Quicksand'] mt-2 text-lg md:text-xl">
              Các dự án tiêu biểu của Việt Tín, ngoài ra còn nhiều dự án khác
              chưa được đề cập đến!
            </p>
          </div>

          {/* Carousel */}
          <div className="container mx-auto">
            <Slider {...settings}>
              {carouselData.map((slide) => (
                <div key={slide.id} className="px-4">
                  <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6">
                    <img
                      src={slide.imageUrl}
                      alt={slide.name}
                      className="rounded-lg w-full h-full object-cover mb-4"
                    />
                    <p className="font-['Quicksand'] text-xl font-bold text-gray-800">
                      {slide.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;