import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    const success = (pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ lat: latitude, lng: longitude });
    };

    const error = (err) => {
      setError(err.message || "Error getting geolocation.");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { position, error };
};

export default useGeolocation;
