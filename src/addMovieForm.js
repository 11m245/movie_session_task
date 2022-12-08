
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";

const movieValidationSchema = yup.object({
    name: yup.string().required("name compulsory").min(4),
    poster: yup.string().required("poster mandatory field").min(4, "need a bigger poster url"),
    rating: yup.number().required("rating mandatory field").min(0, "need a valid rating 0 to 10").max(10),
    summary: yup.string().required("summary mandatory field").min(20, "need movie summary above 20 chars"),
    trailer: yup.string().required("trailer mandatory field").min(12).url("valid trailer embed url need"),
})
function AddMovieForm() {
    const { handleSubmit, handleChange, handleBlur, touched, errors, values } = useFormik(
        {
            initialValues: { name: "", poster: "", trailer: "", rating: "", summary: "" },
            onSubmit: (values) => { addMovie(values) },
            validationSchema: movieValidationSchema,
        }
    );
    const navigate = useNavigate();
    const addMovie = (newMovieObj) => {
        fetch("https://63899fdd4eccb986e895a955.mockapi.io/movies", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newMovieObj)
        })
            .then(() => navigate("/movies"));
    };

    return (
        <form className="add-movie-form" onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "center", margin: 0 }}>Add Movie Form</h3>
            <TextField id="outlined-basic" label="Enter Movie Name" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.name} name="name" error={touched.name && errors.name} helperText={errors.name} />
            {/* {touched.name && errors.name ? className='error-message'>{errors.name}</className=> : null} */}
            <TextField id="outlined-basic" label="Enter Poster URL" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.poster} name="poster" error={touched.poster && errors.poster} helperText={errors.poster} />

            <TextField id="outlined-basic" label="Enter Trailer URL" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.trailer} name="trailer" error={touched.trailer && errors.trailer} helperText={errors.trailer} />

            <TextField id="outlined-basic" label="Enter Rating" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.rating} name="rating" error={touched.rating && errors.rating} helperText={errors.rating} />

            <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={handleChange} onBlur={handleBlur}
                value={values.summary} name="summary" error={touched.summary && errors.summary} helperText={errors.summary} />

            <Button type="submit" variant="contained">Submit New Movie</Button>
        </form>
    );

}


export { AddMovieForm }