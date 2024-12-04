import { useState, useEffect } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const normalizeString = (str) =>
  str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";

function CardList({ filterKey, nome, tamanho, fetchOptions, onFilterChange, selectedValue }) {
  const [optionsList, setOptionsList] = useState([]);
  const [selectUtil, setSelectUtil] = useState(selectedValue || "");

  const optionsMap = {
    porte: ["pequeno", "médio", "grande"],
    sexo: ["masculino", "feminino"],
    especie: ["cachorro", "gato"],
  };

  useEffect(() => {
    const getFilterOptions = async () => {
      if (optionsMap[filterKey]) {
        setOptionsList(optionsMap[filterKey]);
      } else if (fetchOptions) {
        try {
          const response = await fetchOptions();
          if (!response.ok) throw new Error("Erro ao buscar opções de filtro!");
          const cards = await response.data;
          console.log("Cards:", cards);
          const options = new Set(
            cards.map((option) =>
              normalizeString(option[filterKey]).charAt(0).toUpperCase() + option.slice(1)
            )
          );
          setOptionsList(Array.from(options));
        } catch (error) {
          console.error("Erro ao buscar opções de filtro", error);
          setOptionsList([]);
        }
      }
    };
    getFilterOptions();
  }, []);

  useEffect(() => {
    if (selectedValue !== undefined && selectedValue != selectUtil) {
      
      setSelectUtil(selectedValue);
    }
  }, []);

  const handleUtilChange = (event) => {
    let value = event.target.value;
    if (value !== selectUtil) {
      setSelectUtil(value);
      onFilterChange(filterKey, normalizeString(value));
    }
  };


  // useEffect(() => {
  //   setSelectUtil(selectedValue);
  // }, [selectedValue]);


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-label" sx={{ fontSize: "15px" }}>
          {nome}
        </InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectUtil || ""}
          onChange={handleUtilChange}
          label={selectUtil}
          sx={{
            width: `${tamanho}px`,
            height: 40,
            fontSize: "12px",
          }}
        >
        {optionsList.length > 0 ? (
        optionsList.map((option, index) => {
          const formattedOption = option.charAt(0).toUpperCase() + option.slice(1);
          return (
            <MenuItem key={index} value={formattedOption}>
              {formattedOption}
            </MenuItem>
          );
        })
      )  : (
            <MenuItem disabled>Nenhuma opção</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CardList;
