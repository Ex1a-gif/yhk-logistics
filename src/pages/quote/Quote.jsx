import React from "react";
import QuoteForm from "../../components/quote-form/QuoteForm";
import Topbar from "../../components/topbar/Topbar";
import "./quote.css";

const Quote = () => {
  return (
    <div className="quote">
      <Topbar />
      <div className="quote-wrapper d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Request A Quote</h1>
              <p>Home/ Quote</p>
            </div>
          </div>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
};

export default Quote;
