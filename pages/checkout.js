import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Breadcrumb from "../components/Common/Breadcrumb";

const Checkout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Breadcrumb title="Checkout" />

      <Footer />
    </React.Fragment>
  );
};

export default Checkout;
