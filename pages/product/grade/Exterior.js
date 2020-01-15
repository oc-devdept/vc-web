import React from "react"
import { connect } from "react-redux"

import { selectedProductExterior } from "../../../redux/ducks/product/ProductActions.js"

const Exterior = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductExterior(id)
  }

  const { objects } = props.productExterior.data.fields["Car Colors"]
  // console.log("exterior props: ", props)
  return(
    <div>
      <p>02 Exterior</p>
      <ul className="p-0 list-unstyled">
        {!!objects &&
          objects.map(( item, id ) => (
            <li
              key={ id }
              id= { item.id }
              style={ item.id == props.productExterior.id ? 
                {border: "2px solid orange"} : 
                {border: "1px solid #DEE2E6"}
              }
              onClick={ handleOptionChange }
            >
              {item.name}<br/>
              {item.price}
            </li>
          ))
        }
      </ul>
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