import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { userSignUp } from "../../redux/signUp/actionCreators";

import "./index.css";
import unHideIcon from "../../assets/file/hide_unhide.svg";
import hideIcon from "../../assets/file/hide_logo.svg";
import logoGroup7 from "../../assets/file/loginLogo/Group7.svg";
import teamSpirit from "../../assets/file/loginLogo/team-spirit-pana-1.svg";
import logoGroup6 from "../../assets/file/loginLogo/Group6.svg";
import logoGroup13 from "../../assets/file/loginLogo/13.svg";

interface SignUpValues {
  fullName: string;
  dateOfIncorporation: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName?: string;
  avatar?: string;
  currentServices?: Array<any>;
}

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Too Short name!")
    .max(50, "Too Long name!")
    .required("Required"),
  dateOfIncorporation: Yup.date()
    .max(new Date(Date.now()), "Incorporation must be did")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  companyName: Yup.string().nullable().notRequired(),
  avatar: Yup.string().nullable().notRequired(),
  currentServices: Yup.array().nullable().notRequired(),
});

export default function CreateAccount() {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: any) => state?.signUp);
  const dispatch: Dispatch<any> = useDispatch();
  const [isHide, setIsHide] = useState<boolean>(true);
  const [isHideConfirmPass, setIsHideConfirmPass] = useState<boolean>(true);

  const handleSubmit = (values: SignUpValues) => {
    dispatch(userSignUp(values));
    navigate("/login");
  };
  return (
    <div className="signup-container">
      {/* Logo */}
      <div className="logo-img">
        <img className="logo-group-7" src={logoGroup7} alt="logo group 7" />
        <img className="team-spirit-logo" src={teamSpirit} alt="team spirit" />
        <p>Micro Bank</p>
        <img className="logo-group-6" src={logoGroup6} alt="group logo 6" />
        <img className="logo-group-13" src={logoGroup13} alt="group logo 13" />
      </div>
      {/* Signup Form */}
      <div className="signup-form">
        <div>
          <h1>Create an Account</h1>
          <Formik
            initialValues={{
              fullName: "",
              dateOfIncorporation: "",
              email: "",
              password: "",
              confirmPassword: "",
              companyName: "",
              avatar: "",
              currentServices: [],
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: SignUpValues) => {
              console.log(values);
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <p className="form-lable">Full Name</p>
                <div className="form-input-box">
                  <Field data-testid="fullName" name="fullName" />
                </div>
                {errors.fullName && touched.fullName ? (
                  <div className="form-error">{errors.fullName}</div>
                ) : null}

                <p className="form-lable">Date of Incorporation</p>
                <div className="form-input-box ">
                  <Field
                    data-testid="dateOfIncorporation"
                    className="input-date"
                    name="dateOfIncorporation"
                    type="date"
                  />
                </div>
                {errors.dateOfIncorporation && touched.dateOfIncorporation ? (
                  <div className="form-error">{errors.dateOfIncorporation}</div>
                ) : null}

                <p className="form-lable">Email</p>
                <div className="form-input-box">
                  <Field data-testid="email" name="email" type="email" />
                </div>
                {errors.email && touched.email ? (
                  <div className="form-error">{errors.email}</div>
                ) : null}

                <p className="form-lable">Password</p>
                <div className="form-input-box">
                  <Field
                    data-testid="password"
                    name="password"
                    type={isHide ? "password" : "text"}
                  />
                  <img
                    data-testid="Phide"
                    onClick={() => setIsHide(!isHide)}
                    src={isHide ? unHideIcon : hideIcon}
                    alt="unhide"
                  />
                </div>
                {errors.password && touched.password ? (
                  <div className="form-error">{errors.password}</div>
                ) : null}

                <p className="form-lable">Confirm Password</p>
                <div className="form-input-box">
                  <Field
                    data-testid="confirmPassword"
                    name="confirmPassword"
                    type={isHideConfirmPass ? "password" : "text"}
                  />
                  <img
                    data-testid="Chide"
                    onClick={() => setIsHideConfirmPass(!isHideConfirmPass)}
                    src={isHideConfirmPass ? unHideIcon : hideIcon}
                    alt="unhide"
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="form-error">{errors.confirmPassword}</div>
                ) : null}

                <input
                  data-testid="createAccBtn"
                  className="create-account-button"
                  type="submit"
                  value="Create an Account"
                />

                <p className="to-login-account">
                  Already have an account? <Link to={"/login"}>Login</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
