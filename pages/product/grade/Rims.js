import React from "react";
import { connect } from "react-redux";

import { selectedProductRims } from "../../../redux/ducks/product/ProductActions.js";

const Rims = props => {
  const handleOptionChange = event => {
    const { id } = event.target;
    props.selectedProductRims(id);
  };

  const { objects } = props.productRims.data.fields.Rims;
  // console.log("rims props: ", props)
  return (
    <div className="configure-sect row">
      <div className="configure-gall col-9">tetstes</div>
      <div className="configure-opt col-3">
        <h2 className="configure-opt-title">04 Rims</h2>
        <ul className="p-0 list-unstyled">
          {!!objects &&
            objects.map((item, id) => (
              <li
                className="configure-list"
                key={id}
                id={item.id}
                style={
                  item.id == props.productRims.id
                    ? { border: "2px solid orange", color: "#F29D30" }
                    : { border: "1px solid #DEE2E6" }
                }
                onClick={handleOptionChange}
              >
                {item.name}
                <br />${item.price}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { productRims } = state.ProductState;
  return { productRims };
};

export default connect(mapStateToProps, {
  selectedProductRims
})(Rims);
