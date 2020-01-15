import React from "react"
import { connect } from "react-redux"

import { selectedProductAccessories } from "../../../redux/ducks/product/ProductActions.js"

const Accessories = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductAccessories(id)
  }

  const { fields } = props.productAccessories.data
  // console.log("Accessories props: ", props)
  return(
    <div>
      <p>05 Accessories</p>
      <ul className="p-0 list-unstyled">
        {!!fields &&        
          fields.map(( item, id ) => (
            <div className="product-option-group" key={ id }>
              { Object.entries(item).map(([key, value], id) => (
                <div key={ id }>
                  <p><strong>Product Option Group: { key }</strong></p>
                  <ul className="p-0">
                    { value.map(( item, id ) => (
                      <li 
                        key={ id }
                        id= { item.id }
                        className="product-option list-unstyled" 
                        style={ !!props.productAccessories.selectedIds[item.id] ? {border: "2px solid orange"} : {border: "1px solid #DEE2E6"}}
                        onClick={ handleOptionChange }
                      >
                        { item.productOption.name }<br/>
                        ${ item.productOption.price }
                      </li>                              
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  const { productAccessories } = state.ProductState
  return { productAccessories }
}

export default connect(
  mapStateToProps,
  {
    selectedProductAccessories
  }
)(Accessories)