import { LikeDisLikeButton } from './LikeDisLikeButton';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export function Movie({ movie }) {

    const rating_style = {
        color: movie.rating >= 8.5 ? "green" : "red"
    };

    const [show, setShow] = useState(true);

    return (
        <div className="movie-container">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div className="movie-specs">
                <h2 className="movie-name">{movie.name}
                    <IconButton onClick={() => setShow(!show)} aria-label="delete" color="primary">
                        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </h2>

                <p style={rating_style} className="movie-rating"> ⭐ {movie.rating}</p>
            </div>
            {show ? <p className="movie-summary">{movie.summary}</p> : null}
            <LikeDisLikeButton />
        </div>
    );

}
