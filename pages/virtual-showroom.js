import React, { Component } from "react";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";

class VirtualShowroom extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <section className="virtual-showroom-area" style={{marginTop:80}}>
              <iframe 
                className="frame"
                // width="100%" height="530" 
                src="https://venture-cars-pte-ltd.vr-360-tour.com/e/bwYBdI-BF_o/e" allowfullscreen allow="microphone; camera; gyroscope; accelerometer">
              </iframe>

          </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default VirtualShowroom;
