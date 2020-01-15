import React from "react"
import { connect } from "react-redux"

import { selectedProductGrade, getProductGradeData } from "../../../redux/ducks/product/ProductActions.js"

const Grade = props => {
  
  const handleOptionChange = event => {
    const { id } = event.target
    props.selectedProductGrade(id)
    props.getProductGradeData(id)
  }

  const { fields } = props.productGrade.data
  return(
    <div>
      <p>01 Grade</p>
      <ul className="p-0 list-unstyled">
        {!!fields &&
          fields.map(( item, id ) => (
            <li
              key={ id }
              id= { item.id }
              style={ item.id == props.productGrade.id ? 
                {border: "2px solid orange"} : 
                {border: "1px solid #DEE2E6"}
              }
              onClick={ handleOptionChange }
            >
              {item.name}<br/>
              {item.selling_Price}
            </li>
          ))
        }
      </ul>
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