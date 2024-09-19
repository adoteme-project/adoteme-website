import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useMemo } from "react";

const Geodados = () => {
  const geocodingLib = useMapsLibrary("geocoding");
  const geocoder = useMemo(
    () => geocodingLib && new geocodingLib.Geocoder(),
    [geocodingLib]
  );

  useEffect(() => {
    if (!geocoder) return;

    // const posicao = { lat: -23.43896506940708, lng: -46.53214115945167 };
    const endereço = 'Jardim Iporanga Rua Petrópolis Guarulhos';

    geocoder
      .geocode({ address: endereço })
      .then((response) => {
        if (response.results && response.results.length > 0) {
          console.log(response.results[0].geometry.location.toJSON());
        } else {
          console.log("No results found");
        }
      })
      .catch((error) =>
        console.log("Erro, Geocoder falhou por conta de " + error)
      );
  }, [geocoder]);

  return <></>;
};

const Teste = () => {
  return (
    <>
      <h1>Geodados teste </h1>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Geodados />
      </APIProvider>
    </>
  );
};

export default Teste;
