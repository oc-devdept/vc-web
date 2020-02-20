import React, { Component } from "react";
// Page Layout
import DefaultLayout from "Components/Layout/PageTemplates/Default";
//Banner
import Banner from "Components/homepage/Banner";
import BestSellers from "Components/homepage/BestSellers";
import Steps from "Components/homepage/Steps";

class Index extends Component {
  render() {
    return (
      <DefaultLayout>
        <section className="pb-5">
          <Banner />
        </section>
        <section className="pb-5">
          <BestSellers />
        </section>
        <section className="pb-5">
          <Steps />
        </section>
      </DefaultLayout>
    );
  }
}

export default Index;
