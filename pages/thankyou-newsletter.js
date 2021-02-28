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
            <br />
            <h1> Thank You For Signing up for our News Letter!</h1>
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
