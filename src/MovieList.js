import { Movie } from './Movie';
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList() {

    const [movieList, setmovieList] = useState([]);

    const getMovies = () => {
        fetch("https://63899fdd4eccb986e895a955.mockapi.io/movies")
            .then(data => data.json())
            .then(movies => setmovieList(movies));
    };


    useEffect(() => getMovies(), []);

    const deleteMovie = (id) => {
        fetch(`https://63899fdd4eccb986e895a955.mockapi.io/movies/${id}`, { method: "DELETE" })
            .then(data => getMovies());
    };

    console.log(movieList);
    return (
        <div className="movie-list">
            {movieList.map((movieObj) => (<Movie id={movieObj.id} movie={movieObj} deleteButton={<IconButton onClick={() => deleteMovie(movieObj.id)} color="secondary" aria-label="delete"><DeleteIcon /></IconButton>} />))}
        </div>
    );

}
