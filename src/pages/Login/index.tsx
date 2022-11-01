import React, { useEffect, useState } from "react";
import { Form, Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/auth/actionCreators";
import { Link, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import "./index.css";
import unHideIcon from "../../assets/file/hide_unhide.svg";
import hideIcon from "../../assets/file/hide_logo.svg";
import logoGroup7 from "../../assets/file/loginLogo/Group7.svg";
import teamSpirit from "../../assets/file/loginLogo/team-spirit-pana-1.svg";
import logoGroup6 from "../../assets/file/loginLogo/Group6.svg";
import logoGroup13 from "../../assets/file/loginLogo/13.svg";

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

export default function Login() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: any) => state.login);
  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = async (values: FormValues) => {
    await dispatch(userLogin(values));
  };

  const [isHide, setIsHide] = useState<boolean>(true);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo-img">
        <img className="logo-group-7" src={logoGroup7} alt="logo group 7" />
        <img className="team-spirit-logo" src={teamSpirit} alt="team spirit" />
        <p>Micro Bank</p>
        <img className="logo-group-6" src={logoGroup6} alt="group logo 6" />
        <img className="logo-group-13" src={logoGroup13} alt="group logo 13" />
      </div>
      {/* Login form */}
      <div className="login-form">
        <div>
          <h1>Login</h1>
          <p>Please login to your account</p>
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
                <p className="form-lable">Email or Phone</p>
                <div className="form-input-box">
                  <Field name="email" validate={validateEmail} />
                </div>
                {errors.email && touched.email && (
                  <div className="form-error">{errors.email}</div>
                )}

                <p className="form-lable">Password</p>
                <div className="form-input-box">
                  <Field
                    name="password"
                    type={isHide ? "password" : "text"}
                    validate={validatePassword}
                  />
                  <img
                    onClick={() => setIsHide(!isHide)}
                    src={isHide ? unHideIcon : hideIcon}
                    alt="unhide"
                  />
                </div>

                {errors.password && touched.password && (
                  <div className="form-error">{errors.password}</div>
                )}

                <p className="forgot-password">
                  <a href="">Forgot Password?</a>
                </p>

                <input className="login-button" type="submit" value="Login" />

                <p className="to-create-account">
                  Don't have an account?
                  <Link to="/create-account">create an account</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
