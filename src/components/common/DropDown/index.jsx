import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const DropDown = ({ nome, tamanho, onSelect, data, resetValue }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (resetValue) {
      setSelectedValue("");
    } 
  }, [resetValue]);

  const getFilteredOptions = () => {
    let options = [];
    if (nome === "Tamanhos") {
      options = ["Pequeno", "Médio", "Grande"];
    } else if (nome === "Sexo") {
      options = ["Macho", "Fêmea"];
    } else if (nome === "Espécies") {
      options = [...new Set(data.map((item) => item.especie))];
    }
    return options;
  };

  const filteredOptions = ["", ...getFilteredOptions()];

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <section className="w-full">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            id={`select-label-${nome}`}
            sx={{
              fontSize: "15px",
            }}
          >
            {selectedValue || nome} 
          </InputLabel>
          <Select
            labelId={`select-label-${nome}`}
            id={`select-${nome}`}
            value={selectedValue} 
            onChange={handleChange} 
            displayEmpty 
            sx={{
              width: `${tamanho}px`,
              height: 40,
              fontSize: "12px",
            }}
          >
            <MenuItem value="">
              <em>Selecionar</em>
            </MenuItem>
            {filteredOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </section>
  );
};

export default DropDown;
