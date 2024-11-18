import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const Selecao = ({ nome, tamanho, onSelect, data, resetValue }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue("");
  }, [resetValue]);

  const getFilteredOptions = () => {
    let options = [];

    if (nome === "Tamanhos") {
      options = ["", "Pequeno", "Médio", "Grande"];
    } else if (nome === "Sexo") {
      options = ["", "Macho", "Fêmea"];
    } else if (nome === "Espécies") {
      options = ["", ...new Set(data.map((item) => item.especie))];
    }

    return options;
  };

  const filteredOptions = getFilteredOptions();
  console.log("Opções filtradas: ", filteredOptions);
  
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
            id="demo-simple-select-label"
            sx={{
              fontSize: "15px",
            }}
          >
            {nome}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={nome}
            value={selectedValue}
            onChange={handleChange}
            sx={{
              width: `${tamanho}px`,
              height: 40,
              fontSize: "12px",
            }}
          >
            <MenuItem value="">
              {/* Opção vazia para limpar o filtro */}
            </MenuItem>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>Nenhuma opção</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </section>
  );
};

export default Selecao;
