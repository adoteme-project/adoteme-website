import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Selecao = ({nome,tamanho,onSelect,data}) => {

  const getFilteredOptions = () => {
    let options = [];

    if(nome === "Tamanhos"){
      options = ["Pequeno", "Médio", "Grande"];
    }else if(nome === "Sexo"){
      options = ["Macho", "Fêmea"];
    }else if(nome === "Espécies"){
      options = [...new Set(data.map((item) => item.especie))]
    }

    return options;
  }

  const filteredOptions = getFilteredOptions();
  console.log("Opções filtradas: ", filteredOptions)
  const handleChange = (event) =>{
    if(onselect){
      onSelect(event.target.value);
    }
  }

  return (
    <section className="w-full">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth sx={{}}>
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
            onChange={handleChange}
            sx={{
              width: `${tamanho}px`,
              height: 40,
              fontSize: "12px",
            }}
          >
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
