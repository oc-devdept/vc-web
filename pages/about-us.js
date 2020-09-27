import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

// Components


class AboutUs extends Component {

    render() {
        return (
          <DefaultLayout>
            <section className="about-us-area">
              <img className="about-us-banner" src="/static/about-us/about-us-banner.jpg" />
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
                    <h5>Lorem</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo quis ligula posuere, et venenatis ante aliquet. Cras diam elit, tempor nec lacus in, mollis laoreet nisi. Sed vitae ante ac arcu sagittis commodo. Nunc fringilla nibh ut elit gravida, in pharetra ligula aliquam. Nullam aliquet massa at sem lobortis ullamcorper. Sed consequat magna sit amet facilisis molestie. Donec vulputate congue ante a porttitor. Nullam in velit rutrum, tempus nisl quis, hendrerit neque.
                    </p>
                    <p>
                    Curabitur sed consequat lorem, a porta nunc. Morbi placerat urna feugiat eros laoreet varius. Etiam molestie, erat nec feugiat sodales, quam sem vehicula nulla, ac finibus risus ligula id odio. Vivamus a eros ac est bibendum vulputate fermentum at turpis. Proin sed massa nibh. Sed vestibulum quam sed vestibulum consequat. Proin vel est erat. Suspendisse fermentum sit amet justo a iaculis. Duis ultrices risus sit amet tellus eleifend, nec eleifend lacus euismod. Integer gravida maximus faucibus. Proin ultricies interdum felis dapibus laoreet. Praesent ut lectus ullamcorper orci malesuada condimentum eu in magna. Maecenas sed magna et magna elementum lobortis id congue arcu. Fusce sit amet nibh finibus, lacinia dolor et, interdum erat. Aliquam erat volutpat. Praesent a accumsan urna.Curabitur sed consequat lorem, a porta nunc. Morbi placerat urna feugiat eros laoreet varius. Etiam molestie, erat nec feugiat sodales, quam sem vehicula nulla, ac finibus risus ligula id odio. Vivamus a eros ac est bibendum vulputate fermentum at turpis. Proin sed massa nibh. Sed vestibulum quam sed vestibulum consequat. Proin vel est erat. Suspendisse fermentum sit amet justo a iaculis. Duis ultrices risus sit amet tellus eleifend, nec eleifend lacus euismod. Integer gravida maximus faucibus. Proin ultricies interdum felis dapibus laoreet. Praesent ut lectus ullamcorper orci malesuada condimentum eu in magna. Maecenas sed magna et magna elementum lobortis id congue arcu. Fusce sit amet nibh finibus, lacinia dolor et, interdum erat. Aliquam erat volutpat. Praesent a accumsan urna.
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