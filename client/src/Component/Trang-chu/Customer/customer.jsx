import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import component
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Import assests
import image1 from "../../../assets/project/trustingsocial.jpg";
import image2 from "../../../assets/project/mr.win.jpg";
import image3 from "../../../assets/project/phuclong.jpeg";
import image4 from "../../../assets/project/vietcapital.jpg";
import image5 from "../../../assets/project/vietcombank.jpg";
import image6 from "../../../assets/project/khangdien.png";
import image7 from "../../../assets/project/masan.jpg";

const customersPartners = [
  {
    name: "BIDV",
    logo: image1,
    website: "#",
  },
  {
    name: "BIDV",
    logo: image2,
    website: "#",
  },
  {
    name: "BIDV",
    logo: image3,
    website: "#",
  },
  {
    name: "BIDV",
    logo: image4,
    website: "#",
  },
  {
    name: "BIDV",
    logo: image5,
    website: "#",
  },
  {
    name: "BIDV",
    logo: image6,
    website: "#",
  },
  {
    name: "BIDV",
    logo: image7,
    website: "#",
  },
];

function customer() {
  // Setting Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 5 logos at a time
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust number of logos for tablet
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile devices
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div>
      <section className="relative">
        <div className="container mx-auto py-8">
          <h2 className="font-['Quicksand'] text-2xl font-bold text-center mb-6">
            Định giá doanh nghiệp
          </h2>
          <Slider {...settings}>
            {customersPartners.map((partner, index) => (
              <div key={index} className="p-4">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <LazyLoadImage
                      src={partner.logo}
                      alt={partner.name}
                      className="mx-auto p-4 h-[6.5rem] object-contain"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default customer;
