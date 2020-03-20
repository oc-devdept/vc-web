import React, { useReducer, useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import { getTheDate, formatPrice } from "Components/Helpers/helpers";

import DefaultLayout from "Components/Layout/PageTemplates/Default";

import { updatePrice } from "Ducks/rent/RentActions";

import { Card, Form, Button } from "react-bootstrap";

const Confirmation = ({ RentState, updatePrice }) => {
  // console.log("rentstate= ", RentState);

  useEffect(() => {
    if (Object.keys(RentState.SelectedVehicle).length === 0) {
      Router.replace("/rent");
    }
  });

  useEffect(() => {
    if (Object.keys(RentState.ExtraOptions).length !== 0) {
      updatePrice();
    }
  }, []);

  // reducer to maintain state of inputs
  const initialState = {
    givenName: { value: "", error: "" },
    surname: { value: "", error: "" },
    email: { value: "", error: "" },
    contactNumber: { value: "", error: "" }
  };

  function reducer(state, { field, values }) {
    return {
      ...state,
      [field]: values
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { givenName, surname, email, contactNumber } = state;

  const onChange = e => {
    let { name, value } = e.target;
    let error;
    switch (name) {
      case "givenName":
        /^[a-zA-Z\s?]+$/.test(value)
          ? (error = "")
          : (error = "Invalid given name format");
        break;
      case "surname":
        /^[a-zA-Z\s]+$/.test(value)
          ? (error = "")
          : (error = "Invalid surname format");
        break;
      case "email":
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
          ? (error = "")
          : (error = "Invalid email format");
        break;
      case "contactNumber":
        /^\+?(\d{8,})$/.test(value)
          ? (error = "")
          : (error =
              "Invalid contact number format, do not include spaces or hyphens");
        break;
      default:
        break;
    }

    dispatch({ field: name, values: { value: value, error: error } });
  };

  const [showSubmitFeedback, setShowSubmitFeedback] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let isValid = true;
    for (const input in state) {
      if (!!state[input].error || !state[input].value) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      console.log("form is valid, post this info!");
      // KIV: get response from api post, need to catch (and display) if api post throws error
      setShowSubmitFeedback(true);
    } else {
      console.log("form is invalid");
    }
  };

  const {
    SearchParameters,
    SelectedVehicle,
    ExtraOptions,
    PriceBreakdown
  } = RentState;

  return (
    <DefaultLayout crumbs="Confirmation">
      <div className="container my-3">
        <h1 className="h2 mb-3">Confirmation of Details</h1>
        <div className="row">
          <div className="left-card col-lg-8">
            <Card className="rounded-0" style={{ marginBottom: 30 }}>
              <Card.Body>
                <div className="row">
                  <div className="your-car col-lg-6">
                    <span>Your Vehicle</span>
                    <h4>{SelectedVehicle.name}</h4>
                    <Link href="/rent/results">
                      <a>
                        <i className="fas fa-pen" /> Change
                      </a>
                    </Link>
                    <img src={SelectedVehicle.img} alt={SelectedVehicle.name} />
                    <div className="d-block mb-3">
                      <span className="mr-2">
                        <img
                          src="/Static/rent/icon-person.png"
                          className="mr-1"
                        />
                        {SelectedVehicle.person}
                      </span>
                      <span className="mr-2">
                        <img
                          src="/Static/rent/icon-luggage.png"
                          className="mr-1"
                        />
                        {SelectedVehicle.luggage}
                      </span>
                      <span className="mr-2">
                        <img
                          src="/Static/rent/icon-car-door.png"
                          className="mr-1"
                        />
                        {SelectedVehicle.doors}
                      </span>
                      <span className="mr-2">
                        <img
                          src="/Static/rent/icon-gearbox.png"
                          className="mr-1"
                        />
                        {SelectedVehicle.transmission}
                      </span>
                    </div>
                  </div>
                  <div className="reservation-details col-lg-6">
                    <div className="d-flex justify-content-between">
                      <h5>Pick-up</h5>
                      <Link href="/rent">
                        <a>
                          <i className="fas fa-pen" /> Change
                        </a>
                      </Link>
                    </div>
                    <span className="d-block mb-3" style={{ fontSize: 16 }}>
                      33 Ubi Ave 3, #01-47/48
                      <br />
                      {`${getTheDate(SearchParameters.pickUpDate)} ${
                        SearchParameters.pickUpTime
                      }`}
                    </span>
                    <h5>Drop-off</h5>
                    <span className="d-block mb-3" style={{ fontSize: 16 }}>
                      33 Ubi Ave 3, #01-47/48
                      <br />
                      {`${getTheDate(SearchParameters.dropOffDate)} ${
                        SearchParameters.dropOffTime
                      }`}
                    </span>
                    <div className="d-flex justify-content-between">
                      <h5>Extra Options</h5>
                      <Link href="/rent/extras">
                        <a>
                          <i className="fas fa-pen" /> Change
                        </a>
                      </Link>
                    </div>
                    {Object.keys(ExtraOptions).length !== 0 ? (
                      <ul>
                        {Object.values(ExtraOptions.render).map((value, id) => (
                          <li key={id}>
                            <span style={{ fontSize: 16 }}>
                              {!!value.value
                                ? value.value + " " + value.text
                                : value.text}
                              <br />
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No options selected</p>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="driver-details" style={{ marginBottom: 30 }}>
              <Card className="rounded-0">
                <Card.Body>
                  <h4>Driver Details</h4>
                  <div className="text-right">
                    <span style={{ color: "red" }}>*</span> Required Fields
                  </div>
                  <Form onSubmit={handleSubmit} validated={false} noValidate>
                    <Form.Group controlId="givenName">
                      <Form.Label>
                        Given Name <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        name="givenName"
                        value={givenName.value}
                        onChange={onChange}
                        placeholder="Required"
                        disabled={showSubmitFeedback}
                      />
                      {!!state.givenName.error && (
                        <span style={{ color: "red" }}>
                          Please enter a valid given name
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="surname">
                      <Form.Label>
                        Surname <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        name="surname"
                        value={surname.value}
                        onChange={onChange}
                        placeholder="Required"
                        disabled={showSubmitFeedback}
                      />
                      {!!state.surname.error && (
                        <span style={{ color: "red" }}>
                          Please enter a valid surname
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>
                        Email <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        name="email"
                        value={email.value}
                        onChange={onChange}
                        placeholder="Required"
                        disabled={showSubmitFeedback}
                      />
                      {!!state.email.error && (
                        <span style={{ color: "red" }}>
                          Please enter a valid email
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="contactNumber">
                      <Form.Label>
                        Contact Number <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        name="contactNumber"
                        value={contactNumber.value}
                        onChange={onChange}
                        placeholder="Required, omit spaces and hypens"
                        disabled={showSubmitFeedback}
                      />
                      {!!state.contactNumber.error && (
                        <span style={{ color: "red" }}>
                          Please enter a valid contact number
                        </span>
                      )}
                    </Form.Group>
                    {showSubmitFeedback ? (
                      <React.Fragment>
                        <p className="h6" style={{ lineHeight: 2 }}>
                          Your form has been submitted successfully.
                          <br />
                          Thank you for your interest, we will get back to you
                          within 24 hours.
                          <br />
                          <a className="d-inline-block" href="/">
                            Return to home page
                          </a>
                        </p>
                      </React.Fragment>
                    ) : (
                      <Button
                        type="submit"
                        style={{ width: "100%", marginTop: "1rem" }}
                      >
                        Reserve Now
                      </Button>
                    )}
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="right-card col-lg-4">
            <Card className="rounded-0" style={{ marginBottom: 30 }}>
              <Card.Header
                style={{ backgroundColor: "#4b6674", borderRadius: 0 }}
              >
                <h4 style={{ color: "#ffffff" }}>Price Breakdown</h4>
              </Card.Header>
              <Card.Body>
                {!!PriceBreakdown.total && (
                  <div className="price-breakdown">
                    <p className="h6 d-flex justify-content-between">
                      <span>Car Rental Charge</span>
                      <span>{formatPrice(PriceBreakdown.rentalCharge)}</span>
                    </p>
                    {!!PriceBreakdown.childSeatCharge && (
                      <p className="h6 d-flex justify-content-between">
                        <span>Child Seat Charge</span>
                        <span>
                          {formatPrice(PriceBreakdown.childSeatCharge)}
                        </span>
                      </p>
                    )}
                    {!!PriceBreakdown.coverageCharge && (
                      <p className="h6 d-flex justify-content-between">
                        <span>Collision Damage Waiver</span>
                        <span>
                          {formatPrice(PriceBreakdown.coverageCharge)}
                        </span>
                      </p>
                    )}
                    <p className="h6 d-flex justify-content-between">
                      <span>GST (7%)</span>
                      <span>{formatPrice(PriceBreakdown.gst)}</span>
                    </p>
                    <h5
                      className="d-flex justify-content-between"
                      style={{ fontWeight: 600 }}
                    >
                      <span>Total</span>
                      <span>{formatPrice(PriceBreakdown.total)}</span>
                    </h5>
                  </div>
                )}
              </Card.Body>
            </Card>
            <Card className="rounded-0">
              <Card.Header
                style={{ backgroundColor: "#4b6674", borderRadius: 0 }}
              >
                <h4 style={{ color: "#ffffff" }}>Need Help?</h4>
              </Card.Header>
              <Card.Body>
                <span className="d-block mb-3">
                  Have a question or need to clarify something?
                </span>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="light"
                    href="tel:65528800"
                    style={{ width: "48%", padding: "11px 24px" }}
                  >
                    Call Us
                  </Button>
                  <Button
                    href="mailto:sales@bw.com.sg"
                    style={{ width: "48%", padding: "11px 24px" }}
                  >
                    Email Us
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, { updatePrice })(Confirmation);
