import React, { useEffect, useRef } from 'react'

import AccessoriesCartItem from 'Components/configurator/AccessoriesCartItem'

import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"

const SummaryTable = props => {
  const { 
    ProductModel,
    ProductGrade,
    ProductExterior,
    ProductInterior,
    ProductRims,
    ProductAccessories    
  } = props.productState

  const data = [
    {
      number: "01",
      image: ProductModel.image,
      title: "CAR MAKE & MODEL",
      name: ProductModel.name,
    },
    {
      number: "02",
      image: ProductGrade.images[0],
      title: "GRADE",
      name: ProductGrade.name,
      price: parseFloat(ProductGrade.price).toFixed(2)
    },
    {
      number: "03",
      image: ProductExterior.images[0],
      title: "EXTERIOR",
      name: ProductExterior.name,
      price: parseFloat(ProductExterior.price).toFixed(2)
    },
    {
      number: "04",
      image: ProductInterior.images[0],
      title: "INTERIOR",
      name: ProductInterior.name,
      price: parseFloat(ProductInterior.price).toFixed(2)
    },
    {
      number: "05",
      image: ProductRims.images[0],
      title: "RIMS",
      name: ProductRims.name,
      price: parseFloat(ProductRims.price).toFixed(2)
    }
  ]

  let subtotal = 0
  data.map(item => {
    if (!!item.price) {
      subtotal += parseFloat(item.price)
    }
  })
  if (props.page === "summary") {
    ProductAccessories.selectedAccessories.map(item => {
      subtotal += parseFloat(item.price)
    })
  }

  const misc = 0
  const gst = (subtotal + misc) * 0.07
  const total = subtotal + misc + gst
  const allFees = useRef({
    subtotal: subtotal,
    misc: misc,
    gst: gst,
    total: total,
  })

  useEffect(() => {
    if (!!props.updateProductTotal) {
      props.updateProductTotal(allFees)
    }
  }, [allFees])

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
    <>
      <Card className={`rounded-0 ${props.page === "summary" && "border-0"}`}>
        {props.page === "accessories" ?
          <Card.Header className="py-1 px-3 rounded-0" style={{backgroundColor:"#4B6674"}}>
            <p style={{fontWeight:600, color:"#ffffff"}}>TOTAL (SGD)</p>
          </Card.Header> :
          <Card.Header className="py-3 px-0 rounded-0 d-flex" style={{backgroundColor:"transparent"}}>
            <p style={{fontWeight:600, color:"#4b6674", margin:0, display:"inline-block"}}>ORDER SUMMARY OF YOUR CUSTOMISED CAR</p>
            { props.page === "summary" &&
              <p style={{display:"inline-block", marginLeft:"auto"}}>
                <a href={window.location.pathname} style={{border:"1px solid", padding:"0 0.5rem"}}>EDIT</a>
              </p>
            }
          </Card.Header>
        }
        <ListGroup variant="flush">
          <ListGroup.Item className="configure-summary-options p-2">
            { data.map(( item, key ) => (
              <AccessoriesCartItem
                key={ key }
                page={ props.page }
                number={ item.number }
                image={ item.image }
                title={ item.title }
                name={ item.name }
                price={ item.price }
              />
            ))}
            { props.page === "summary" &&
              ProductAccessories.selectedAccessories.map(( item, key ) => (
                <AccessoriesCartItem
                  key={ key }
                  page={ props.page }
                  number={ key + 6 < 10 ? `0${key + 6}` : `${key + 6}`}
                  image={ item.image }
                  title="ACCESSORY"
                  name={ item.name }
                  price={ parseFloat(item.price).toFixed(2) }
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
                <p style={{fontWeight:700, color:"#4B6674"}}>
                  { props.page === "accessories"
                    ? "TOTAL"
                    : "TOTAL CAR PRICE (SGD)"
                  }
                </p>
              </div>
              <div className="col-4 p-0 mr-1">
                <p>${formatPrice(total.toFixed(2))}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  )
}

export default SummaryTable