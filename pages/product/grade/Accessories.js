import React, { Component } from "react"

import SummaryTable from "Components/configurator/SummaryTable"

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
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
    Object.keys(this.props.ProductState.ProductAccessories.data.fields).map((item, id) => {
      list[id] = "0"
    })
    this.setState(list)
  }

  handleOptionChange(event) {
    const { id, checked } = event.target
    this.props.selectedProductAccessories(id, checked)
  }

  handleMainAccordionClick(id) {
    this.setState({
      mainAccordionActiveKey: `${id}`,
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

    const { ProductAccessories } = this.props.ProductState

    const formatPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return(
      <div className="configure-sect row">
        <div className="configure-gall col-lg-8">
          <p>Expand the options below to add acessories to your vehicle</p>
          <Accordion activeKey={ this.state.mainAccordionActiveKey }>
            {!!ProductAccessories.data.fields &&        
              Object.entries(ProductAccessories.data.fields).map(([key, value], id) => (
                <Card className="product-option-group" key={ id } className="rounded-0 mb-2 border">
                  <Accordion.Toggle 
                    as={ Card.Header } 
                    eventKey={`${id}`} 
                    className="py-1 px-3 rounded-0" 
                    style={{backgroundColor:"#7da9bf", borderColor:"#7da9bf"}}
                    onClick={ () => this.handleMainAccordionClick(id) }
                  >
                    <div className="row d-flex flex-row align-items-center">
                      <p className="col-2 m-0" style={{fontWeight: 600, color:"#ffffff"}}>
                        0{ id + 1 }
                      </p>
                      <p className="col-9 m-0 text-center text-uppercase" style={{fontWeight: 600, color:"#ffffff"}}>
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
                          <Card key={ idd } className="rounded-0">
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
                                <div className="col-7 p-0">
                                  <p style={{color:"#4B6674", textTransform:"uppercase"}}>{ item.productOption.name }</p>
                                </div>
                                <div className="col-3">
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
        <div className="configure-summary col-lg-4">
          <SummaryTable
            page='accessories'
            productState='this.props.ProductState'
          />
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