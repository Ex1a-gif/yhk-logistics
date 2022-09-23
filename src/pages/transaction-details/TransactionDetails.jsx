import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import SingleDelivery from "../../components/single-delivery/SingleDelivery";
import SingleDetails from "../../components/single-details/SingleDetails";
import SinglePayment from "../../components/single-payment/SinglePayment";
import Topbar from "../../components/topbar/Topbar";

const TransactionDetails = () => {
  return (
    <div className="transactions">
      <Topbar />
      <div className="quote-wrapper d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Transaction Details</h1>
              <p>Home/ Transaction Details</p>
            </div>
          </div>
        </div>
      </div>
      <Container className="my-3">
        <Tabs
          defaultActiveKey="transactions"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="transaction-details" title="Transaction Details">
            <SingleDetails />
          </Tab>
          <Tab eventKey="payment-details" title="Payment Details">
            <SinglePayment />
          </Tab>
          <Tab eventKey="delivery-details" title="Delivery Details">
            <SingleDelivery />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default TransactionDetails;
