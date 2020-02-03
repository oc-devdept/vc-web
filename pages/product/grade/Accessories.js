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
    this.state = { }

    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleClick = this.handleMainAccordionClick.bind(this)
  }

  componentDidMount() {
    let list = { mainAccordionActiveKey: "0" }
    Object.keys(this.props.ProductState.productAccessories.data.fields).map((item, id) => {
      list[id] = "0"
    })
    this.setState(list)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductAccessories(id)
  }

  handleMainAccordionClick(id) {
    this.setState({
      mainAccordionActiveKey: `${id}`,
      // secondaryAccordionActiveKey: "0"
    })
  }

  handleSecondaryAccordionClick(id, idd) {
    this.setState({
      ...this.state,
      [id]: `${idd}`
    })
  }

  render() {
    // console.log("state= ", this.state)
    console.log("Accessories props: ", this.props)
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
        price: parseFloat(productGrade.price).toFixed(2)
      },
      {
        number: "03",
        image: productExterior.images[0],
        title: "EXTERIOR",
        name: productExterior.name,
        price: parseFloat(productExterior.price).toFixed(2)
      },
      {
        number: "04",
        image: productInterior.images[0],
        title: "INTERIOR",
        name: productInterior.name,
        price: parseFloat(productInterior.price).toFixed(2)
      },
      {
        number: "05",
        image: productRims.images[0],
        title: "RIMS",
        name: productRims.name,
        price: parseFloat(productRims.price).toFixed(2)
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
          <Accordion activeKey={ this.state.mainAccordionActiveKey }>
            {!!productAccessories.data.fields &&        
              Object.entries(productAccessories.data.fields).map(([key, value], id) => (
                <Card className="product-option-group" key={ id } className="rounded-0 mb-2 border">
                  <Accordion.Toggle 
                    as={ Card.Header } 
                    eventKey={`${id}`} 
                    className="py-1 px-3 rounded-0" 
                    style={{backgroundColor:"#7da9bf", borderColor:"#7da9bf"}}
                    onClick={ () => this.handleMainAccordionClick(id) }
                  >
                    <div className="row d-flex flex-row align-items-center">
                      <p className="col-1 m-0" style={{fontWeight: 600, color:"#ffffff"}}>
                        0{ id + 1 }
                      </p>
                      <p className="col-10 m-0 text-center text-uppercase" style={{fontWeight: 600, color:"#ffffff"}}>
                        { key }
                      </p>
                      <p className="col-1 m-0" style={{fontWeight: 600, color:"#ffffff"}}>
                        { this.state.mainAccordionActiveKey === `${id}` ?
                          <i className="fas fa-minus" /> :
                          <i className="fas fa-plus" />
                        }
                      </p>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${id}`}>
                    <Card.Body className="p-0">
                      <Accordion activeKey={ this.state[id] }>
                        { value.map(( item, idd ) => (
                          <Card key={ idd } className=" rounded-0">
                            <Accordion.Toggle 
                              as={ Card.Header } 
                              eventKey={`${idd}`} 
                              className="py-2 px-3"
                              style={{backgroundColor:"transparent"}}
                              onClick={ () => this.handleSecondaryAccordionClick(id, idd) }
                            >
                              <div className="row d-flex flex-row align-items-center">
                                <div className="col-1">
                                  <Form.Check custom id={ item.id } label="" onChange={ this.handleOptionChange } />
                                </div>
                                <div className="col-8 p-0">
                                  <p style={{color:"#4B6674", textTransform:"uppercase"}}>{ item.productOption.name }</p>
                                </div>
                                <div className="col-2">
                                  <p style={{fontWeight:600, color:"#4B6674"}}>${ formatPrice(item.productOption.price.toFixed(2)) }</p>
                                </div>
                                <div className="col-1">
                                  { this.state[id] === `${idd}` ?
                                    <i className="fas fa-chevron-up" style={{color:"#4B6674"}} /> :
                                    <i className="fas fa-chevron-down" style={{color:"#4B6674"}} /> 
                                  }
                                </div>
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={`${idd}`}>
                              <div className="row my-3">
                                <div className="col-3">
                                  <div className="d-flex justify-content-center align-items-start ml-4">
                                    <div style={{marginTop:"75%"}} />
                                    <img 
                                      src={ item.productOption.files[0].path } 
                                      alt={ item.productOption.name } 
                                      style={{width:"100%", maxWidth:200, borderRadius:3,}} 
                                    />
                                  </div>
                                </div>
                                <div className="col-9">
                                  <div className="mr-4">
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p className="text-justify">
                                      Maecenas tristique justo odio, gravida vehicula tellus condimentum quis. 
                                      Integer rhoncus tortor et arcu auctor fermentum. 
                                      Suspendisse feugiat molestie pellentesque. Donec sed eleifend libero. 
                                      Duis egestas porttitor dui sed fringilla. 
                                      Duis massa turpis, semper nec sollicitudin a, commodo eu tortor. 
                                      Ut quis nunc ipsum.
                                    </p>
                                  </div>
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
                    <p>${formatPrice(total.toFixed(2))}</p>
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