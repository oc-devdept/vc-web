import React, { Component } from "react";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";

class TermsAndConditions extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <h2>Terms And Conditions</h2>
        <Footer />
      </React.Fragment>
    );
  }
}

export default TermsAndConditions;
