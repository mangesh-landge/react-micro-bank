import React, { useEffect } from "react";
import { Form, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/auth/actionCreators";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validatePassword(value: string) {
  let error;
  if (!value) {
    error = "password should not be empty";
  } else if (value.length < 8) {
    error = "Your password must be at least 8 characters";
  } else if (value.search(/[a-z]/i) < 0) {
    error = "Your password must contain at least one letter.";
  } else if (value.search(/[0-9]/) < 0) {
    error = "Your password must contain at least one digit.";
  }
  return error;
}

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: any) => state.login);
  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = async (values: FormValues) => {
    await dispatch(userLogin(values));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <>
      <h1>Login Screen</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values: FormValues) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form>
            <Field name="email" validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field name="password" validate={validatePassword} />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            {/* <button type="button" onClick={() => validateField("password")}>
              Check password
            </button>
            <button
              type="button"
              onClick={() => validateForm().then(() => console.log("blah"))}
            >
              Validate All
            </button> */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
