import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

interface SignUpValues {
  avatar?: string;
  companyName?: string;
  email: string;
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
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

export default function EditProfile() {
  // const navigate = useNavigate();
  // const { id } = useParams();
  return (
    <>
      <h1>Edit profile</h1>
      <Formik
        initialValues={{
          avatar: "",
          companyName: "",
          email: "",
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
            <label>Avatart</label>
            <Field name="avatar" />
            {errors.avatar && touched.avatar ? (
              <div>{errors.avatar}</div>
            ) : null}
            <label>Company Name</label>
            <Field name="companyName" />
            {errors.companyName && touched.companyName ? (
              <div>{errors.companyName}</div>
            ) : null}
            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>Old Password</label>
            <Field name="oldPassword" />
            {errors.oldPassword && touched.oldPassword ? (
              <div>{errors.oldPassword}</div>
            ) : null}
            <label>Password</label>
            <Field name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <label>Confirm Password</label>
            <Field name="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
