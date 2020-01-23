import React, { Component } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class BestSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      gradesArray: []
    };
  }
  componentDidMount() {
    fetch("http://157.230.248.96:3001/api/products/getAllFeaturedCars")
      .then(response => response.json())
      .then(data => this.setState({ gradesArray: data.fields }));
  }

  render() {
    var modelImage = {
      objectFit: "cover",
      borderRadius: "20px",
      // wdith: '150px',
      height: "250px",
      padding: "5px"
    };

    return (
      <section className="best-sellers-area">
        <div className="container">
          <div className="section-title without-bg">
            <h2>Featured Cars</h2>
          </div>

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {this.state.gradesArray.map((grade, idx) => (
              <div className="col-lg-12 col-md-12" key={idx}>
                <div className="single-product-box">
                  <div className="product-image">
                    {grade.images.map((gradeImg, idx) => (
                      <Link href="/product/grade/[id]" as={`/product/grade/${grade.modelId}?grade=${grade.id}`}>
                        <a>
                          <img
                            style={modelImage}
                            src={gradeImg.url}
                            key={idx}
                          />
                        </a>
                      </Link>
                    ))}
                  </div>

                  <div className="product-content">
                    <h3 className="text-uppercase">
                      <Link href="/product/grade/[id]" as={`/product/grade/${grade.modelId}?grade=${grade.id}`}>
                        <a>{grade.name}</a>
                      </Link>
                    </h3>

                    <div className="product-price">
                      <span className="new-price">
                        S${" "}
                        {grade.selling_Price.toLocaleString(undefined, {
                          maximumFractionDigits: 2
                        })}
                      </span>
                    </div>

                    <div className="product-desc">
                      {/* {Object.entries(grade).map(([key, value], i)=>{
                                        return(
                                        <div key={key}>
                                        id is: {value} 
                                      </div>)
                                      })*/}
                      {grade.power && (
                        <dl>
                          <dt>{grade.power.detailCategory.name}</dt>
                          <dd>{grade.power.value}</dd>{" "}
                          <dd>{grade.power.detailCategory.unit}</dd>
                        </dl>
                      )}
                      {grade.engine && (
                        <dl>
                          <dt>{grade.engine.detailCategory.name}</dt>
                          <dd>{grade.engine.value}</dd>{" "}
                          <dd>{grade.engine.detailCategory.unit}</dd>
                        </dl>
                      )}
                      {grade.fuel && (
                        <dl>
                          <dt>{grade.fuel.detailCategory.name}</dt>
                          <dd>{grade.fuel.value}</dd>{" "}
                          <dd>{grade.fuel.detailCategory.unit}</dd>
                        </dl>
                      )}
                    </div>

                    <Link href="/product/grade/[id]" as={`/product/grade/${grade.modelId}?grade=${grade.id}`}>
                      <a className="btn btn-primary">Explore</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div></div>{" "}
      </section>
    );
  }
}
export default BestSeller;
