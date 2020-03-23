import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Breadcrumb from "../components/Common/Breadcrumb";

import { useDispatch, useSelector } from "react-redux";
import { getCheckout } from "Ducks/checkout";

import { isLoggedIn } from "../utils/auth";

const Checkout = props => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("vc-shoppingcart"));
    if (localCart) {
      dispatch(getCheckout());
    }
  }, []);
  const checkoutState = useSelector(state => state.CheckoutState);

  return (
    <React.Fragment>
      <Navbar />
      <Breadcrumb title="Checkout" />

      <Footer />
    </React.Fragment>
  );
};

Checkout.getInitialProps = ctx => {
  const loggedIn = isLoggedIn(ctx);
  // props that returned if user is logged in
  return { loggedIn };
};

export default Checkout;
