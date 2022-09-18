import React from "react";
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="login">
      <Topbar />
      <div class="hero d-flex flex-column justify-content-center">
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
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label htmlFor="firstName">
                              First Name
                            </Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                id="firstName"
                                type="text"
                                //   onChange={(e) => {
                                //     setEmail(e.target.value);
                                //   }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label htmlFor="lastName">
                              Last Name
                            </Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                id="lastName"
                                type="text"
                                //   onChange={(e) => {
                                //     setPassword(e.target.value);
                                //   }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                id="email"
                                type="email"
                                //   onChange={(e) => {
                                //     setEmail(e.target.value);
                                //   }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                id="password"
                                type="password"
                                //   onChange={(e) => {
                                //     setPassword(e.target.value);
                                //   }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label htmlFor="address">Address</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                id="address"
                                type="text"
                                //   onChange={(e) => {
                                //     setEmail(e.target.value);
                                //   }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label htmlFor="contactNumber">
                              Contact Number
                            </Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                id="contactNumber"
                                type="phone"
                                //   onChange={(e) => {
                                //     setPassword(e.target.value);
                                //   }}
                              />
                            </InputGroup>
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
