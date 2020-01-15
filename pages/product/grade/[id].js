import React, { Component } from "react"
import { connect } from "react-redux"

import Default from "Components/Layout/PageTemplates/Default"
import StepZilla from "react-stepzilla"
import Grade from "./Grade"
import Exterior from "./Exterior"
import Interior from "./Interior"
import Rims from "./Rims"
import Accessories from "./Accessories"

import { getProductGrades } from "../../../redux/ducks/product/ProductActions.js"

class Product extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.getProductGrades(this.props.selectedModelId)
  }
  
  render(){
    console.log("props= ", this.props)
    const { ProductState } = this.props
    const steps = [
      {name: "Grade", component:<Grade productGrade={ProductState.productGrade} />},
      {name: "Exterior", component: <Exterior productExterior={ProductState.productExterior} />},
      {name: "Interior", component: <Interior productInterior={ProductState.productInterior} /> },
      {name: "Rims", component: <Rims productRims={ProductState.productRims} /> },
      {name: "Accessories", component: <Accessories productAccessories={ProductState.productAccessories} /> }
    ]
    
    return (
      <Default>
        <section className="contact-area pb-60">
          <div className="container">
            <div className="section-title">
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

// This can be removed after wiring model page to redux store
Product.getInitialProps = async function({ctx}) {
  const { id } = ctx.query
  return { selectedModelId: id }
}

const mapStateToProps = state => {
  const { ProductState } = state
  return { ProductState }
}

export default connect(
  mapStateToProps,
  {
    getProductGrades,
  }
)(Product)