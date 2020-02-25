import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";
import VehicleSearch from "Components/rent/VehicleSearch";

import { getSearch } from "Ducks/rent/RentActions";

var rentBanner = "/static/rent/rentBanner.png";

const Rent = props => {
  console.log("rent props= ", props);
  return (
    <DefaultLayout crumbs="Rental">
      <section className="pb-20">
        <PageBanner overlay title="RENT A VEHICLE" bgImgUrl={rentBanner} />
        <div className="container mb-5">
          <VehicleSearch getSearch={props.getSearch} />
        </div>
        <div className="container mb-5">
          <h3 className="text-center">Rental Details</h3>
          <div className="row text-center">
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
          </div>
        </div>
        <div className="container mb-5">
          <h3 className="text-center">Why Us?</h3>
          <div className="row text-center">
            <div className="col-md-6 col-lg-4">Benefits</div>
            <div className="col-md-6 col-lg-4">Benefits</div>
            <div className="col-md-6 col-lg-4">Benefits</div>
            <div className="col-md-6 col-lg-4">Benefits</div>
            <div className="col-md-6 col-lg-4">Benefits</div>
            <div className="col-md-6 col-lg-4">Benefits</div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, {
  getSearch
})(Rent);
