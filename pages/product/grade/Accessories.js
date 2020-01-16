import React from "react"
import { connect } from "react-redux"

import { selectedProductAccessories } from "Ducks/product/ProductActions"

const Accessories = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductAccessories(id)
  }

  console.log("Accessories props: ", props)
  const { fields } = props.ProductState.productAccessories.data
  return(
    <div>
      <p>05 Accessories</p>
      <ul className="p-0 list-unstyled">
        {!!fields &&        
          fields.map(( item, id ) => (
            <li className="product-option-group" key={ id }>
              { Object.entries(item).map(([key, value], id) => (
                <div key={ id }>
                  <p><strong>Product Option Group: { key }</strong></p>
                  <ul className="p-0">
                    { value.map(( item, id ) => (
                      <li 
                        key={ id }
                        id= { item.id }
                        className="product-option list-unstyled" 
                        style={ !!props.ProductState.productAccessories.selectedIds[item.id] ? 
                          {border: "2px solid orange"} : {border: "1px solid #DEE2E6"}
                        }
                        onClick={ handleOptionChange }
                      >
                        { item.productOption.name }<br/>
                        ${ item.productOption.price }
                      </li>                              
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))
        }
      </ul>
      <div>
        <p>Total (SGD)</p>
        <ol className="p-0 list-unstyled">
          <li>
            <strong>{`01 Car Make & Model`}</strong><br/>
            {props.ProductState.productModel.name}
          </li><br/>
          <li>
            <strong>02 Grade</strong><br/>
            {props.ProductState.productGrade.name}<br/>
            {props.ProductState.productGrade.price}
          </li><br/>
          <li>
            <strong>03 Exterior</strong><br/>
            {props.ProductState.productExterior.name}<br/>
            {props.ProductState.productExterior.price}
          </li><br/>
          <li>
            <strong>04 Interior</strong><br/>
            {props.ProductState.productInterior.name}<br/>
            {props.ProductState.productInterior.price}
          </li><br/>
          <li>
            <strong>05 Rims</strong><br/>
            {props.ProductState.productRims.name}<br/>
            {props.ProductState.productRims.price}
          </li><br/>
        </ol>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { ProductState } = state
  return { ProductState }
}

export default connect(
  mapStateToProps,
  {
    selectedProductAccessories
  }
)(Accessories)