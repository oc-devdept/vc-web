import React from "react"
import { connect } from "react-redux"

import { selectedProductRims } from "../../../redux/ducks/product/ProductActions.js"

const Rims = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductRims(id)
  }

  const { objects } = props.productRims.data.fields.Rims
  // console.log("rims props: ", props)
  return(
    <div>
      <p>04 Rims</p>
      <ul className="p-0 list-unstyled">
        {!!objects &&
          objects.map(( item, id ) => (
            <li
              key={ id }
              id= { item.id }
              style={ item.id == props.productRims.id ? 
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
  const { productRims } = state.ProductState
  return { productRims }
}

export default connect(
  mapStateToProps,
  {
    selectedProductRims
  }
)(Rims)