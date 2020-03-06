import React from "react";
import Button from "react-bootstrap/Button";

const SearchItem = props => {
  return (
    <div className="search-item pb-3 mb-3 border-bottom">
      <div className="row">
        <div className="col-5 col-lg-4 search-item-image d-flex align-items-center justify-content-center">
          <img src={props.image} alt={props.name} width="400" />
        </div>
        <div className="col-7 col-lg-5 search-item-details d-flex flex-column justify-content-center">
          <div className="search-item-category mb-2">
            <div className="border p-1 d-inline-block">category</div>
          </div>
          <div className="search-item-name mb-2">
            <h4>{props.name}</h4>
          </div>
          <div className="search-item-properties mb-2 d-flex">
            <div className="search-item-person d-flex mr-3">
              <img src="/Static/rent/icon-person.png" className="mr-1" />
              <p>{props.person}</p>
            </div>
            <div className="search-item-luggage d-flex mr-3">
              <img src="/Static/rent/icon-luggage.png" className="mr-1" />
              <p>{props.luggage}</p>
            </div>
            <div className="search-item-door d-flex mr-3">
              <img src="/Static/rent/icon-car-door.png" className="mr-1" />
              <p>{props.doors}</p>
            </div>
            <div className="search-item-transmission d-flex mr-3">
              <img src="/Static/rent/icon-gearbox.png" className="mr-1" />
              <p>{props.transmission}</p>
            </div>
          </div>
          <div className="search-item-points">
            <span style={{ lineHeight: 1.8 }}>
              <i className="fas fa-check" /> Fuel Policy: Same-to-same
              <br />
              <i className="fas fa-check" /> Mileage Included: Unlimited
            </span>
          </div>
        </div>
        <div className="col-lg-3 search-item-pricing">
          <div className="search-item-pricing-text">
            <span
              className="search-item-price-text"
              style={{ fontSize: 18, fontWeight: 600, color: "#4b6674" }}
            >
              Total price:
            </span>
            <div className="search-item-prices">
              <span
                className="search-item-price"
                style={{ color: "#4b6674", fontSize: 24, fontWeight: 600 }}
              >
                ${props.price}
              </span>
              <span
                className="search-item-old-price"
                style={{ textDecoration: "line-through", color: "red" }}
              >
                ${props.oldPrice}
              </span>
            </div>
          </div>
          <div className="search-item-pricing-button">
            <Button href="/search-extras">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
