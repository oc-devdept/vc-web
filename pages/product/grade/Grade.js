import React, { Component } from "react"
// import { connect } from "react-redux"

// import { selectedProductGrade, getProductGradeData } from "Ducks/product/ProductActions"

class Grade extends Component {
  constructor(props) {
    super(props)

    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const { id } = event.target
    this.props.selectedProductGrade(id)
    this.props.getProductGradeData(id)
  }

  isValidated() {
    return !!this.props.productGrade.id
  }

  render() {
    const { fields } = this.props.productGrade.data
    // console.log("grade props= ", this.props)
    return(
      <div className="configure-sect row">
        <div className="configure-gall col-9">
        <h2 className="text-uppercase text-center">{ this.props.productGrade.name }</h2>
          { this.props.productGrade.description }
        </div>
        <div className="configure-opt col-3">
          <h3 className="configure-opt-title">01 Grade</h3>
          <ul className="list-unstyled">
            {!!fields &&
              fields.map(( item, id ) => (
                <li className="configure-list"
                  key={ id }
                  id= { item.id }
                  style={item.id == this.props.productGrade.id ? 
                    {border: "2px solid #F29D30", color: "#F29D30"} : 
                    {border: "1px solid #DEE2E6"}
                  }
                  onClick={ this.handleOptionChange }
                >
                  {item.name}<br/>
                  ${item.selling_Price}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   const { productGrade } = state.ProductState
//   return { productGrade }
// }

// export default connect(
//   mapStateToProps,
//   {
//     selectedProductGrade,
//     getProductGradeData
//   }
// )(Grade)

export default Grade