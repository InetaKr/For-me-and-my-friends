
import { useFormik } from "formik";
import * as yup from "yup";
import SignUp1Field from "./SignUp1Field";

const initialValues = {
    username: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: ""
};

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const validate = yup.object().shape({
    username: yup.string()
      .max (10, 'Must be 10 characters or less')
      .required ('Required'),
    email: yup.string()
       .email('Please enter a valid email')
       .required('Required'),
    age: yup.number()
        .required("Please supply your age")
        .min(18, "You must be at least 18 years")
        .max(60, "You must be at most 60 years"),
    password: yup.string()
       .min(5)
       .matches(passwordRules, {message: "Password must contain at least 5 characters, one uppercase, one number and one lowercase character"})
       .required('Required'),
    confirmPassword: yup.string()
       .oneOf([yup.ref('password'), null], 'Password must match')
       .required('Required')
})

const SignUp1=({ onSubmit })=> {
    //using useFormik
    const formik = useFormik({
      initialValues,
      validate,
      onSubmit
    });

  const usernameProps = formik.getFieldProps("username");
  const ageProps = formik.getFieldProps("age");
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
  const confirmPasswordProps = formik.getFieldProps("confirmPassword");

  return (
  <form onSubmit={formik.handleSubmit}>
  <SignUp1Field
    label="Username"
    type="text"
    placeholder="Please Enter your Username"
    {...usernameProps}
  />
  {formik.touched.username && formik.errors.username ? (
    <div>{formik.errors.username}</div>
  ) : null}
  <SignUp1Field
    label="Age"
    type="number"
    {...ageProps}
    placeholder="Please Enter your age"
  />
  {formik.touched.age && formik.errors.age ? (
    <div>{formik.errors.age}</div>
  ) : null}
  <SignUp1Field
    label="Email"
    type="email"
    placeholder="Please Enter your email"
    {...emailProps}
  />
  {formik.touched.email && formik.errors.email ? (
    <div>{formik.errors.email}</div>
  ) : null}
  <SignUp1Field
    label="Password"
    type="password"
    placeholder="Please Enter your password"
    {...passwordProps}
  />
  {formik.touched.password && formik.errors.password ? (
    <div>{formik.errors.password}</div>
  ) : null}
  <SignUp1Field
    label="Confirm Password"
    type="password"
    placeholder="Please Confirm your password"
    {...confirmPasswordProps}
  />
  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
    <div>{formik.errors.confirmPassword}</div>
  ) : null}
  <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
</form>
);
}
export default SignUp1