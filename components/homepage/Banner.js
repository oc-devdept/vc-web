import React, { Component } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

const BannerInfo = [
  {
    title: "Venture Car Banner 1",
    captionText: "We are",
    captionText2: "CaseTrust Accredited",
    image: "/static/banner/main-banner1.jpg"
  },
  {
    title: "Venture Car Banner 2",
    captionText: "Toyota C-HR Hybrid",
    captionText2: "Let This Space-Age Design Impress You",
    image: "/static/banner/main-banner2.jpg"
  }
];

const carouselOptions = {
  controls: false,
  interval: 4000
};

class Banner extends Component {
  render() {
    return (
      <Carousel {...carouselOptions}>
        {BannerInfo.map((banner, key) => (
          <Carousel.Item key={key}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 2,
                backgroundColor: "rgba(0, 0, 0, 0.4)"
              }}
            />
            <img className="d-block w-100" src={banner.image}></img>
            <Carousel.Caption>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h2 style={{ color: "#fff", textTransform: "uppercase" }}>
                      {banner.captionText}
                    </h2>
                    <h1
                      style={{
                        color: "#F29D30",
                        textTransform: "uppercase",
                        borderBottom: "1px solid rgb(255, 255, 255, 0.4)",
                        marginBottom: 30,
                        paddingBottom: 10
                      }}
                    >
                      {banner.captionText2}
                    </h1>
                    <Link href="/contact-us">
                      <a className="btn btn-primary btn-slider">Contact Us</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Banner;
