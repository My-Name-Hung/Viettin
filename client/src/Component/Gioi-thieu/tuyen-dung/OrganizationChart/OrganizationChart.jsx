import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react"; // Import NextUI components
import React, { useEffect, useRef, useState } from "react";
import "./org.css";
import * as JSC from 'jscharting'

const OrganizationChart = () => {
  const chartDiv = useRef(null);
  const [language, setLanguage] = useState("vi"); // State to manage selected language

  useEffect(() => {
    const palette = ["#EE4266", "#FFD23F", "#540D6E", "#3BCEAC", "#0EAD69"];

    const originalPoints = [
      {
        name: "Hội đồng cổ đông",
        id: "ceo",
        attributes: { position: "", division: "" },
      },

      {
        name: "Hội đồng quản trị",
        id: "d1",
        parent: "ceo",
        attributes: { position: "", division: "" },
      },

      {
        name: "Trợ lý",
        id: "d1_srmm1",
        parent: "d1",
        attributes: { position: "", division: "" },
      },
      {
        name: "Ban giám đốc",
        id: "d2",
        parent: "d1",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm kiểm soát nội bộ",
        id: "d1_srmm2",
        parent: "d1",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm tài chính",
        id: "d2_srmm1",
        parent: "d2",
        attributes: { position: "", division: "" },
      },
      {
        name: "Kế toán",
        id: "d2_srmmm1",
        parent: "d2_srmm1",
        attributes: { position: "", division: "" },
      },
      {
        name: "Hành chính",
        id: "d2_srmmm2",
        parent: "d2_srmm1",
        attributes: { position: "", division: "" },
      },
      {
        name: "Nhân sự",
        id: "d2_srmmm3",
        parent: "d2_srmm1",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm kinh doanh",
        id: "d2_srmm2",
        parent: "d2",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm kinh doanh 1",
        id: "d2_srmmm21",
        parent: "d2_srmm2",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm kinh doanh 2",
        id: "d2_srmmm22",
        parent: "d2_srmm2",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm phê duyệt",
        id: "d2_srmm3",
        parent: "d2",
        attributes: { position: "", division: "" },
      },
      {
        name: "Trung tâm quản lý chất lượng",
        id: "d2_srmm4",
        parent: "d2",
        attributes: { position: "", division: "" },
      },
      {
        name: "Chính sách - Đào tạo",
        id: "d2_srmmm41",
        parent: "d2_srmm4",
        attributes: { position: "", division: "" },
      },
      {
        name: "QM",
        id: "d2_srmmm42",
        parent: "d2_srmm4",
        attributes: { position: "", division: "" },
      },
      {
        name: "Pháp chế",
        id: "d2_srmmm43",
        parent: "d2_srmm4",
        attributes: { position: "", division: "" },
      },
      {
        name: "Chi nhánh/Văn phòng đại diện",
        id: "d2_srmm5",
        parent: "d2",
        attributes: { position: "", division: "" },
      },
    ];

    const translate = (text, targetLanguage) => {
      const translations = {
        vi: {
          // Vietnamese
          "Hội đồng cổ đông": "Hội đồng cổ đông",
          "Hội đồng quản trị": "Hội đồng quản trị",
          "Ban giám đốc": "Ban giám đốc",
          "Trợ lý": "Trợ lý",
          "Trung tâm kiểm soát nội bộ": "Trung tâm kiểm soát nội bộ",
          "Trung tâm tài chính": "Trung tâm tài chính",
          "Kế toán": "Kế toán",
          "Hành chính": "Hành chính",
          "Nhân sự": "Nhân sự",
          "Trung tâm kinh doanh": "Trung tâm kinh doanh",
          "Trung tâm kinh doanh 1": "Trung tâm kinh doanh 1",
          "Trung tâm kinh doanh 2": "Trung tâm kinh doanh 2",
          "Trung tâm phê duyệt": "Trung tâm phê duyệt",
          "Trung tâm quản lý chất lượng": "Trung tâm quản lý chất lượng",
          "Chính sách - Đào tạo": "Chính sách - Đào tạo",
          QM: "Quản lý chất lượng",
          "Pháp chế": "Pháp chế",
          "Chi nhánh/Văn phòng đại diện": "Chi nhánh/Văn phòng đại diện",
        },
        en: {
          // English
          "Hội đồng cổ đông": "Board of Shareholders",
          "Hội đồng quản trị": "Board of Directors",
          "Ban giám đốc": "Board of Management",
          "Trợ lý": "Assistant",
          "Trung tâm kiểm soát nội bộ": "Internal Control Center",
          "Trung tâm tài chính": "Finance Center",
          "Kế toán": "Accounting",
          "Hành chính": "Administration",
          "Nhân sự": "Human Resources",
          "Trung tâm kinh doanh": "Business Center",
          "Trung tâm kinh doanh 1": "Business Center 1",
          "Trung tâm kinh doanh 2": "Business Center 2",
          "Trung tâm phê duyệt": "Approval Center",
          "Trung tâm quản lý chất lượng": "Quality Management Center",
          "Chính sách - Đào tạo": "Policy - Training",
          QM: "Quality Management",
          "Pháp chế": "Legal",
          "Chi nhánh/Văn phòng đại diện": "Branch/Representative Office",
        },
        ko: {
          // Korean
          "Hội đồng cổ đông": "주주총회",
          "Hội đồng quản trị": "이사회",
          "Ban giám đốc": "경영진",
          "Trợ lý": "보조",
          "Trung tâm kiểm soát nội bộ": "내부 통제 센터",
          "Trung tâm tài chính": "재무 센터",
          "Kế toán": "회계",
          "Hành chính": "행정",
          "Nhân sự": "인사",
          "Trung tâm kinh doanh": "비즈니스 센터",
          "Trung tâm kinh doanh 1": "비즈니스 센터 1",
          "Trung tâm kinh doanh 2": "비즈니스 센터 2",
          "Trung tâm phê duyệt": "승인 센터",
          "Trung tâm quản lý chất lượng": "품질 관리 센터",
          "Chính sách - Đào tạo": "정책 - 교육",
          QM: "품질 관리",
          "Pháp chế": "법률",
          "Chi nhánh/Văn phòng đại diện": "지점/대표 사무소",
        },
      };
      return translations[targetLanguage]?.[text] || text;
    };

    const translatedPoints = originalPoints.map((point) => ({
      ...point,
      name: translate(point.name, language),
    }));

    const pointsByDivision = JSC.nest()
      .key("attributes.division")
      .entries(translatedPoints);

    pointsByDivision.forEach((group, i) => {
      group.values.forEach((point) => {
        if (point.parent !== "ceo") {
          JSC.merge(point, {
            connectorLine_color: palette[i],
          });
        }
        JSC.merge(point, {
          outline: { color: palette[i], width: 2 },
        });
      });
    });

    const chart = JSC.chart(chartDiv.current, {
      debug: true,
      type: "organizational",
      defaultSeries_mouseTracking_enabled: true,
      legend: {
        visible: true,
        template: "%icon %name",
        position: "inside bottom",
        defaultEntry: {
          iconWidth: 14,
          icon_outline_width: 2,
        },
      },
      defaultPoint: {
        color: "white",
        connectorLine: { width: 1, color: "#BDBDBD" },
        leafPointLayout: "vertical",
        annotation: {
          label_text: "<b>%name</b>",
          syncWidth: "all",
          syncHeight: "level",
          padding: 10,
          style: { fontSize: 14, color: "#333" },
        },
        outline: { color: "#BDBDBD", width: 2 },
        hoverStyle: {
          annotation_label_style: { fontSize: 16, fontWeight: "bold" },
          outline: { color: "#FFD23F", width: 3 },
        },
      },
      series: [{ points: translatedPoints }],
    });

    // Store chart instance to dispose later
    chartDiv.current.jscChart = chart;

    // Handle resize for responsiveness
    const handleResize = () => {
      if (chart) {
        chart.update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [language]); // Re-run effect when language changes

  return (
    <div className="responsive-container">
      {/* Language Dropdown */}
      <div className="dropdown-container">
        <Dropdown>
          <DropdownTrigger>
            <Button className="dropdown-trigger focus:ring-0" color="primary">
              Lựa chọn ngôn ngữ
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownSection title="Ngôn ngữ">
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
      <div className="chart-container">
        <div ref={chartDiv} id="chartDiv" className="chart"></div>
      </div>
    </div>
  );
};

export default OrganizationChart;
