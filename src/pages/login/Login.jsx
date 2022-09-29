import React, { useContext, useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import * as yup from "yup";
import * as formik from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { dispatch, isFetching } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { Formik } = formik;

  return (
    <div className="login">
      <Topbar />
      <div className="hero d-flex flex-column justify-content-center">
        <Container>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold py-3 text-center">
                    Login to view all of your transactions with YHK Logistics
                  </Card.Title>
                  <div className="px-4">
                    <Formik
                      validationSchema={schema}
                      initialValues={{
                        email: "",
                        password: "",
                      }}
                      onSubmit={async (values) => {
                        try {
                          const res = await axios.post("/auth/login", values);
                          console.log(values);
                          dispatch({
                            type: "LOGIN",
                            payload: res.data,
                          });
                          navigate(from, { replace: true });
                        } catch (err) {
                          setError(err);
                        }
                      }}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        isValid,
                        errors,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Col className="mb-3">
                            <Form.Group controlId="email">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                              />

                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <Col className="mb-3">
                            <Form.Group controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                              />

                              <Form.Control.Feedback type="invalid">
                                {errors.password}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>

                          <Button
                            type="submit"
                            className="login-btn fw-bold rounded-0 shadow-none"
                            disabled={isFetching}
                          >
                            Log In
                          </Button>
                          <small className="register-link">
                            No account? Click{" "}
                            <a
                              href="/register"
                              style={{
                                textDecoration: "none",
                                color: "red",
                              }}
                            >
                              here
                            </a>{" "}
                            to register
                          </small>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
