import * as yup from "yup";

var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
// minimum 6 characters, maximum 16 characters, must contain 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character

export const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Please Enter Valid Email").required("Required"),
    password: yup.string().required().min(6, "Too Short!").max(20, "Too Long!").matches(passwordRegex, {message:"Please create a stronger password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Required"),
});