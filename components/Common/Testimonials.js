import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";
import "Styles/carousel.min.css";

const options = {
  showThumbs: false,
  loop: false,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ]
};

class Testimonials extends Component {
  state = {
    display: false,
    panel: true
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <section className="testimonials-area ptb-60">
        <div className="container">
          <h3>What our customers says</h3>
          <Carousel
            className="testimonials-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-testimonials">
              <div className="client-image">
                {/* <img src={require("../../assets/images/client1.jpg")} alt="image" /> */}
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>

              <div className="client-info">
                <h4>Jason Statham</h4>
                <span>Founder at Brand</span>
              </div>
            </div>

            <div className="single-testimonials">
              <div className="client-image">
                {/* <img src={require("../../assets/images/client2.jpg")} alt="image" /> */}
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>

              <div className="client-info">
                <h4>Jason Jisan</h4>
                <span>Founder at Brand</span>
              </div>
            </div>

            <div className="single-testimonials">
              <div className="client-image">
                {/* <img src={require("../../assets/images/client3.jpg")} alt="image" /> */}
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>

              <div className="client-info">
                <h4>Jason Shabbir</h4>
                <span>Founder at Brand</span>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Testimonials;
