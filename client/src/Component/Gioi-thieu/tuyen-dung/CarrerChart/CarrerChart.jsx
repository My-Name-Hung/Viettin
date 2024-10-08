import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import * as JSC from "jscharting";
import React, { useEffect, useState } from "react";
import "./CarrerChart.css";

function CarrerChart() {
  const [language, setLanguage] = useState("vi"); // Language state

  // Translation function for chart labels
  const translate = (text, targetLanguage) => {
    const translations = {
      vi: {
        "Chủ tịch Hội đồng quản trị": "Chủ tịch Hội đồng quản trị",
        "Trợ lý": "Trợ lý",
        "Giám đốc Trung tâm Kiểm soát rủi ro":
          "Giám đốc Trung tâm Kiểm soát rủi ro",
        "Kiểm soát rủi ro": "Kiểm soát rủi ro",
        "Ban giám đốc": "Ban giám đốc",
        "Giám đốc trung tâm Tài chính": "Giám đốc trung tâm Tài chính",
        "Bộ phận kế toán": "Bộ phận kế toán",
        "Bộ phận Hành chính Nhân sự": "Bộ phận Hành chính Nhân sự",
        "Giám đốc trung tâm Kinh doanh": "Giám đốc trung tâm Kinh doanh",
        "Mảng kinh doanh": "Mảng kinh doanh",
        "Nghiệp vụ": "Nghiệp vụ",
        "Giám đốc trung tâm Phê duyệt": "Giám đốc trung tâm Phê duyệt",
        "Mảng tài sản công": "Mảng tài sản công",
        "Mảng ngân hàng": "Mảng ngân hàng",
        "Mảng doanh nghiệp": "Mảng doanh nghiệp",
        "Giám đốc trung tâm Quản lý chất lượng":
          "Giám đốc trung tâm Quản lý chất lượng",
        "Bộ phận Chính sách Đào tạo": "Bộ phận Chính sách Đào tạo",
        "Bộ phận Quản lý chất lượng": "Bộ phận Quản lý chất lượng",
        "Bộ phận Pháp chế": "Bộ phận Pháp chế",
        "Giám đốc Chi nhánh/Trưởng Văn phòng đại diện":
          "Giám đốc Chi nhánh/Trưởng Văn phòng đại diện",
        "Phó Giám đốc trung tâm (Bộ phận kiểm soát rủi ro)":
          "Phó Giám đốc trung tâm (Bộ phận kiểm soát rủi ro)",
        "Trưởng nhóm Kiểm soát rủi ro": "Trưởng nhóm Kiểm soát rủi ro",
        "Chuyên viên Kiểm soát rủi ro": "Chuyên viên Kiểm soát rủi ro",
        "Giám đốc công ty": "Giám đốc công ty",
        "Phó giám đốc 1": "Phó giám đốc 1",
        "Phó giám đốc 2": "Phó giám đốc 2",
        "Phó giám đốc 3": "Phó giám đốc 3",
        "Chuyên viên Kế toán": "Chuyên viên Kế toán",
        "Kế toán tổng hợp": "Kế toán tổng hợp",
        "Trưởng nhóm Hành chính - Nhân sự": "Trưởng nhóm Hành chính - Nhân sự",
        "Chuyên viên Hành chính - Nhân sự": "Chuyên viên Hành chính - Nhân sự",
        "Phó giám đốc (Trung tâm Kinh doanh)":
          "Phó giám đốc (Trung tâm Kinh doanh)",
        "Trưởng nhóm kinh doanh": "Trưởng nhóm kinh doanh",
        "Trưởng nhóm thẩm định giá": "Trưởng nhóm thẩm định giá",
        "Chuyên viên thẩm định giá": "Chuyên viên thẩm định giá",
        "Chuyên viên kinh doanh": "Chuyên viên kinh doanh",
        "Admin kinh doanh": "Admin kinh doanh",
        "Phó giám đốc (Trung tâm Phê duyệt)":
          "Phó giám đốc (Trung tâm Phê duyệt)",
        "Cố vấn nghiệp vụ": "Cố vấn nghiệp vụ",
        "Trưởng nhóm Phê duyệt": "Trưởng nhóm Phê duyệt",
        "Chuyên gia phê duyệt": "Chuyên gia phê duyệt",
        "Chuyên viên Chính sách - Đào tạo": "Chuyên viên Chính sách - Đào tạo",
        "Trưởng nhóm Chính sách - Đào tạo": "Trưởng nhóm Chính sách - Đào tạo",
        "Trưởng nhóm Quản lý chất lượng": "Trưởng nhóm Quản lý chất lượng",
        "Chuyên viên Quản lý chất lượng": "Chuyên viên Quản lý chất lượng",
        "Trưởng nhóm Pháp chế": "Trưởng nhóm Pháp chế",
        "Chuyên viên Pháp chế": "Chuyên viên Pháp chế",
      },
      en: {
        "Chủ tịch Hội đồng quản trị": "Chairman of the Board",
        "Trợ lý": "Assistant",
        "Giám đốc Trung tâm Kiểm soát rủi ro":
          "Director of Risk Control Center",
        "Kiểm soát rủi ro": "Risk Control",
        "Ban giám đốc": "Board of Directors",
        "Giám đốc trung tâm Tài chính": "Director of Finance Center",
        "Bộ phận kế toán": "Accounting Department",
        "Bộ phận Hành chính Nhân sự": "HR Department",
        "Giám đốc trung tâm Kinh doanh": "Director of Business Center",
        "Mảng kinh doanh": "Business Sector",
        "Nghiệp vụ": "Operations",
        "Giám đốc trung tâm Phê duyệt": "Director of Approval Center",
        "Mảng tài sản công": "Public Assets Sector",
        "Mảng ngân hàng": "Banking Sector",
        "Mảng doanh nghiệp": "Enterprise Sector",
        "Giám đốc trung tâm Quản lý chất lượng":
          "Director of Quality Management Center",
        "Bộ phận Chính sách Đào tạo": "Training Policy Department",
        "Bộ phận Quản lý chất lượng": "Quality Management Department",
        "Bộ phận Pháp chế": "Legal Department",
        "Giám đốc Chi nhánh/Trưởng Văn phòng đại diện":
          "Branch Director/Head of Representative Office",
        "Phó Giám đốc trung tâm (Bộ phận kiểm soát rủi ro)":
          "Deputy Director of the Center (Risk Control Department)",
        "Trưởng nhóm Kiểm soát rủi ro": "Risk Control Team Leader",
        "Chuyên viên Kiểm soát rủi ro": "Risk Control Specialist",
        "Giám đốc công ty": "Company Director",
        "Phó giám đốc 1": "Deputy Director 1",
        "Phó giám đốc 2": "Deputy Director 2",
        "Phó giám đốc 3": "Deputy Director 3",
        "Chuyên viên Kế toán": "Accounting Specialist",
        "Kế toán tổng hợp": "General Accountant",
        "Trưởng nhóm Hành chính - Nhân sự":
          "Administrative - Human Resources Team Leader",
        "Chuyên viên Hành chính - Nhân sự":
          "Administrative - Human Resources Specialist",
        "Phó giám đốc (Trung tâm Kinh doanh)":
          "Deputy Director (Business Center)",
        "Trưởng nhóm kinh doanh": "Business Team Leader",
        "Trưởng nhóm thẩm định giá": "Valuation Team Leader",
        "Chuyên viên thẩm định giá": "Valuation Specialist",
        "Chuyên viên kinh doanh": "Business Specialist",
        "Admin kinh doanh": "Business Admin",
        "Phó giám đốc (Trung tâm Phê duyệt)":
          "Deputy Director (Approval Center)",
        "Cố vấn nghiệp vụ": "Professional Advisor",
        "Trưởng nhóm Phê duyệt": "Approval Team Leader",
        "Chuyên gia phê duyệt": "Approval Expert",
        "Chuyên viên Chính sách - Đào tạo": "Policy - Training Specialist",
        "Trưởng nhóm Chính sách - Đào tạo": "Policy - Training Team Leader",
        "Trưởng nhóm Quản lý chất lượng": "Quality Management Team Leader",
        "Chuyên viên Quản lý chất lượng": "Quality Management Specialist",
        "Trưởng nhóm Pháp chế": "Legal Team Leader",
        "Chuyên viên Pháp chế": "Legal Specialist",
      },
      ko: {
        "Chủ tịch Hội đồng quản trị": "이사회 의장",
        "Trợ lý": "비서",
        "Giám đốc Trung tâm Kiểm soát rủi ro": "위험 관리 센터장",
        "Kiểm soát rủi ro": "위험 관리",
        "Ban giám đốc": "이사회",
        "Giám đốc trung tâm Tài chính": "재무 센터장",
        "Bộ phận kế toán": "회계 부서",
        "Bộ phận Hành chính Nhân sự": "인사 부서",
        "Giám đốc trung tâm Kinh doanh": "비즈니스 센터장",
        "Mảng kinh doanh": "사업 부문",
        "Nghiệp vụ": "업무",
        "Giám đốc trung tâm Phê duyệt": "승인 센터장",
        "Mảng tài sản công": "공공 자산 부문",
        "Mảng ngân hàng": "은행 부문",
        "Mảng doanh nghiệp": "기업 부문",
        "Giám đốc trung tâm Quản lý chất lượng": "품질 관리 센터장",
        "Bộ phận Chính sách Đào tạo": "교육 정책 부서",
        "Bộ phận Quản lý chất lượng": "품질 관리 부서",
        "Bộ phận Pháp chế": "법무 부서",
        "Giám đốc Chi nhánh/Trưởng Văn phòng đại diện": "지점장/대표 사무소장",
        "Phó Giám đốc trung tâm (Bộ phận kiểm soát rủi ro)":
          "센터 부국장(위험 관리 부서)",
        "Trưởng nhóm Kiểm soát rủi ro": "위험 관리 팀장",
        "Chuyên viên Kiểm soát rủi ro": "위험 관리 전문가",
        "Giám đốc công ty": "회사 이사",
        "Phó giám đốc 1": "부국장 1",
        "Phó giám đốc 2": "부국장 2",
        "Phó giám đốc 3": "부국장 3",
        "Chuyên viên Kế toán": "회계 전문가",
        "Kế toán tổng hợp": "일반회계",
        "Trưởng nhóm Hành chính - Nhân sự": "행정 - 인사팀 리더",
        "Chuyên viên Hành chính - Nhân sự": "행정 - 인사 전문가",
        "Phó giám đốc (Trung tâm Kinh doanh)": "부국장(비즈니스센터)",
        "Trưởng nhóm kinh doanh": "영업팀 리더",
        "Trưởng nhóm thẩm định giá": "평가팀 리더",
        "Chuyên viên thẩm định giá": "평가 전문가",
        "Chuyên viên kinh doanh": "영업 전문가",
        "Admin kinh doanh": "비즈니스 관리자",
        "Phó giám đốc (Trung tâm Phê duyệt)": "부국장(승인 센터)",
        "Cố vấn nghiệp vụ": "전문 고문",
        "Trưởng nhóm Phê duyệt": "승인팀 리더",
        "Chuyên gia phê duyệt": "전문가 승인",
        "Chuyên viên Chính sách - Đào tạo": "정책 - 교육 전문가",
        "Trưởng nhóm Chính sách - Đào tạo": "정책 - 교육 팀 리더",
        "Trưởng nhóm Quản lý chất lượng": "품질경영팀장",
        "Chuyên viên Quản lý chất lượng": "품질 관리 전문가",
        "Trưởng nhóm Pháp chế": "법무팀 리더",
        "Chuyên viên Pháp chế": "법률 전문가",
      },
    };

    return translations[targetLanguage]?.[text] || text;
  };

  // Function to translate HTML strings containing <ul><li> tags
  const translateHtml = (htmlString, targetLanguage) => {
    // Use a regular expression to match the content inside <li> tags
    return htmlString.replace(/<li>(.*?)<\/li>/g, (match, p1) => {
      // Translate the text inside each <li> tag
      const translatedText = translate(p1, targetLanguage);
      // Return the translated <li> element
      return `<li>${translatedText}</li>`;
    });
  };

  useEffect(() => {
    const points = [
      {
        name: translate("Chủ tịch Hội đồng quản trị", language),
        id: "hdqt",
        color: "#0059b3",
        label_color: "white",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Trợ lý", language),
        id: "tl",
        parent: "hdqt",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Giám đốc Trung tâm Kiểm soát rủi ro", language),
        id: "gdksrr",
        parent: "hdqt",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Kiểm soát rủi ro", language),
        id: "ksrr",
        parent: "gdksrr",
        attributes: {
          data: translateHtml(
            "<ul><li>Phó Giám đốc trung tâm (Bộ phận kiểm soát rủi ro)</li><li>Trưởng nhóm Kiểm soát rủi ro</li><li>Chuyên viên Kiểm soát rủi ro</li></ul>",
            language
          ),
          tasks: "",
        },
      },
      {
        name: translate("Ban giám đốc", language),
        id: "bgd",
        parent: "hdqt",
        attributes: {
          data: translateHtml("<ul><li>Giám đốc công ty</li><li>Phó giám đốc 1</li><li>Phó giám đốc 2</li><li>Phó giám đốc 3</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Giám đốc trung tâm Tài chính", language),
        id: "gdtttc",
        parent: "bgd",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Bộ phận kế toán", language),
        id: "bpkt",
        parent: "gdtttc",
        attributes: {
          data: translateHtml("<ul><li>Chuyên viên Kế toán</li><li>Kế toán tổng hợp</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Bộ phận Hành chính Nhân sự", language),
        id: "bphcns",
        parent: "gdtttc",
        attributes: {
          data: translateHtml("<ul><li>Trưởng nhóm Hành chính - Nhân sự</li><li>Chuyên viên Hành chính - Nhân sự</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Giám đốc trung tâm Kinh doanh", language),
        id: "gdttkd",
        parent: "bgd",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Mảng kinh doanh", language),
        id: "mkd",
        parent: "gdttkd",
        attributes: {
          data: translateHtml("<ul><li>Phó giám đốc (Trung tâm Kinh doanh)</li><li>Trưởng nhóm kinh doanh</li> <li>Chuyên viên kinh doanh</li> <li>Admin kinh doanh</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Nghiệp vụ", language),
        id: "nv",
        parent: "gdttkd",
        attributes: {
          data: translateHtml("<ul><li>Phó giám đốc (Trung tâm Kinh doanh)</li><li>Trưởng nhóm thẩm định giá</li> <li>Chuyên viên thẩm định giá</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Giám đốc trung tâm Phê duyệt", language),
        id: "gdttpd",
        parent: "bgd",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Mảng tài sản công", language),
        id: "mtsc",
        parent: "gdttpd",
        attributes: {
          data: translateHtml("<ul><li>Phó giám đốc (Trung tâm Phê duyệt)</li><li>Cố vấn nghiệp vụ</li> <li>Trưởng nhóm Phê duyệt</li> <li>Chuyên gia phê duyệt</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Mảng ngân hàng", language),
        id: "mgh",
        parent: "gdttpd",
        attributes: {
          data: translateHtml("<ul><li>Phó giám đốc (Trung tâm Phê duyệt)</li><li>Cố vấn nghiệp vụ</li> <li>Trưởng nhóm Phê duyệt</li> <li>Chuyên gia phê duyệt</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Mảng doanh nghiệp", language),
        id: "mpn",
        parent: "gdttpd",
        attributes: {
          data: translateHtml("<ul><li>Phó giám đốc (Trung tâm Phê duyệt)</li><li>Cố vấn nghiệp vụ</li> <li>Trưởng nhóm Phê duyệt</li> <li>Chuyên gia phê duyệt</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Giám đốc trung tâm Quản lý chất lượng", language),
        id: "gdttqlcl",
        parent: "bgd",
        attributes: { data: "", tasks: "" },
      },
      {
        name: translate("Bộ phận Chính sách Đào tạo", language),
        id: "bpcsdt",
        parent: "gdttqlcl",
        attributes: {
          data: translateHtml("<ul><li>Trưởng nhóm Chính sách - Đào tạo</li><li>Chuyên viên Chính sách - Đào tạo</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Bộ phận Quản lý chất lượng", language),
        id: "bpqlcl",
        parent: "gdttqlcl",
        attributes: {
          data: translateHtml("<ul><li>Trưởng nhóm Quản lý chất lượng</li><li>Chuyên viên Quản lý chất lượng</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate("Bộ phận Pháp chế", language),
        id: "bppc",
        parent: "gdttqlcl",
        attributes: {
          data: translateHtml("<ul><li>Trưởng nhóm Pháp chế</li><li>Chuyên viên Pháp chế</li></ul>",language),
          tasks: "",
        },
      },
      {
        name: translate(
          "Giám đốc Chi nhánh/Trưởng Văn phòng đại diện",
          language
        ),
        id: "gdcnvpdd",
        parent: "bgd",
        attributes: { data: "", tasks: "" },
      },
    ];

    const charts = JSC.chart("chartDivs", {
      debug: true,
      type: "organizational down",
      legend_visible: false,
      series: [
        {
          defaultPoint: {
            label: {
              text: "<b>%name</b><br/>%data",
              autoWrap: false,
              color: "#004080",
              align: "left",
            },
            connectorLine: {
              color: "#004080",
              width: 1,
            },
            annotation: {
              padding: 9,
              corners: ["cut", "square", "cut", "square"],
              margin: [15, 5, 10, 0],
            },
            outline: { color: "#004080", width: 1 },
            color: "#b3d9ff",
            tooltip:
              "<span style='listStyleType: circle; listPadding: 0;'>%tasks</span>",
          },
          points,
        },
      ],
    });
  }, [language]); // Update chart when language changes

  return (
    <div className="chart-container">
      {/* Language Dropdown */}
      <div className="dropdown-container">
        <Dropdown>
          <DropdownTrigger>
            <Button className="dropdown-trigger focus:ring-0" color="primary">
              Lựa chọn ngôn ngữ
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection title="Languages">
              <DropdownItem key="vi" onClick={() => setLanguage("vi")}>
                Vietnamese
              </DropdownItem>
              <DropdownItem key="en" onClick={() => setLanguage("en")}>
                English
              </DropdownItem>
              <DropdownItem key="ko" onClick={() => setLanguage("ko")}>
                Korean
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Chart Container */}
      <div id="chartDivs" className="chart h-[500px] w-full"></div>
    </div>
  );
}

export default CarrerChart;
