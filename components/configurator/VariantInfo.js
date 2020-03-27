import React from "react";

import { Carousel } from "react-responsive-carousel";

const VariantInfo = ({ images, name }) => {
  return (
    <React.Fragment>
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {images.map((item, id) => (
          <div key={id}>
            <img src={item} className="configCoverImg align-self-center" />
          </div>
        ))}
      </Carousel>
      <h3 className="text-uppercase text-center my-3">{name}</h3>
    </React.Fragment>
  );
};

export default VariantInfo;
