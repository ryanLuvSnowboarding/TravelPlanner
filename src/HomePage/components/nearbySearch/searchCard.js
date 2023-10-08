import InfoCard from "./infoCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";

function keysToCamel(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamel(item));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_([a-z])/g, (match, letter) =>
      letter.toUpperCase()
    );
    acc[camelKey] = keysToCamel(obj[key]);
    return acc;
  }, {});
}

function SearchCard() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const lat = 40.7128;
    const lng = -74.006;
    const radius = 5000;
    // set default to restaurant
    const type = "restaurant";
    const apiKey = config.googleApikey; // Replace with your actual API Key
    const apiUrl = `/maps/api/place/nearbysearch/json?key=${apiKey}&location=${lat},${lng}&radius=${radius}&type=${type}`;
    
    // Fetch data from Google Maps API and set it to 'places' state
    axios
      .get(apiUrl)
      .then((response) => {
        // Convert the keys to camelCase and set the results in 'places' state
        const camelCasedResults = keysToCamel(response.data.results);
        setPlaces(camelCasedResults);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Nearby Places</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {places.map((place, index) => (
            <div key={index} style={{ margin: "8px" }}>
              <InfoCard place={place} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div>
    </div>
  );
}

export default SearchCard;
