import React, { useState } from "react";

const steps = [
  "Bước 1: Khách hàng đăng ký",
  "Bước 2: Cung cấp hồ sơ pháp lý",
  "Bước 3: Tiến hành khảo sát",
  "Bước 4: Thực hiện nghiệp vụ chuyên môn",
  "Bước 5: Báo cáo kết quả thẩm định giá",
];

const description = [
  "Khách hàng gửi Phiếu đề nghị / Yêu cầu thẩm định giá cho Việt Tín, chúng tôi sẽ tiếp nhận và liên lạc với Quý khách hàng sớm nhất.",
  "Việt Tín hướng dẫn Quý khách hàng chuẩn bị các hồ sơ pháp lý có liên quan đến từng loại tài sản cụ thể, tiện phục vụ cho công tác thẩm định giá đạt kết quả chính xác hơn.",
  "Việt Tín sẽ tiến hành khảo sát hiện trạng tài sản cũng như tình hình thị trường tại thời điểm thẩm định giá, thu thập đầy đủ cơ sở dữ liệu nhằm đạt được kết quả thẩm định khách quan nhất.",
  "Việt Tín thực hiện một số nghiệp vụ chuyên môn như áp dụng các phương pháp thẩm định giá theo tiêu chuẩn thẩm định giá Việt Nam để thẩm định giá trị tài sản.",
  "Việt Tín hoàn tất các nghiệp vụ phân tích đánh giá, đưa ra giá trị cuối cùng và khách quan nhất cho Quý khách hàng.",
];
function Procedure() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <section className="relative">
        <div className="min-h-screen bg-gradient-to-br from-[#3c6fd6] via-[#f28a4b] to-[#3c6fd6] flex flex-col items-center justify-center p-4 md:p-8 relative">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 bg-texture opacity-10 pointer-events-none"></div>

          {/* Process Title */}
          <h1 className="font-['Quicksand'] text-3xl md:text-4xl font-bold text-white mb-6 md:mb-12 animate-fadeIn">
            Quy trình thẩm định giá cơ bản
          </h1>

          <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white shadow-xl rounded-2xl relative z-10 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 md:w-56 md:h-56 bg-blue-200 rounded-full opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-52 h-52 md:w-72 md:h-72 bg-[#ef6a0f] rounded-full opacity-20 pointer-events-none" />

            {/* Progress Bar */}
            <div className="flex justify-between mb-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex-1">
                  <div
                    className={`h-2 rounded-lg  ${
                      index <= currentStep ? "bg-[#ef6a0f]" : "bg-gray-300"
                    }`}
                    style={{ transition: "width 0.5s ease-in-out" }}
                  />
                  <p
                    className={`text-xs font-['Quicksand'] p-2 md:text-sm mt-2 ${
                      index === currentStep
                        ? "text-[#2648b5] font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div
              className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 md:p-8 relative z-10 transform transition-all duration-500"
              style={{
                transform: `scale(${1 + currentStep * 0.02})`,
                opacity: 1 - currentStep * 0.05,
              }}
            >
              {/* Animated Title */}
              <h2 className="font-['Quicksand'] text-xl md:text-2xl font-bold text-[#2648b5] mb-4 animate-fadeInSlide">
                {steps[currentStep]}
              </h2>

              <p className="font-['Quicksand'] text-gray-600 mb-6 text-sm md:text-base">
                {`${description[currentStep]}`}
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  className="font-['Quicksand'] bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 md:px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Quay lại
                </button>
                <button
                  className="font-['Quicksand'] bg-orange-500 hover:bg-[#ef6a0f] text-white font-bold py-2 px-4 md:px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={nextStep}
                  disabled={currentStep === steps.length - 1}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Procedure;
