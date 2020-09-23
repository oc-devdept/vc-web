import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';

function ImageSlider(props) {
  const { galleryPhoto } = props;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const slidesData = [
    {
      id: 1,
      image: '/static/single-car/i1.jpg',
      label: 'FULL VIEW'
    }, {
      id: 2,
      image: '/static/single-car/i2.jpg',
      label: 'SIDE VIEW'
    }, {
      id: 3,
      image: '/static/single-car/i3.jpg',
      label: 'INTERIOR VIEW 1'
    }, {
      id: 4,
      image: '/static/single-car/i4.jpg',
      label: 'INTERIOR VIEW 2'
    }, {
      id: 5,
      image: '/static/single-car/i5.jpg',
      label: 'INTERIOR VIEW 3'
    },
  ];

  return (
      <div className="image-slider">
        <div className="slider-wrapper">
          <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={slider => (setSlider1(slider))}
          >

            {galleryPhoto.map((slide) =>

                <div className="slick-slide" key={slide.file.id}>
                  <img className="slick-slide-image" src={slide.file.path} />
                  <h5 className="slick-slide-label">{slide.caption}</h5>
                </div>
            )}
          </Slider>

          <div className="thumbnail-slider-wrap">
            <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={slider => (setSlider2(slider))}>

              {galleryPhoto.map((slide) =>

                  <div className="slick-slide" key={slide.file.id}>
                    <img className="slick-slide-image" src={slide.file.path} />
                  </div>

              )}
            </Slider>
          </div>
        </div>

      </div>
  );
}

export default ImageSlider;
