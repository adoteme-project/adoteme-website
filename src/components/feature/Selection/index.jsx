import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { useState } from "react";


const Selecao = (props) => {
    
//     const [data, setData] = useState('');

//   const handleChange = (event) => {
//     setData(event.target.value);
//   };

    return (
        <Box sx = {{ minWidth: 120}}>
        <FormControl fullWidth
        sx = {{
            
        }}
        >
            <InputLabel id="demo-simple-select-label"
                sx={{
                    fontSize:'12px'
                }}
            
            >{props.nome}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label= {props.nome}
                // onChange={handleChange}
                sx={{
                    width: `${props.tamanho}px` ,
                    height:48,
                    border:2,                       
                }}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
}

export default Selecao;