import { useState, useMemo } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

const useGeocoding = (address) => {
  const geocodingLib = useMapsLibrary("geocoding");
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const geocoder = useMemo(
    () => geocodingLib && new geocodingLib.Geocoder(),
    [geocodingLib]
  );

  const geocodeAddress = () => {
    if (!geocoder || !address) {
      setError("Não foi possível encontrar este endereço ! Por favor inserir endereço válido");
      return;
    }

    geocoder
      .geocode({ address })
      .then((response) => {
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry.location;
          setCoordinates(location.toJSON());
        } else {
          setError("Não foi possível encontar resultados");
        }
      })
      .catch((error) => {
        setError("Erro no Geocoder: " + error.message);
      });
  };

  return { coordinates, error, geocodeAddress };
};

export default useGeocoding;