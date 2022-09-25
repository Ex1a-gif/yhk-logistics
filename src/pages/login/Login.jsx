import React, { useContext, useRef } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL" });
    }
  };

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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            id="email"
                            type="email"
                            ref={emailRef}
                          />
                        </InputGroup>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            id="password"
                            type="password"
                            ref={passwordRef}
                          />
                        </InputGroup>
                      </Form.Group>

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
