import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/yhk-logo.png";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="YHK Logo" width="80" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="me-2 nav-item" href="/">
                Home
              </Nav.Link>
              {currentUser ? (
                <>
                  <Nav.Link className="me-2 nav-item" href="/transactions">
                    Transactions
                  </Nav.Link>
                  <Link to="/login">
                    <Button
                      className="login-topbar-btn rounded-0 px-4 py-2"
                      onClick={logOut}
                    >
                      Log Out
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Nav.Link className="me-2 nav-item" href="#services">
                    Services
                  </Nav.Link>
                  <Nav.Link className="me-2 nav-item" href="#about">
                    About Us
                  </Nav.Link>
                  <Nav.Link className="me-2 nav-item" href="#contact">
                    Contact
                  </Nav.Link>
                  <a
                    className="login-topbar-btn rounded-0 px-4 py-2"
                    href="/login"
                  >
                    Log In
                  </a>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Topbar;
