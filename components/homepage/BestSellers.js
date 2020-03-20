import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import RctSectionLoader from "Components/RctSectionLoader";
import { formatPrice } from "Components/Helpers/helpers";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { getFeaturedCars } from "Ducks/product";

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

const GradePageLink = ({ children, grade }) => (
  <Link
    href={{
      pathname: `/product/grade/${grade.modelId}`,
      query: { grade: grade.id }
    }}
  >
    {children}
  </Link>
);

class BestSeller extends Component {
  componentDidMount() {
    this.props.getFeaturedCars();
  }

  render() {
    const { featured, loading } = this.props;
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
          {loading && <RctSectionLoader />}
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
            {featured.map((grade, idx) => (
              <div className="col-lg-12 col-md-12" key={idx}>
                <div className="single-product-box">
                  <div className="product-image">
                    {grade.images.map((gradeImg, idx) => (
                      <GradePageLink key={idx} grade={grade}>
                        <a>
                          <img style={modelImage} src={gradeImg.path} />
                        </a>
                      </GradePageLink>
                    ))}
                  </div>

                  <div className="product-content">
                    <h3 className="text-uppercase">
                      <GradePageLink grade={grade}>
                        <a>{grade.name}</a>
                      </GradePageLink>
                    </h3>

                    <div className="product-price">
                      <span className="new-price">
                        {formatPrice(grade.selling_Price)}
                      </span>
                    </div>

                    <div className="product-desc">
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

                    <GradePageLink grade={grade}>
                      <a className="btn btn-primary">Explore</a>
                    </GradePageLink>
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
const mapStateToProps = ({ ProductState }) => {
  const { featuredCars } = ProductState;
  const { featured, loading } = featuredCars;
  return { featured, loading };
};

export default connect(mapStateToProps, { getFeaturedCars })(BestSeller);
