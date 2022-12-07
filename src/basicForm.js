import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email: yup.string().min(8, "Need a bigger email").required("email Mandatory"),
    password: yup.string().min(4, "Need a bigger password").required("password Mandatory"),
});

function BasicForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "a"
        },
        onSubmit: (values) => {
            console.log("Form Values:", values);
        },
        validationSchema: formValidationSchema,
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} type="email" name="email" value={formik.values.email} placeholder="enter e mail" />
            {formik.errors.email}
            <input onChange={formik.handleChange} type="text" name="password" value={formik.values.password} placeholder="enter e mail" />
            {formik.errors.password}
            <button type="submit">Submitt</button>
        </form>


    );
}


export { BasicForm }