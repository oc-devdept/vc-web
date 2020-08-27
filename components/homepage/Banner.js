import React, { Component } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-bi/arrow-right';

const BannerInfo = [
  {
    title: "Venture Car Banner 1",
    captionText: "FIT RIGHT INTO YOUR LIFE",
    captionText2: "THE ALL NEW HONDA FIT",
    image: "/static/banner/banner1.png"
  },
  {
    title: "Venture Car Banner 2",
    captionText: "RAIZE TO THE OCCASION",
    captionText2: "THE ALL NEW TOYOTA RAIZE",
    image: "/static/banner/banner2.png"
  },
  {
    title: "Venture Car Banner 3",
    captionText: "SHOP SAFELY WITH VENTURE CARS",
    captionText2: "VENTURE CARS VIRTUAL EXPERIENCE",
    image: "/static/banner/banner3.png"
  }
];

const carouselOptions = {
  controls: true,
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
                    <Link href="/">
                      <a className="btn red-btn">
                        LEARN MORE &nbsp;&nbsp; <Icon icon={arrowRight} />
                      </a>
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
