import React, { Component } from "react";
// import { connect } from "react-redux";

// import { selectedProductInterior } from "Ducks/product/ProductActions";

class Interior extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductInterior(id)
  }

  isValidated() {
    return !!this.props.productInterior.id
  }

  render() {
    const { objects } = this.props.productInterior.data.fields["Seating Fabrics"]
    console.log("interior props: ", this.props)
    return (
      <div className="configure-sect row">
        <div className="configure-gall col-9">
          
        </div>
        <div className="configure-opt col-3">
          <h2 className="configure-opt-title">03 Interior</h2>
          <ul className="p-0 list-unstyled">
            {!!objects &&
              objects.map((item, id) => (
                <li
                  className="configure-list"
                  key={id}
                  id={item.id}
                  style={
                    item.id == this.props.productInterior.id
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
//   const { productInterior } = state.ProductState;
//   return { productInterior };
// };

// export default connect(mapStateToProps, {
//   selectedProductInterior
// })(Interior);

export default Interior