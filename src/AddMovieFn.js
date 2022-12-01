import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovieFn({ movieList, setmovieList }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [trailer, setTrailer] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");

    const addMovie = () => {
        const newMovie = { name: name, poster: poster, trailer: trailer, rating: rating, summary: summary };
        setmovieList([...movieList, newMovie]);
        console.log(newMovie);
    };

    return (
        <div className="add-movie-form">
            <TextField id="outlined-basic" label="Enter Movie Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
            <TextField id="outlined-basic" label="Enter Poster URL" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
            <TextField id="outlined-basic" label="Enter Trailer URL" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
            <TextField id="outlined-basic" label="Enter Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
            <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
            <Button onClick={addMovie} variant="contained">Submit New Movie</Button>
        </div>
    );

}
