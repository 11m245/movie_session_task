import { LikeDisLikeButton } from './LikeDisLikeButton';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


export function Movie({ movie, id, deleteButton }) {

    const rating_style = {
        color: movie.rating >= 8.5 ? "green" : "red"
    };

    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    return (
        <Card key={id} className="movie-container">
            <CardActionArea>
                <img src={movie.poster} alt={movie.name} className="movie-poster" />
                <CardContent>
                    <div className="movie-specs">
                        <h2 className="movie-name">{movie.name}
                            <IconButton onClick={() => setShow(!show)} aria-label="toggel-movie-summary" color="primary">
                                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>

                            <IconButton onClick={() => navigate(`/movies/${id}`)} aria-label="movie-info" color="primary">
                                <InfoIcon />
                            </IconButton>
                        </h2>
                        <p style={rating_style} className="movie-rating"> ⭐ {movie.rating}</p>
                    </div>
                    {show ? <p className="movie-summary">{movie.summary}</p> : null}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <LikeDisLikeButton />
                {deleteButton}
                <IconButton onClick={() => navigate(`/edit-movie/${id}`)} aria-label="edit-movie" color="primary">
                    <DriveFileRenameOutlineIcon />
                </IconButton>
            </CardActions>
        </Card>
    );

}
