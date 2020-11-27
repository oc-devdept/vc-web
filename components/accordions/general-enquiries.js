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


export default function CustomAccordionGeneral() {
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
                    <p>1.WHO HANDLES THE AFTER SALES SERVICE FOR VENTURE CARS?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>For Venture Cars, we have our in-house workshop, all servicing is done in-house and not outsourced to our network of partners. </p>
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
                    <p>2.HOW DO WE BOOK A TEST DRIVE WITH YOU?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Simply call us at 62828800 or book a test drive through our website! </p>
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
                    <p>3.HOW DO YOU CALCULATE CAR DEPRECIATION?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Car Depreciation is calculated this way: <br></br>
                Formula: Price of Car - ( ARF / 2) / 10 years <br></br>
                <br></br>
                *ARF = Additional Registration Fees <br></br>
                <br></br>
                So for an example if your car cost $80,000 and your ARF is $20,000. This is how it is calculated. <br></br>
                Car depreciation = $80,000 - ($20,000 / 2) /10 year<br></br>
                <br></br>
                Your car depreciation is $7000 / year.</p>
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
                    <p>4.WHAT IS A PARALLEL IMPORT CAR?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Parallel import car dealers purchase directly from factories producing these vehicles and then import them to Singapore to sell hence the name parallel import car. <br></br>
                <br></br>
                Parallel import car dealers do not have any limitation on the brand of vehicles that they can sell and often they can bring in a variety of car models and makes that 
                Authorised Dealers are not selling or made available in Singapore. Authorised Dealers are companies that have won exclusive distribution rights for a particular car 
                brand from the manufacturer of the vehicle. <br></br>
                <br></br>
                As a result, a typical parallel import car dealer showroom will showcase a variety of car brands and models.</p>
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
                    <p>5.WHY IS THERE A PRICE DIFFERENCE BETWEEN THE AUTHORIZED DEALERS (AD) AND PARALLEL IMPORTERS (PIS)?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>There are a few factors that lead to the lower pricing structure. <br></br>

                1) Lower overhead count as compared to ADs <br></br>
                2) Less flashy showrooms</p>
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
                    <p>6.HOW DOES VENTURE CARS HANDLE CAR RECALL?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>In the event of vehicle recall, Venture Cars will contact you directly to schedule an 
                  appointment to get the affected parts fixed. As direct importers, we have full access 
                  to genuine and OEM parts from Japan. </p>
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
                    <p>7.WHAT DOES YOUR WARRANTY COVER FOR NEW CARS?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>All cars purchased from Venture Cars comes with a 5 years warranty <br></br>
                - First 5 years / 100,000 km comprehensive coverage or whichever comes first. <br></br>
                Our accessories comes with a 1 year warranty.</p>
            </AccordionDetails>
        </Accordion>

    </div>
  </ThemeProvider>
  );
};