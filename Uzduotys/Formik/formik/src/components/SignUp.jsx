import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import { useState } from 'react'



const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignUp = () => {

    const [values, setValues] =useState({
        username: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: ""
    })


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

    return(
        <>
        <Formik
           initialValues={values}
           validationSchema={validate}
           onSubmit={onSubmit}
        >
            {({errors, touched, values, setValues}) =>(
                <Form>
                    <div>
                        <label >
                            Username 
                            <Field
                              name='username'
                              value={values.username}
                              onChange={(e)=>setValues({...values,username:e.target.value})}
                            />
                            {
                                errors.username && touched.username ?
                                <span>{errors.username}</span>
                                : null
                            }
                        </label>
                    </div>
                    <div>
                        <label >
                           Email 
                            <Field
                              name='email'
                              value={values.email}
                              onChange={(e)=>setValues({...values,email:e.target.value})}
                            />
                            {
                                errors.email && touched.email ?
                                <span>{errors.email}</span>
                                : null
                            }
                        </label>
                    </div>
                    <div>
                        <label >
                           Age 
                            <Field
                              name='age'
                              value={values.age}
                              onChange={(e)=>setValues({...values,age:e.target.value})}
                            />
                            {
                                errors.age && touched.age ?
                                <span>{errors.age}</span>
                                : null
                            }
                        </label>
                    </div>
                    <div>    
                        <label >
                           Password 
                            <Field
                              name='password'
                              type='password'
                              value={values.password}
                              onChange={(e)=>setValues({...values,password:e.target.value})}
                            />
                            {
                                errors.password && touched.password ?
                                <span>{errors.password}</span>
                                : null
                            }
                        </label>
                    </div>
                    <div>    
                        <label >
                           Confirm Password 
                            <Field
                              name='confirmPassword'
                              type='password'
                              value={values.confirmPassword}
                              onChange={(e)=>setValues({...values,confirmPassword:e.target.value})}
                            />
                            {
                                errors.confirmPassword && touched.confirmPassword ?
                                <span>{errors.confirmPassword}</span>
                                : null
                            }
                        </label>
                    </div>
                    <button type="submit" >Submit</button>
                </Form>
            )}

        </Formik>
        </>
    )
}

export default SignUp