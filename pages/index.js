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
        <Banner />
        <BestSellers />
        <Steps />
      </Default>
    );
  }
}

export default Index;
