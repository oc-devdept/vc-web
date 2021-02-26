import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { retrieveUserProfile } from "Ducks/user/UserActions";

import Breadcrumb from "Components/Common/Breadcrumb";
import Menu from "./Menu/Menu";
import ViewComponent from "./View";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const menuTabs = [
  {
    title: "Bookings",
    routes: [
      { name: "Test Drive ", state: "testDrive" },
      { name: "Car Servicing", state: "carServicing" }
    ]
  },
  {
    title: "Account",
    routes: [
      { name: "Payment Logs", state: "payment" },
      { name: "Profile", state: "user" }
    ]
  }
];

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveUserProfile());
  }, []);

  const [state, setState] = useState({
    activeView: "carServicing",
    title: "Car Servicing"
  });

  const setCurrentTab = (activeView, title) => {
    setState({ activeView, title });
  };

  // const matches = useMediaQuery('(max-width:768px)');

  return (
    <React.Fragment>

      <div className="container-fluid">
        <div className="row">
          <Breadcrumb title={state.title} />
        </div>
        <div className="row">
          <Menu
            menuTabs={menuTabs}
            setCurrentTab={setCurrentTab}
            activeView={state.activeView}
          />
        </div>

        <div className="row">
          <div style={{display: 'table', tableLayout:'fixed', width:'100%'}}>
            <ViewComponent activeView={state.activeView} />
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default Profile;

// {!matches &&
//   <div className="d-flex flex-fill flex-column">
//   <Breadcrumb title={state.title} />
//   <div className="d-flex flex-row flex-fill" style={{}}>
//     <Menu
//       menuTabs={menuTabs}
//       setCurrentTab={setCurrentTab}
//       activeView={state.activeView}
//     />
//     <ViewComponent activeView={state.activeView} />
//   </div>
// </div>
// }

// {matches && 
// <div>
// <div className="">
// <Breadcrumb title={state.title} />
// <div className="" style={{}}>
//   <Menu
//     menuTabs={menuTabs}
//     setCurrentTab={setCurrentTab}
//     activeView={state.activeView}
//   />
//   <div style={{display: 'table', tableLayout:'fixed', width:'100%'}}>
 
//   <ViewComponent activeView={state.activeView} />
//   </div>
// </div>
// </div>
// </div>
// }
