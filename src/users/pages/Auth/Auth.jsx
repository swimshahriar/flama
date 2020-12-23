import React from "react";
import { Form, Button, Container, Image, Row, Col } from "react-bootstrap";
import { Formik, Form as FormikForm, useField } from "formik";
import * as yup from "yup";

import AuthImg from "../../../assets/images/auth/auth.svg";
import "./Auth.css";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group controlId={props.name}>
        <Form.Label className="font-weight-bold">{label}</Form.Label>
        <Form.Control
          className="font-weight-bold"
          size="lg"
          {...props}
          {...field}
        />
      </Form.Group>

      {meta.touched && meta.error ? (
        <div className="text-danger mb-3">{meta.error}</div>
      ) : null}
    </>
  );
};

const Auth = () => {
  return (
    <Container fluid>
      <div className="text-center mt-3">
        <h1>Auth Page</h1>
        <Image src={AuthImg} alt="authImg" className="auth-img my-5" />
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={yup.object({
          email: yup.string().email().required(),
          password: yup.string().min(6).required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <FormikForm>
          <MyInput
            label="Email address"
            name="email"
            type="email"
            placeholder="demo@email.com"
          />

          <MyInput
            label="Password"
            name="password"
            type="password"
            placeholder="******"
          />
          <div className="text-center">
            <Button
              className="font-weight-bold"
              variant="success"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </div>
        </FormikForm>
      </Formik>
    </Container>
  );
};

export default Auth;
