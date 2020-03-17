import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { retrieveUserProfile } from "Ducks/user/UserActions";

import Breadcrumb from "Components/Common/Breadcrumb";
import Menu from "./Menu/Menu";
import ViewComponent from "./View";

const menuTabs = [
  {
    title: "BOOKINGS",
    routes: [
      { name: "TEST DRIVE", state: "testDrive" },
      { name: "CAR SERVICING", state: "carServicing" }
    ]
  },
  {
    title: "ACCOUNT",
    routes: [
      { name: "PAYMENT LOGS", state: "payment" },
      { name: "PROFILE", state: "user" }
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
    title: "CAR SERVICING"
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
