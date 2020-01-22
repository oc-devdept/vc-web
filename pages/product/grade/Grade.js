import React from "react"
import { connect } from "react-redux"

import { selectedProductGrade, getProductGradeData } from "Ducks/product/ProductActions"

const Grade = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductGrade(id)
    props.getProductGradeData(id)
  }

  const { fields } = props.productGrade.data
  return(
    <div className="configure-sect row">
      <div className="configure-gall col-9">
        { props.productGrade.description }
      </div>
    <div className="configure-opt col-3">
      <h2 className="configure-opt-title">01 Grade</h2>
      <ul className="list-unstyled">
        {!!fields &&
          fields.map(( item, id ) => (
            <li className="configure-list"
              key={ id }
              id= { item.id }
              style={item.id == props.productGrade.id ? 
                {border: "2px solid #F29D30", color: "#F29D30"} : 
                {border: "1px solid #DEE2E6"}
              }
              onClick={ handleOptionChange }
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

const mapStateToProps = state => {
  const { productGrade } = state.ProductState
  return { productGrade }
}

export default connect(
  mapStateToProps,
  {
    selectedProductGrade,
    getProductGradeData
  }
)(Grade)