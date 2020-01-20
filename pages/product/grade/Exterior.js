import React from "react"
import { connect } from "react-redux"

import { selectedProductExterior } from "Ducks/product/ProductActions"

const Exterior = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductExterior(id)
  }

  const { objects } = props.productExterior.data.fields["Car Colors"]
  // console.log("exterior props: ", props)
  return(
  <div className="configure-sect row">  
    <div className="configure-gall col-9">
          tetstes
    </div>
    <div className="configure-opt">
      <h2 className="configure-opt-title">02 Exterior</h2>
      <ul className="list-unstyled">
        {!!objects &&
          objects.map(( item, id ) => (
            <li className="configure-list"
              key={ id }
              id= { item.id }
              style={ item.id == props.productExterior.id ? 
                {border: "2px solid #F29D30", color: "#F29D30"} : 
                {border: "1px solid #DEE2E6"}
              }
              onClick={ handleOptionChange }
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

const mapStateToProps = state => {
  const { productExterior } = state.ProductState
  return { productExterior }
}

export default connect(
  mapStateToProps,
  {
    selectedProductExterior
  }
)(Exterior)