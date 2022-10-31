import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
  return (
    <>
      <h1>Create Acount Screen</h1>
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
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Full Name</label>
            <Field name="fullName" />
            {errors.fullName && touched.fullName ? (
              <div>{errors.fullName}</div>
            ) : null}
            <label>Date of Incorporation</label>
            <Field name="dateOfIncorporation" type="date" />
            {errors.dateOfIncorporation && touched.dateOfIncorporation ? (
              <div>{errors.dateOfIncorporation}</div>
            ) : null}
            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
