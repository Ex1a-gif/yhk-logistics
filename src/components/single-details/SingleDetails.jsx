import React from "react";
import { Form, Row, Card, Col } from "react-bootstrap";

const SingleDetails = () => {
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
    <Card className="mb-5">
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
  );
};

export default SingleDetails;
