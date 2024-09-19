import React from "react";

// Import component
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// Import assests
import adcs from "../../../assets/partners/ADC.jpg";
import agribank from "../../../assets/partners/agribank.jpg";
import bidv from "../../../assets/partners/bidv.png";
import hdbank from "../../../assets/partners/hdbank.png";
import indonesiabank from "../../../assets/partners/IndonesiaBank.png";
import kienlongbank from "../../../assets/partners/kienlongbank.png";
import agifish from "../../../assets/partners/logoagifish.jpg";
import bourbon from "../../../assets/partners/logobourbon.jpg";
import cargill from "../../../assets/partners/logocargill1.jpg";
import KhangThong from "../../../assets/partners/logokhangthong.jpg";
import posco from "../../../assets/partners/logoposco.jpg";
import pvbank from "../../../assets/partners/logopvacombank.png";
import saigon from "../../../assets/partners/logosaigoncoop.jpg";
import spotlight from "../../../assets/partners/logospotlight.jpg";
import tamchau from "../../../assets/partners/logotamchau.jpg";
import thuysongroup from "../../../assets/partners/logothuysongroup.jpg";
import thinhphat from "../../../assets/partners/logotoanthinhphat1.jpg";
import ncbbank from "../../../assets/partners/ncb.png";
import nguyenkim from "../../../assets/partners/nguyenkim.png";
import publicbank from "../../../assets/partners/publicbank.png";
import shinhanbank from "../../../assets/partners/shinhanbank.png";
import thaibinh from "../../../assets/partners/thaibinh.png";
import tpbank from "../../../assets/partners/TPBANK.png";
import vamc from "../../../assets/partners/vamc.jpg";
import vieccapbank from "../../../assets/partners/vieccapbank.png";
import viecombank from "../../../assets/partners/viecombank.jpg";
import vietbank from "../../../assets/partners/VIETBANK.jpg";
import viettinbank from "../../../assets/partners/vietinbank.jpg";

const customersPartners = [
  {
    name: "BIDV",
    logo: bidv,
    website: "https://bidv.com.vn/",
  },
  {
    name: "Vamc",
    logo: vamc,
    website: "https://sbvamc.vn/trang-chu",
  },
  {
    name: "KienlongBank",
    logo: kienlongbank,
    website: "https://kienlongbank.com/",
  },
  {
    name: "ViecomBank",
    logo: viecombank,
    website: "https://www.vietcombank.com.vn/",
  },
  {
    name: "ShinhanBank",
    logo: shinhanbank,
    website: "https://shinhan.com.vn/vi",
  },
  {
    name: "PublicBank",
    logo: publicbank,
    website: "https://www.publicbank.com.vn/",
  },
  {
    name: "AgriBank",
    logo: agribank,
    website: "https://www.agribank.com.vn/",
  },
  {
    name: "VietBank",
    logo: vietbank,
    website: "https://www.vietbank.com.vn/",
  },
  {
    name: "NcbBank",
    logo: ncbbank,
    website: "https://www.ncb-bank.vn/",
  },
  {
    name: "TpBank",
    logo: tpbank,
    website: "https://tpb.vn/ca-nhan",
  },
  {
    name: "ViecCapBank",
    logo: vieccapbank,
    website: "https://www.vietcapitalbank.com.vn/personal",
  },
  {
    name: "HdBank",
    logo: hdbank,
    website: "https://hdbank.com.vn/",
  },
  {
    name: "PvBank",
    logo: pvbank,
    website: "https://www.pvcombank.com.vn/",
  },
  {
    name: "VietTinBank",
    logo: viettinbank,
    website: "https://www.vietinbank.vn/",
  },
  {
    name: "IndonesiaBank",
    logo: indonesiabank,
    website: "https://www.indovinabank.com.vn/",
  },
  {
    name: "ThaiBinh",
    logo: thaibinh,
    website: "http://www.thaibinhcorp.vn/",
  },
  {
    name: "NguyenKim",
    logo: nguyenkim,
    website: "https://www.nguyenkim.com/",
  },
  {
    name: "ADC",
    logo: adcs,
    website: "https://www.adcvn.com/",
  },
  {
    name: "AgiFish",
    logo: agifish,
    website: "https://agifish.com.vn/vi/",
  },
  {
    name: "BourBon",
    logo: bourbon,
    website: "http://www.bourbontn.com.vn/",
  },
  {
    name: "Cargill",
    logo: cargill,
    website: "https://www.cargill.com.vn/",
  },
  {
    name: "KhangThong",
    logo: KhangThong,
    website: "http://khangthong.vn/",
  },
  {
    name: "Posco",
    logo: posco,
    website: "https://poscoencvietnam.vn/home/",
  },
  {
    name: "Saigon CO.Op",
    logo: saigon,
    website: "https://www.saigonco-op.com.vn/",
  },
  {
    name: "Spotlight",
    logo: spotlight,
    website: "https://nhachannuoi.vn/",
  },
  {
    name: "TamChau",
    logo: tamchau,
    website: "https://tamchau.com/",
  },
  {
    name: "thuysongroup",
    logo: thuysongroup,
    website: "https://thuysongroup.com.vn/",
  },
  {
    name: "ToanThinhPhat",
    logo: thinhphat,
    website: "https://ttpcorp.com.vn/",
  },
];

function Partners() {
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
            Khách hàng và đối tác
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
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="mx-auto p-4 h-24 object-contain"
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

export default Partners;
