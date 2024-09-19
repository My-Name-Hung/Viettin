import React, { useState } from "react";

// Import assests
import background from "../../../assets/thank/Paper-background.jpg";

// Import component
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Parallax } from "react-scroll-parallax";

function Thank() {
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
        "http://localhost:5000/api/appraisal-request",
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
      <section className="relative">
        <div className="relative w-full h-screen overflow-hidden bg-gray-800">
          {/* Background image */}
          <img
            src={background}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Animated Text */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <Parallax speed={10}>
              <h1 className="font-['Quicksand'] text-2xl md:text-4xl font-bold text-white animate-fade-in-up">
                DỊCH VỤ THẨM ĐỊNH GIÁ CHUYÊN NGHIỆP CỦA VIỆT TÍN CAM KẾT
              </h1>
            </Parallax>
            <Parallax speed={-5} opacity={[0.7, 1]} translateY={[20, 0]}>
              <p className="font-['Quicksand'] mt-4 text-lg md:text-2xl text-white animate-fade-in-up delay-500">
                Đáp ứng sự tin tưởng và ủng hộ của Quý khách hàng dành cho Viet
                Tin Valuation, Hội đồng Quản trị, Ban Giám đốc cùng toàn thể Cán
                bộ nhân viên Viet Tin Valuation trân trọng gửi đến Quý khách
                hàng lời cam kết về giữ vững và nâng cao chất lượng dịch vụ trên
                chặng đường phát triển của Viet Tin Valuation expectations.
              </p>
              <Button
                color="primary"
                endContent={<IoArrowForwardCircleOutline />}
                className="font-['Quicksand'] mt-4"
                onClick={onOpen} // Show form on button click
              >
                Gửi yêu cầu thẩm định giá
              </Button>

              {/* The Modal component */}
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="font-['Quicksand'] text-xl font-semibold">
                        Gửi yêu cầu thẩm định giá
                      </ModalHeader>
                      <ModalBody>
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-4"
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
            </Parallax>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thank;
