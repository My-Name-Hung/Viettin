import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import "./navBar.css";

//Import assests
import logo from "../../../assets/Logo.png";

//Import Icon
import { CgMenuGridO } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";

function navBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = useState("/"); // Track the active item's path
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown control

  const menuItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Về Việt Tín", path: "/ve-chung-toi" },
    { label: "Tuyển dụng ", path: "/tuyen-dung" },
    { label: "Tin tức", path: "/tin-tuc" },
    { label: "Liên hệ", path: "/lien-he" },
    { label: "Tất cả dịch vụ", path: "#" },
  ];

  const dropdownItems = [
    { label: "Thẩm định giá bất động sản", path: "/tham-dinh-gia-bds" },
    { label: "Thẩm định giá động sản", path: "/tham-dinh-gia-ds" },
    {
      label: "Thẩm định giá trị doanh nghiệp",
      path: "/tham-dinh-gia-tri-doanh-nghiep",
    },
    {
      label: "Thẩm định giá dự án đầu tư",
      path: "/tham-dinh-gia-du-an-dau-tu",
    },
    { label: "Định giá tự động", path: "https://onevalue.com.vn/bat-dong-san" },
    { label: "Đào tạo thẩm định giá", path: "https://amvi.com.vn/" },
    { label: "Dịch vụ tư vấn", path: "/dich-vu-tu-van" },
  ];

  useEffect(() => {
    setActiveItem(window.location.pathname);
  });

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar className="shadow-lg" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <img src={logo} className="h-[45px] w-[50px]" alt="Logo Viettin" />
          <p className=" border-r-[1px] pr-1 pt-[14px] border-t-0 border-l-0 border-b-0 border-gray-400 h-12 hover:cursor-pointer font-extrabold text-inherit text-sm text-[#2648b5] hover:text-red-800">
            <a href="/">VIETTIN VALUATION</a>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {menuItems.slice(0, 5).map(
          (
            item,
            index // Render the 5 items in the desktop navbar
          ) => (
            <NavbarItem key={index}>
              <Link
                id="NavbarItem"
                className={`pt-[1.5rem] text-black inline-block justify-between px-1 text-sm flex-1 hover:rounded-sm hover:text-[#233f98] hover:font-bold ${
                  activeItem === item.path
                    ? "text-[#233f98] font-bold active"
                    : ""
                }`}
                color="foreground"
                href={item.path}
                onClick={() => setActiveItem(item.path)} // Update the active item on click
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem
          className="hidden lg:flex hover:cursor-pointer"
          onClick={toggleDropdown} // Toggle the dropdown on click
        >
          <CgMenuGridO className="h-6 w-6" />
          <span className="text-sm flex pt-[2px]">
            Tất cả dịch vụ{" "}
            {isDropdownOpen ? (
              // Drop-up icon
              <svg
                className="ml-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14.77 12.79a.75.75 0 00-1.06-.02L10 8.832 6.29 12.77a.75.75 0 00-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 00.02 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Drop-down icon (the original one)
              <svg
                className="ml-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute justify-center mt-10 w-[16rem] bg-white border border-gray-200 rounded-lg shadow-md z-10">
              {dropdownItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:font-bold hover:text-[#2648b5] ${
                    activeItem === item.path ? "text-[#233f98] font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </NavbarItem>
        <NavbarItem>
          <span className="md:font-medium md:text-[#2648b5] md:text-sm hidden md:flex">
            <FiPhone className="h-5 w-4" />{" "}
            <a
              href="tel:0901866906"
              aria-label="Call"
              type="button"
              className="pl-1"
            >
              0901 866 906/907
            </a>
          </span>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu isOpen={isMenuOpen} className="text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            {item.label === "Tất cả dịch vụ" ? (
              <>
                <Link
                  className="w-full hover:font-bold text-black hover:text-[#2648b5] hover:text-lg"
                  onClick={toggleDropdown}
                >
                  {item.label}
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {isDropdownOpen && (
                  <div className=" text-black">
                    {dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        className={`block px-4 py-2 text-sm text-black hover:text-[#2648b5] hover:font-bold ${
                          activeItem === dropdownItem.path
                            ? "text-[#233f98] font-bold"
                            : ""
                        }`}
                        href={dropdownItem.path}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                color={
                  index === 2 ? "" : index === menuItems.length - 1 ? "" : ""
                }
                className="w-full text-black hover:text-[#2648b5] hover:font-bold hover:text-lg"
                href={item.path}
                size="lg"
              >
                {item.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default navBar;
