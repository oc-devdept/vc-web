import React from "react";

// Components
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";
import Breadcrumb from "Components/Common/Breadcrumb";

function Default(props) {
  const { crumbs } = props;
  return (
    <React.Fragment>
      <Navbar />
      {crumbs && <Breadcrumb title={crumbs} />}
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Default;
