import React, { Component } from "react";
import Link from "next/link";
import Navbar from "Components/Layout/Navbar";
// import Subscribe from "Components/Common/Subscribe";
// import Partner from "Components/Common/Partner";
import Footer from "Components/Layout/Footer";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="thank-you-area">
          <div className="container">
            <img src="./static/thank_you.png" />
            <h1> Thank you for your enquiry, Venture Cars will be getting back to you in a short while. 
              Please allow 3-5 working days for us to process your requirements.</h1>
            <Link href="/">
              <a className="btn btn-primary">Go Home</a>
            </Link>
          </div>
        </div>

        {/* <Subscribe />
        <Partner /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
