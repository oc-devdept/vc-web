import React, { Component } from "react";
import { connect } from "react-redux";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// npm install --save-dev @iconify/react @iconify/icons-bi
import { Icon, InlineIcon } from '@iconify/react';
import arrowLeft from '@iconify/icons-bi/arrow-left';
import arrowRight from '@iconify/icons-bi/arrow-right';



import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Grade from "./Grade";
// import Exterior from "./Exterior";
// import Interior from "./Interior";
// import Rims from "./Rims";
import Accessories from "./Accessories";
import Summary from "./Summary";
import ExtInt from "./ExtInt";
import BottomSummary from "./BottomSummary";

import {
  getProductGrades,
  getProductModelData,
  selectedProductGrade,
  getProductGradeData,
  selectedProductExterior,
  selectedProductInterior,
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

    this.state = { 
      activeStep: 0,
      verticalStep:0,
      tabVal: 0
    
    };
    
    this.steps = ["Car Configurator", "COE Package", "AfterSales", "Financing & Summary", "Payment"];
    this.steps2 = ["Car Grade", "Exterior & Interior", "Rims", "Accessories & Options"];
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

  handleNext = () => {
    if(this.state.verticalStep < 4){
      this.setState({
        verticalStep: this.state.verticalStep+1
      })
    }
    else {
      this.setState({
        activeStep: this.state.activeStep +1
      });
    }
    
    
  };  

  handlePrev = () => {
    if(this.state.activeStep == 0){
      this.setState({
        verticalStep: this.state.verticalStep-1
      })
    }
    else {
      this.setState({
        activeStep: this.state.activeStep -1
      });
    }
  }

  render() {
    const { ProductState, CheckoutState } = this.props;
    

    // console.log("ProductState= ", ProductState);
    return (
      <DefaultLayout crumbs="Car Configuration">
        <section className="configure-area pb-60">
          <div className="container">            
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="step-process">
                <Stepper activeStep={this.state.activeStep}>
                  {this.steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                                        
                    return (
                      <Step key={label}  >
                        <StepLabel className="orange-circle">{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                </div>
                <div className="step-body">
                  <div className="row">
                    <div className="col-md-12 text-center configHeader"><h1>CAR CONFIGURATOR</h1></div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <div style={{marginTop:"60px"}}></div>
                    <Stepper activeStep={this.state.verticalStep} orientation="vertical">
                  {this.steps2.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    
                    
                    return (
                      <Step key={label}  >
                        <StepLabel className="orange-circle">{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                    </div>
                    <div className="col-md-10">
                    { this.state.verticalStep == 0 &&  
                    <Grade
                        ProductGrade={ProductState.ProductGrade}
                        ProductSpecification={ProductState.ProductSpecification}
                        selectedProductGrade={this.props.selectedProductGrade}
                        getProductGradeData={this.props.getProductGradeData}
                      />
                    }
                    { this.state.verticalStep == 1 &&  
                      <ExtInt
                      ProductExterior={ProductState.ProductExterior}
                      selectedProductExterior={this.props.selectedProductExterior}
                      ProductInterior={ProductState.ProductInterior}
                      selectedProductInterior={this.props.selectedProductInterior}
                    />
                    }
                    </div>
                  </div>
                </div>
              </div>            
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-9">
                    <BottomSummary />
                  </div>
                  <div className="col-md-3">
                  <button type="submit" class="btn btn-light" disabled={ this.state.verticalStep == 0 ? true: false} style={{marginLeft:"-40px",float:"left"}} onClick={this.handlePrev}><InlineIcon icon={arrowLeft}  /> PREV</button>
                  <button type="submit" class="btn btn-primary" style={{float:"right"}} onClick={this.handleNext}>NEXT <InlineIcon icon={arrowRight}  /></button>
                  </div>
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
  selectedProductAccessories,
  updateProductTotal,
  updateLoanCalculator,
  printConfigurator,
  getCheckoutData,
  getInterestRate
})(Product);
/*

const steps = [

      {
        name: "Exterior",
        component: (
          <ExteriorDynamic
            ProductExterior={ProductState.ProductExterior}
            selectedProductExterior={this.props.selectedProductExterior}
          />
        )
      },
      {
        name: "Interior",
        component: (
          <InteriorDynamic
            ProductInterior={ProductState.ProductInterior}
            selectedProductInterior={this.props.selectedProductInterior}
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
<StepZilla
  steps={steps}
  nextTextOnFinalActionStep="Summary"
  prevBtnOnLastStep={false}
  onStepChange={this.onStepChange}
  showSteps={this.state.showSteps}
  stepsNavigation={false}
/>
*/