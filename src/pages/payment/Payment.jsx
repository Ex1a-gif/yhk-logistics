import React from "react";
import { Container, Form, Row, Card, Col, Button } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";

const Payment = () => {
  const quoteSummaryFields = [
    "Quote ID",
    "Status",
    "Booking Date and Time",
    "Mode of Delivery",
    "Package Origin",
    "Destination",
    "Parcel Type",
    "Weight",
    "Shipping Method",
  ];

  return (
    <div className="payment">
      <Topbar />
      <div className="quote-wrapper d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Payment</h1>
              <p>Home/ Payment</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Container>
          <div className="mt-4 w-75">
            <p className="text-muted">
              Please provide the payment method for the requested quote. Our
              staff will contact you for the total price of the quote.
            </p>
          </div>
          <Card className="mb-5 w-75">
            <Card.Title className="p-4">Quote Summary</Card.Title>
            <Card.Body className="p-4">
              <Row md={2} className="mb-4">
                {quoteSummaryFields.map((fieldName) => (
                  <Col>
                    <Form.Group>
                      <Form.Label className="fw-bold">{fieldName}</Form.Label>
                      <Form.Control plaintext readOnly />
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Form>
            <Row xs={1} sm={1} md={3} className="mb-3">
              <Form.Group>
                <Form.Label>Payment Method</Form.Label>
                <Form.Check
                  type="radio"
                  label="Cash by Sender"
                  name="paymentMethod"
                />
                <Form.Check
                  type="radio"
                  label="Cash by Receiver"
                  name="paymentMethod"
                />
                <Form.Check
                  type="radio"
                  label="Online Payment"
                  name="paymentMethod"
                />
              </Form.Group>
            </Row>
            <Row xs={1} sm={1} md={3} className="mb-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Online Payment Receipt</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>
            <Button
              type="submit"
              className="submit-btn rounded-0 px-5 py-2 my-3"
            >
              Update
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Payment;
