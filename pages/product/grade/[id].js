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
  printConfigurator
} from "Ducks/product/ProductActions";

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
    const { ProductState } = this.props;

    const steps = [
      {
        name: "Grade",
        component: (
          <Grade
            ProductGrade={ProductState.ProductGrade}
            selectedProductGrade={this.props.selectedProductGrade}
            getProductGradeData={this.props.getProductGradeData}
          />
        )
      },
      {
        name: "Exterior",
        component: (
          <Exterior
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
            updateProductTotal={this.props.updateProductTotal}
            updateLoanCalculator={this.props.updateLoanCalculator}
            printConfigurator={this.props.printConfigurator}
          />
        )
      }
    ];

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

Product.getInitialProps = async function({ ctx }) {
  const { id, grade } = ctx.query;
  return { selectedModelId: id, selectedGradeId: grade };
};

const mapStateToProps = state => {
  const { ProductState } = state;
  return { ProductState };
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
  printConfigurator
})(Product);
