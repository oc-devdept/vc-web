import React, { Component } from "react";

class AboutHondaFit extends Component {
  render() {
    return (
      <section className="about-honda-fit-area">
        <div className="container">
            <div className="section-title without-bg" align="center">
            <h2>ABOUT HONDA FIT</h2>
            </div>
            <div className="about-table">
              <div className="left">
                <h6>OVERVIEW</h6>
              </div>
              <div className="right">
              <p>
                The Honda Fit is propelled by a 1.3-litre 4-cylinder i-VTEC engine with 96 hp and 118 Nm, 
                which is connected to the company's proven CVT gearbox. Honda does not have offical performance to its predecessor, 
                the century sprint should be dispatched in around 13 seconds while fuel consumption is about 20km/litre.
              </p>
              </div>
            </div>
            <div className="about-table">
              <div className="left">
                <h6>EXTERIOR</h6>
              </div>
              <div className="right">
                <p>
                  15-inch steel wheels <br />
                  Multi-reflector halogen headlights
                </p>
              </div>
            </div>
            <div className="about-table">
              <div className="left">
                <h6>INTERIOR</h6>
              </div>
              <div className="right">
                <p>
                  2-Spoke Steering Wheel <br />
                  Front Manual Adjustments Seats<br />
                  Magic Rear Seats
                </p>
              </div>
            </div>
            <div className="about-table">
              <div className="left">
                <h6>SAFETY</h6>
              </div>
              <div className="right">
                <p>
                  2-Spoke Steering Wheel <br />
                  Front Manual Adjustments Seats<br />
                  Magic Rear Seats
                </p>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default AboutHondaFit; 
