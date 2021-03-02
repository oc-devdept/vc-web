import React from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";

//import CustomAccordion from './accordion';
import CustomAccordionGeneral from 'Components/accordions/general-enquiries';
import CustomAccordionPurchases from 'Components/accordions/purchases';
import CustomAccordionLingo from 'Components/accordions/lingo-terms';
import CustomAccordionLease from 'Components/accordions/lease-buy-back';
import CustomAccordionHybrid from 'Components/accordions/hybrid-car';

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
    tab: {
        margin: '20px 20px',
        border: `1px solid ${theme.palette.divider}`,
        textTransform: 'capitalize',
    },
    tabPanel: {
      width: '80%',
    },
    indicator: {
      backgroundColor : '#000000',
      left: "0px",
      width: "3px",
      marginLeft: "20px",
    },
    headerBar: {
        padding: '20px'
    },
}));

export default function Faq() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <DefaultLayout>
            <div className={classes.root}  style={{marginTop:80}}>
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
                    </div>
                    <CustomAccordionGeneral />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>Purchases</h3>
                    </div>
                    <CustomAccordionPurchases />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>Lingo Terms</h3>
                    </div>
                    <CustomAccordionLingo />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>Lease Buy-Back Scheme</h3>
                    </div>
                    <CustomAccordionLease />
                </Card>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={4}>
                <Card>
                    <div className={classes.headerBar}>
                        <h3>Hybrid Car Questions</h3>
                    </div>
                    <CustomAccordionHybrid />
                </Card>
            </TabPanel>
            </div>
        </DefaultLayout>
    );
}