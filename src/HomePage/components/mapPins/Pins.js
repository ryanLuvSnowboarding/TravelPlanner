import React, { useEffect } from "react";


function openInfoWindow(marker, map, content) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: content,
    });
  
    infoWindow.open(map, marker);
  }
  

const MarkedPin = ({ map, position, title, infoContent }) => {
  useEffect(() => {
    if (map) {
      const markerStyles = {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // url
        scaledSize: new window.google.maps.Size(32, 32), // Size of the marker icon
        origin: new window.google.maps.Point(0, 0), // Origin of the marker icon
        anchor: new window.google.maps.Point(16, 32), // Anchor point of the marker icon
        labelOrigin: new window.google.maps.Point(16, 0), // Origin of the marker label
        labelStyle: {
          fontSize: "1px",
          fontWeight: "bold",
          color: "blue",
        },
      };
      // Create a marker and add it to the map
      const marker = new window.google.maps.Marker({
        position,
        map,
        title,
        icon: markerStyles,
      });
      marker.addListener("click", () => {
        openInfoWindow(marker, map, infoContent);
      });
    }
  }, [map, position, title, infoContent]);

  return null; // No need to render anything for the marker
};

export default MarkedPin;
