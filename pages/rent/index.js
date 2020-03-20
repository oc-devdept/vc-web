import React, { useEffect } from "react";
import { connect } from "react-redux";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";
import VehicleSearch from "Components/rent/VehicleSearch";

import { getSearch, getCategories } from "Ducks/rent/RentActions";

var rentBanner = "/static/rent/rentBanner.png";

const Rent = props => {
  useEffect(() => {
    props.getCategories();
  }, []);

  const whyUsInfo = [
    {
      icon: "fas fa-car",
      title: "Modern Fleet",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
      amet nulla.`
    },
    {
      icon: "fas fa-wallet",
      title: "Competitive Prices",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
      amet nulla.`
    },
    {
      icon: "fas fa-life-ring",
      title: "Full Insurance Plan",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
      amet nulla.`
    },
    {
      icon: "fas fa-road",
      title: "Unlimited Milage",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
      amet nulla.`
    },
    {
      icon: "fas fa-thumbs-up",
      title: "Exceptional Service",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
      amet nulla.`
    },
    {
      icon: "fas fa-wrench",
      title: "Breakdown Assistance",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Mauris pretium nulla lacinia nisl aliquam dictum ac sit \
      amet nulla.`
    }
  ];
  // console.log("rent props= ", props);
  return (
    <DefaultLayout crumbs="Rental">
      <section className="pb-20">
        <PageBanner overlay title="RENT A VEHICLE" bgImgUrl={rentBanner} />
        <div className="container mb-5">
          <VehicleSearch
            getSearch={props.getSearch}
            searchParameters={props.RentState.SearchParameters}
          />
        </div>
        <div className="container border mb-5">
          <h2 className="text-center py-4">Rental Details</h2>
          <div className="row text-center pb-4">
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
            <div className="col-md-6">Details</div>
          </div>
        </div>
        {/* <div className="container index-about-us border mb-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-5 text-justify">
              <h2>Service is Our First Priority</h2>
              <h2>
                At <img src="Images/chans-logo.png" alt="chan's" height="30" />
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                pretium nulla lacinia nisl aliquam dictum ac sit amet nulla.
                Cras blandit nisl vitae nibh fringilla euismod. Nullam ac
                tincidunt neque. Vestibulum convallis, dui id facilisis lacinia,
                nunc turpis convallis nisl, sed euismod turpis velit in justo.
                Mauris arcu dui, laoreet quis enim sed, pharetra posuere mi.
                Fusce at erat elit. Morbi metus nibh, placerat vitae auctor a,
                tincidunt vitae sapien. Nam ac volutpat ligula.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 p-5 text-center">
              <img src="Images/index-office.jpg" alt="Chan's Car Rental" />
            </div>
          </div>
        </div> */}
        <div className="container index-why-us border mb-5">
          <h2 className="text-center py-4">Why Choose Us?</h2>
          <div className="row pb-4">
            {whyUsInfo.map((item, id) => (
              <div className="col-lg-4 col-md-6 d-flex mb-3" key={id}>
                <i
                  className={item.icon}
                  style={{
                    fontSize: 24,
                    margin: "5px 20px 0px",
                    color: "#f29d30"
                  }}
                />
                <div className="flex-column">
                  <h5>{item.title}</h5>
                  <p className="text-justify">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

const mapStateToProps = state => {
  const { RentState } = state;
  return { RentState };
};

export default connect(mapStateToProps, { getSearch, getCategories })(Rent);
