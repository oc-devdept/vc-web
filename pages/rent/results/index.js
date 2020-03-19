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

import { getSearch, updateSelectedVehicle } from "Ducks/rent/RentActions";

const Results = props => {
  const { RentState } = props;

  // KIV: is there a better way to prevent users from accessing this page without entering search info?
  useEffect(() => {
    if (Object.keys(RentState.SearchParameters).length === 0) {
      Router.replace("/rent");
    }
  });

  // Reducer to maintain filter/sort state
  let initialState = {
    filter: {},
    sort: {}
  };
  initialState.filter["All"] = true;
  RentState.Categories.map(item => {
    initialState.filter[item.catName] = false;
  });
  initialState.sort["Sort"] = "ascending";

  function reducer(state, { field, value, type }) {
    return {
      ...state,
      [type]: { ...state[type], [field]: value }
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFilterChange = event => {
    let { id, checked } = event.target;
    if (id === "All") {
      for (const key in state.filter) {
        dispatch({ field: key, value: false, type: "filter" });
      }
      dispatch({ field: "All", value: true, type: "filter" });
    } else {
      dispatch({ field: id, value: checked, type: "filter" });
      dispatch({ field: "All", value: false, type: "filter" });
    }
  };

  const areAllCheckboxesUnchecked = () => {
    let boolean = true;
    const { filter } = state;
    for (const key in filter) {
      if (filter[key] === true) {
        boolean = false;
        break;
      }
    }
    return boolean;
  };

  // If all categories are unchecked, check "All"
  useEffect(() => {
    if (state.filter["All"] === false && areAllCheckboxesUnchecked()) {
      dispatch({ field: "All", value: true, type: "filter" });
    }
  }, [state]);

  const handleSortChange = event => {
    const { value } = event;
    dispatch({ field: "Sort", value: value, type: "sort" });
  };

  // console.log("results props= ", props);
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
          <SearchSortbar
            noOfResults={RentState.SearchData.length}
            state={state.sort}
            handleSortChange={handleSortChange}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <SearchList
                searchData={RentState.SearchData}
                updateSelectedVehicle={props.updateSelectedVehicle}
              />
            </div>
            <div className="col-lg-3">
              <SearchFilter
                state={state.filter}
                handleChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
        <SearchFilterMobile
          state={state.filter}
          handleChange={handleFilterChange}
        />
      </section>
    </DefaultLayout>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, {
  getSearch,
  updateSelectedVehicle
})(Results);
