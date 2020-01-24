import React, { Component } from "react"
// import { connect } from "react-redux"

// import { selectedProductAccessories } from "Ducks/product/ProductActions"

import AccessoriesCartItem from 'Components/Layout/AccessoriesCartItem'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"

class Accessories extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductAccessories(id)
  }

  render() {
    // console.log("Accessories props: ", this.props)
    const { 
      productModel,
      productGrade,
      productExterior,
      productInterior,
      productRims,
      productAccessories,
    } = this.props.ProductState

    const data = [
      {
        number: "01",
        image: productModel.image,
        title: "CAR MAKE & MODEL",
        name: productModel.name,
      },
      {
        number: "02",
        image: productGrade.images[0],
        title: "GRADE",
        name: productGrade.name,
        price: productGrade.price
      },
      {
        number: "03",
        image: productExterior.images[0],
        title: "EXTERIOR",
        name: productExterior.name,
        price: productExterior.price
      },
      {
        number: "04",
        image: productInterior.images[0],
        title: "INTERIOR",
        name: productInterior.name,
        price: productInterior.price
      },
      {
        number: "05",
        image: productRims.images[0],
        title: "RIMS",
        name: productRims.name,
        price: productRims.price
      },
    ]

    return(
      <div className="configure-sect row">
        <div className="configure-gall col-8">
          <p>Expand the options below to add acessories to your vehicle</p>
          <ul className="p-0 list-unstyled">
            {!!productAccessories.data.fields &&        
              Object.entries(productAccessories.data.fields).map(([key, value], id) => (
                <div className="product-option-group" key={ id }>
                  <p><strong>Product Option Group: { key }</strong></p>
                  <ul className="p-0">
                    { value.map(( item, id ) => (
                      <li
                        key={ id }
                        id={ item.id }
                        className="product-option list-unstyled configure-list" 
                        style={ !!productAccessories.selectedIds[item.id] ? 
                          {border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : {border: "1px solid #DEE2E6"}
                        }
                        onClick={ this.handleOptionChange }
                      >
                        { item.productOption.name }<br/>
                        ${ item.productOption.price }<br/>
                        <img src={ item.productOption.files[0].url } alt={ item.productOption.name } />
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </ul>
        </div>
        <div className="configure-summary col-4">
          <Card>
            <Card.Header>Total (SGD)</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="configure-summary-options p-2">
                { data.map(( item, key ) => (
                  <AccessoriesCartItem
                    key={ key }
                    number={ item.number }
                    image={ item.image }
                    title={ item.title }
                    name={ item.name }
                    price={ item.price }
                  />
                ))}
              </ListGroup.Item>
              <ListGroup.Item className="configure-summary-subtotal">
                <p>Subtotal</p>
                <p>Misc. Fees</p>
                <p>GST</p>
              </ListGroup.Item>
              <ListGroup.Item className="configure-summary-total">
              <p>Total</p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/* <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="configure-total-header">
                Total (SGD)
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="p-0 list-unstyled configure-total">
                    <dl>
                      <dt>{`01 Car Make & Model`}</dt>
                      <dd>{this.props.ProductState.productModel.name}</dd>
                    </dl>
                    <dl>
                      <dt>02 Grade</dt>
                      <dt>${this.props.ProductState.productGrade.price}</dt>
                      <dd>{this.props.ProductState.productGrade.name}</dd>
                    </dl>
                    <dl>
                      <dt>03 Exterior</dt>
                      <dt>${this.props.ProductState.productExterior.price}</dt>
                      <dd>{this.props.ProductState.productExterior.name}</dd>
                    </dl>
                    <dl>
                      <dt>04 Interior</dt>
                      <dt>${this.props.ProductState.productInterior.price}</dt>
                      <dd>{this.props.ProductState.productInterior.name}</dd>
                    </dl>
                    <dl>
                      <dt>05 Rims</dt>
                      <dt>${this.props.ProductState.productRims.price}</dt>
                      <dd>{this.props.ProductState.productRims.name}</dd>
                    </dl>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion> */}
        </div> 
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { ProductState } = state
//   return { ProductState }
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectedProductAccessories
//   }
// )(Accessories)

export default Accessories