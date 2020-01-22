import React, { Component } from "react";
// import { connect } from "react-redux";

// import { selectedProductRims } from "Ducks/product/ProductActions";

class Rims extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductRims(id)
  }

  isValidated() {
    return !!this.props.productRims.id
  }

  render() {
    const { objects } = this.props.productRims.data.fields.Rims
    console.log("rims props: ", this.props)
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-9">
          
        </div>
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
                    item.id == this.props.productRims.id
                      ? { border: "2px solid orange", color: "#F29D30" }
                      : { border: "1px solid #DEE2E6" }
                  }
                  onClick={this.handleOptionChange}
                >
                  {item.name}
                  <br />${item.price}
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { productRims } = state.ProductState
//   return { productRims }
// }

// export default connect(mapStateToProps, {
//   selectedProductRims
// })(Rims)

export default Rims