import * as React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  heading: {
    // backgroundColor: "#FCE8D4",
    // borderRadius: '10px 10px 0 0',
    // width: '100%',
    borderTop: '1px solid #f3f3f3',
  },
  subHeading: {
    fontSize: '12px',
    fontWeight: "500",
    color: "#262626",
    width: '100%',
  },
  expanded: {
    "&$expanded": {
      margin: 0,
    //   borderTop: '1px solid #FF8B19',
    //   borderRadius: '10px 10px 0 0',
    }
  },
  expandMore: {
    "&$expanded": {
      margin: 0,
    //   borderRadius: '5px',
    }
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiCardContent: {
      root: {
        paddingTop: '10px',
        paddingRight: '0 !important',
        paddingBottom: '0 !important'
      },
    },
    MuiPaper: {
      root: {
        margingBottom: '20px !important',
      }
    },

  },
});


export default function CustomAccordionLease() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <Accordion className={classes.expanded}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.heading}
            >
                <Typography className={classes.subHeading}>
                    <p>1.DOES YOUR LEASE SCHEME INCLUDE VEHICLE SERVICING AND MAINTAINENCE?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Our leasing package comes with the following for an extra peace of mind: <br></br>
                - First Year Free Servicing or 20,000km <br></br>
                - 5 Year Warranty or 100,000km <br></br>
                We will also provide a replace vhicle when the vehicle is being sent for the regular maintainence, repairs and/or accident repairs. </p>
            </AccordionDetails>
        </Accordion>

        <Accordion className={classes.expanded}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.heading}
            >
                <Typography className={classes.subHeading}>
                    <p>2.What Are Your Terms & Conditions for Insurance?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Insurance is not included in this lease package. <br></br> <br></br>
                Our terms & conditions are as follows: <br></br> <br></br>
                Hirer has to be above 22 year old with a minimum driving experience of 2 years. <br></br>
                1) Excess: Section I (Own Damage Claim) S$3,000; Section II (Third Party Claim) S$2,000; Windscreen Excess S$100. Excess will be doubled for unnamed drivers and usage in Malaysia. <br></br>
                2) Coverage: Up to West Malaysia, Thailand and East Malaysia are not covered. <br></br>
                3) Additional Name Driver: No charge for the first named driver; subsequent names driver S$200 each (annual)</p>
            </AccordionDetails>
        </Accordion>

        <Accordion className={classes.expanded}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.heading}
            >
                <Typography className={classes.subHeading}>
                    <p>3.HOW MANY YEARS IS YOUR CAR LEASE BUY-BACK SCHEME?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>On average, most cars in Singapore can be leased for a period ranging from 2 to 10 years depending on your need. At Venture Cars, you can choose between 5, 6 or 7 years. </p>
            </AccordionDetails>
        </Accordion>
    </div>
  </ThemeProvider>
  );
};