import React from "react";

// Components
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";

function Default(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Default;
