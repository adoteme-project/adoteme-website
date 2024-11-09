import Rating from '@mui/material/Rating';
import PetsIcon from '@mui/icons-material/Pets';
import { Controller } from 'react-hook-form';

const RatingInput = ({ name, disabled, color, title, control }) => {
    return (
        <div>
            <span className='text-center block'>{title}</span>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Rating
                        {...field}
                        value={field.value ?? 0}
                        defaultValue={0}
                        onChange={(_, newValue) => field.onChange(newValue)}
                        disabled={disabled}
                        icon={<PetsIcon fontSize="inherit" style={{ color: color }} />}
                        emptyIcon={<PetsIcon fontSize="inherit" />}
                    />
                )}
            />
        </div>
    );
}

export default RatingInput;