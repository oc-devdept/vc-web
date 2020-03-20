import React from "react";

import DefaultMessage from "./DefaultMessage";

// Transaction
import Testdrive from "./Transactions/Testdrive/index";
import CarServicing from "./Transactions/CarServicing/index";

// Account
import User from "./Account/User/index";
import Rewards from "./Account/Rewards/index";
import Payment from "./Account/Payment/index";

const renderView = {
  testDrive: Testdrive,
  carServicing: CarServicing,
  user: User,
  rewards: Rewards,
  payment: Payment
};

const ProfileTabRender = ({ activeView }) => {
  const Handler = renderView[activeView] || DefaultMessage;
  return <Handler />;
};
export default ProfileTabRender;
