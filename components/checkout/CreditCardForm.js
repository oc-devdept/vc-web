import React, { useEffect, useState } from "react";
import Link from "next/link";

import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Loader from "react-loader-spinner";
import "Styles/react-spinner-loader.css";

import { useDispatch, useSelector } from "react-redux";
import {
  createPayment,
  getPayment,
  clearPayment
} from "Ducks/payment/PaymentActions";
import { doCheckout } from "Ducks/checkout/CheckoutActions";

const CreditCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const PaymentState = useSelector(state => state.PaymentState);
  const CheckoutState = useSelector(state => state.CheckoutState);

  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showFeedbackSuccess, setShowFeedbackSuccess] = useState(false);
  const [FeedbackMessage, setFeedbackMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const paymentIntentId = localStorage.getItem("stripe-paymentIntentId");
    if (paymentIntentId) {
      dispatch(getPayment(paymentIntentId));
    } else {
      dispatch(createPayment());
    }
    setLoading(false);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements || loading) {
      return;
    }
    if (name === "") {
      setFeedbackMessage("Your name on card is incomplete.");
      return;
    }

    setLoading(true);
    const result = await stripe.confirmCardPayment(PaymentState.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name
        }
      }
    });

    if (result.error) {
      setFeedbackMessage(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        dispatch(doCheckout(CheckoutState));
        setShowFeedbackSuccess(true);
        setFeedbackMessage("");
        setShowForm(false);
        dispatch(clearPayment());
      }
    }
    setLoading(false);
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#666666",
        fontSmoothing: "antialiased",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        "::placeholder": {
          color: "#999999"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  // console.log("PaymentState= ", PaymentState);
  console.log("CheckoutState= ", CheckoutState);
  return (
    <Card
      style={{
        width: "90%",
        maxWidth: 500,
        margin: "2rem auto"
      }}
    >
      <Card.Header
        style={{
          backgroundColor: "#ffffff",
          padding: "1.25rem"
        }}
      >
        <h3
          className="d-flex align-items-center justify-content-center"
          style={{ color: "#4b6674" }}
        >
          PAY WITH&nbsp;
          <i className="fab fa-stripe" style={{ fontSize: 36 }} />
        </h3>
        <p style={{ textAlign: "center", color: "#4b6674" }}>
          DEPOSIT PAYABLE:{" "}
          <span style={{ fontSize: 18, fontWeight: 500 }}>$500</span>
        </p>
      </Card.Header>
      <Card.Body>
        {showForm && (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>NAME ON CARD</Form.Label>
              <Form.Control
                placeholder="Required"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>CARD DETAILS</Form.Label>
              <CardElement
                options={CARD_ELEMENT_OPTIONS}
                className="form-control card-element"
              />
            </Form.Group>
            <Button
              type="submit"
              disabled={!stripe || loading}
              style={{ width: "100%", margin: "1.25rem 0" }}
            >
              {loading ? (
                <Loader type="TailSpin" color="#f29d30" height={18} />
              ) : (
                "SUBMIT"
              )}
            </Button>
          </Form>
        )}
        {showFeedbackSuccess && (
          <React.Fragment>
            <div className="d-flex flex-column align-items-center">
              <i
                className="far fa-check-circle"
                style={{ fontSize: 48, color: "green", marginBottom: "0.5rem" }}
              />
              <h3 className="mb-2">PAYMENT SUCCESS!</h3>
            </div>
            <p>
              Thank you for your interest. Our staff will get in touch with you
              soon!
            </p>
            <Link href="/">
              <a className="d-inline">Back to Home</a>
            </Link>
          </React.Fragment>
        )}
        {!!FeedbackMessage && (
          <div style={{ textAlign: "center", color: "#fa755a" }}>
            <i className="far fa-times-circle" /> {FeedbackMessage}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CreditCardForm;
