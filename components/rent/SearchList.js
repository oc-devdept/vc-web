import React from "react";
import SearchItem from "./SearchItem";

const SearchList = props => {
  const { searchData } = props;
  return (
    <React.Fragment>
      {searchData.map((item, id) => (
        <SearchItem
          key={id}
          id={item.car_id}
          image={item.img}
          category={item.catId}
          name={item.name}
          person={item.person}
          luggage={item.luggage}
          doors={item.doors}
          transmission={item.transmission}
          oldPrice={item.pricePerDay}
          price={item.pricePerDay}
          updateSelectedVehicle={props.updateSelectedVehicle}
        />
      ))}
    </React.Fragment>
  );
};

export default SearchList;
