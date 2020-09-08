import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import BookCarServicing from './BookCarServicing';
import AboutCarServicing from './AboutCarServicing';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
    overrides: {
        MuiTabs: {
            root: {
                paddingTop: '20px',
                display: "flex",
                justifyContent: "center",
            },
            indicator: {
                backgroundColor: '#f29d30',
            },
            flexContainer: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            "&$selected": {
                color: "#FF8B19",
                backgroundColor: "#FCE8D4"
            }
        },
        MuiTab: {
            root: {
                width: '50%',
                "&:hover": {
                backgroundColor: 'transparent',
                color: '#f29d30',
              },
              
            },
            selected: {
              backgroundColor: '#f29d30',
              color: '#f29d30',
            },
        }
    }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
          <Typography>{children}</Typography>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function CustomTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
    <div className={classes.root}>
        <div className={classes.tabs}>
        <Tabs
            value={value}
            onChange={handleChange}
            // textColor="primary"
        >
            <Tab label="Book Car Servicing" {...a11yProps(0)} />
            <Tab label="About Car Servicing" {...a11yProps(1)} />
        </Tabs>
        </div>
        <TabPanel value={value} index={0} dir={theme.direction} onChangeIndex={handleChangeIndex}>
          <BookCarServicing />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} onChangeIndex={handleChangeIndex}>
          <AboutCarServicing />
        </TabPanel>
    </div>
    </MuiThemeProvider>
  );
}