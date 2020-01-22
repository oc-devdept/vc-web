import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
//Banner
import Banner from "Components/Layout/Banner";
import BestSellers from "Components/Layout/BestSellers";
import Steps from "Components/Layout/Steps";

class Index extends Component {
  render() {
    return (
      <Default>
        <h1 style={{color:'black'}}>Hello World</h1>
        <img
      
          src={"/static/main-banner.jpg"}
        />

        <Banner />
        <BestSellers />
        <Steps />
      </Default>
    );
  }
}

export default Index;
