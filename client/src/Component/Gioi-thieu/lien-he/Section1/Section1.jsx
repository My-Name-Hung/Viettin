import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Section1.css";

// Import assets
import background from "../../../../assets/Lienhe/nen-lien-he.jpg";

// Import react-icons
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Section1() {
  const section2Ref = useRef(null);
  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Updated formData state to include new fields
  const [formData, setFormData] = useState({
    fullName: "", // "Họ và tên"
    phoneNumber: "", // "Số điện thoại"
    email: "",
    requestDetails: "", // "Nội dung yêu cầu"
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation errors before new submission
    setValidationErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
    });

    let isValid = true; // Flag to track overall form validity

    // Check if required fields are filled
    if (!formData.fullName) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Vui lòng nhập họ và tên",
      }));
      isValid = false;
    }

    // Validate phone number format
    const phoneNumberRegex = /^\d+$/;
    if (!formData.phoneNumber) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Vui lòng nhập số điện thoại",
      }));
      isValid = false;
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
      }));
      isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Vui lòng nhập email",
      }));
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Địa chỉ email không hợp lệ",
      }));
      isValid = false;
    }

    if (!isValid) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await fetch(
        "https://viettin-be.onrender.com/api/appraisal-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert(
          "Chúng tôi đã nhận thông tin và liên hệ bạn trong thời gian sớm nhất!"
        );
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          requestDetails: "",
        });
        onOpenChange(); // Close the modal after successful submission
      } else {
        alert("Error submitting request.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
              <a href="/lien-he" className="font-semibold text-xl lg:text-2xl">
                <b className="text-blue-200">Liên hệ</b>
              </a>
              <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-xl lg:text-2xl p-[1px]"></i>
            </div>

            <div>
              <span className="text-2xl md:text-4xl lg:text-6xl font-extrabold fade-in-slide-up">
                Liên hệ với chúng tôi
              </span>
            </div>
            <Button
              color="primary"
              endContent={<IoArrowForwardCircleOutline />}
              className="font-['Quicksand'] mt-4 text-md focus:outline-none"
              onClick={onOpen} // Show form on button click
            >
              Gửi yêu cầu
            </Button>

            <Modal
              className="h-[29rem]"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="font-['Quicksand'] border-b-[0.2px] border-solid border-gray-400 text-xl font-semibold">
                      Liên hệ với Việt Tín
                    </ModalHeader>
                    <ModalBody>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col pt-2 gap-4"
                      >
                        <Input
                          label="Họ và tên *"
                          fullWidth
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          errorMessage={validationErrors.fullName}
                        />
                        <Input
                          label="Số điện thoại *"
                          fullWidth
                          required
                          name="phoneNumber"
                          inputMode="numeric"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          errorMessage={validationErrors.phoneNumber}
                        />
                        <Input
                          label="Email *"
                          type="email"
                          fullWidth
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          errorMessage={validationErrors.email}
                        />
                        <Input
                          label="Nội dung yêu cầu"
                          fullWidth
                          name="requestDetails"
                          value={formData.requestDetails}
                          onChange={handleChange}
                        />
                        <Button
                          color="primary"
                          className="mt-4 font-['Quicksand'] w-full text-bold text-white"
                          type="submit"
                        >
                          Gửi yêu cầu
                        </Button>
                      </form>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            className="text-white text-sm flex flex-col items-center focus:outline-none animate-bounce"
          >
            cuộn xuống
            <IoIosArrowRoundDown className="text-3xl" />
          </button>
        </div>
      </section>

      {/****************** Section 2 -  Detail ******************************/}
      {/* ***************************************** */}
      <section ref={section2Ref} className="relative w-full py-[5rem] px-2">
        <div className="container mx-auto px-4">
          <div className="items-center justify-center h-auto pt-0 md:pt-0 pb-10 md:pb-12">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-4xl font-bold text-gray-800">
              <center>Trụ sở chính</center>
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl text-black font-bold mb-4">
                Công ty Cổ phần Thẩm định giá Việt Tín
              </h3>
              <p className="mb-2">
                <i className="zmdi zmdi-pin-drop p-[0_6px_3px_0]" />
                <strong>Địa chỉ:</strong>{" "}
                <a
                  className="hover:text-purple-800"
                  href="https://maps.app.goo.gl/uUTNmaJF1EHUp6zC8"
                  target="_blank"
                >
                  Tòa nhà TSA, tầng 5, số 43 Nguyễn Sơn Hà, Phường 5, Quận 3,
                  TP.HCM
                </a>{" "}
              </p>
              <p className="mb-2">
                <i className="zmdi zmdi-phone p-[0_6px_3px_0]" />
                <strong>Điện thoại:</strong>{" "}
                <a className="hover:text-purple-800" href="tel:0901866906">
                  0901 866 909
                </a>{" "}
                -{" "}
                <a className="hover:text-purple-800" href="tel:0983454769">
                  0983 454 769
                </a>
              </p>
              <p className="mb-2">
                <i className="zmdi zmdi-email p-[0_6px_3px_0]" />
                <strong>Email:</strong>{" "}
                <a
                  className="hover:text-purple-800"
                  href="mailto:support@viettinvaluation.com"
                >
                  support@viettinvaluation.com
                </a>
              </p>
              <p className="mb-2">
                <i className="zmdi zmdi-view-web p-[0_6px_3px_0]" />
                <strong>Website:</strong>{" "}
                <a
                  className="hover:text-purple-800"
                  href="https://viettinvaluation.com/"
                  target="_blank"
                >
                  www.viettinvaluation.com
                </a>
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.99095660105706!2d106.6842522192129!3d10.769843830849322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6ba60cabae6f%3A0x1f50165c151e4871!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gVGjhuqltIMSR4buLbmggZ2nDoSBWaeG7h3QgVMOtbg!5e0!3m2!1sen!2s!4v1727404621865!5m2!1sen!2s"
                className="w-full h-64 rounded-lg shadow-lg"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
