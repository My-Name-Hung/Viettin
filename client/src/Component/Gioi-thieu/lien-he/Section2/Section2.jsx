import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import leaflet CSS
import branchesData from "../../../../assets/Lienhe/cn.json";
import location from "../../../../assets/Lienhe/location-pin.png"; // Your marker image
import "./Section2.css"; // Your CSS styles

function Section2() {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [branches, setBranches] = useState([]);

  // Load branch data
  useEffect(() => {
    setBranches(branchesData);
  }, []);

  // Initialize the Leaflet map
  useEffect(() => {
    if (!mapContainer.current || branches.length === 0) return;

    const initialMap = L.map(mapContainer.current, {
      center: [16.64744785425334, 107.03266752130044], // Initial center
      zoom: 5, // Initial zoom level
      zoomControl: true,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(initialMap);

    setMap(initialMap);
  }, [branches]);

  // Add markers with labels for branches
  useEffect(() => {
    if (!map || branches.length === 0) return;

    branches.forEach((branch) => {
      // Create a custom icon with the branch name below the marker
      const iconWithLabel = L.divIcon({
        html: `
          <div class="custom-marker">
            <img src="${location}" class="marker-icon" />
            <div class="marker-label">${branch.name}</div>
          </div>
        `,
        className: "", // Remove default divIcon styles
        iconSize: [100, 100], // Adjust the size of the whole div (marker + label)
        iconAnchor: [15, 50], // Adjust the anchor point (position where it sticks on the map)
        popupAnchor: [0, -40], // Popup position relative to the marker icon
      });

      // Create a marker with the custom icon
      const marker = L.marker([branch.latitude, branch.longitude], {
        icon: iconWithLabel,
      }).addTo(map);

      // Bind popup to each marker
      const popupContent = `
        <div class="popup-card">
          <div class="popup-card-header text-[18px] font-bold text-black text-center">
            ${branch.name}
          </div>
          <div class="popup-card-body">
            <div class="popup-card-left">
              <p><strong>Địa chỉ:</strong><br>${branch.address}</p>
              <p><strong>Email:</strong><br><a href="mailto:${branch.mail}">${branch.mail}</a></p>
            </div>
            <div class="popup-card-right">
              <p><strong>Người liên hệ:</strong><br>${branch.persion}</p>
              <p><strong>Chức vụ:</strong><br>${branch.brand}</p>
              <p><strong>Điện thoại:</strong><br><a href="tel:${branch.tel}">${branch.tel}</a></p>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
    });
  }, [map, branches]);

  return (
    <div>
      <section className="relative w-full pt-[3rem] pb-[2rem] px-2">
        <div className="items-center justify-center h-auto pt-0 md:pt-0 pb-10 md:pb-12">
          <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
            <center>Chi nhánh/Văn phòng đại diện</center>
          </span>
        </div>
        <div className="shadow-xl">
          <div ref={mapContainer} className="h-[550px] relative w-full" />
        </div>
      </section>
    </div>
  );
}

export default Section2;
