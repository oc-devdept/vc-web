import React, { Component } from "react";
import { formatPrice } from "Components/Helpers/helpers";
// import { connect } from "react-redux"

// import { selectedProductExterior } from "Ducks/product/ProductActions"

import { Carousel } from "react-responsive-carousel";
import "Styles/carousel.min.css";

class Exterior extends Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    const { id } = event.target;
    this.props.selectedProductExterior(id);
  }

  isValidated() {
    return !!this.props.ProductExterior.id;
  }

  render() {
    const { objects } = this.props.ProductExterior.data.fields["Colors"];
    // console.log("exterior props: ", this.props);
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            showStatus={false}
            showArrows={false}
          >
            {this.props.ProductExterior.images.map((item, id) => (
              <div key={id}>
                <img src={item} className="configCoverImg align-self-center" />
              </div>
            ))}
          </Carousel>
          <h3 className="text-uppercase text-center m-2">
            {this.props.ProductExterior.name}
          </h3>
        </div>
        <div className="configure-opt col-lg-4">
          <h3 className="configure-opt-title">02 Exterior</h3>
          <ul className="list-unstyled">
            {!!objects &&
              objects.map((item, id) => (
                <li
                  className="configure-list d-inline-block align-top"
                  key={id}
                  id={item.id}
                  onClick={this.handleOptionChange}
                  style={{ maxWidth: 120 }}
                >
                  <img
                    src={item.files[0].path}
                    alt={item.name}
                    id={item.id}
                    style={
                      item.id == this.props.ProductExterior.id
                        ? {
                            border: "3px solid #F29D30",
                            color: "#F29D30",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            fontWeight: "bold"
                          }
                        : { border: "1px solid #DEE2E6" }
                    }
                  />
                  <br />
                  <span
                    id={item.id}
                    style={{ textTransform: "uppercase", fontWeight: 500 }}
                  >
                    {item.name}
                  </span>
                  <br />
                  <span id={item.id} style={{ color: "#4B6674" }}>
                    {formatPrice(item.price)}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   const { ProductExterior } = state.ProductState
//   return { ProductExterior }
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectedProductExterior
//   }
// )(Exterior)

export default Exterior;
