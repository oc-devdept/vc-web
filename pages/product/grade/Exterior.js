import React, { Component } from "react"
// import { connect } from "react-redux"

// import { selectedProductExterior } from "Ducks/product/ProductActions"

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
    const { objects } = this.props.productExterior.data.fields["Car Colors"]
    // console.log("exterior props: ", this.props)
    return(
      <div className="configure-sect row">  
        <div className="configure-gall col-9">
          
        </div>
        <div className="configure-opt">
          <h2 className="configure-opt-title">02 Exterior</h2>
          <ul className="list-unstyled">
            {!!objects &&
              objects.map(( item, id ) => (
                <li className="configure-list"
                  key={ id }
                  id= { item.id }
                  style={ item.id == this.props.productExterior.id ? 
                    {border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                    {border: "1px solid #DEE2E6"}
                  }
                  onClick={ this.handleOptionChange }
                >
                  {item.name}<br/>
                  ${item.price}
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