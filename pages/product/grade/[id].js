import React, { Component } from "react"
import { connect } from "react-redux"

import Default from "Components/Layout/PageTemplates/Default"
import StepZilla from "react-stepzilla"
import Grade from "./Grade"
import Exterior from "./Exterior"
import Interior from "./Interior"
import Rims from "./Rims"
import Accessories from "./Accessories"

import { getProductGrades, getProductModelData } from "Ducks/product/ProductActions"

class Product extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.getProductGrades(this.props.selectedModelId)
    this.props.getProductModelData(this.props.selectedModelId)
  }
  
  render(){
    console.log("props= ", this.props)
    const { ProductState } = this.props    
    const steps = [
      {name: "Grade", component:<Grade productGrade={ProductState.productGrade} />},
      {name: "Exterior", component: <Exterior productExterior={ProductState.productExterior} />},
      {name: "Interior", component: <Interior productInterior={ProductState.productInterior} /> },
      {name: "Rims", component: <Rims productRims={ProductState.productRims} /> },
      {name: "Accessories", component: <Accessories ProductState={ProductState} /> }
    ]
    
    return (
      <Default>
        <section className="configure-area pb-60">
          <div className="container">
            <div>
              {/* need to validate steps to prevent user from skipping steps */}
              <div className="step-process">
                <StepZilla steps={steps} />
              </div>
            </div>
          </div>
        </section>
      </Default>
    )
  }
}

Product.getInitialProps = async function({ctx}) {
  const { id, grade } = ctx.query
  return { selectedModelId: id, selectedGradeId: grade }
}

const mapStateToProps = state => {
  const { ProductState } = state
  return { ProductState }
}

export default connect(
  mapStateToProps,
  {
    getProductGrades,
    getProductModelData
  }
)(Product)