import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import PetsIcon from '@mui/icons-material/Pets';
import { Controller } from 'react-hook-form';

const RatingInput = ({ name, disabled, color, title, control = null, defaultValue, errorMessage }) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? 0);

    useEffect(() => {
        setInternalValue(defaultValue ?? 0);
    }, [defaultValue]);

    return (
        <div>
            <span className="text-center block">{title}</span>
            {control ? (
                <>
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <Rating
                                {...field}
                                value={field.value ?? 0}
                                onChange={(_, newValue) => field.onChange(newValue)}
                                disabled={disabled}
                                icon={<PetsIcon fontSize="inherit" style={{ color: color }} />}
                                emptyIcon={<PetsIcon fontSize="inherit" />}
                            />
                        )}
                    />
                    <span>{errorMessage}</span>
                </>

            ) : (
                <Rating
                    name={name}
                    value={internalValue}
                    onChange={(_, newValue) => setInternalValue(newValue)}
                    disabled={disabled}
                    icon={<PetsIcon fontSize="inherit" style={{ color: color }} />}
                    emptyIcon={<PetsIcon fontSize="inherit" />}
                />
            )}
        </div>
    );
};

export default RatingInput;