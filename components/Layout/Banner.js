import React, { Component } from 'react';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel'
import {BannerInfo} from '../Layout/BannerInfo'
class Banner extends Component {
    render() {
        return (
    <Carousel>
        {BannerInfo.map((banner => (
        <Carousel.Item>
            {banner.id}
                <img className="d-block w-100" src={banner.image}></img>
            
            <Carousel.Caption>
            <div className="container">
            <h1 style={{color: "#fff",textTransform:"uppercase"}}>{banner.captionText}</h1>
            <h1 style={{color: "#F29D30",textTransform:"uppercase"}}>{banner.captionText2}</h1>
            <a class="btn btn-primary btn-slider" href="/contact-us">Contact Us</a>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        )
        
        ))}
    </Carousel>

        );
    }
}

export default Banner;
