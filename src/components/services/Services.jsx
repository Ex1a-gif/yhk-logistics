import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaPlaneDeparture, FaTruck, FaWarehouse } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <Container>
        <Row>
          <Col>
            <p className="services-subtitle pb-2 text-center">Our Services</p>
            <p className="services-title pb-3 text-center">Logistic Services</p>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-2 services-card g-4">
          <Col className="d-flex justify-content-center my-lg-4">
            <Card style={{ "max-width": "450px" }} className="h-100">
              <Row className="d-flex justify-content-center">
                <Col className="col-md-2 d-flex align-items-center">
                  <BsFillBarChartLineFill className="services-icon" />
                </Col>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Col className="col-md-8">
                  <Card.Body>
                    <Card.Title>Customs Brokerage</Card.Title>
                    <Card.Text>
                      YHK offers its expertise in the complete Customs Clearance
                      processing, covering up to delivery of your cargo to your
                      premises.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center my-lg-4">
            <Card style={{ "max-width": "450px" }}>
              <Row className="d-flex justify-content-center">
                <Col className="col-md-2 d-flex align-items-center">
                  <FaPlaneDeparture className="services-icon" />
                </Col>
                <Col className="col-md-8">
                  <Card.Body>
                    <Card.Title>International Freight Forwarding</Card.Title>
                    <Card.Text>
                      We offer forwarding services that are more convenient and
                      economical in handling of import and/or export shipments.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center my-lg-4">
            <Card style={{ "max-width": "450px" }} className="h-100">
              <Row className="d-flex justify-content-center">
                <Col className="col-md-2 d-flex align-items-center">
                  <FaTruck className="services-icon" />
                </Col>
                <Col className="col-md-8">
                  <Card.Body>
                    <Card.Title>Transportation</Card.Title>
                    <Card.Text>
                      We offer and provide comprehensive and affordable
                      nationwide trucking services.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center my-lg-4">
            <Card style={{ "max-width": "450px" }}>
              <Row className="d-flex justify-content-center">
                <Col className="col-md-2 d-flex align-items-center">
                  <FaWarehouse className="services-icon" />
                </Col>
                <Col className="col-md-8">
                  <Card.Body>
                    <Card.Title>Warehousing Services</Card.Title>
                    <Card.Text>
                      We offer storage and distribution of your cargo including
                      packing and crating with our fully equipped warehouse.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
