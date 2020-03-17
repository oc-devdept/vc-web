import React, { useState } from "react";
import { useSelector } from "react-redux";
import Booking from "./components/booking/index";
import Dashboard from "./components/dashboard/index";

const Title = {
  0: "BOOK APPOINTMENT",
  1: "RETURN"
};

const Index = () => {
  const [state, setState] = useState(0);
  const customerId = useSelector(state => state.UserState.customerId);

  const toggleBookService = () => {
    if (state == 0) {
      setState(() => 1);
    } else {
      setState(() => 0);
    }
  };

  const RefetchBookingRecords = async () => {
    setState(() => 0);
    console.log("Refetch records");
  };

  return (
    <div className="d-flex flex-fill flex-column">
      {
        {
          0: (
            <Dashboard
              customerId={customerId}
              toggleBookService={toggleBookService}
            />
          ),
          1: (
            <Booking
              _ReturnDashBoard={RefetchBookingRecords}
              toggleBookService={toggleBookService}
            />
          )
        }[state]
      }
    </div>
  );
};

export default Index;

// const [cookies, setCookie] = useCookies(['name']);
// setCookie('name', 'COOKIES!', { path: '/' });
// console.log(cookies)
// return (
//     <div className="d-flex justify-content-center align-items-center" style={{flex:1}}>
//         Maintenance booking system!
//         {cookies.name && <h1>Hello {cookies.name}!</h1>}
//     </div>
// );

function publicHolidays() {
  const year = 2020;
  // Jan = 0, Feb = 1, ... Dec = 11
  // https://www.mom.gov.sg/newsroom/press-releases/2019/0408-public-holidays-for-2020
  const dates = [
    { month: 0, day: 1 },
    { month: 0, day: 25 },
    { month: 0, day: 26 },
    { month: 0, day: 27 },
    { month: 3, day: 10 },
    { month: 4, day: 1 },
    { month: 4, day: 7 },
    { month: 4, day: 24 },
    { month: 4, day: 25 },
    { month: 6, day: 31 },
    { month: 7, day: 9 },
    { month: 7, day: 10 },
    { month: 10, day: 14 },
    { month: 11, day: 25 }
  ];

  return dates.map(date => new Date(year, date.month, date.day));
}

const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;
