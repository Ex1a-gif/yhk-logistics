import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <p className="footer-text">© Copyright 2021</p>
        <p className="footer-text">YHK International Logistics Corporation</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/YHKintlogistics/"
            style={{ textDecoration: "none" }}
          >
            <FaFacebookSquare className="contact-icon" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/company/yhk-international-logistics-corporation/about/"
            style={{ textDecoration: "none" }}
          >
            <FaLinkedinIn className="contact-icon" />{" "}
          </a>
          <a href="mailto: yhk@yhk.com" style={{ textDecoration: "none" }}>
            <FiMail className="contact-icon" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
