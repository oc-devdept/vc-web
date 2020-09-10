import React from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";

import CustomAccordion from './accordion';

// FAQ Data
import { FaqData } from "Components/data/faq-data";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: "center",
    },
    tabs: {
      // border: `1px solid ${theme.palette.divider}`,
    },
    tab: {
        margin: '20px auto',
        border: `1px solid ${theme.palette.divider}`,
        textTransform: 'capitalize',
    },
    tabPanel: {
      width: '80%',
    },
    indicator: {
      backgroundColor : '#f29d30',
      left: "0px",
      width: "3px",
    },
    headerBar: {
        padding: '20px'
    }
}));

export default function Faq() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <DefaultLayout>
            <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{ className: classes.indicator }}
            >
                {FaqData.map((faq, key) => (
                <Tab className={classes.tab} key={key} label={faq.title} />
                ))}
        
            </Tabs>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>General Enquires</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo quis ligula posuere, et venenatis ante aliquet. Cras diam elit, tempor nec lacus in, mollis laoreet nisi. </p>
                    </div>
                    <CustomAccordion />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>General Enquires</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo quis ligula posuere, et venenatis ante aliquet. Cras diam elit, tempor nec lacus in, mollis laoreet nisi. </p>
                    </div>
                    <CustomAccordion />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>General Enquires</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo quis ligula posuere, et venenatis ante aliquet. Cras diam elit, tempor nec lacus in, mollis laoreet nisi. </p>
                    </div>
                    <CustomAccordion />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>General Enquires</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo quis ligula posuere, et venenatis ante aliquet. Cras diam elit, tempor nec lacus in, mollis laoreet nisi. </p>
                    </div>
                    <CustomAccordion />
                </Card>
            </TabPanel>
            </div>
        </DefaultLayout>
    );
}