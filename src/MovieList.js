import { Movie } from './Movie';
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from './global.js';

export function MovieList() {

    const [movieList, setmovieList] = useState([]);

    const getMovies = () => {
        fetch(`${API}`)
            .then(data => data.json())
            .then(movies => setmovieList(movies));
    };


    useEffect(() => getMovies(), []);

    const deleteMovie = (id) => {
        fetch(`${API}/${id}`, { method: "DELETE" })
            .then(data => getMovies());
    };

    console.log(movieList);
    return (
        <div className="movie-list">
            {movieList.map((movieObj) => (<Movie id={movieObj.id} movie={movieObj} deleteButton={<IconButton sx={{ marginLeft: "auto" }} onClick={() => deleteMovie(movieObj.id)} color="error" aria-label="delete"><DeleteIcon /></IconButton>} />))}
        </div>
    );

}
