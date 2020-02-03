import React, { Component } from "react";
// import { connect } from "react-redux";

// import { selectedProductInterior } from "Ducks/product/ProductActions";

import { Carousel } from "react-responsive-carousel"
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"

class Interior extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductInterior(id)
  }

  isValidated() {
    return !!this.props.productInterior.id
  }

  render() {
    const { objects } = this.props.productInterior.data.fields["Material"]
    console.log("interior props: ", this.props)
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-8 d-flex flex-column">
          <Carousel infiniteLoop autoPlay showThumbs={ false } showStatus={ false }>
            { this.props.productInterior.images.map((item, id) => (
              <div key={ id }>
                <img src={ item } className="configCoverImg align-self-center" />
              </div>
            ))}
          </Carousel>
          <h3 className="text-uppercase text-center m-2">{ this.props.productInterior.name }</h3>
        </div>
        <div className="configure-opt col-4">
          <h3 className="configure-opt-title">03 Interior</h3>
          <ul className="p-0 list-unstyled">
            {!!objects &&
              objects.map((item, id) => (
                <li
                  className="configure-list d-inline-block"
                  key={ id }
                  id={ item.id }
                  onClick={ this.handleOptionChange }
                >
                  <div 
                    id={ item.id }
                    className="interior-image"
                    style={ item.id == this.props.productInterior.id ? 
                      {backgroundImage: `url(${ item.files[0].path })`, border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                      {backgroundImage: `url(${ item.files[0].path })`, border: "1px solid #DEE2E6"}
                    }
                  />
                  <span id={ item.id } style={{textTransform:"uppercase", fontWeight:500}}>{ item.name }</span><br/>
                  <span id={ item.id } style={{color:"#4B6674"}}>${ item.price }</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { productInterior } = state.ProductState;
//   return { productInterior };
// };

// export default connect(mapStateToProps, {
//   selectedProductInterior
// })(Interior);

export default Interior