import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div class="hero d-flex flex-column justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>Like Highway, But Way Better</h1>
            <p>
              YHK offers safe and reliable solutions for all your logistic
              needs.
            </p>
            <a href="/request-quote" class="btn1">
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
