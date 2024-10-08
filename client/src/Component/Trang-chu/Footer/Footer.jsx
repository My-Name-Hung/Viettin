import React, { useState } from "react";
import "./Footer.css";

// import assets
import logo from "../../../assets/Logo.png";

function Footer() {
  // Dropdown menu
  const [expandedMenus, setExpandedMenus] = useState({});
  const toggleMenu = (menuId) => {
    setExpandedMenus({
      ...expandedMenus,
      [menuId]: !expandedMenus[menuId], // Toggle the expanded state
    });
  };

  return (
    <div>
      <section className="relative">
        <footer id="footer">
          <div className="inner">
            <div className="row">
              <ul className="contact-group">
                <li className="item">
                  <div className="icon">
                    <i className="zmdi zmdi-phone"></i>
                  </div>
                  <div className="detail">
                    <p className="title">Gọi ngay từ 8:00 đến 18:00</p>
                    <p className="link">
                      <a
                        href="tel:0901 866 906"
                        className="font-bold text-[#2c6aff]"
                        rel="nofollow"
                      >
                        0901 866 906/907
                      </a>
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="icon">
                    <i className="zmdi zmdi-phone"></i>
                  </div>
                  <div className="detail">
                    <p className="title">Hotline</p>
                    <p className="link">
                      <a
                        href="tel:0983454769"
                        rel="nofollow"
                        className="font-bold text-[#2c6aff]"
                      >
                        0983 454 769 <br/> 0901 866 909
                      </a>
                    </p>
                  </div>
                </li>
                <li className="item">
                  <div className="icon">
                    <i className="zmdi zmdi-email-open"></i>
                  </div>
                  <div className="detail">
                    <p className="title">Chăm sóc khách hàng</p>
                    <p className="link">
                      <a
                        href="mailto:support@viettinvaluation.com"
                        rel="nofollow"
                        className="font-bold text-[#2c6aff]"
                      >
                        support@viettinvaluation.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row">
              <ul className="info-container">
                <li className="address">
                  <a className="logo" href="/" title="VietTin">
                    <div className="company flex">
                      <img
                        src={logo}
                        className="h-[45px] w-[50px]"
                        alt="Logo Viettin"
                      />
                      <div className="pr-1 text-inherit text-xl pt-[10px] text-orange-600 hover:cursor-pointer font-extrabold ">
                        VIETTIN VALUATION
                      </div>
                    </div>
                  </a>
                  <p className="company-name">
                    Công ty Cổ phần Thẩm định giá Việt Tín
                  </p>
                  <p>
                    <i className="zmdi zmdi-home"></i>MST: 0310791400 - Sở KHĐT
                    TP Hồ Chí Minh cấp ngày 20/04/2011
                  </p>
                  <p>
                    <i className="zmdi zmdi-pin-drop"></i>Tòa nhà TSA, tầng 5,
                    số 43 Nguyễn Sơn Hà, Phường 5, Quận 3, TP.HCM
                  </p>
                  <p>
                    <i className="zmdi zmdi-phone"></i>
                    <a href="tel:0901866906" rel="nofollow">
                      0901 866 906/907/909
                    </a>
                    <i className="px-1">-</i>
                    <a href="tel:0983454769" rel="nofollow">
                      0983 454 769
                    </a>
                  </p>
                  <p>
                    <i className="zmdi zmdi-email"></i>
                    <a
                      href="mailto:support@viettinvaluation.com"
                      rel="nofollow"
                    >
                      support@viettinvaluation.com
                    </a>
                  </p>
                </li>
                <li className={expandedMenus["mn-01"] ? "expanded" : ""}>
                  <span
                    className="link-cty"
                    onClick={() => toggleMenu("mn-01")}
                  >
                    <p className="linetitile font-extrabold">CÔNG TY</p>
                    <i
                      className={`zmdi col-toggle zmdi-chevron-down ${
                        expandedMenus["mn-01"] ? "zmdi-chevron-up" : ""
                      }`}
                    ></i>
                  </span>
                  <ul id="mn-01" className="flex">
                    <li className="hover:text-[#2c6aff]">
                      <a href="/ve-chung-toi" title="Về VietTin">
                        Về Việt Tín
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a href="/tuyen-dung" rel="nofollow" title="Tuyển dụng">
                        Tuyển dụng
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a href="/tin-tuc" rel="nofollow" title="Tin tức">
                        Tin tức
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a href="/lien-he" rel="nofollow" title="Liên hệ">
                        Liên hệ
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a href="/chinh-sach-bao-mat" title="Chính sách bảo mật">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a href="/dieu-khoan-su-dung" title="Điều khoản sử dụng">
                        Điều khoản sử dụng
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={expandedMenus["mn-02"] ? "expanded" : ""}>
                  <span className="link-dv" onClick={() => toggleMenu("mn-02")}>
                    <p className="linetitile font-extrabold">DỊCH VỤ</p>
                    <i
                      className={`zmdi col-toggle zmdi-chevron-down ${
                        expandedMenus["mn-02"] ? "zmdi-chevron-up" : ""
                      }`}
                    ></i>
                  </span>
                  <ul id="mn-02" className="flex">
                    <li className="hover:text-[#2c6aff]">
                      <a href="/tham-dinh-gia-bds" title="Thẩm định giá BĐS">
                        Thẩm định BĐS
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="/tham-dinh-gia-ds"
                        title="Thẩm định giá Động Sản"
                      >
                        Thẩm định động sản
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="/tham-dinh-gia-tri-doanh-nghiep"
                        title="Thẩm định giá trị doanh nghiệp"
                      >
                        Giá trị doanh nghiệp
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="/tham-dinh-gia-du-an-dau-tu"
                        title="Thẩm định dự án đầu tư"
                      >
                        Thẩm định dự án
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="https://onevalue.com.vn/bat-dong-san"
                        rel="nofollow"
                        title="Định giá tự động"
                      >
                        Định giá tự động
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a href="https://amvi.com.vn/" title="Đào tạo thẩm định">
                        Đào tạo thẩm định
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={expandedMenus["mn-03"] ? "expanded" : ""}>
                  <span className="link-tt" onClick={() => toggleMenu("mn-03")}>
                    <p className="linetitile font-extrabold">THÔNG TIN</p>
                    <i
                      className={`zmdi col-toggle zmdi-chevron-down ${
                        expandedMenus["mn-03"] ? "zmdi-chevron-up" : ""
                      }`}
                    ></i>
                  </span>
                  <ul id="mn-03" className="flex">
                    <li className="hover:text-[#2c6aff]">
                      <a href="/dich-vu-tu-van" title="Dịch vụ tư vấn">
                        Dịch vụ tư vấn
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="/quy-trinh-tham-dinh"
                        title="Quy trình thẩm định"
                      >
                        Quy trình thẩm định
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="/quy-trinh-thanh-toan"
                        rel="nofollow"
                        title="Quy trình thanh toán"
                      >
                        Quy trình thanh toán
                      </a>
                    </li>
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="/quy-trinh-khieu-nai"
                        rel="nofollow"
                        title="Quy trình khiếu nại"
                      >
                        Quy trình khiếu nại
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={expandedMenus["mn-04"] ? "expanded" : ""}>
                  <span className="link-ud" onClick={() => toggleMenu("mn-04")}>
                    <p className="linetitile font-extrabold">ỨNG DỤNG</p>
                    <i
                      className={`zmdi col-toggle zmdi-chevron-down ${
                        expandedMenus["mn-04"] ? "zmdi-chevron-up" : ""
                      }`}
                    ></i>
                  </span>
                  <ul id="mn-04" className="flex">
                    <li className="hover:text-[#2c6aff]">
                      <a
                        href="https://www.onevalue.com.vn/"
                        rel="nofollow"
                        target="_blank"
                        title="OneValue"
                      >
                        OneValue.com.vn
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="left">
                <span>Copyright © 2024 - VietTin. All Rights Reserved.</span>
              </div>
              <div className="right">
                <a href="javascript:showFeedbackModal()">
                  {" "}
                  <p className="hover:text-gray-600">Đánh giá</p>
                </a>
                <div className="social-group">
                  <a
                    className="zmdi zmdi-facebook"
                    rel="nofollow"
                    href="https://www.facebook.com/thamdinhgiaviettin"
                    title="Facebook Việt Tín"
                    target="_blank"
                  ></a>
                  <a
                    className="zmdi zmdi-twitter"
                    rel="nofollow"
                    href="#"
                    title="Twitter Việt Tín"
                    target="_blank"
                  ></a>
                  <a
                    className="zmdi zmdi-linkedin-box"
                    rel="nofollow"
                    href="https://www.topcv.vn/cong-ty/cong-ty-co-phan-tham-dinh-gia-viet-tin/29124.html"
                    title="TopCV Việt Tín"
                    target="_blank"
                  ></a>
                  <a
                    className="zmdi zmdi-youtube-play"
                    rel="nofollow"
                    href="https://www.youtube.com/channel/UCK0NL1WQSq4dEVx2kfA93MQ/featured"
                    title="Youtube Việt Tín"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
