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
        <div className="configure-gall col-8">
          <img src="/static/rims-placeholder.png" class="configCoverImg" />
          <h3 class="text-uppercase text-center m-2">{ this.props.productRims.name }</h3>
        </div>
        <div className="configure-opt col-4">
          <h3 className="configure-opt-title">04 Rims</h3>
          <ul className="p-0 list-unstyled">
            {!!objects &&
              objects.map((item, id) => (
                <li
                  className="configure-list d-inline-block"
                  key={ id }
                  id={ item.id }
                  onClick={ this.handleOptionChange }
                  style={{width:120}}
                >
                  <img 
                    src={ item.files[0].url } 
                    alt={ item.name } 
                    id={ item.id }
                    height="100"
                    width="100"
                    style={ item.id == this.props.productRims.id ? 
                      {border: "2px solid #F29D30", color: "#F29D30", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontWeight:"bold"} : 
                      { }
                    }
                  /><br/>
                  <span id={ item.id } style={{textTransform:"uppercase", fontWeight:500}}>{ item.name }</span><br/>
                  <span id={ item.id } style={{color:"#4B6674"}}>${ item.price }</span>
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