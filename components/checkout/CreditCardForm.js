import React, { useReducer } from "react";

import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CreditCardForm = () => {
  const initialState = {
    name: { value: "", error: "" },
    cardNumber: { value: "", error: "" },
    expiry: { value: "", error: "" },
    cvc: { value: "", error: "" }
  };

  function reducer(state, { field, values }) {
    return {
      ...state,
      [field]: values
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, cardNumber, expiry, cvc } = state;

  const onChange = e => {
    let { name, value } = e.target;
    let error;
    switch (name) {
      case "name":
        /^[a-zA-Z\s?]+$/.test(value)
          ? (error = "")
          : (error = "Invalid name input");
        break;
      case "cardNumber":
        const creditCardRegex = {
          amex: /^(?:3[47][0-9]{13})$/,
          visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
          mastercard: /^(?:5[1-5][0-9]{14})$/,
          discover: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
          diners: /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/,
          jcb: /^(?:(?:2131|1800|35\d{3})\d{11})$/
        };
        let isValid = false;
        Object.values(creditCardRegex).map(item => {
          if (item.test(value)) {
            isValid = true;
          }
        });
        isValid ? (error = "") : (error = "Invalid credit card number input");
        break;
      case "expiry":
        /^([0][1-9]|[1][0-2])\/[2][0-9]$/.test(value)
          ? (error = "")
          : (error = "Invalid expiry date input");
        break;
      case "cvc":
        /^\d{3,4}$/.test(value) ? (error = "") : (error = "Invalid CVC input");
        break;
      default:
        break;
    }

    dispatch({ field: name, values: { value: value, error: error } });
  };

  const isDisabled = () => {
    let disabled = true;
    Object.values(state).map(item => {
      console.log("item.value= ", item.value);
      if (item.value === "" || !!item.error) {
        disabled = false;
        return disabled;
      }
    });
    return !disabled;
  };

  const inputData = [
    {
      name: "name",
      value: name.value,
      error: name.error,
      label: "Name on card",
      placeholder: "Alphabets and spaces only"
    },
    {
      name: "cardNumber",
      value: cardNumber.value,
      error: cardNumber.error,
      label: "Card Number",
      placeholder: "Enter a valid card number without spaces",
      maxLength: "16"
    },
    {
      name: "expiry",
      value: expiry.value,
      error: expiry.error,
      label: "Expiry Date",
      placeholder: "MM/YY",
      maxLength: "5"
    },
    {
      name: "cvc",
      value: cvc.value,
      error: cvc.error,
      label: "CVC",
      placeholder: "123",
      maxLength: "4"
    }
  ];

  return (
    <React.Fragment>
      <Card className="border-0 px-5" style={{ marginTop: 50 }}>
        <Card.Header
          className="py-3 d-flex align-items-center"
          style={{ backgroundColor: "transparent" }}
        >
          <h2 style={{ margin: 0, textTransform: "uppercase", fontSize: 24 }}>
            Pay with
          </h2>
          <i
            className="fab fa-cc-stripe px-2"
            style={{ fontSize: 42, color: "#4b6674" }}
          />
        </Card.Header>
        <Card.Body>
          <h3 className="text-uppercase mb-4">deposit amount: $500.00</h3>
          <Form class="checkout-form">
            {inputData.map((item, key) => (
              <Form.Group controlId={item.name} key={key}>
                <Form.Label
                  style={{ display: "block", textTransform: "uppercase" }}
                >
                  {item.label}
                </Form.Label>
                <Form.Control
                  placeholder={item.placeholder}
                  name={item.name}
                  value={item.value}
                  onChange={onChange}
                  maxLength={!!item.maxLength ? item.maxLength : "none"}
                  style={!!item.error ? { border: "1px solid red" } : {}}
                />
                {!!item.error && (
                  <span style={{ color: "red" }}>{item.error}</span>
                )}
              </Form.Group>
            ))}
            <Button
              type="submit"
              style={{ width: "100%" }}
              disabled={isDisabled()}
            >
              PAY NOW
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CreditCardForm;
