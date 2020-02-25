import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "Components/rent/VehicleSearch";

import { getSearch } from "Ducks/rent/RentActions";

const Results = props => {
  console.log("results props= ", props);
  return (
    <DefaultLayout crumbs="Results">
      <section className="pb-20">
        <div className="container mb-5">
          {/* YOU LEFT OFF HERE: pulling SearchParameters and reflecting it on the search inputs */}
          <VehicleSearch getSearch={props.getSearch} />
        </div>
        <div className="container mb-5">pending</div>
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
})(Results);
