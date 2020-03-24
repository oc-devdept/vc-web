import React from "react";
import { useSelector } from "react-redux";

import { formatPrice } from "Components/Helpers/helpers";
import AccessoriesCartItem from "Components/configurator/AccessoriesCartItem";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function OrderList({ checkoutState }) {
  const dataStructuring = checkoutState => {
    const {
      ProductModel,
      ProductGrade,
      productVariance,
      productAccessories
    } = checkoutState;
    let data = [];
    let counter = 1;
    data.push({
      number: counter,
      image: ProductModel.image,
      title: "CAR MAKE & MODEL",
      name: ProductModel.name
    });
    counter++;
    data.push({
      number: counter,
      image: ProductGrade.images[0],
      title: "GRADE",
      name: ProductGrade.name,
      price: ProductGrade.price
    });
    counter++;
    productVariance.forEach(element => {
      data.push({
        number: counter,
        image: element.thumbnail,
        title: "VARIANCE",
        name: element.name,
        price: element.price
      });
      counter++;
    });
    productAccessories.forEach(element => {
      data.push({
        number: counter,
        image: element.thumbnail,
        title: "ACCESSORY",
        name: element.name,
        price: element.price
      });
      counter++;
    });
    return data;
  };

  const costStructuring = checkoutState => {
    const { subtotal, misc, gst } = checkoutState;
    let data = [
      { name: "SUBTOTAL", amount: subtotal },
      { name: "MISC. FEES", amount: misc },
      { name: "GST", amount: gst }
    ];
    return data;
  };
  return (
    <React.Fragment>
      <Card className={`rounded-0 border-0`}>
        <Card.Header
          className="py-3 px-0 rounded-0 d-flex"
          style={{ backgroundColor: "transparent" }}
        >
          <p
            style={{
              fontWeight: 600,
              color: "#4b6674",
              margin: 0,
              display: "inline-block"
            }}
          >
            ORDER SUMMARY OF YOUR CUSTOMISED CAR
          </p>
        </Card.Header>

        <ListGroup variant="flush">
          <ListGroup.Item className="configure-summary-options p-2">
            {!!checkoutState.productGradeId &&
              dataStructuring(checkoutState).map((item, key) => (
                <AccessoriesCartItem
                  key={key}
                  number={item.number}
                  image={item.image}
                  title={item.title}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </ListGroup.Item>
          <ListGroup.Item className="configure-summary-subtotal p-2">
            {!!checkoutState.productGradeId &&
              costStructuring(checkoutState).map((item, key) => (
                <div key={key} className="d-flex flex-row align-items-center">
                  <div className="col-1 p-0 mr-1"></div>
                  <div className="col-2 p-0 mr-1"></div>
                  <div className="col-5 pr-3 mr-1 text-right">
                    <p style={{ fontWeight: 600, color: "#4B6674" }}>
                      {item.name}
                    </p>
                  </div>
                  <div className="col-4 p-0 mr-1">
                    <p>{formatPrice(item.amount)}</p>
                  </div>
                </div>
              ))}
          </ListGroup.Item>
          <ListGroup.Item className="configure-summary-total p-2">
            <div className="d-flex flex-row align-items-center">
              <div className="col-1 p-0 mr-1"></div>
              <div className="col-2 p-0 mr-1"></div>
              <div className="col-5 pr-3 mr-1 text-right">
                <p style={{ fontWeight: 700, color: "#4B6674" }}>TOTAL</p>
              </div>
              <div className="col-4 p-0 mr-1">
                <p>{formatPrice(checkoutState.total)}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </React.Fragment>
  );
}
