import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";

function EditMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        fetch(`https://63899fdd4eccb986e895a955.mockapi.io/movies/${id}`, { method: "GET" })
            .then(data => data.json())
            .then(movieData => { setMovie(movieData) });
    }, [id]);


    // const { name, poster, trailer, rating, summary } = movie;
    // console.log("des data", name, poster, trailer, rating, summary)
    return (<>
        {movie ? <EditMovieForm movie={movie} /> : "Loading..."}
    </>)

}


function EditMovieForm({ movie }) {
    const navigate = useNavigate();

    const movieValidationSchema = yup.object({
        name: yup.string().required("name compulsory").min(4),
        poster: yup.string().required("poster mandatory field").min(4, "need a bigger poster url"),
        rating: yup.number().required("rating mandatory field").min(0, "need a valid rating 0 to 10").max(10),
        summary: yup.string().required("summary mandatory field").min(20, "need movie summary above 20 chars"),
        trailer: yup.string().required("trailer mandatory field").min(12).url("valid trailer embed url need"),
    });
    const { handleSubmit, handleChange, handleBlur, touched, errors, values } = useFormik(
        {
            initialValues: movie,
            onSubmit: (values) => { UpdateMovie(values) },
            validationSchema: movieValidationSchema,
            enableReinitialize: true
        }
    );

    const UpdateMovie = (movie) => {
        fetch(`https://63899fdd4eccb986e895a955.mockapi.io/movies/${movie.id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(movie)
        })
            .then(() => navigate("/movies"));
    }


    return (
        <form className="edit-movie-form" onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "center", margin: 0 }}>Edit Movie Form</h3>
            <TextField id="outlined-basic" label="Enter Movie Name" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.name} name="name" error={touched.name && errors.name} helperText={errors.name} />

            <TextField id="outlined-basic" label="Enter Poster URL" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.poster} name="poster" error={touched.poster && errors.poster} helperText={errors.poster} />

            <TextField id="outlined-basic" label="Enter Trailer URL" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.trailer} name="trailer" error={touched.trailer && errors.trailer} helperText={errors.trailer} />

            <TextField id="outlined-basic" label="Enter Rating" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.rating} name="rating" error={touched.rating && errors.rating} helperText={errors.rating} />

            <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.summary} name="summary" error={touched.summary && errors.summary} helperText={errors.summary} />

            <Button type="submit" variant="contained">Save Movie</Button>
        </form>
    );
}


export { EditMovie }