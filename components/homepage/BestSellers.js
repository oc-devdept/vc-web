import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import RctSectionLoader from "Components/RctSectionLoader";
import { formatPrice } from "Components/Helpers/helpers";

// Carousel
import Carousel from "react-multi-carousel";
import { getFeaturedHtml } from "Ducks/homepage";

import { Icon } from '@iconify/react';
import tickIcon from '@iconify/icons-subway/tick';
import arrowRight from '@iconify/icons-bi/arrow-right';

class BestSeller extends Component {
  componentDidMount() {
    // console.log("NNQND")
    this.props.getFeaturedHtml();
  }

  render() {
    const { featured, loading } = this.props;
    var modelImage = {
      objectFit: "cover",
      borderRadius: "20px",
      height: "180px",
      padding: "5px",
    };
    
    let html = this.props.featuredHtml.html;
    /*
    var featured_car_1 = '<hr>{{featured-car-1}}';
    var featured_car_2 = '<hr>{{featured-car-2}}';
    var featured_car_3 = '<hr>{{featured-car-3}}';
    var car_info_1 = '<p><svg xmlns="http://www.w3.org/2000/svg" focusable="false" style="transform: rotate(360deg);" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" fill="#48A62E"></path></svg>&nbsp; {{car_info_1}}</p>';
    var car_info_2 = '<p><svg xmlns="http://www.w3.org/2000/svg" focusable="false" style="transform: rotate(360deg);" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" fill="#48A62E"></path></svg>&nbsp; {{car_info_2}}</p>';
    var car_info_3 = '<p><svg xmlns="http://www.w3.org/2000/svg" focusable="false" style="transform: rotate(360deg);" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" fill="#48A62E"></path></svg>&nbsp; {{car_info_3}}</p>';
    for(var i=0; i<html.length ; i++){
      html = html.replace(car_info_1, "")
      html = html.replace(car_info_2, "")
      html = html.replace(car_info_3, "")
      html = html.replace(featured_car_1, "")
      html = html.replace(featured_car_2, "")
      html = html.replace(featured_car_3, "")
    }
    */
    return (<div dangerouslySetInnerHTML={{__html: html}} />);
  }
}
const mapStateToProps = ({ HomeState }) => {
  const { FeaturedState } = HomeState;
  const { featuredHtml } = FeaturedState;
  return { featuredHtml };
};

export default connect(mapStateToProps, { getFeaturedHtml })(BestSeller);
/*
<section className="best-sellers-area">
        <div className="container">
          <div className="section-title without-bg" align="center">
            <h2>Featured Cars</h2>
          </div>

          <div className="sub-title">
            <div className="box">
              <h5>MPV / SUV</h5>
                <div className="fc-box">
                <div className="feature-cars">
                  <h3>TOYOTA RAIZE</h3>
                  <img src="/static/feature-cars/toyota-raize.png"/>
                  <h5>fr $175,888</h5>
                  <p>
                    <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                    Engine Cap: 2493cc
                  </p>
                  <p>
                    <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                    Power: 180bhp
                  </p>
                  <p>
                    <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                    Fuel Consumption: 11.6 km/litre
                  </p>
                  <Link href="/">
                    <a className="btn moreBtn">
                      DISCOVER MORE &nbsp;&nbsp; <Icon icon={arrowRight} width="1.5rem"/>
                    </a>
                  </Link>
                  <p className="terms"> Vaild till 1 Jan 2021 12pm. Price subject to change without prior notice. Terms &amp; Conditions Apply. VES Banding: A2</p>
                </div>
                <hr />
                <div className="feature-cars">
                  <h3>TOYOTA VELLFIRE</h3>
                  <img src="/static/feature-cars/toyota-vellfire.png"/>
                  <h5>fr $169,888</h5>
                  <p>
                    <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                    Engine Cap: 2493cc
                  </p>
                  <p>
                    <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                    Power: 180bhp
                  </p>
                  <p>
                    <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                    Fuel Consumption: 11.6 km/litre
                  </p>
                  <Link href="/">
                    <a className="btn moreBtn">
                      DISCOVER MORE &nbsp;&nbsp; <Icon icon={arrowRight} width="1.5rem"/>
                    </a>
                  </Link>
                  <p className="terms"> Vaild till 1 Jan 2021 12pm. Price subject to change without prior notice. Terms &amp; Conditions Apply. VES Banding: A2</p>
                </div>
              </div>
            </div>
            <div className="box">
              <h5>HATCHBACKS</h5>
              <div className="fc-box">
              <div className="feature-cars">
                <h3>HONDA FIT</h3>
                <img src="/static/feature-cars/honda-fit.png"/>
                <h5>fr $74,000</h5>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Engine Cap: 1339cc
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Power: 84bhp
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Fuel Consumption: 24.0 km/litre
                </p>
                <Link href="/">
                  <a className="btn moreBtn">
                    DISCOVER MORE &nbsp;&nbsp; <Icon icon={arrowRight} width="1.5rem"/>
                  </a>
                </Link>
                <p className="terms"> Vaild till 1 Jan 2021 12pm. Price subject to change without prior notice. Terms &amp; Conditions Apply. VES Banding: A2</p>
                </div>
                <hr />
                <div className="feature-cars">
                <h3>SUZUKI SWIFT</h3>
                <img src="/static/feature-cars/suzuki-swift.png"/>
                <h5>fr $65,888</h5>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Engine Cap: 1244cc
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Power: 90bhp
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Fuel Consumption: 24.0 km/litre
                </p>
                <Link href="/">
                  <a className="btn moreBtn">
                    DISCOVER MORE &nbsp;&nbsp; <Icon icon={arrowRight} width="1.5rem"/>
                  </a>
                </Link>
                <p className="terms"> Vaild till 1 Jan 2021 12pm. Price subject to change without prior notice. Terms &amp; Conditions Apply. VES Banding: A2</p>
              </div>
            </div>
            </div>
            <div className="box">
              <h5>NEW ARRIVALS</h5>
              <div className="fc-box">
                <div className="feature-cars">
                <h3>TOYOTA RAIZE</h3>
                <img src="/static/feature-cars/toyota-raize.png"/>
                <h5>fr $79,888</h5>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Engine Cap: 996 cc
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Power: 98 bhp
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Fuel Consumption: 18.8 km/litre
                </p>
                <Link href="/">
                  <a className="btn moreBtn">
                    DISCOVER MORE &nbsp;&nbsp; <Icon icon={arrowRight} width="1.5rem"/>
                  </a>
                </Link>
                <p className="terms"> Vaild till 1 Jan 2021 12pm. Price subject to change without prior notice. Terms &amp; Conditions Apply. VES Banding: A2</p>
                </div>
                <hr />
                <div className="feature-cars">
                <h3>HONDA FIT</h3>
                <img src="/static/feature-cars/honda-fit.png"/>
                <h5>fr $74,888</h5>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Engine Cap: 1339 cc
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Power: 84 bhp
                </p>
                <p>
                  <Icon icon={tickIcon} color="#48A62E" />&nbsp;
                  Fuel Consumption: 24.0 km/litre
                </p>
                <Link href="/">
                  <a className="btn moreBtn">
                    DISCOVER MORE &nbsp;&nbsp; <Icon icon={arrowRight} width="1.5rem"/>
                  </a>
                </Link>
                <p className="terms"> Vaild till 1 Jan 2021 12pm. Price subject to change without prior notice. Terms &amp; Conditions Apply. VES Banding: A2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
*/