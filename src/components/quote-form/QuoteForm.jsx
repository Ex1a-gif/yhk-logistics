import React from "react";
import * as yup from "yup";
import * as formik from "formik";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const QuoteForm = () => {
  const schema = yup.object().shape({
    bookingDate: yup
      .date()
      .required("Shipping date is required")
      .min(new Date(), "Please enter a valid shipping date"),
    bookingTime: yup.string().required("Time is required"),
    origin: yup.string().required("Package origin is required"),
    destination: yup.string().required("Destination is required"),
    modeOfDelivery: yup.string().required("Mode of delivery is required"),
    shippingMethod: yup
      .string()
      .oneOf(["fcl", "lcl", "air", "road"], "Invalid shipping method")
      .required("Shipping method is required"),
    parcelType: yup.string().required("Parcel type is required"),
    weight: yup
      .number()
      .required("Weight is required")
      .positive("Weight must be a positive number")
      .min(5, "Minimum weight of 5 kilograms"),
    otherInfo: yup.string(),
    dateCreated: yup.date().default(function () {
      return new Date();
    }),
  });

  const { Formik } = formik;

  return (
    <div>
      <Container>
        <div className="mt-4 w-75">
          <p className="text-muted">
            We’re always interested in new projects, big or small. Send us an
            email and we’ll get in touch shortly, or phone between 8:00 am and
            7:00 pm Monday to Saturday.
          </p>
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            bookingDate: "",
            bookingTime: "",
            origin: "",
            destination: "",
            parcelType: "",
            modeOfDelivery: "",
            weight: "",
            shippingMethod: "",
            otherInfo: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              {/* Shipping Date and Time */}
              <Row xs={1} sm={1} md={3} className="mb-3">
                <Col>
                  <Form.Group controlId="bookingDate">
                    <Form.Label>Booking Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="bookingDate"
                      placeholder="Booking Date"
                      value={values.bookingDate}
                      onChange={handleChange}
                      isInvalid={!!errors.bookingDate}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.bookingDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="bookingTime">
                    <Form.Label>Booking Time</Form.Label>
                    <Form.Control
                      type="time"
                      name="bookingTime"
                      placeholder="Booking Time"
                      value={values.bookingTime}
                      onChange={handleChange}
                      isInvalid={!!errors.bookingTime}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.bookingTime}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row xs={1} sm={1} md={3} className="mb-3">
                <Col>
                  <Form.Group controlId="origin">
                    <Form.Label>Package Origin</Form.Label>
                    <Form.Control
                      type="text"
                      name="origin"
                      placeholder="Package Origin"
                      value={values.origin}
                      onChange={handleChange}
                      isInvalid={!!errors.origin}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.origin}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="destination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      value={values.destination}
                      onChange={handleChange}
                      isInvalid={!!errors.destination}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.destination}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row xs={1} sm={1} md={3} className="mb-3">
                <Col>
                  <Form.Group controlId="parcelType">
                    <Form.Label>Parcel Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="parcelType"
                      placeholder="Parcel Type"
                      value={values.parcelType}
                      onChange={handleChange}
                      isInvalid={!!errors.parcelType}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.parcelType}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="modeOfDelivery">
                    <Form.Label>Mode of Delivery</Form.Label>
                    <Form.Select
                      className="form-select"
                      name="modeOfDelivery"
                      value={values.modeOfDelivery}
                      onChange={handleChange}
                      isInvalid={!!errors.modeOfDelivery}
                    >
                      <option>---SELECT---</option>
                      <option value="fcl">Pickup by YHK</option>
                      <option value="lcl">Self Delivery to YHK office</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      {errors.modeOfDelivery}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row xs={1} sm={1} md={3} className="mb-3">
                <Col>
                  <Form.Group controlId="weight">
                    <Form.Label>Weight (kg)</Form.Label>
                    <Form.Control
                      type="number"
                      name="weight"
                      placeholder="Weight"
                      value={values.weight}
                      onChange={handleChange}
                      isInvalid={!!errors.weight}
                    />

                    {errors.weight ? (
                      <Form.Control.Feedback type="invalid">
                        {errors.weight}
                      </Form.Control.Feedback>
                    ) : (
                      <small style={{ color: "red" }}>
                        *Minimum of 5 kilograms
                      </small>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="shippingMethod">
                    <Form.Label>Shipping Method</Form.Label>
                    <Form.Select
                      className="form-select"
                      name="shippingMethod"
                      value={values.shippingMethod}
                      onChange={handleChange}
                      isInvalid={!!errors.shippingMethod}
                    >
                      <option>---SELECT---</option>
                      <option value="fcl">Full Container Load</option>
                      <option value="lcl">Less than Container Load</option>
                      <option value="air">Air Freight</option>
                      <option value="road">Road Transport</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      {errors.shippingMethod}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row xs={1} sm={1} md={3} className="mb-3">
                <Col>
                  <Form.Group controlId="otherInfo">
                    <Form.Label>Other Information</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="otherInfo"
                      placeholder="Other Information"
                      value={values.otherInfo}
                      onChange={handleChange}
                      isInvalid={!!errors.otherInfo}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.otherInfo}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                className="submit-btn rounded-0 px-5 py-2 my-3"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default QuoteForm;
