import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./Section.css";

// Import assets
import core from "../../../../assets/0.jpg";
import background from "../../../../assets/Careers/tuyendung_bg.jpg";
import icon1 from "../../../../assets/Careers/Why/01.jpg";
import icon2 from "../../../../assets/Careers/Why/02.jpg";
import icon3 from "../../../../assets/Careers/Why/03.jpg";
import icon4 from "../../../../assets/Careers/Why/04.jpg";
import icon5 from "../../../../assets/Careers/Why/05.jpg";
import icon6 from "../../../../assets/Careers/Why/06.jpg";
import cocautochuc from "../../../../assets/cocautochuc.png";
import lotrinhvongdanh from "../../../../assets/lotrinhvongdanh.png";

// Import react-icons
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Import job images
import adminKinhDoanh from "../../../../assets/Careers/Job/admin.png";
import chuyenVienKinhDoanh from "../../../../assets/Careers/Job/chuyen_vien_kinh_doanh.png";
import chuyenVienDinhGia from "../../../../assets/Careers/Job/tham_dinh_gia.jpg";
import thamDinhVien from "../../../../assets/Careers/Job/thamdinhvien.png";
import trungTamKiemSoatNoiBo from "../../../../assets/Careers/Job/trungtamkiemsoatnoibo.png";
import CarrerChart from "../CarrerChart/CarrerChart";
import OrganizationChart from "../OrganizationChart/OrganizationChart";

// JobCard Component with hover effect and AOS animations
const JobCard = ({ job, onApplyClick }) => {
  return (
    <div
      className="bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-gray-200 rounded-lg p-6 w-full max-w-lg"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-bold text-black">{job.title}</h3>
      <p className="text-gray-600 text-sm">{job.location}</p>
      <p className="text-gray-700 mt-4 mb-4">
        {job.description || "Mô tả công việc sẽ được cập nhật sớm."}
      </p>
      <button
        onClick={() => onApplyClick(job)}
        className="text-purple-800 hover:font-semibold flex items-center gap-2 hover:text-[#2648b5] hover:bg-white hover:rounded-lg hover:shadow-lg hover:p-2 hover:border-1 hover:border-gray-600 transition-all"
      >
        Ứng tuyển ngay <FaCircleArrowRight className="text-[#2648b5]" />
      </button>
    </div>
  );
};

