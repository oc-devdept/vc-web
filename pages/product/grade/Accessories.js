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

    const subtotal = parseFloat(productGrade.price) + parseFloat(productExterior.price) 
    + parseFloat(productInterior.price) + parseFloat(productRims.price)
    const misc = 0
    const gst = (subtotal + misc) * 0.07
    const total = subtotal + misc + gst
    const formatPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const subtotalData = [
      {
        name: "SUBTOTAL",
        amount: subtotal.toFixed(2)
      },
      {
        name: "MISC. FEES",
        amount: misc.toFixed(2)
      },
      {
        name: "GST",
        amount: gst.toFixed(2)
      }
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
          <Card className="rounded-0">
            <Card.Header className="py-1 px-3" style={{backgroundColor:"#4B6674"}}>
              <p style={{fontWeight:600, color:"#ffffff"}}>TOTAL (SGD)</p>
            </Card.Header>
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
              <ListGroup.Item className="configure-summary-subtotal p-2">
                { subtotalData.map(( item, key ) => (
                  <div key={ key } className="d-flex flex-row align-items-center">
                    <div className="col-1 p-0 mr-1"></div>
                    <div className="col-2 p-0 mr-1"></div>
                    <div className="col-5 pr-3 mr-1 text-right">
                      <p style={{fontWeight:600, color:"#4B6674"}}>{item.name}</p>
                    </div>
                    <div className="col-4 p-0 mr-1">
                      <p>${formatPrice(item.amount)}</p>
                    </div>
                  </div>
                ))}
              </ListGroup.Item>
              <ListGroup.Item className="configure-summary-total p-2">
                <div className="d-flex flex-row align-items-center">
                  <div className="col-1 p-0 mr-1"></div>
                  <div className="col-2 p-0 mr-1"></div>
                  <div className="col-5 pr-3 mr-1 text-right">
                    <p style={{fontWeight:700, color:"#4B6674"}}>TOTAL</p>
                  </div>
                  <div className="col-4 p-0 mr-1">
                    <p>${formatPrice(total)}</p>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
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