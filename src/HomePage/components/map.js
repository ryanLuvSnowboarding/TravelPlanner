import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import config from "../../config";
import MarkedPin from "./mapPins/Pins"; // Import the Marker component

function Map() {
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: config.googleApikey,
      version: "weekly",
    });

    loader.load().then(() => {
      const { google } = window;
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 16,
      });

      setMap(map);

      // Initialize DirectionsService and DirectionsRenderer
      const directionsService = new google.maps.DirectionsService();
      setDirectionsService(directionsService);

      const directionsRenderer = new google.maps.DirectionsRenderer();
      setDirectionsRenderer(directionsRenderer);
      directionsRenderer.setMap(map);

      // Define the route
      const route = {
        origin: "Central Park Tower, New York, NY",
        destination: "Madison Square Garden, New York, NY",
        travelMode: google.maps.TravelMode.DRIVING,
      };

      // Request directions and render them on the map
      directionsService.route(route, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      });
    });
  }, []); // Empty dependency array to run the effect only once

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}

export default Map;
