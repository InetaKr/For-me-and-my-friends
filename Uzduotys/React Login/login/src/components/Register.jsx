import UserContext from "../context/UserContext";
import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';



const Register = () => {
  const [formInputs, setFormInputs] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    avatar: ''
  });

  const [invalidUsername, setInvalidUsername] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.password !== values.confirmPassword) {
      setPasswordError(true);
      setSubmitting(false);
      return;
    }
    if (users.find(user => user.userName === values.userName)) {
      setInvalidUsername(true);
      setSubmitting(false);
    } else {
      let newUser = {
        ...values,
        id: Date.now(),
        level: 'user',
        isBanned: false
      };
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          addNewUser(newUser);
          setLoggedInUser(newUser);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

    const validationSchema = yup.object().shape({
      userName: yup.string()
        .max (10, 'Must be 10 characters or less')
        .required ('Required'),
      password: yup.string()
         .min(5)
         .matches(passwordRules, {message: "Password must contain at least 5 characters, one uppercase, one number and one lowercase character"})
         .required('Required'),
      confirmPassword: yup.string()
         .oneOf([yup.ref('password'), null], 'Password must match')
         .required('Required'),
      avatar: yup.string()
          .required('Required')
  })

  return (
    <>
    <Formik 
      initialValues={formInputs}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setValues }) => (
        <Form>
     
        <label>
          User name:
          <Field
           type="text" name="userName" value={values.userName}
          onChange={(e) => setValues({ ...values, userName: e.target.value })}
          
          />
           {invalidUsername && <span>Username already taken</span>}
           {
           errors.userName && touched.userName ?
            <span>{errors.userName}</span>
            : null
           }
        </label>


        <label>
        Password:
          <Field
          
          type="password" name="password" value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          {passwordError && <span>Passwords do not match</span>}
          {
            errors.password && touched.password ?
            <span>{errors.password}</span>
            : null
          }
        </label>

        <label>
          Confirm Password:
          <Field
           type="password" name="confirmPassword" value={values.confirmPassword}
            onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
          />
          {
          errors.confirmPassword && touched.confirmPassword ?
           <span>{errors.confirmPassword}</span>
           : null
          }
        </label>
        <label>
          User Avatar:
          <Field
          type="url" name="avatar" value={values.avatar}
            onChange={(e) => setValues({ ...values, avatar: e.target.value })}
          />
           {errors.avatar && touched.avatar ? (
            <span>{errors.avatar}</span>
          ) : null}
        </label>
        <input type="submit" value="Register" />
      
      </Form>
      )}
</Formik> 
    </>

  );
}
 
export default Register;