import React, { Component } from "react";
import CurrentDate from "../pages/CurrentDate";
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={["1212","1218"]} />
        { /* change code above this line */ }
      </div>
    );
  }
};
export default Calendar;
