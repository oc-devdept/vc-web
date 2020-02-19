import React from "react";
import { formatPrice } from "Components/Helpers/helpers";

const AccessoriesCartItem = props => {
  // const formatPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <div className="d-flex flex-row align-items-center mb-2">
      <div className="col-1 p-0 mr-1">
        <p style={{ fontWeight: 600, textAlign: "center" }}>{props.number}</p>
      </div>
      <div className="col-2 p-0 mr-1 d-flex align-items-center justify-content-center">
        <div style={{ marginTop: "100%" }} />
        <img
          src={props.image}
          alt={props.name}
          style={{
            position: "absolute",
            objectFit: "cover",
            width: "90%",
            height: "90%",
            borderRadius: 3
          }}
        />
      </div>
      <div className="col-5 p-0 mr-1 text-uppercase">
        <p style={{ fontWeight: 600, lineHeight: 1 }} className="mb-1">
          {props.title}
        </p>
        <p style={{ lineHeight: 1 }}>{props.name}</p>
      </div>
      <div className="col-4 p-0 mr-1">
        {props.price > 0 && (
          <p style={{ color: "#4B6674" }}>{formatPrice(props.price)}</p>
        )}
        {props.price === 0 && <p style={{ color: "#4B6674" }}>$0.00</p>}
      </div>
    </div>
  );
};

export default AccessoriesCartItem;
