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
    color: "#212C33",
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


export default function CustomAccordionPurchases() {
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
                    <p>1.HOW SOON CAN I GET MY CAR AFTER PLACING A DEPOSIT WITH YOU?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>The short answer to this question is that the timeline varies. How soon is subjected to a number of factors, please refer to our video below. <br></br> <br></br>


                {/*<div class="ytp-cued-thumbnail-overlay-image" style={{ background-image: `url("&quot;https://i1.ytimg.com/vi/R4zDiPbY8IQ/hqdefault.jpg&quot;")` }} /> */}

                - However a typical time line looks like this: <br></br>
                - Car will be ordered after the deposit is placed: 2 Days <br></br>
                - Factory manufacture the car: 1.5 to 3 months <br></br>
                - Shipping, car chassis number will be provided to you: 12 to 18 days <br></br>
                - Custom Clearance, OMV amount will be provided to you: 7 days <br></br>
                - LTA clearance, vehicle approval code will be provided to you: 1 to 2 months <br></br>
                - Bidding of COE, COE number will be provided to you: 1 to 3 months, in fact we will start evaluating your COE bidding when your car is being shipped to Singapore to hasten your process of getting your car <br></br>
                - Vehicle Registration: 1 Day <br></br> <br></br>
                You can track your car status by typing in your allocated order number assigned to you.
                </p>
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
                    <p>2.WHAT DOES GUARANTEED COE MEANS?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>COE means Certificate of Entitlement. You will need to get your COE before your car is on the road. COEs are bid through the COE Open Bidding System. These bidding exercises are held twice monthly. <br></br> <br></br>
                For more information about what a COE is, you can visit the <a href="https://www.lta.gov.sg/content/ltaweb/en/roads-and-motoring/owning-a-vehicle/vehicle-quota-system/certificate-of-entitlement-coe.html">Land, Transport and Authority, Singapore website</a> <br></br>
                Guaranteed COE means that you will definitely get your COE after the promised bid as compared to a non-guaranteed COE package. <br></br> <br></br>
                Considering that COE bidding takes place twice a month.  As a rule of thumb: <br></br>
                1) A 2 bid guaranteed COE package means that you will get your COE in 1 month <br></br>
                2) A 4  bid guaranteed COE package means that you will get your COE in 2 months <br></br>
                3) A 6 bid guaranteed COE package means that you will get your car in 3 months <br></br>

                </p>
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
                    <p>3.WHY DO I NEED TO TOP UP FOR MY COE?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Subjected to the ever changing market conditions and government regulations, at times we might require our customers to top up for their COE if the COE prices goes up too high, however we will give you a heads up before we bid for your COE. </p>
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
                    <p>4.HOW DO I PROCEED IF I DECIDE TO ORDER A CAR FROM YOU?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>You will have to place 2 deposits with us: <br></br> <br></br>
                - A $5000 deposit to be place with us. This money will be used to secure a car for you. <br></br>
                - A $10,700 COE deposit is required for us to bid the COE for you. <br></br> <br></br>
                Remaining downpayment balance to be paid to us before you collect your car from our showroom.
                </p>
            </AccordionDetails>
        </Accordion>
    </div>
  </ThemeProvider>
  );
};