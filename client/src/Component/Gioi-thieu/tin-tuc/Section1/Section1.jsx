import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './Section1.css'

// Import assets
import background from "../../../../assets/Tintuc/tintuc.png"

function Section1() {
  return (
    <div>
      {/****************** Section 1 -  Banner ******************************/}
      {/* ***************************************** */}
      <section className="relative w-full h-screen overflow-hidden">
        <LazyLoadImage
          src={background}
          alt="background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className="relative z-10 flex justify-start items-center h-full px-8 lg:px-20">
          <div className="text-white max-w-6xl">
            <div className="flex flex-row gap-1 pb-4 fade-in-animation">
              <a
                href="/tin-tuc"
                className="font-semibold text-xl lg:text-2xl"
              >
                <b className="text-blue-200">TIN TỨC</b>
              </a>
              <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-xl lg:text-2xl p-[1px]"></i>
            </div>

            <div>
              <span className="text-2xl md:text-4xl lg:text-6xl font-extrabold fade-in-slide-up">
                CẬP NHẬT TIN TỨC CÙNG VIỆT TÍN
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1