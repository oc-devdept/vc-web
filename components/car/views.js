import React, { Component } from "react";

class Views extends Component {
  render() {
    return (
      <section className="views-area">
        <div className="container">
            <div className="section-title without-bg" align="center">
                <h2>360&deg; VIEWING</h2>
            </div>
            <div className="two-parts">
                <div className="exterior-view">
                    <h6>360&deg; EXTERIOR VIEWING</h6>
                </div>
                <div className="interior-view">
                    <h6>360&deg; INTERIOR VIEWING</h6>
                </div>
            </div>

            <img src="/static/single-car/360car.png"/>

            <p> 
                Click on the hotspots above to interact with the live 3D car model
                and view the details of each section. You can also freely rotate the car model 
                by clicking the 360&deg; direction in either clock-wise or anti-clockwise direction.
            </p>
        </div>
      </section>
    );
  }
}

export default Views; 