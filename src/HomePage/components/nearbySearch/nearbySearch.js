import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";

// Function to convert keys to camelCase
function keysToCamel(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamel(item));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
    acc[camelKey] = keysToCamel(obj[key]);
    return acc;
  }, {});
}


function NearbySearch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const lat = 40.7128;
    const lng = -74.006;
    const radius = 5000;
    const type = "restaurant";
    const apiKey = config.googleApikey; // Replace with your actual API Key
    const proxyUrl = "http://localhost:3000"; // Replace with your proxy server URL
    const apiUrl = `/maps/api/place/nearbysearch/json?key=${apiKey}&location=${lat},${lng}&radius=${radius}&type=${type}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Convert keys to camelCase
        const camelCaseData = keysToCamel(response.data);
        setData(camelCaseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Google Places API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default NearbySearch;

