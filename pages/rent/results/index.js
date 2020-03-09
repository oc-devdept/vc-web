import React, { useEffect, useReducer } from "react";
import Router from "next/router";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import VehicleSearch from "Components/rent/VehicleSearch";
import VehicleSearchMobile from "Components/rent/VehicleSearchMobile";
import SearchSortbar from "Components/rent/SearchSortbar";
import SearchFilter from "Components/rent/SearchFilter";
import SearchList from "Components/rent/SearchList";
import SearchFilterMobile from "Components/rent/SearchFilterMobile";

import { getSearch, getCategories } from "Ducks/rent/RentActions";

const Results = props => {
  const { RentState } = props;

  // KIV: is there a better way to prevent users from accessing this page without entering search info?
  useEffect(() => {
    if (Object.keys(RentState.SearchParameters).length === 0) {
      Router.push("/rent");
    }
  });

  // Reducer to maintain filter state
  let initialState = {};
  initialState["All"] = true;
  RentState.Categories.map(item => {
    initialState[item.catName] = false;
  });

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = event => {
    let { id, checked } = event.target;
    if (id === "All") {
      for (const key in state) {
        dispatch({ field: key, value: false });
      }
      dispatch({ field: "All", value: true });
    } else {
      dispatch({ field: id, value: checked });
      dispatch({ field: "All", value: false });
    }
  };

  const areAllCheckboxesUnchecked = () => {
    let boolean = true;
    for (const key in state) {
      if (state[key] === true) {
        boolean = false;
        break;
      }
    }
    return boolean;
  };

  // If all categories are unchecked, check "All"
  useEffect(() => {
    if (state["All"] === false && areAllCheckboxesUnchecked()) {
      dispatch({ field: "All", value: true });
    }
  }, [state]);

  console.log("results props= ", props);
  // console.log("state= ", state);
  return (
    <DefaultLayout crumbs="Results">
      <section className="pb-20">
        <div className="container my-3">
          <div className="vehicle-search">
            <VehicleSearch
              getSearch={props.getSearch}
              searchParameters={RentState.SearchParameters}
            />
          </div>
          <div className="vehicle-search-mobile">
            <VehicleSearchMobile
              getSearch={props.getSearch}
              searchParameters={RentState.SearchParameters}
            />
          </div>
        </div>
        <div className="container my-3">
          <SearchSortbar noOfResults="3" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <SearchList searchData={RentState.SearchData} />
            </div>
            <div className="col-lg-3">
              <SearchFilter state={state} handleChange={handleChange} />
            </div>
          </div>
        </div>
        <SearchFilterMobile state={state} handleChange={handleChange} />
      </section>
    </DefaultLayout>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, { getSearch, getCategories })(Results);
