import Rating from '@mui/material/Rating';
import PetsIcon from '@mui/icons-material/Pets';


const Avaliacao = (props) => {

    return (
        <Rating 
            name="read-only"
            value={props.avaliacao}
            readOnly
            icon={<PetsIcon fontSize="inherit" style={{color:props.cor}}  
            />}
            emptyIcon={<PetsIcon fontSize="inherit"/>}
        />
    );
}

export default Avaliacao;