import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "Components/rent/VehicleSearch";
import VehicleSearchMobile from "Components/rent/VehicleSearchMobile";
import SearchSortbar from "Components/rent/SearchSortbar";
import SearchFilter from "Components/rent/SearchFilter";
import SearchList from "Components/rent/SearchList";
import SearchFilterMobile from "Components/rent/SearchFilterMobile";
import { Button, Modal } from "react-bootstrap";

import categoriesData from "../../../assets/data/car-categories.json";

const Results = props => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCategories() {
      setLoading(true);
      // const result = await api.get(``);
      const result = categoriesData;
      setCategories(result);
      setLoading(false);
    }
    getCategories();
  }, []);

  console.log("results props= ", props);
  return (
    <DefaultLayout crumbs="Results">
      <section className="pb-20">
        <div className="container mb-5">
          <VehicleSearch />
        </div>
        <div className="container mb-5">
          <SearchSortbar noOfResults="3" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9"></div>
            <div className="col-lg-3"></div>
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

export default connect(mapStateToProps, {})(Results);
