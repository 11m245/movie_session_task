import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from "react";

export function MovieDetails({ movieList }) {
    const { id } = useParams();// this is the variable where dynamic url is saved
    const navigate = useNavigate();
    // const movie = movieList[id];
    const [movie, setMovie] = useState([]);

    // console.log("url id is", id);

    useEffect(() => {
        fetch(`https://63899fdd4eccb986e895a955.mockapi.io/movies/${id}`, { method: "GET" })
            .then(data => data.json())
            .then(movie => setMovie(movie));
    }, []);

    // console.log("movie is", movie);


    const styles = {
        color: movie.rating >= 8.5 ? "green" : "red",
    };

    return (
        <div className='movie-details-wrapper'>
            <iframe width="100%" height="400px" src={movie.trailer} title="React Native Tutorial for Beginners - Build a React Native App"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
      picture-in-picture" allowfullscreen>
            </iframe>
            <div className='movie-details-container'>
                <div className="movie-specs">
                    <h2>Movie details page of {movie.name} ... </h2>
                    <p style={styles} className="movie-rating"> ⭐ {movie.rating}</p>
                </div>
                <p className="movie-summary">{movie.summary}</p>
                <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
        </div>
    );

}
