import React from "react";
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The date are {props.date.join(',')}</p>
      { /* change code above this line */ }
    </div>
  );
};
export default CurrentDate;