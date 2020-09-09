import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

import TabPanel from './Aftersales/TabPanel'

function Aftersales() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DefaultLayout>
      <section className="aftersales-area">
        <TabPanel />
      </section>
    </DefaultLayout>
  );
}

export default Aftersales;