function Section() {
  const section2Ref = useRef(null);
  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Sample Job Data
  const jobs = [
    {
      title: "Chuyên viên định giá",
      location: "Văn phòng đại diện Bến Tre",
      description:
        "Thực hiện định giá tài sản cho các dự án công nghiệp, nhà ở,...",
      image: chuyenVienDinhGia, // Add a job-specific image
    },
    {
      title: "Admin kinh doanh",
      location: "Tòa nhà TSA, số 43 Nguyễn Sơn Hà, Phường 5, Quận 3, TP.HCM",
      description: "Tiếp cận, chuẩn bị hồ sơ, gặp gỡ và hỗ trợ khách hàng.",
      image: adminKinhDoanh,
    },
    {
      title: "Chuyên viên kinh doanh",
      location: "Tòa nhà TSA, số 43 Nguyễn Sơn Hà, Phường 5, Quận 3, TP.HCM",
      description: "Thúc đẩy các hoạt động kinh doanh của công ty.",
      image: chuyenVienKinhDoanh,
    },
    {
      title: "Trung tâm kiểm soát nội bộ",
      location: "Tòa nhà TSA, số 43 Nguyễn Sơn Hà, Phường 5, Quận 3, TP.HCM",
      description: "",
      image: trungTamKiemSoatNoiBo,
    },
    {
      title: "Thẩm định viên",
      location: "Tòa nhà TSA, số 43 Nguyễn Sơn Hà, Phường 5, Quận 3, TP.HCM",
      description:
        "Chịu trách nhiệm chính về chất lượng thẩm định, tư vấn giá thực hiện ",
      image: thamDinhVien,
    },
    // Add more jobs as needed
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedJob(null);
  };

  // Organization chart

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
                href="/tuyen-dung"
                className="font-semibold text-xl lg:text-2xl"
              >
                <b className="text-blue-200">TUYỂN DỤNG</b>
              </a>
              <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-xl lg:text-2xl p-[1px]"></i>
            </div>

            <div>
              <span className="text-2xl md:text-4xl lg:text-6xl font-extrabold fade-in-slide-up">
                CÙNG VIETTIN VALUATION THAY ĐỔI TƯƠNG LAI
              </span>
            </div>
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

      {/****************** Section 2 - Notice from the Board  ******************************/}
      {/* ***************************************** */}
      <section className="relative w-full py-[5rem] px-2" ref={section2Ref}>
        <div
          className="font-semibold md:text-2xl text-xl items-center justify-center"
          data-aos="fade-down"
        >
          <center>
            Tại Việt Tín, chúng tôi luôn khao khát mang đến những cơ hội nghề
            nghiệp tốt nhất cùng một môi trường làm việc với một tinh thần khởi
            nghiệp mạnh mẽ dành cho bạn.
          </center>
        </div>
      </section>

      {/****************** Section 3 -  Core Values ******************************/}
      {/* ***************************************** */}
      <section className="w-full py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Giá trị cốt lõi của chúng tôi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tại VietTin Valuation, chúng tôi tuân thủ các giá trị cốt lõi để
              hướng dẫn mọi hành động của mình.
            </p>
          </div>

          {/* Core Values Grid */}
          <div>
            <img src={core} className="w-full h-full rounded-xl" />
          </div>
        </div>
      </section>

      {/****************** Section 4 -  Organization chart ******************************/}
      {/* ***************************************** */}
      <section className="relative w-full">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center py-10">
            Cơ cấu tổ chức
          </h2>
          <div>
            <img src={cocautochuc} className="w-full h-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center py-10">
            Lộ trình vòng danh
          </h2>
          <div>
            <img src={lotrinhvongdanh} className="w-full h-full rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/****************** Section 5 -  Why choose Viettin ******************************/}
      {/* ***************************************** */}
      <section className="relative w-full bg-white py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center py-10">
            Vì sao chọn Việt Tín?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="flex">
              <img src={icon1} alt="Benefit 1" className="h-14 w-14 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Phúc Lợi Cơ Bản
                </h3>
                <p className="text-gray-600">
                  Chế độ bảo hiểm, nghỉ lễ, và hợp đồng lao động đầy đủ theo quy
                  định hiện hành.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex">
              <img src={icon2} alt="Benefit 2" className="h-14 w-14 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Trợ Cấp
                </h3>
                <p className="text-gray-600">
                  Trợ cấp di chuyển, gửi xe và các trợ cấp khác theo quy định
                  của công ty.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex">
              <img src={icon3} alt="Benefit 3" className="h-14 w-14 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Môi Trường Làm Việc
                </h3>
                <p className="text-gray-600">
                  Cơ hội thăng tiến, lương thưởng cạnh tranh và môi trường
                  chuyên nghiệp.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex">
              <img src={icon4} alt="Benefit 4" className="h-14 w-14 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Đào Tạo
                </h3>
                <p className="text-gray-600">
                  Các khóa đào tạo cập nhật kỹ năng mới và thông tin thị trường
                  bất động sản hàng tuần.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex">
              <img src={icon5} alt="Benefit 5" className="h-14 w-14 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Thể Thao
                </h3>
                <p className="text-gray-600">
                  Tham gia miễn phí các hoạt động thể thao như cầu lông, bơi
                  lội.
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="flex">
              <img src={icon6} alt="Benefit 6" className="h-14 w-14 mr-6" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  Cập Nhật Công Nghệ
                </h3>
                <p className="text-gray-600">
                  Liên tục đổi mới, cập nhật các công nghệ hiện đại trong lĩnh
                  vực thẩm định giá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/****************** Section 6 -  Job List ******************************/}
      {/* ***************************************** */}
      <section className=" w-full pb-10">
        <div className="relative z-10 flex flex-col items-center justify-center md:p-[15vh_0] p-[10vh_0]">
          <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
            <center>Các vị trí đang tuyển dụng</center>
          </span>
        </div>

        {/* Job List Section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mx-auto px-6 md:px-20">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} onApplyClick={handleApplyClick} />
          ))}
        </div>

        {/* Modal */}
        {selectedJob && (
          <Modal
            isOpen={isModalVisible}
            onClose={handleCloseModal}
            aria-labelledby="modal-title"
            closeButton
          >
            <ModalContent>
              <ModalHeader>
                <h2 className="text-xl font-bold" id="modal-title">
                  {selectedJob.title}
                </h2>
              </ModalHeader>
              <ModalBody>
                <Zoom>
                  <img
                    src={selectedJob.image} // Job image
                    alt={selectedJob.title}
                    loading="lazy"
                    className="w-full h-auto mb-4"
                  />
                </Zoom>
                <p className="mt-4 text-black">
                  Gửi CV qua địa chỉ{" "}
                  <a href="mailto:p.hcns@viettinvaluation.com">
                    <b className="text-[#2648b5]">
                      p.hcns@viettinvaluation.com
                    </b>{" "}
                    Hoặc nộp hồ sơ trực tiếp tại{" "}
                    <a
                      href="https://maps.app.goo.gl/HSQhEipKWK9UucDN9"
                      target="_blank"
                      className="underline text-[#2648b5]"
                    >
                      {" "}
                      Tầng 5 - Tòa nhà TSA, số 43 Nguyễn Sơn Hà, Phường 5, Quận
                      3, TP.HCM{" "}
                    </a>
                  </a>
                </p>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={handleCloseModal}
                  className="mt-4 bg-[#2648b5] text-white px-4 py-2 rounded"
                >
                  Đóng
                </button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </section>
    </div>
  );
}

export default Section;
