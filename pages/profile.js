import React from "react";
import Navbar from "../components/Layout/Navbar";

import Profile from "Components/profile";
import { withAuthSync } from "../utils/auth";

const Index = () => {
  return (
    
    <div className="d-flex flex-column">
      <Navbar />
      <div className="d-flex flex-fill">
        <Profile />
      </div>
    </div>
  );
};

export default withAuthSync(Index);
