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


export default function CustomAccordionHybrid() {
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
                    <p>1.WHAT IS A HYBRID CAR?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>A hybrid car utilises technology to minimise fuel consumption usage. It uses 2 power sources to power the vehicle. The usage of 2 power sources will lead to a reduced in fuel consumption which brings cost savings to the driver.</p>
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
                    <p>2.WHAT IS THE LIFESPAN OF A HYBRID BATTERY?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>Hybrid batteries are built to last for more than 10 years. Toyota and Honda have spent great years perfecting their hybrid technologies and have up their warranty for hybrid batteries to 8 years.</p>
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
                    <p>3.WHAT IS THE MAINTENANCE COST OF A HYBRID CAR AS COMPARE TO A NORMAL CAR?</p>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>The service cost of maintaining a hybrid or petrol car is the same for cars sold under Venture Cars. You can look at our&nbsp;</p>
                <p><a href="https://www.venturecars.com.sg/after-sales">service packages&nbsp;</a></p> <br></br>
                <p>offered.</p>
            </AccordionDetails>
        </Accordion>

    </div>
  </ThemeProvider>
  );
};