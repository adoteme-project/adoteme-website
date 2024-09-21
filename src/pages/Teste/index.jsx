import { APIProvider } from "@vis.gl/react-google-maps";
import { useState } from "react";
import useGeocoding from "../../hooks/useGeocoder";

const PesquisaCoordenada = () => {
  const [inputAddress, setInputAddress] = useState("");
  const { coordinates, error, geocodeAddress } = useGeocoding(inputAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    geocodeAddress();
    console.log(coordinates);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
          placeholder="Enter address"
          className="border p-2 bg-beje"
        />
        <button type="submit" className="p-2 bg-azul-dark text-branco">
          Coordenadas
        </button>
      </form>

      {error && <p>Error: {error}</p>}
      {coordinates && (
        <p>
          Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
        </p>
      )}
    </div>
  );
};

const Teste = () => {
  return (
    <>
      <h1>Geodados Test</h1>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <PesquisaCoordenada />
      </APIProvider>
    </>
  );
};

export default Teste;

/* import { useEffect, useState } from "react";
import ListAchados from "../../components/ListAchados";
import useModal from "../../hooks/useModal";
import { getPetPerdido } from "../../services/pets";

const Teste = () => {
  const [pets, setPets] = useState([]);
  const [isShowingModal, toogleModal] = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPetPerdido();
        console.log(response.data);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={toogleModal} className="bg-azul-main p-2">
        Mostrar modal
      </button>
      <ListAchados pets={pets} show={isShowingModal} onClose={toogleModal} />
    </>
  );
};

export default Teste; */