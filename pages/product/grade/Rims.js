import React, { Component } from "react";
// import { connect } from "react-redux";

// import { selectedProductRims } from "Ducks/product/ProductActions";
import { Carousel } from "react-responsive-carousel"
import "Styles/carousel.min.css"

class Rims extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductRims(id)
  }

  isValidated() {
    return !!this.props.ProductRims.id
  }

  render() {
    const { objects } = this.props.ProductRims.data.fields.Rims
    // console.log("rims props: ", this.props)
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <Carousel infiniteLoop autoPlay showThumbs={ false } showStatus={ false } showArrows={ false }>
            { this.props.ProductRims.images.map((item, id) => (
              <div key={ id }>
                <img src={ item } className="configCoverImg align-self-center" />
              </div>
            ))}
          </Carousel>
          <h3 className="text-uppercase text-center m-2">{ this.props.ProductRims.name }</h3>
        </div>
        <div className="configure-opt col-lg-4">
          <h3 className="configure-opt-title">04 Rims</h3>
          <ul className="p-0 list-unstyled">
            {!!objects &&
              objects.map((item, id) => (
                <li
                  className="configure-list d-inline-block align-top"
                  key={ id }
                  id={ item.id }
                  onClick={ this.handleOptionChange }
                  style={{maxWidth:120}}
                >
                  <img 
                    src={ item.files[0].path } 
                    alt={ item.name } 
                    id={ item.id }
                    height="100"
                    width="100"
                    style={ item.id == this.props.ProductRims.id ? 
                      {border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                      { }
                    }
                  /><br/>
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
//   const { ProductRims } = state.ProductState
//   return { ProductRims }
// }

// export default connect(mapStateToProps, {
//   selectedProductRims
// })(Rims)

export default Rims