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
    console.log("marker")
  }

  render() {
    const { tableData, loading } = this.props.bannerList;    
    return (
     <React.Fragment>
      <Carousel {...carouselOptions}>
        {tableData.map((banner, key) => (
          <Carousel.Item key={key}>
            
        { banner.images.length > 0 && <img className="blockd- w-100" src={banner.images[0].path} /> }
        <div className="carousel-mobilecaption"> 
          <h1 style={{ color: "#000",}}>
            {banner.caption1}
          </h1>
          <h2 style={{marginBottom: 10,paddingBottom: 2}} >
            {banner.caption2}
          </h2>
        <Link href={banner.linkURL }>
                      <a className="btn red-btn">
                        Learn more &nbsp; 
                        {/* <Icon icon={arrowRight} width="1.0rem"/> */}
                      </a>
                    </Link>
         </div>
         <Carousel.Caption  style={{backgroundColor:"red" ,marginTop:"30px" , heigh:"100%"}}>
                <div className="row" style={{width:"100%" , height:"100%",padding:0 ,display:"flex",alignItems:"center",justifyContent:"center" , backgroundColor:"blue"}} >
                  <div className="col-sm-2"  style={{backgroundColor:"#region" }} />
                  
                  <div className="col-sm-8"  style={{height:"100% ", width:"100%" ,backgroundColor:"yellow" ,textAlign:"center" ,verticalAlign:"middle"}}>
                 
                  <div className={ "container "+banner.captionPosition } style={{backgroundColor:"#bfa" ,height:"100%" , width:"100%" , textAlign:"center" ,verticalAlign:"middle"}} >
                   {/* <div className="col-md-8"> */}
                  <div className="caption-container" style={{backgroundColor:"#baf" , margin:"auto 10px"}} >
                    <h1 style={{ color: "#fff" }}>
                     {banner.caption1}
                    </h1>
                    <h2
                      style={{
                        marginBottom: 5,
                        paddingBottom: 10
                      }}
                    >
                      {banner.caption2}
                    </h2>
                    {
                      banner.linkURL != "" && 
                    
                    <Link href={banner.linkURL }>
                      <a className="btn red-btn">
                        Learn more &nbsp; 
                        {/* <Icon icon={arrowRight} width="1.0rem"/> */}
                      </a>
                    </Link>
                    }
                  </div>
                  
                  </div>

                  </div>
                  <div className="col-sm-2"/>
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
