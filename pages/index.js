import React, { Component } from "react";
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
//Banner
import Banner from "Components/Layout/Banner";
import Link from 'next/link';
class Index extends Component {
  render() {
    return <Default>
      <Banner />
    </Default>;
  }
}

export default Index;

