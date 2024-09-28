import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { useState } from "react";

const Selecao = (props) => {
  //     const [data, setData] = useState('');

  //   const handleChange = (event) => {
  //     setData(event.target.value);
  //   };

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
            {props.nome}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={props.nome}
            sx={{
              width: `${props.tamanho}px`,
              height: 40,
              fontSize: "12px",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </section>
  );
};

export default Selecao;
