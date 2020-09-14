import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
//components
import RctSectionLoader from "Components/RctSectionLoader";

//redux
import { getAllBanner } from "Ducks/homepage";

//icons
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-bi/arrow-right';

/*
const BannerInfo = [
  {
    title: "Venture Car Banner 1",
    captionText: "FIT RIGHT INTO YOUR LIFE",
    captionText2: "THE ALL NEW HONDA FIT",
    image: "/static/banner/banner1.png",
    position:"top-left"
  },
  {
    title: "Venture Car Banner 2",
    captionText: "RAIZE TO THE OCCASION",
    captionText2: "THE ALL NEW TOYOTA RAIZE",
    image: "/static/banner/banner2.png",
    position:"center-left"
  },
  {
    title: "Venture Car Banner 3",
    captionText: "SHOP SAFELY WITH VENTURE CARS",
    captionText2: "VENTURE CARS VIRTUAL EXPERIENCE",
    image: "/static/banner/banner3.png",
    position:"center-left"
  }
];
*/
const carouselOptions = {
  controls: true,
  interval: 4000
};

class Banner extends Component {
  componentDidMount(){
    this.props.getAllBanner();
  }

  render() {
    const { tableData, loading } = this.props.bannerList;    
    return (
     <React.Fragment>
      <Carousel {...carouselOptions}>
        {tableData.map((banner, key) => (
          <Carousel.Item key={key}>
            
        { banner.images.length > 0 && <img className="d-block w-100" src={banner.images[0].path} /> }
            <Carousel.Caption>
              <div className={ "container "+banner.captionPosition }>
                <div className="row">
                  <div className="col-md-8">
                    <h2 style={{ color: "#fff", textTransform: "uppercase" }}>
                      {banner.caption1}
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
                      {banner.caption2}
                    </h1>
                    {
                      banner.linkURL != "" && 
                    
                    <Link href={banner.linkURL }>
                      <a className="btn red-btn">
                        LEARN MORE &nbsp;&nbsp; <Icon icon={arrowRight} />
                      </a>
                    </Link>
                    }
                  </div>
                </div>
              </div>
            </Carousel.Caption>
            
          </Carousel.Item>
        ))}
      </Carousel>
      { loading && <RctSectionLoader />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ HomeState }) => {
  const { BannerState} = HomeState;
  const { bannerList } = BannerState;
  return { bannerList };
}
export default connect(mapStateToProps, {
  getAllBanner
})(Banner);
