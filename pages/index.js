import React, { Component } from "react";
// Page Layout
import DefaultLayout from "Components/Layout/PageTemplates/Default";
//Banner
import Banner from "Components/Layout/Banner";
import BestSellers from "Components/Layout/BestSellers";
import Steps from "Components/Layout/Steps";

class Index extends Component {
  render() {
    return (
      <DefaultLayout>
        <Banner />
        <BestSellers />
        <Steps />
      </DefaultLayout>
    );
  }
}

export default Index;
