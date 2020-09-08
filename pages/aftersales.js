import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import BookCarServicing from './Aftersales/BookCarServicing'
function Aftersales() {

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DefaultLayout>
      <section className="aftersales-area">
        <div className="container">
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Book Car Servicing" />
              <Tab label="About Car Servicing" />
            </Tabs>
          </Paper>
          <BookCarServicing />
        </div>
      </section>
    </DefaultLayout>
  );
}

export default Aftersales;
