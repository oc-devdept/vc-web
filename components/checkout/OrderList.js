import React from "react";
import { useSelector } from "react-redux";

export default function OrderList(props) {
  return (
    <>
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
            {data.map((item, key) => (
              <AccessoriesCartItem
                key={key}
                page={props.page}
                number={item.number}
                image={item.image}
                title={item.title}
                name={item.name}
                price={item.price}
              />
            ))}
            {props.page === "summary" &&
              ProductAccessories.selectedAccessories.map((item, key) => (
                <AccessoriesCartItem
                  key={key}
                  page={props.page}
                  number={key + 6 < 10 ? `0${key + 6}` : `${key + 6}`}
                  image={item.image}
                  title="ACCESSORY"
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
                  {props.page === "accessories"
                    ? "TOTAL"
                    : "TOTAL CAR PRICE (SGD)"}
                </p>
              </div>
              <div className="col-4 p-0 mr-1">
                <p>{formatPrice(total)}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
