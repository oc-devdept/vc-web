import React, { Component } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import StepZilla from "react-stepzilla";
import Grade from "./Grade";
import Exterior from "./Exterior";
import Interior from "./Interior";
import Rims from "./Rims";
import Accessories from "./Accessories";
import Summary from "./Summary";
import ExteriorDynamic from "./ExteriorDynamic";

import {
  getProductGrades,
  getProductModelData,
  selectedProductGrade,
  getProductGradeData,
  selectedProductExterior,
  selectedProductInterior,
  selectedProductRims,
  selectedProductAccessories,
  updateProductTotal,
  updateLoanCalculator,
  printConfigurator,
  getInterestRate
} from "Ducks/product/ProductActions";

import { getCheckoutData } from "Ducks/checkout/CheckoutActions";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { showSteps: true };
    this.onStepChange = this.onStepChange.bind(this);
  }

  componentDidMount() {
    this.props.getProductModelData(this.props.selectedModelId);
    !!this.props.selectedGradeId
      ? this.props.getProductGrades(
          this.props.selectedModelId,
          this.props.selectedGradeId
        )
      : this.props.getProductGrades(this.props.selectedModelId);
  }

  onStepChange(step) {
    step === 5 && this.setState({ showSteps: false });
  }

  render() {
    const { ProductState, CheckoutState } = this.props;
    const steps = [
      {
        name: "Grade",
        component: (
          <Grade
            ProductGrade={ProductState.ProductGrade}
            ProductSpecification={ProductState.ProductSpecification}
            selectedProductGrade={this.props.selectedProductGrade}
            getProductGradeData={this.props.getProductGradeData}
          />
        )
      },
      {
        name: "Exterior",
        component: (
          // <Exterior
          //   ProductExterior={ProductState.ProductExterior}
          //   selectedProductExterior={this.props.selectedProductExterior}
          // />
          <ExteriorDynamic
            ProductExterior={ProductState.ProductExterior}
            selectedProductExterior={this.props.selectedProductExterior}
          />
        )
      },
      {
        name: "Interior",
        component: (
          <Interior
            ProductInterior={ProductState.ProductInterior}
            selectedProductInterior={this.props.selectedProductInterior}
          />
        )
      },
      {
        name: "Rims",
        component: (
          <Rims
            ProductRims={ProductState.ProductRims}
            selectedProductRims={this.props.selectedProductRims}
          />
        )
      },
      {
        name: "Accessories",
        component: (
          <Accessories
            ProductState={ProductState}
            selectedProductAccessories={this.props.selectedProductAccessories}
          />
        )
      },
      {
        name: "Summary",
        component: (
          <Summary
            ProductState={ProductState}
            CheckoutState={CheckoutState}
            updateProductTotal={this.props.updateProductTotal}
            updateLoanCalculator={this.props.updateLoanCalculator}
            printConfigurator={this.props.printConfigurator}
            getCheckoutData={this.props.getCheckoutData}
            getInterestRate={this.props.getInterestRate}
          />
        )
      }
    ];

    // console.log("ProductState= ", ProductState);
    return (
      <DefaultLayout crumbs="Car Configuration">
        <section className="configure-area pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                {/* need to validate steps to prevent user from skipping steps */}
                <div className="step-process">
                  <StepZilla
                    steps={steps}
                    nextTextOnFinalActionStep="Summary"
                    prevBtnOnLastStep={false}
                    onStepChange={this.onStepChange}
                    showSteps={this.state.showSteps}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

Product.getInitialProps = async function({ query: { id, grade } }) {
  return { selectedModelId: id, selectedGradeId: grade };
};

const mapStateToProps = state => {
  const { ProductState, CheckoutState } = state;
  return { ProductState, CheckoutState };
};

export default connect(mapStateToProps, {
  getProductGrades,
  getProductModelData,
  selectedProductGrade,
  getProductGradeData,
  selectedProductExterior,
  selectedProductInterior,
  selectedProductRims,
  selectedProductAccessories,
  updateProductTotal,
  updateLoanCalculator,
  printConfigurator,
  getCheckoutData,
  getInterestRate
})(Product);
