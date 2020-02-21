import React, { useState, useEffect } from "react";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";
import VehicleSearch from "Components/rental/VehicleSearch";

var rentBanner = "/static/rent/rentBanner.png";

const Rent = props => {
  return (
    <DefaultLayout crumbs="Rental">
      <section className="pb-20">
        <PageBanner overlay title="RENT A VEHICLE" bgImgUrl={rentBanner} />
        <div className="container" style={{ paddingBottom: 400 }}>
          <VehicleSearch />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Rent;
