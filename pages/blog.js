import React, { Component } from "react";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <h2>Blog</h2>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
