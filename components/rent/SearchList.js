import React from "react";
import SearchItem from "./SearchItem";

import carList from "../../assets/data/data.json";

// This component should eventually be taking in props from an api call
// to dynamically display data
const SearchList = () => {
  const cars = carList["car-list"];

  return (
    <>
      {cars.map((item, id) => (
        <SearchItem
          key={id}
          image={item.img}
          category={item.catId}
          name={item.name}
          person={item.person}
          luggage={item.luggage}
          doors={item.doors}
          transmission="Auto"
          oldPrice={item.price}
          price={item.price}
        />
      ))}
    </>
  );
};

export default SearchList;
