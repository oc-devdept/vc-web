import React, { Component } from "react";
import Slider from "../../components/car/slider";

class Gallery extends Component {

  render() {
      const { galleryPhoto } = this.props;
    return (
      <section className="gallery-area">
        <div className="container">
            <div className="section-title without-bg" align="center">
                <h2>Gallery</h2>
            </div>
            <Slider galleryPhoto={galleryPhoto} />
        </div>
      </section>


    );
  }
}

export default Gallery;
