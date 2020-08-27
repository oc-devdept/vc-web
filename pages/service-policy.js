import React, { Component } from "react";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";

class ServicePolicy extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <h2>Service Policy</h2>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServicePolicy;
