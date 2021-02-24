import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { retrieveUserProfile } from "Ducks/user/UserActions";

import Breadcrumb from "Components/Common/Breadcrumb";
import Menu from "./Menu/Menu";
import ViewComponent from "./View";

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

  return (
    <div className="d-flex flex-fill flex-column">
      <Breadcrumb title={state.title} />
      <div className="d-flex flex-row flex-fill" style={{}}>
        <Menu
          menuTabs={menuTabs}
          setCurrentTab={setCurrentTab}
          activeView={state.activeView}
        />
        <ViewComponent activeView={state.activeView} />
      </div>
    </div>
  );
};

export default Profile;
