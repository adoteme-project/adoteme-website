import { useEffect, useRef, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address", "address_components"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));

  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [placeAutocomplete, onPlaceSelect]);

  return (
    <div className="box-border w-[100%]">
      <input ref={inputRef} placeholder="Inserir Endereço" className="w-full h-10 p-3 bg-input-d rounded-lg"/>
    </div>
  );
};

export { PlaceAutocomplete };