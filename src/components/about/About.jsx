import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutImage from "../../assets/about-image.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="d-flex justify-content-center">
            <img className="about-image" src={AboutImage} alt="About YHK" />
          </Col>
          <Col>
            <p className="about-title pb-3">
              Safe and Reliable Logistics Solutions That Save Your Time
            </p>

            <p className="about-subtitle pb-3">
              Our excellent and long-standing relations with various shipping
              lines, airlines, truckers, public and private warehouses, and
              Government Agencies enable us to offer unparalleled service with
              competitive rates to meet both corporate and individual
              transportation needs.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
