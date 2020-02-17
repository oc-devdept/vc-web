import React from "react";

import { formatPrice } from "Components/Helpers/helpers";

import SummaryTable from "Components/configurator/SummaryTable";
import Button from "react-bootstrap/Button";
import LoanCalculator from "Components/configurator/LoanCalculator";

const Summary = props => {
  // console.log("Summary props= ", props)

  const overallSummary = [
    {
      text: "TOTAL CAR PRICE",
      price: props.ProductState.ProductTotal.total
    },
    {
      text: "MONTHLY INSTALLMENT",
      price: props.ProductState.LoanCalculator.monthlyInstallment
    },
    {
      text: "DEPOSIT",
      price: props.ProductState.LoanCalculator.deposit
    }
  ];

  // const formatPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <SummaryTable
            page="summary"
            productState={props.ProductState}
            updateProductTotal={props.updateProductTotal}
          />
        </div>
        <div className="col-lg-6">
          <div className="py-3 px-0">
            <p style={{ color: "#F29D30", fontWeight: 600 }}>
              CAR LOAN CALCULATOR
            </p>
          </div>
          <div
            style={{
              minHeight: 300,
              border: "1px solid #F29D30",
              marginBottom: "1rem"
            }}
          >
            <LoanCalculator
              productTotal={props.ProductState.ProductTotal}
              updateLoanCalculator={props.updateLoanCalculator}
            />
          </div>
          <div
            style={{
              minHeight: 100,
              backgroundColor: "#4B6674",
              marginBottom: "1rem"
            }}
          >
            <div className="p-3">
              <p
                style={{
                  color: "#F29D30",
                  textAlign: "center",
                  fontWeight: 600,
                  margin: 0
                }}
              >
                OVERALL SUMMARY
              </p>
              {overallSummary.map((item, key) => (
                <div key={key} className="d-flex justify-content-between">
                  <p style={{ color: "#ffffff", margin: 0, fontWeight: 600 }}>
                    {item.text}
                  </p>
                  {!!item.price ? (
                    <p style={{ color: "#ffffff" }}>
                      ${formatPrice(parseFloat(item.price).toFixed(2))}
                    </p>
                  ) : (
                    <p style={{ color: "#ffffff" }}>-</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <button
                onClick={props.printConfigurator}
                className="d-inline-flex flex-column align-items-center justify-content-center mr-3 px-3"
                style={{
                  border: "1px solid #4b6674",
                  minWidth: 65,
                  maxWidth: 120,
                  backgroundColor: "transparent"
                }}
              >
                <i
                  className="fas fa-save"
                  style={{ color: "#4b6674", fontSize: 24 }}
                />
                <p
                  style={{
                    fontSize: 12,
                    color: "#4b6674",
                    textAlign: "center"
                  }}
                >
                  SAVE
                </p>
              </button>
              <button
                className="d-inline-flex flex-column align-items-center justify-content-center mr-3 px-3"
                style={{
                  border: "1px solid #4b6674",
                  minWidth: 65,
                  maxWidth: 120,
                  backgroundColor: "transparent"
                }}
              >
                <i
                  className="fas fa-car"
                  style={{ color: "#4b6674", fontSize: 24 }}
                />
                <a href="#">
                  <p
                    style={{
                      fontSize: 12,
                      color: "#4b6674",
                      textAlign: "center"
                    }}
                  >
                    BOOK TEST DRIVE
                  </p>
                </a>
              </button>
            </div>
            <div className="d-flex">
              <Button style={{ maxWidth: 180 }}>PROCEED TO DOWNPAYMENT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
