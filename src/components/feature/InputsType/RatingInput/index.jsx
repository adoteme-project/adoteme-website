import Rating from '@mui/material/Rating';
import PetsIcon from '@mui/icons-material/Pets';
import { Controller } from 'react-hook-form';


const RatingInput = ({ name, value, disabled, color, title, control}) => {

    return (
        <div>
            <span className='text-center block'>{title}</span>
            <Controller
                name={name}
                control={control}
                render={() => <Rating
                    name={name}
                    value={value}
                    disabled={disabled}
                    icon={<PetsIcon fontSize="inherit" style={{ color: color }} />}
                    emptyIcon={<PetsIcon fontSize="inherit" />}
                />}>

            </Controller>

        </div>

    );
}

export default RatingInput;