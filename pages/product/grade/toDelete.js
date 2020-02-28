// to delete once payment is smoothen out

import React from "react";
import { connect } from "react-redux";
import { doCheckout } from "Ducks/checkout";

function checkoutTestButton(props) {
  const {
    productGradeId,
    productVariance,
    productAccessories,
    subtotal,
    misc,
    gst,
    total
  } = props;

  function checkout() {
    console.log("checkout");
    props.doCheckout(
      productVariance,
      productAccessories,
      productGradeId,
      subtotal,
      gst,
      total
    );
  }

  return <button onClick={() => checkout()}>test checkout</button>;
}

const mapStateToProps = ({ CheckoutState }) => {
  const {
    productGradeId,
    productVariance,
    productAccessories,
    subtotal,
    misc,
    gst,
    total
  } = CheckoutState;
  return {
    productGradeId,
    productVariance,
    productAccessories,
    subtotal,
    misc,
    gst,
    total
  };
};

export default connect(mapStateToProps, { doCheckout })(checkoutTestButton);
