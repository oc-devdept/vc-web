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


export default function CustomAccordionLingo() {
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
                    <p>1.WHAT IS A VAC READY CAR?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>VAC means Vehicle Approval Code. <br></br>
                A VAC ready car is a car that is ready for vehicle registration with Land, Transport and Authority. With a ready COE, car owners may drive off the car after the vehicle has been registered. 
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
                    <p>2.WHAT IS PARF?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>PARF means Preferential Additional Registration Fee. When you deregister your car, you are entitled to PARF rebate 
                which is a percentage of your ARF. To get a more accurate value of your PARF rebate, please refer to:&nbsp; 
                <a href="https://www.lta.gov.sg/content/ltaweb/en/roads-and-motoring/owning-a-vehicle/vehicle-quota-system/certificate-of-entitlement-coe.html">Land, Transport and Authority, Singapore website</a>
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
                    <p>3.WHAT IS VITAS?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>VITAS means Vehicle Inspection & Type Approval System. Vicom is the authorised inspection center for it.
                All cars in Singapore have to go through VITAS to ensure that it fulfills the technical requirements before it can be driven on Singapore’s road. 
                For more information, you can visit <a href="http://www.vicom.com.sg/vitas.htm">VICOM’s website</a> for more information.</p>
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
                    <p>4.WHAT DOES READY STOCK CARS MEAN?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Ready stock are cars that are already available in our showroom for sale. There is a shorter waiting period for these cars to 
                get on the road as parallel import car dealers do not need to make a fresh order from the factory.</p>
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
                    <p>5.WHAT DOES INDENT STOCK MEANS?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>When a car salesman tells you that he has to indent the car for you. It simply means that the shop does not have that particular car in stock 
                with them and they would need to order the car for you.</p>
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
                    <p>6.WHAT IS OMV?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>OMV is Open Market Value. It is the actual price of the vehicle. This price is not inclusive of COE, ARF, registration fees, taxes and surcharges . 
                OMV prices can differ even if it is the same vehicle make and model. <br></br>
                OMV prices are determined by the Singapore customs when the car reaches Singapore shores. For more information on OMV, you can check out 
                <a href="http://www.onemotoring.com.sg/publish/onemotoring/en/lta_information_guidelines/buy_a_new_vehicle/car_cost.html">Onemotoring webiste</a></p>
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
                    <p>7.WHAT IS ARF?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>ARF is Additional Registration Fee (ARF). It is a tax imposed upon registration of a vehicle. It is calculated based on a percentage of the 
                Open Market Value (OMV) of the vehicle.  For more information, you can refer to the official explanation provided by 
                <a href="https://www.lta.gov.sg/content/ltaweb/en/roads-and-motoring/owning-a-vehicle/vehicle-quota-system/certificate-of-entitlement-coe.html">Land, Transport and Authority, Singapore</a>
                </p>
            </AccordionDetails>
        </Accordion>

    </div>
  </ThemeProvider>
  );
};