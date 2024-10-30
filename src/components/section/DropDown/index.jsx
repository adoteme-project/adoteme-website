import { useState, useEffect } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const normalizeString = (str) => 
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function CardList({ filterKey, nome, tamanho, fetchOptions, onFilterChange }) {
  const [optionsList, setOptionsList] = useState([]);
  const [selectUtil, setSelectUtil] = useState("");

  const optionsMap = {
    porte: ["Pequeno", "Médio", "Grande"],
    sexo: ["Macho", "Fêmea"],
  };

  useEffect(() => {
    const getFilterOptions = async () => {
      if (filterKey === "porte" || filterKey === "sexo") {
        setOptionsList(optionsMap[filterKey]);
      } else {
        try {
          const response = await fetch(fetchOptions);
          if (!response.ok) throw new Error("Erro ao buscar opcoes de filtro!");
          const cards = await response.json();
          const options = new Set(cards.map(option => normalizeString(option[filterKey])));
          setOptionsList(Array.from(options));
        } catch (error) {
          console.error("Erro ao buscar opções de filtro", error);
          setOptionsList([]);
        }
      }
    };

    getFilterOptions();

  }, [filterKey, fetchOptions]);

  const handleUtilChange = (event) => {
    const value = event.target.value;
    setSelectUtil(value);
    onFilterChange(filterKey, normalizeString(value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-label" sx={{ fontSize: "15px" }}>
          {nome}
        </InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectUtil}
          onChange={handleUtilChange}
          label={nome}
          sx={{
            width: `${tamanho}px`,
            height: 40,
            fontSize: "12px",
          }}
        >
          {optionsList.length > 0 ? (
            optionsList.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>Nenhuma opção</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CardList;
