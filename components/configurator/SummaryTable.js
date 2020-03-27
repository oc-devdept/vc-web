import React, { useEffect, useRef } from "react";

import { formatPrice } from "Components/Helpers/helpers";
import AccessoriesCartItem from "Components/configurator/AccessoriesCartItem";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const SummaryTable = props => {
  let data = {};

  const dataStructuring = ProductState => {
    const {
      ProductModel,
      ProductGrade,
      ProductExterior,
      ProductInterior,
      ProductAccessories
    } = ProductState;

    let renderData = [];
    let counter = 1;
    let subtotal = 0;
    renderData.push({
      number: counter,
      image: ProductModel.image,
      title: "CAR MAKE & MODEL",
      name: ProductModel.name
    });
    counter++;
    renderData.push({
      number: counter,
      image: ProductGrade.images[0],
      title: "GRADE",
      name: ProductGrade.name,
      price: ProductGrade.price
    });
    subtotal += ProductGrade.price;
    counter++;

    Object.entries(ProductExterior.selected).map(([key, value]) => {
      renderData.push({
        number: counter,
        image: value.thumbnail,
        title: key,
        name: value.name,
        price: value.price
      });
      subtotal += value.price;
      counter++;
    });
    Object.entries(ProductInterior.selected).map(([key, value]) => {
      renderData.push({
        number: counter,
        image: value.thumbnail,
        title: key,
        name: value.name,
        price: value.price
      });
      subtotal += value.price;
      counter++;
    });
    if (props.page === "summary") {
      ProductAccessories.selectedAccessories.forEach(element => {
        renderData.push({
          number: counter,
          image: element.image,
          title: "ACCESSORY",
          name: element.name,
          price: element.price
        });
        subtotal += element.price;
        counter++;
      });
    }

    return { renderData: renderData, subtotal: subtotal };
  };

  Object.assign(data, dataStructuring(props.ProductState));

  const misc = 0;
  const gst = (data.subtotal + misc) * 0.07;
  const total = data.subtotal + misc + gst;
  const allFees = useRef({
    subtotal: data.subtotal,
    misc: misc,
    gst: gst,
    total: total
  });

  // Update product total
  useEffect(() => {
    if (!!props.updateProductTotal) {
      props.updateProductTotal(allFees);
    }
  }, [allFees]);

  const subtotalData = [
    {
      name: "SUBTOTAL",
      amount: data.subtotal
    },
    {
      name: "MISC. FEES",
      amount: misc
    },
    {
      name: "GST",
      amount: gst
    }
  ];

  // Transform selected options into CheckoutState after product total update
  useEffect(() => {
    if (!!props.getCheckoutData) {
      props.getCheckoutData(props.ProductState);
    }
  }, [props.ProductState.ProductTotal]);

  return (
    <React.Fragment>
      <Card className={`rounded-0 ${props.page === "summary" && "border-0"}`}>
        {props.page === "accessories" ? (
          <Card.Header
            className="py-1 px-3 rounded-0"
            style={{ backgroundColor: "#4B6674" }}
          >
            <p style={{ fontWeight: 600, color: "#ffffff" }}>TOTAL (SGD)</p>
          </Card.Header>
        ) : (
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
            {props.page === "summary" && (
              <p style={{ display: "inline-block", marginLeft: "auto" }}>
                <a
                  href={window.location.pathname}
                  style={{ border: "1px solid", padding: "0 0.5rem" }}
                >
                  EDIT
                </a>
              </p>
            )}
          </Card.Header>
        )}
        <ListGroup variant="flush">
          <ListGroup.Item className="configure-summary-options p-2">
            {data.renderData.map((item, key) => (
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
            {subtotalData.map((item, key) => (
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
                <p style={{ fontWeight: 700, color: "#4B6674" }}>
                  TOTAL CAR PRICE
                </p>
              </div>
              <div className="col-4 p-0 mr-1">
                <p>{formatPrice(total)}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </React.Fragment>
  );
};

export default SummaryTable;
