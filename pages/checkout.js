import React from "react";
import Router from "next/router";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";
import Breadcrumb from "Components/Common/Breadcrumb";
import OrderList from "Components/checkout/OrderList";
import LoginOverlay from "Components/checkout/LoginOverlay";
import CreditCardForm from "Components/checkout/CreditCardForm";
import SummaryTable from "Components/configurator/SummaryTable";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Icon, InlineIcon } from '@iconify/react';
import arrowLeft from '@iconify/icons-bi/arrow-left';

import { useDispatch, useSelector } from "react-redux";
import { getCheckout } from "Ducks/checkout";

import { retrieveUserProfile } from "Ducks/user";

import { isLoggedIn, getEmail } from "../utils/auth";

const Checkout = props => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("vc-shoppingcart"));
    if (localCart) {
      dispatch(getCheckout());
    } else {
      Router.replace("/");
    }
    if(props.loggedIn){
      dispatch(retrieveUserProfile());
    }
  }, []);
  const checkoutState = useSelector(state => state.CheckoutState);

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

const goBack = () => {
  Router.push("/car/configurator/[id]?skip=end", "/car/configurator/"+checkoutState.selectedModelId+"?skip=end");
}

  // console.log("checkout props= ", props);
  // console.log("checkoutState= ", checkoutState);
  return (
    <React.Fragment>
      <Navbar />
      <Breadcrumb title="Checkout" />
      <div className={useStyles.root }  className="configuration_navbar"
        // style={{  position:"fixed " ,top:"80px" ,right:0,left:0, zIndex:999}}
        >
                <AppBar position="flex" >
                    <Toolbar>
                      <div class="col-2">
                        {
                          checkoutState.selectedModelId && (<button type="submit" className="btn prevBtn " onClick={goBack} ><InlineIcon icon={arrowLeft}  /> PREV </button>)
                        }
                      
                        
                        </div>
                        <div class="col-8 text-center">
                        <Typography variant="h6" className={useStyles.title} style={{ color: "white" }}>
                          Checkout
                        </Typography>
                        </div>
                       
                       
                    </Toolbar>
                </AppBar>
        </div>
      <div className="container" style={{marginBottom: 40, marginTop:80}}>
        <div className="row">
          <div className="col-lg-6">
          <OrderList checkoutState={checkoutState} user_email={props.user_email}   />
          </div>
          <div className="col-lg-6">
            {props.loggedIn ? <CreditCardForm /> : <LoginOverlay />}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

Checkout.getInitialProps = ctx => {
  const loggedIn = isLoggedIn(ctx);
  const user_email = getEmail(ctx);
  // props that returned if user is logged in
  return { loggedIn, user_email };
};

export default Checkout;
/*

*/
