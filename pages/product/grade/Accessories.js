import React from "react"
import { connect } from "react-redux"

import { selectedProductAccessories } from "Ducks/product/ProductActions"

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Accessories = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductAccessories(id)
  }

  console.log("Accessories props: ", props)
  const { fields } = props.ProductState.productAccessories.data
  return(
    <div className="configure-opt">
      <h2 className="configure-opt-title">05 Accessories</h2>
      <ul className="p-0 list-unstyled">
        {!!fields &&        
          Object.entries(fields).map(([key, value], id) => (
            <div className="product-option-group" key={ id }>
              <p><strong>Product Option Group: { key }</strong></p>
              <ul className="p-0">
                { value.map(( item, id ) => (
                  <li
                    key={ id }
                    id={ item.id }
                    className="product-option list-unstyled configure-list" 
                    style={ !!props.ProductState.productAccessories.selectedIds[item.id] ? 
                      {border: "2px solid orange", color: "#F29D30"} : {border: "1px solid #DEE2E6"}
                    }
                    onClick={ handleOptionChange }
                  >
                    { item.productOption.name }<br/>
                    ${ item.productOption.price }
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </ul>
      <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" className="configure-total-header">
          Total (SGD)
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="p-0 list-unstyled configure-total">
              <dl>
                <dt>{`01 Car Make & Model`}</dt>
                <dd>{props.ProductState.productModel.name}</dd>
              </dl>
              <dl>
                <dt>02 Grade</dt>
                <dt>${props.ProductState.productGrade.price}</dt>
                <dd>{props.ProductState.productGrade.name}</dd>
              </dl>
              <dl>
                <dt>03 Exterior</dt>
                <dt>${props.ProductState.productExterior.price}</dt>
                <dd>{props.ProductState.productExterior.name}</dd>
              </dl>
              <dl>
                <dt>04 Interior</dt>
                <dt>${props.ProductState.productInterior.price}</dt>
                <dd>{props.ProductState.productInterior.name}</dd>
              </dl>
              <dl>
                <dt>05 Rims</dt>
                <dt>${props.ProductState.productRims.price}</dt>
                <dd>{props.ProductState.productRims.name}</dd>
              </dl>
            </div>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
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