import React, { Component } from "react"
// import { connect } from "react-redux"

// import { selectedProductAccessories } from "Ducks/product/ProductActions"

import AccessoriesCartItem from 'Components/Layout/AccessoriesCartItem'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Form from "react-bootstrap/Form"

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
          <Accordion defaultActiveKey="0">
            {!!productAccessories.data.fields &&        
              Object.entries(productAccessories.data.fields).map(([key, value], id) => (
                <Card className="product-option-group" key={ id } className="rounded-0 mb-2 border">
                  <Accordion.Toggle 
                    as={ Card.Header } 
                    eventKey={`${id}`} 
                    className="py-1 px-3 rounded-0" 
                    style={{backgroundColor:"#7da9bf", borderColor:"#7da9bf"}}
                  >
                    <div className="row d-flex flex-row align-items-center">
                      <p className="col-1 m-0" style={{fontWeight: 600, color:"#ffffff"}}>0{ id + 1 }</p>
                      <p className="col-10 m-0 text-center text-uppercase" style={{fontWeight: 600, color:"#ffffff"}}>{ key }</p>
                      <p className="col-1 m-0" style={{fontWeight: 600, color:"#ffffff"}}>+</p>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${id}`}>
                    <Card.Body className="p-0">
                      <Accordion defaultActiveKey="0">
                        { value.map(( item, id ) => (
                          <Card key={ id } className=" rounded-0">
                            <Accordion.Toggle 
                              as={ Card.Header } 
                              eventKey={`${id}`} 
                              className="product-option py-2 px-3"
                            >
                              <div className="row d-flex flex-row align-items-center">
                                <div className="col-1">
                                  <Form.Check custom id={ item.id } label="" />
                                </div>
                                <div className="col-8 p-0">
                                  <p style={{color:"#4B6674", textTransform:"uppercase"}}>{ item.productOption.name }</p>
                                </div>
                                <div className="col-2">
                                  <p style={{fontWeight:600, color:"#4B6674"}}>${ formatPrice(item.productOption.price.toFixed(2)) }</p>
                                </div>
                                <div className="col-1">
                                  <i className="fas fa-chevron-down" style={{color:"#4B6674"}} />
                                </div>
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${id}`}>
                              <div className="row">
                                <div className="col-3">
                                  <div className="d-flex justify-content-center align-items-center">
                                    <div style={{marginTop:"75%"}} />
                                    <img 
                                      src={ item.productOption.files[0].url } 
                                      alt={ item.productOption.name } 
                                      style={{position:"absolute", objectFit:"cover", width:"80%", borderRadius:3, marginLeft:"1rem"}} 
                                    />
                                  </div>
                                </div>
                                <div className="col-9">
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                  <p>lorem ipsum</p>
                                </div>
                              </div>
                            </Accordion.Collapse>
                          </Card>
                        ))}
                      </Accordion>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))
            }
          </Accordion>
        </div>
        <div className="configure-summary col-4">
          <Card className="rounded-0">
            <Card.Header className="py-1 px-3 rounded-0" style={{backgroundColor:"#4B6674"}}>
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