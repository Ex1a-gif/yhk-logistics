import React from "react";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import { FiPackage, FiPhoneCall, FiMail } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Container className="contact-container">
        <Row className="yhk-map mt-4">
          <iframe
            title="YHK Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8999873963357!2d121.00774781543227!3d14.661616779507701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b693375d7421%3A0x1d30c894bc2f596!2sYHK%20International%20Logistics%20Corporation!5e0!3m2!1sen!2sph!4v1662988857618!5m2!1sen!2sph"
            className="mx-auto w-50"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </Row>
        <p className="contact-title fs-5 fw-bold mb-2">Contact Form</p>
        <Row className="mt-4 align-items-center" md={2} xs={1}>
          <Col>
            <Form action="">
              {/* Name and Contact Number */}
              <Row className="mb-2">
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="name">Full Name</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="name"
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

              <Row className="mb-2">
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="subject">Subject</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="subject"
                        type="text"
                        //   onChange={(e) => {
                        //     setEmail(e.target.value);
                        //   }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="messagecls">Message</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="message"
                        as="textarea"
                        rows="5"
                        //   onChange={(e) => {
                        //     setEmail(e.target.value);
                        //   }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              {/* Submit Button */}
              <Col>
                <Button
                  type="submit"
                  className="submit-btn rounded-0 px-5 py-2"
                >
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
          <Col>
            <Row>
              <Col className="mb-2">
                <p>
                  <FiPackage className="contact-icon" /> 63A Howmart Rd, Baesa,
                  Quezon City, 1106 Metro Manila, Philippines
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <p>
                  <FiPhoneCall className="contact-icon" /> (+63 2) 362-5157,
                  359-0093, 362-7101
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <p>
                  <FiMail className="contact-icon" /> yhk@yhk.com.ph
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
