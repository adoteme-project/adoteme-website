import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

const Favorite = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
            <FavoriteIcon 
                style={{ color: isFavorite ? "#EC5A49" : "#B0BEC5" }}
            />
        </div>
    );
}

export default Favorite;