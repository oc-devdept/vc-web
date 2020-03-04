import React from "react";
import Button from "react-bootstrap/Button";

const SearchItem = props => {
  return (
    <div className="container search-item">
      <div className="row">
        <div className="col-5 col-lg-4 search-item-image">
          <img src={props.image} alt={props.name} width="400" />
        </div>
        <div className="col-7 col-lg-5 search-item-details">
          <div className="search-item-category">
            <p>category</p>
          </div>
          <div className="search-item-name">
            <p>{props.name}</p>
          </div>
          <div className="search-item-properties">
            <div className="search-item-person">
              <img src="Images/icon-person.png" />
              <p>{props.person}</p>
            </div>
            <div className="search-item-luggage">
              <img src="Images/icon-luggage.png" />
              <p>{props.luggage}</p>
            </div>
            <div className="search-item-door">
              <img src="Images/icon-car-door.png" />
              <p>{props.doors}</p>
            </div>
            <div className="search-item-transmission">
              <img src="Images/icon-gearbox.png" />
              <p>{props.transmission}</p>
            </div>
          </div>
          <div className="search-item-points">
            <p>
              <i className="fas fa-check" /> Fuel Policy: Same-to-same
            </p>
            <p>
              <i className="fas fa-check" /> Mileage Included: Unlimited
            </p>
          </div>
        </div>
        <div className="col-lg-3 search-item-pricing">
          <div className="search-item-pricing-text">
            <p className="search-item-price-text">Total price:</p>
            <div className="search-item-prices">
              <p className="search-item-old-price">${props.oldPrice}</p>
              <p className="search-item-price">${props.price}</p>
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
