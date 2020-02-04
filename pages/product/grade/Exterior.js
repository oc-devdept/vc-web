import React, { Component } from "react"
// import { connect } from "react-redux"

// import { selectedProductExterior } from "Ducks/product/ProductActions"

import { Carousel } from "react-responsive-carousel"
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"

class Exterior extends Component {
  constructor(props){
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  
  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductExterior(id)
  }

  isValidated() {
    return !!this.props.productExterior.id
  }

  render() {
    const { objects } = this.props.productExterior.data.fields["Colors"]
    console.log("exterior props: ", this.props)
    return(
      <div className="configure-sect row">  
        <div className="configure-gall col-lg-8 d-flex flex-column">
          <Carousel infiniteLoop autoPlay showThumbs={ false } showStatus={ false }>
            { this.props.productExterior.images.map((item, id) => (
              <div key={ id }>
                <img src={ item } className="configCoverImg align-self-center" />
              </div>
            ))}
          </Carousel>
          <h3 className="text-uppercase text-center m-2">Standard { this.props.productExterior.name } Paintwork</h3>
        </div>
        <div className="configure-opt col-lg-4">
          <h3 className="configure-opt-title">02 Exterior</h3>
          <ul className="list-unstyled">
            {!!objects &&
              objects.map(( item, id ) => (
                <li 
                  className="configure-list d-inline-block mr-1"
                  key={ id }
                  id={ item.id }
                  onClick={ this.handleOptionChange }
                >
                  <img 
                    src={ item.files[0].path } 
                    alt={ item.name } 
                    id={ item.id }
                    height="50"
                    width="50"
                    style={ item.id == this.props.productExterior.id ? 
                      {border: "3px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                      {border: "1px solid #DEE2E6"}
                    }
                  /><br/>
                  <span id={ item.id } style={{textTransform:"uppercase", fontWeight:500}}>{ item.name }</span><br/>
                  <span id={ item.id } style={{color:"#4B6674"}}>${ item.price }</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { productExterior } = state.ProductState
//   return { productExterior }
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectedProductExterior
//   }
// )(Exterior)

export default Exterior