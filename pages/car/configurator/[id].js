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

// New material ui stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// New imports
import { formatPrice } from 'Components/Helpers/helpers';



import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Grade from "./Grade";
import { getEmail } from "../../../utils/auth";
import Accessories from "./Accessories";
import Summary from "./Summary";
import ExtInt from "./ExtInt";
import Rims from "./Rims";
import BottomSummary from "./BottomSummary";
import TopSummary from "./TopSummary";
import Coe from './Coe';
import Aftersales from './Aftersales';

import {
  getProductGrades,
  getProductModelData,
  selectedProductGrade,
  getProductGradeData,
  selectedProductExterior,
  selectedProductInterior,
  selectedProductRims,
  selectedProductAccessories,
  selectedCoePackage,
  selectedServicingPackage,
  updateProductTotal,
  updateLoanCalculator,
  printConfigurator,
  getInterestRate,
  getAllConfig
} from "Ducks/product/ProductActions";

import { getCheckoutData } from "Ducks/checkout/CheckoutActions";



class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      verticalStep: 0,
      tabVal: 0,
      totalPrice: 0

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
    this.props.getAllConfig();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ProductState.ProductGrade.data.fields === undefined && this.props.ProductState.ProductGrade.data.fields != undefined) {
      //get exteriors and interiors
      for (let i = 0; i < this.props.ProductState.ProductGrade.data.fields.length; i++) {
        this.props.getProductGradeData(this.props.ProductState.ProductGrade.data.fields[i].id);
      }

      //this.props.selectedProductExterior(this.state.exterior);
      //this.props.selectedProductInterior(this.state.interior);
    }
  }

  updatePrice = (price) => {

    this.setState({totalPrice : price})
  }

  handleNext = () => {
    if (this.state.verticalStep < 3) {
      this.setState({
        verticalStep: this.state.verticalStep + 1
      })
    }
    else {
      this.setState({
        activeStep: this.state.activeStep + 1
      });
    }
    window.scrollTo(0, 0);

  };

  handlePrev = () => {
    if (this.state.activeStep == 0) {
      this.setState({
        verticalStep: this.state.verticalStep - 1
      })
    }
    else {
      this.setState({
        activeStep: this.state.activeStep - 1
      });
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { ProductState, CheckoutState } = this.props;
    
    // For appBar
    const useStyles = makeStyles((theme) => ({
      root: {
          flexGrow: 1,
      },
      menuButton: {
          marginRight: theme.spacing(2),
      },
      title: {
          flexGrow: 1,
      },
  }));


    // console.log("ProductState= ", ProductState);
    return (
      <DefaultLayout crumbs="Car Configuration">
        <div className={useStyles.root}>
        {console.log("wfwfqwefew")}
        {console.log(ProductState)}
          {console.log(ProductState.ProductGrade.price)}
                <AppBar position="static" style={{ backgroundColor: "#4b6674"}}>
                    <Toolbar>
                      <div class="col-2">
                      <button type="submit" className="btn btn-light prevBtn" disabled={this.state.verticalStep == 0 ? true : false} onClick={this.handlePrev}><InlineIcon icon={arrowLeft} /> PREV</button>
                        
                        </div>
                        <div class="col-8">
                        <Typography variant="h6" className={useStyles.title} style={{ color: "white" }}>
                        <TopSummary productState={ProductState}/>
                        </Typography>
                        </div>
                        <div class="col-2">
                        <button type="submit" className="btn btn-primary nextBtn" onClick={this.handleNext}>NEXT <InlineIcon icon={arrowRight} /></button>
                        </div>
                    </Toolbar>
                </AppBar>
        </div>
        <section className="configure-area pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="mobile-step">
                <div class="stepNum">{this.state.activeStep + 1}/5</div>
                <div class="stepTitle">{this.steps[this.state.activeStep]}<br />
                  {this.activeStep < 4 && (<span class="stepSubtitle">Next: {this.steps[this.state.activeStep + 1]}</span>)}

                </div>
              </div>
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
                    <div className="col-md-12 text-center configHeader"><h1>{this.steps[this.state.activeStep].toUpperCase()}</h1></div>
                  </div>
                  {this.state.activeStep == 0 && (
                    <div className="row">
                      <div className="col-sm-12 vStep2">
                        <Stepper activeStep={this.state.verticalStep} alternativeLabel >
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
                      <div className="col-md-2 vStep">
                        <div style={{ marginTop: "60px" }}></div>
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
                        {this.state.verticalStep == 0 &&
                          <Grade
                            ProductGrade={ProductState.ProductGrade}
                            ProductSpecification={ProductState.ProductSpecification}
                            selectedProductGrade={this.props.selectedProductGrade}
                          />
                        }
                        {this.state.verticalStep == 1 &&
                          <ExtInt
                            gradeId={ProductState.ProductGrade.id}
                            ProductExterior={ProductState.ProductExterior}
                            selectedProductExterior={this.props.selectedProductExterior}
                            ProductInterior={ProductState.ProductInterior}
                            selectedProductInterior={this.props.selectedProductInterior}
                          />
                        }
                        {this.state.verticalStep == 2 &&
                          <Rims
                            gradeId={ProductState.ProductGrade.id}
                            ProductRims={ProductState.ProductRims}
                            selectedProductRims={this.props.selectedProductRims}
                          />
                        }
                        {this.state.verticalStep == 3 &&
                          <Accessories
                            gradeId={ProductState.ProductGrade.id}
                            ProductAccessories={ProductState.ProductAccessories}
                            selectedProductAccessories={this.props.selectedProductAccessories}
                          />
                        }

                      </div>
                    </div>
                  )}
                  {this.state.activeStep == 1 &&
                    <div className="row">
                      <div className="col-md-12">
                        <Coe selected={ProductState.CoeSelected} list={ProductState.CoeList} selectedCoePackage={this.props.selectedCoePackage} />
                      </div>
                    </div>

                  }
                  {this.state.activeStep == 2 &&
                    <div className="row">
                      <div className="col-md-12">
                        <Aftersales selected={ProductState.AftersaleSelected} servicingList={ProductState.ServicingList} warrantyList={ProductState.WarrantyList} selectedServicingPackage={this.props.selectedServicingPackage} />
                      </div>
                    </div>

                  }
                  {this.state.activeStep == 3 &&
                    <div className="row">
                      <div className="col-md-12">
                        <Summary
                          ProductState={ProductState}
                          CheckoutState={CheckoutState}
                          updateLoanCalculator={this.props.updateLoanCalculator}
                          printConfigurator={this.props.printConfigurator}
                          getCheckoutData={this.props.getCheckoutData}
                          getInterestRate={this.props.getInterestRate}
                          goPrev={this.handlePrev}
                          updateProductTotal={this.props.updateProductTotal}
                          user_email={this.props.user_email}
                        />
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            {this.state.activeStep <= 2 &&
              (<div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-9">
                      <BottomSummary productState={ProductState}/>
                    </div>
                    {/* <div className="col-md-3">
                      <button type="submit" className="btn btn-light prevBtn" disabled={this.state.verticalStep == 0 ? true : false} onClick={this.handlePrev}><InlineIcon icon={arrowLeft} /> PREV</button>
                      <button type="submit" className="btn btn-primary nextBtn" onClick={this.handleNext}>NEXT <InlineIcon icon={arrowRight} /></button>
                    </div> */}
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

Product.getInitialProps = async function (ctx) {
  const id = ctx.query.id;
  const grade = ctx.query.grade;
  const user_email = getEmail(ctx);
  return { selectedModelId: id, selectedGradeId: grade, user_email: user_email };
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
  selectedCoePackage,
  selectedServicingPackage,
  updateProductTotal,
  updateLoanCalculator,
  printConfigurator,
  getCheckoutData,
  getInterestRate,
  getAllConfig
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