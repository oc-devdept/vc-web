import React, { Component } from "react";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";

class PrivacyStatement extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <h2>Privacy Statement</h2>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PrivacyStatement;
