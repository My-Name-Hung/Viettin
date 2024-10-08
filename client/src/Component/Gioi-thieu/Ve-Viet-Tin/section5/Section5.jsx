import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  Image,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import "./Section5.css";

// Import assets
import bgsection2 from "../../../../assets/AboutUs/bgsection2.jpg";
import Vietnam from "../../../../assets/AboutUs/HSNL/HSNL_2024_VI.jpg";
import English from "../../../../assets/AboutUs/HSNL/HSNL_2024_EN.jpg";
import Korea from "../../../../assets/AboutUs/HSNL/HSNL_2024_KO.jpg";

function Section5() {
  // State to manage language selection
  const [language, setLanguage] = useState("Vietnam");

  // Function to handle language selection from dropdown
  const handleLanguageChange = (key) => {
    setLanguage(key);
  };

  return (
    <div>
      <section className="relative w-full min-h-screen">
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

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4">
          <div className="items-center justify-center h-auto pt-0 md:pt-0 pb-8 md:pb-4">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              <center>Hồ sơ năng lực</center>
            </span>
          </div>

          {/* Dropdown for language selection */}
          <Dropdown>
            <DropdownTrigger>
              <Button flat color="primary" className="shadow-lg">
                Thay đổi ngôn ngữ
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language Selection"
              onAction={(key) => handleLanguageChange(key)}
              selectionMode="single"
              selectedKeys={[language]}
            >
              <DropdownItem key="Vietnam">Vietnamese</DropdownItem>
              <DropdownItem key="English">English</DropdownItem>
              <DropdownItem key="Korea">Korean</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* Image based on selected language */}
          {language === "Vietnam" && (
            <Link
              href="https://publuu.com/flip-book/664205/1479718"
              target="_blank"
            >
              <Image
                src={Vietnam}
                loading="lazy"
                className="responsive-image md:h-[32rem] border-gray-400 border rounded-lg shadow-xl mt-4"
              />
              
            </Link>
          )}
          {language === "English" && (
            <Link
              href="https://publuu.com/flip-book/664205/1480035"
              target="_blank"
            >
              <Image
                src={English}
                loading="lazy"
                className="responsive-image md:h-[32rem] border-gray-400 border rounded-lg shadow-xl mt-4"
              />
            </Link>
          )}
          {language === "Korea" && (
            <Link
              href="https://publuu.com/flip-book/664205/1480040"
              target="_blank"
            >
              <Image
                src={Korea}
                loading="lazy"
                className="responsive-image md:h-[32rem] border-gray-400 border rounded-lg shadow-xl mt-4"
              />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default Section5;
