import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ImageIcon } from "../../icons/Icons";

import "./index.css";
import unHideIcon from "../../assets/file/hide_unhide.svg";
import hideIcon from "../../assets/file/hide_logo.svg";
import Navbar from "../../components/navBar";

interface SignUpValues {
  avatar?: string;
  companyName?: string;
  email: string;
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupSchema = Yup.object().shape({
  avatar: Yup.string().nullable().notRequired(),
  companyName: Yup.string().nullable().notRequired(),
  email: Yup.string().email("Invalid email").required("Required"),
  oldPassword: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function EditProfile() {
  // const navigate = useNavigate();
  // const { id } = useParams();

  const userDetails = useSelector((state: any) => state?.login.data);
  //confirmPassword
  const userdata: any = {
    avatar: userDetails.avatar,
    companyName: userDetails.companyName,
    email: userDetails.email,
  };
  const [isHide, setIsHide] = useState<boolean>(true);
  const [isHideConfirmPass, setIsHideConfirmPass] = useState<boolean>(true);
  const [isHideOldPass, setIsHideOldPass] = useState<boolean>(true);
  const [profileData, setProfileData] = useState<any>({ userdata });
  return (
    <div>
      <Navbar />
      <h1 className="edit-text">Edit profile</h1>
      <div className="edit-container">
        <div className="image-cont">
          <div className="image-sub">
            {/* <div className="image-profile">
              <ImageIcon />
            </div> */}
            <img width={180} height={180} src={userdata.avatar} alt="profile" />
          </div>
          <div className="dropimage-con">Browse Image</div>
        </div>
        <div className="form-component">
          <Formik
            initialValues={{
              avatar: userDetails.avatarUrl,
              companyName: userDetails.companyName,
              email: userDetails.email,
              oldPassword: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: SignUpValues) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* <label>Avatart</label>
                <Field name="avatar" />
                {errors.avatar && touched.avatar ? (
                  <div className="form-error">{errors.avatar}</div>
                ) : null} */}

                <p className="form-lable">Company Name</p>
                <div className="form-input-box">
                  <Field name="companyName" />
                </div>
                {errors.companyName && touched.companyName ? (
                  <div className="form-error">{errors.companyName}</div>
                ) : null}

                <p className="form-lable">Email</p>
                <div className="form-input-box">
                  <Field name="email" type="email" />
                </div>
                {errors.email && touched.email ? (
                  <div className="form-error">{errors.email}</div>
                ) : null}

                <p className="form-lable">Old Password</p>
                <div className="form-input-box">
                  <Field
                    name="oldPassword"
                    type={isHideOldPass ? "password" : "text"}
                  />
                  <img
                    onClick={() => setIsHideOldPass(!isHideOldPass)}
                    src={isHideOldPass ? unHideIcon : hideIcon}
                    alt="unhide"
                  />
                </div>
                {errors.oldPassword && touched.oldPassword ? (
                  <div className="form-error">{errors.oldPassword}</div>
                ) : null}

                <p className="form-lable">Password</p>
                <div className="form-input-box">
                  <Field name="password" type={isHide ? "password" : "text"} />
                  <img
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
                    name="confirmPassword"
                    type={isHideConfirmPass ? "password" : "text"}
                  />
                  <img
                    onClick={() => setIsHideConfirmPass(!isHideConfirmPass)}
                    src={isHideConfirmPass ? unHideIcon : hideIcon}
                    alt="unhide"
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="form-error">{errors.confirmPassword}</div>
                ) : null}

                <div className="form-button">
                  <input
                    className="update-account-button"
                    type="submit"
                    value="Update"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="copyRight">
        <p>
          <span>&#169;</span> 2021 Micro Bank
        </p>
      </div>
    </div>
  );
}
