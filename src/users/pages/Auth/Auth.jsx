import React, { useState } from 'react';
import { Form, Button, Container, Image, Row, Col } from 'react-bootstrap';
import { Formik, Form as FormikForm, useField } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import AuthImg from '../../../assets/images/auth/auth.svg';
import { useAuth } from '../../../hooks/useAuth';
import './Auth.css';

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
  const [login, setLogin] = useState(true);
  const [error, setError] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  const auth = useAuth();
  const history = useHistory();

  return (
    <Container fluid>
      <div className="text-center mt-3">
        <h2>Authentication</h2>
      </div>
      <Row className="mt-lg">
        <Col md="12" lg="6" data-aos="fade-right" data-aos-duration="800">
          <div className="text-center mt-3">
            <Image src={AuthImg} alt="authImg" className="auth-img my-5" />
          </div>
        </Col>
        <Col
          md="12"
          lg="6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Formik
            initialValues={
              resetPassword ? { email: '' } : { email: '', password: '' }
            }
            validationSchema={yup.object(
              resetPassword
                ? {
                    email: yup.string().email().required(),
                  }
                : {
                    email: yup.string().email().required(),
                    password: yup.string().min(6).required(),
                  }
            )}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setError('');
              const { email, password = '' } = values;

              if (login && !resetPassword) {
                auth
                  .signin(email, password)
                  .then(() => {
                    resetForm();
                    history.push('/usr/dashboard');
                  })
                  .catch((err) => setError(err.message));
              } else if (!login && !resetPassword) {
                auth
                  .signup(email, password)
                  .then(() => {
                    resetForm();
                    history.push('/usr/dashboard');
                  })
                  .catch((err) => setError(err.message));
              } else if (resetPassword) {
                auth
                  .sendPasswordResetEmail(email)
                  .then(() => {
                    resetForm();
                    alert('Please, check your inbox for further instructions!');
                  })
                  .catch((err) => setError(err.message));
              }
              setSubmitting(false);
            }}
          >
            <FormikForm>
              <MyInput
                label="Email address"
                name="email"
                type="email"
                placeholder="demo@email.com"
              />

              {!resetPassword && (
                <MyInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="******"
                />
              )}
              <div className="text-dark font-weight-bold text-right">
                <p onClick={() => setResetPassword(true)} className="btn-txt">
                  Reset Password
                </p>
              </div>
              {error && (
                <div className="text-danger text-center mb-3">
                  <p>{error}</p>
                </div>
              )}

              <div className="text-center">
                <Button
                  className="font-weight-bold"
                  variant="success"
                  type="submit"
                  size="lg"
                >
                  {login && !resetPassword && 'Login'}
                  {!login && !resetPassword && 'Register'}
                  {resetPassword && 'Reset'}
                </Button>
              </div>
            </FormikForm>
          </Formik>
          <div className="mt-5 text-center">
            <p>
              {login ? "Don't" : 'Already'} have an account?{' '}
              <span
                onClick={() => {
                  setLogin((prev) => !prev);
                  setResetPassword(false);
                }}
                className="font-weight-bold text-dark btn-txt"
              >
                {login ? 'Register Here' : 'Login'}
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
