import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

// Components


class AboutUs extends Component {

    render() {
        return (
          <DefaultLayout>
            <section className="about-us-area">
              <div className="about-us-banner" style={{backgroundImage: "url(/static/about-us/about-us-banner.jpg)" }} />
              <div className="about-history" align="center">
                <h2>Since 2009</h2>
                <div className="row">
                  <div className="column col-md-4">
                    <p>
                      <span className="amount">10, 000+</span>
                      <br />
                      <span className="type">NEW CARS BUILT</span>
                    </p>
                  </div>
                  <div className="column col-md-4">
                    <p>
                      <span className="amount">6,000+</span>
                      <br />
                      <span className="type">PRE-OWNED CARS SOLD</span>
                    </p>
                  </div>
                  <div className="column col-md-4">
                    <p>
                      <span className="amount">20,000+</span>
                      <br />
                      <span className="type">CARS SERVICED</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="our-story">
                <div className="row">
                  <div className="column col-md-4">
                    <h2>Our Story</h2>
                  </div>
                  <div className="column col-md-6">
                    <h5>New Venture</h5>
                    <p>
                    As a subsidiary that expanded from BW Automobiles in 2009, Venture Cars was established to meet the rise in demand for brand new cars. Aptly named Venture Cars, the company was set up with the sole focus on new Japanese mass-market cars.  The genesis for this new venture was the observable consumer trends in the car market towards Japanese cars and parallel importers (PI). 
                    </p>
                    <p>
                    At Venture Cars, we take pride in serving our customers to the best of our abilities and we have a solid track record. We believe in being transparent and we work hard to meet the strict guidelines that are set up by Singapore Vehicle Traders Association (SVTA).
                    </p>
                  </div>
                </div>
              </div>
            </section>
            </DefaultLayout>
        )
    };
}

export default AboutUs;