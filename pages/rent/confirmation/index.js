import React, { useReducer, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import {
  getTheDate,
  getTheTime,
  formatPrice
} from "Components/Helpers/helpers";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "Components/rent/VehicleSearch";
import VehicleSearchMobile from "Components/rent/VehicleSearchMobile";

import { updatePrice } from "Ducks/rent/RentActions";

import { Card, ListGroup, Form, InputGroup, Button } from "react-bootstrap";

const Confirmation = ({ RentState, updatePrice }) => {
  console.log("rentstate= ", RentState);

  useEffect(() => {
    if (Object.keys(RentState.SelectedVehicle).length === 0) {
      Router.replace("/rent");
    }
  });

  useEffect(() => {
    updatePrice();
  }, []);

  // reducer to maintain state of inputs
  const initialState = {
    givenName: "",
    surname: "",
    email: "",
    contactNumber: ""
  };

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { givenName, surname, email, contactNumber } = state;

  const onChange = e => {
    let { name, value } = e.target;
    dispatch({ field: name, value: value });
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
        <div className="row">
          <div className="col-md-8 row">
            <div className="your-car col-md-5">
              <h4>{SelectedVehicle.name}</h4>
              <img src={SelectedVehicle.img} alt={SelectedVehicle.name} />
              <span>
                <img src="/Static/rent/icon-person.png" />
                {SelectedVehicle.person}
                <img src="/Static/rent/icon-luggage.png" />
                {SelectedVehicle.luggage}
                <img src="/Static/rent/icon-car-door.png" />{" "}
                {SelectedVehicle.doors}
                <img src="/Static/rent/icon-gearbox.png" />
                {SelectedVehicle.transmission}
              </span>
            </div>
            <div className="reservation-details col-md-7">
              <h5>Pick-up</h5>
              <span>
                33 Ubi Ave 3, #01-47/48
                <br />
                {`${getTheDate(SearchParameters.pickUpDate)} ${getTheTime(
                  SearchParameters.pickUpDate
                )}`}
              </span>
              <h5>Drop-off</h5>
              <span>
                33 Ubi Ave 3, #01-47/48
                <br />
                {`${getTheDate(SearchParameters.dropOffDate)} ${getTheTime(
                  SearchParameters.dropOffDate
                )}`}
              </span>
              <h5>Extra Options</h5>
              {Object.keys(ExtraOptions).length !== 0 ? (
                <div>
                  {Object.entries(ExtraOptions).map(([key, value], id) => (
                    <span>hello hello you stopped here</span>
                  ))}
                </div>
              ) : (
                <span>No options selected</span>
              )}
            </div>
          </div>
          <div className="col-md-5"></div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <h2>Driver Details</h2>
            <div className="text-right">
              <span style={{ color: "red" }}>*</span> Required Fields
            </div>
            <Form>
              <Form.Group controlId="givenName">
                <Form.Label>
                  Given Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="givenName"
                  value={givenName}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group controlId="surname">
                <Form.Label>
                  Surname <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="surname"
                  value={surname}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control name="email" value={email} onChange={onChange} />
              </Form.Group>
              <Form.Group controlId="contactNumber">
                <Form.Label>
                  Contact Number <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="contactNumber"
                  value={contactNumber}
                  onChange={onChange}
                />
              </Form.Group>
              <Button type="submit" style={{ width: "100%" }}>
                Reserve Now
              </Button>
            </Form>
          </div>
          <div className="col-md-5">
            <Card>
              <Card.Body>
                <div className="reservation-details">
                  <h4>Reservation Details</h4>
                  <h5>Pick-up</h5>
                  <span>
                    33 Ubi Ave 3, #01-47/48
                    <br />
                    {getTheDate(SearchParameters.pickUpDate)}
                    <br />
                    {getTheTime(SearchParameters.pickUpDate)}
                  </span>
                  <h5>Drop-off</h5>
                  <span>
                    33 Ubi Ave 3, #01-47/48
                    <br />
                    {getTheDate(SearchParameters.dropOffDate)}
                    <br />
                    {getTheTime(SearchParameters.dropOffDate)}
                  </span>
                  <br />
                  <Link href="/rent">
                    <Button variant="light" href="/rent">
                      Change Dates
                    </Button>
                  </Link>
                </div>
                <div className="your-car">
                  <h4>Your Car</h4>
                  <img src={SelectedVehicle.img} alt={SelectedVehicle.name} />
                  <h5>{SelectedVehicle.name}</h5>
                  <span>
                    {SelectedVehicle.person} Persons
                    <br />
                    {SelectedVehicle.luggage} Luggages
                    <br />
                    {SelectedVehicle.doors} Doors
                    <br />
                    {SelectedVehicle.transmission}
                  </span>
                  <br />
                  <Link href="/rent/results">
                    <Button variant="light" href="/rent/results">
                      Change Car
                    </Button>
                  </Link>
                </div>
                {Object.keys(PriceBreakdown).length !== 0 && (
                  <div className="price-breakdown">
                    <h4>Price Breakdown</h4>
                    <h5>
                      Car Rental Charge{" "}
                      {formatPrice(PriceBreakdown.rentalCharge)}
                    </h5>
                    {!!PriceBreakdown.childSeatCharge && (
                      <h5>
                        Child Seat Charge{" "}
                        {formatPrice(PriceBreakdown.childSeatCharge)}
                      </h5>
                    )}
                    {!!PriceBreakdown.coverageCharge && (
                      <h5>
                        Collision Damage Waiver{" "}
                        {formatPrice(PriceBreakdown.coverageCharge)}
                      </h5>
                    )}
                    <h5>GST (7%) {formatPrice(PriceBreakdown.gst)}</h5>
                    <h5></h5>
                  </div>
                )}
              </Card.Body>
              <Card.Footer>
                {!!PriceBreakdown.total && (
                  <h5>Total {formatPrice(PriceBreakdown.total)}</h5>
                )}
              </Card.Footer>
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
