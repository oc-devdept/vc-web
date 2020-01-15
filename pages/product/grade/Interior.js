import React from "react"
import { connect } from "react-redux"

import { selectedProductInterior } from "../../../redux/ducks/product/ProductActions.js"

const Interior = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductInterior(id)
  }

  const { objects } = props.productInterior.data.fields["Seating Fabrics"]
  // console.log("interior props: ", props)
  return(
    <div>
      <p>03 Interior</p>
      <ul className="p-0 list-unstyled">
        {!!objects &&
          objects.map(( item, id ) => (
            <li
              key={ id }
              id= { item.id }
              style={ item.id == props.productInterior.id ? 
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
  const { productInterior } = state.ProductState
  return { productInterior }
}

export default connect(
  mapStateToProps,
  {
    selectedProductInterior
  }
)(Interior)