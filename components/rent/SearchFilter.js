import React, { useEffect, useReducer } from "react";
import { Form } from "react-bootstrap";

const SearchFilter = ({ state, handleChange }) => {
  // let initialState = {};
  // initialState["All"] = true;
  // categoriesData.map(item => {
  //   initialState[item.catName] = false;
  // });

  // function reducer(state, { field, value }) {
  //   return {
  //     ...state,
  //     [field]: value
  //   };
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);

  // const handleChange = event => {
  //   let { id, checked } = event.target;
  //   if (id === "All") {
  //     for (const key in state) {
  //       dispatch({ field: key, value: false });
  //     }
  //     dispatch({ field: "All", value: true });
  //   } else {
  //     dispatch({ field: id, value: checked });
  //     dispatch({ field: "All", value: false });
  //   }
  // };

  // const areAllCheckboxesUnchecked = () => {
  //   let boolean = true;
  //   for (const key in state) {
  //     if (state[key] === true) {
  //       boolean = false;
  //       break;
  //     }
  //   }
  //   return boolean;
  // };

  // // If all categories are unchecked, check "All"
  // useEffect(() => {
  //   if (state["All"] === false && areAllCheckboxesUnchecked()) {
  //     dispatch({ field: "All", value: true });
  //   }
  // }, [state]);

  const selectedStyle = {
    backgroundColor: "#4b6674",
    color: "#ffffff",
    transition: "background-color 0.5s, color 0.5s"
  };

  return (
    <div className="search-filter">
      <div
        className="d-block mb-3"
        style={{ color: "#4b6674", fontWeight: 500 }}
      >
        <span>Filter By</span>
        <br />
        <span style={{ fontSize: 20 }}>Vehicle Categories</span>
      </div>
      <div className="search-filter-categories">
        {/* <Form.Check
          id="All"
          checked={state["All"]}
          label="All"
          onChange={handleChange}
          style={state["All"] ? selectedStyle : {}}
        /> */}
        {/* {categoriesData.map((item, id) => (
          <Form.Check
            key={id}
            id={item.catName}
            checked={state[item.catName]}
            label={item.catName}
            onChange={handleChange}
            style={state[item.catName] ? selectedStyle : {}}
          />
        ))} */}
        {Object.entries(state).map(([key, value], id) => (
          <Form.Check
            key={id}
            id={key}
            checked={value}
            label={key}
            onChange={handleChange}
            style={value ? selectedStyle : {}}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
