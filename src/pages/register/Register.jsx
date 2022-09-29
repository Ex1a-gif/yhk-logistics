import React, { useContext } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import * as yup from "yup";
import * as formik from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import axios from "axios";

const Register = () => {
  const { dispatch } = useContext(AuthContext);

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(3, "Password must be between 3 to 25 characters")
      .max(25, "Password must be between 3 to 25 characters")
      .required("Password is required"),
    address: yup.string().required("Address is required"),
    contactNumber: yup.string().required("Contact number is required"),
    dateCreated: yup.date().default(function () {
      return new Date();
    }),
  });

  const { Formik } = formik;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div className="register">
      <Topbar />
      <div className="hero d-flex flex-column justify-content-center">
        <Container>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold py-3 text-center">
                    Register now to view all of your transactions with YHK
                    Logistics
                  </Card.Title>
                  <div className="px-4">
                    <Formik
                      validationSchema={schema}
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        address: "",
                        contactNumber: "",
                      }}
                      onSubmit={async (values) => {
                        const res = await axios.post("/auth/register", values);
                        dispatch({ type: "LOGIN", payload: res.data });
                        navigate(from, {
                          replace: true,
                        });
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
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  isInvalid={!!errors.firstName}
                                />

                                <Form.Control.Feedback type="invalid">
                                  {errors.firstName}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="lastName"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  isInvalid={!!errors.lastName}
                                />

                                <Form.Control.Feedback type="invalid">
                                  {errors.lastName}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
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
                            <Col>
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
                          </Row>
                          <Row>
                            <Col md={6} className="mb-3">
                              <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="address"
                                  value={values.address}
                                  onChange={handleChange}
                                  isInvalid={!!errors.address}
                                />

                                <Form.Control.Feedback type="invalid">
                                  {errors.address}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group controlId="contactNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="contactNumber"
                                  value={values.contactNumber}
                                  onChange={handleChange}
                                  isInvalid={!!errors.contactNumber}
                                />

                                <Form.Control.Feedback type="invalid">
                                  {errors.contactNumber}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row md={5} className="px-md-2">
                            <Button
                              type="submit"
                              className="register-btn fw-bold rounded-0 shadow-none"
                            >
                              Create Account
                            </Button>
                          </Row>
                          <small className="login-link">
                            Already have an account? Click{" "}
                            <a
                              href="/login"
                              style={{
                                textDecoration: "none",
                                color: "red",
                              }}
                            >
                              here
                            </a>{" "}
                            to login
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

export default Register;
