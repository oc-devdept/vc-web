import React, { useState, useEffect } from "react";
import Router from "next/router";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import { formatPrice } from "Components/Helpers/helpers";
import VehicleSearch from "Components/rent/VehicleSearch";
import VehicleSearchMobile from "Components/rent/VehicleSearchMobile";

import { getSearch, updateExtraOptions } from "Ducks/rent/RentActions";

import { Card, ListGroup, Form, InputGroup, Button } from "react-bootstrap";

const Extras = ({ RentState, getSearch, updateExtraOptions }) => {
  console.log("RentState= ", RentState);
  const { SelectedVehicle } = RentState;

  useEffect(() => {
    if (Object.keys(SelectedVehicle).length === 0) {
      Router.replace("/rent");
    }
  });

  const [childSeats, setChildSeats] = useState(0);
  const [malaysiaTravel, setMalaysiaTravel] = useState(false);

  const handleClick = coverage => {
    const data = {
      childSeats: childSeats,
      malaysiaTravel: malaysiaTravel,
      fullCoverage: coverage
    };
    let payload = {};

    Object.entries(data).map(([key, value]) => {
      if (!!value) {
        payload[key] = value;
      }
    });

    updateExtraOptions(payload);
    Router.push("/rent/confirmation");
  };

  return (
    <DefaultLayout crumbs="Extras">
      <div className="container my-3">
        <div className="vehicle-search-mobile">
          <VehicleSearchMobile
            getSearch={getSearch}
            searchParameters={RentState.SearchParameters}
          />
        </div>
        <div className="vehicle-search">
          <VehicleSearch
            getSearch={getSearch}
            searchParameters={RentState.SearchParameters}
          />
        </div>
      </div>
      <div className="container">
        <Card className="mb-3">
          <Card.Body>
            <div className="row">
              <div className="col-6 col-md-3 col-lg-3 d-flex align-items-center">
                <img src={SelectedVehicle.img} alt={SelectedVehicle.name} />
              </div>
              <div className="col-6 col-md-5 col-lg-6 d-flex flex-column justify-content-center">
                <div className="search-extras-name">
                  <h1 className="h4">{SelectedVehicle.name}</h1>
                </div>
                <div className="search-extras-properties">
                  <div className="search-extras-person d-inline-flex mr-1">
                    {/* <img src="/Static/rent/icon-person.png" className="mr-1" /> */}
                    <span>{SelectedVehicle.person} Persons |</span>
                  </div>
                  <div className="search-extras-luggage d-inline-flex mr-1">
                    {/* <img src="/Static/rent/icon-luggage.png" className="mr-1" /> */}
                    <span>{SelectedVehicle.luggage} Luggages |</span>
                  </div>
                  <div className="search-extras-door d-inline-flex mr-1">
                    {/* <img src="/Static/rent/icon-car-door.png" className="mr-1" /> */}
                    <span>{SelectedVehicle.doors} Doors |</span>
                  </div>
                  <div className="search-item-transmission d-inline-flex mr-1">
                    {/* <img src="/Static/rent/icon-gearbox.png" className="mr-1" /> */}
                    <span>{SelectedVehicle.transmission}</span>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-flex col-md-4 col-lg-3 search-extras-price flex-column justify-content-center">
                <p style={{ lineHeight: 1.7 }}>
                  <span className="h5" style={{ color: "#4b6674" }}>
                    Car Hire Charges
                  </span>{" "}
                  <br />
                  <span>
                    {formatPrice(SelectedVehicle.pricePerDay)}/day
                  </span>{" "}
                  <br />
                  <span className="h6">
                    Total: {formatPrice(SelectedVehicle.totalPrice)}
                  </span>
                </p>
              </div>
            </div>
          </Card.Body>
          <Card.Footer
            className="d-md-none"
            style={{
              backgroundColor: "#4b6674",
              borderColor: "#4b6674",
              padding: ".25rem 1.25rem"
            }}
          >
            <p style={{ color: "#ffffff", fontSize: 16, textAlign: "right" }}>
              Total Car Hire Charge:{" "}
              <span
                style={{
                  fontWeight: 600
                }}
              >
                {formatPrice(SelectedVehicle.totalPrice)}
              </span>
            </p>
          </Card.Footer>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h2 className="h5">Add more options</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="row align-items-center">
                  <div className="option-image col-4 col-md-2 d-flex justify-content-center">
                    <img
                      src="/Static/rent/car-seat.png"
                      style={{ maxWidth: "50%" }}
                    />
                  </div>
                  <div className="option-text col-8 col-md-6">
                    <h3 className="h6">Child Seat</h3>
                    <p>
                      Anyone below the height of 1.35m is required to be secured
                      in a child seat during travel by law.
                    </p>
                  </div>
                  <div className="option-seats col-4 col-md-2">
                    <InputGroup>
                      <InputGroup.Prepend>
                        <button
                          onClick={
                            childSeats > 0
                              ? () => setChildSeats(childSeats - 1)
                              : null
                          }
                          style={{
                            border: "none",
                            backgroundColor: "#E9EcEF",
                            padding: "0 0.5rem",
                            zIndex: 2
                          }}
                        >
                          <i
                            className="fas fa-minus"
                            style={
                              childSeats === 0 ? { color: "#808080" } : null
                            }
                          ></i>
                        </button>
                      </InputGroup.Prepend>
                      <Form.Control
                        value={childSeats}
                        id="childSeats"
                        disabled
                        className="text-center"
                        style={{ padding: 0 }}
                      />
                      <InputGroup.Append>
                        <button
                          onClick={
                            childSeats < 2
                              ? () => setChildSeats(childSeats + 1)
                              : null
                          }
                          style={{
                            border: "none",
                            backgroundColor: "#E9EcEF",
                            padding: "0 0.5rem",
                            zIndex: 2
                          }}
                        >
                          <i
                            className="fas fa-plus"
                            style={
                              childSeats === 2 ? { color: "#808080" } : null
                            }
                          ></i>
                        </button>
                      </InputGroup.Append>
                    </InputGroup>
                  </div>
                  <div className="option-price col-8 col-md-2">
                    <p style={{ fontWeight: 600 }}>$30.00/seat</p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="pb-0">
                <div className="row align-items-center">
                  <div className="option-image col-4 col-md-2 d-flex justify-content-center">
                    <img
                      src="/Static/rent/malaysia.png"
                      style={{ maxWidth: "50%" }}
                    />
                  </div>
                  <div className="option-text col-8 col-md-6">
                    <h3 className="h6">Travel to Malaysia</h3>
                    <p>
                      Additional charges may be incurred for travelling to
                      Malaysia with our vehicles. Read our{" "}
                      <a href="#" target="_blank" className="d-inline">
                        Terms and Conditions
                      </a>{" "}
                      for the full information.
                    </p>
                  </div>
                  <div className="option-selection col-12 col-md-4 d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      label=""
                      id="malaysiaTravel"
                      value={malaysiaTravel}
                      onChange={() => setMalaysiaTravel(!malaysiaTravel)}
                    />
                    <p style={{ lineHeight: 1.2 }}>
                      By selecting this option, you understand and agree to the{" "}
                      <a href="#" target="_blank" className="d-inline">
                        Terms and Conditions
                      </a>{" "}
                      stated.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <h2 className="h5">Collision Damage Waiver</h2>

            <p>
              In the event of an accident during the rental period, you will be
              charged for the damages (known as the "excess"). By purchasing an
              extensive coverage, we will refund you the amount!
            </p>
            <div style={{ color: "#666666", marginBottom: "0.5rem" }}>
              <i
                className="fas fa-shield-alt"
                style={{
                  fontSize: 24,
                  marginRight: "0.5rem",
                  color: "#4b6674"
                }}
              ></i>
              <h3 className="h6 d-inline-block">Full coverage includes:</h3>
            </div>
            <ul style={{ color: "#666666" }}>
              <li>The vehicle excess</li>
              <li>Theft or vandalism of vehicle</li>
              <li>Loss of car key</li>
              <li>Other miscellaneous fees</li>
            </ul>
            <a href="#" target="_blank" className="d-inline">
              View the complete breakdown of possible charges here
            </a>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button
              variant="light"
              className="mx-2 d-flex flex-column align-items-center justify-content-center"
              style={{ flex: "0 1 200px" }}
              onClick={() => handleClick(false)}
            >
              <span style={{ fontWeight: 600, fontSize: 20 }}>
                Book without
              </span>
              Full Coverage
            </Button>
            <Button
              className="mx-2 d-flex flex-column align-items-center justify-content-center"
              style={{ flex: "0 1 200px" }}
              onClick={() => handleClick(true)}
            >
              <span style={{ fontWeight: 600, fontSize: 20 }}>Book with</span>
              Full Coverage
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </DefaultLayout>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, {
  getSearch,
  updateExtraOptions
})(Extras);
