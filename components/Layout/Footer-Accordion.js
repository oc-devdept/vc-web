import * as React from "react";
import Link from "next/link";
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
    backgroundColor: "#f29d30",
  },
  subHeading: {
    fontSize: '14px',
    fontWeight: "500",
    width: '100%',
    margin: '0 auto !important',
    paddingLeft: "25px",
  },
  expanded: {
    "&$expanded": {
      margin: 0,
    }
  },
  expandMore: {
    "&$expanded": {
      margin: 0,
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
        paddingRight: '0 !important',
        paddingBottom: '0 !important'
      },
    },
    MuiPaper: {
      root: {
        margingBottom: '20px !important',
        backgroundColor: 'transparent',
        boxShadow: 'none !important',
      }
    },
    MuiSvgIcon: {
        root: {
            color: '#ffffff'
        }
      }
  },
});


export default function CustomAccordion() {
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
                    Quick Links
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="footer-accordion-info">
                    <p><Link href="/"><a>Home</a></Link></p>
                    <p><Link href="/build/all/all"><a>Build Car</a></Link></p>
                    <p><Link href="/about"><a>About Us</a></Link></p>
                    <p><Link href="/contact-us"><a>Contact Us</a></Link></p>
                </div>
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
                    Showroom Hours
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className="footer-accordion-info">
                    <p>
                        <strong>Monday - Saturday :</strong><br/>
                        09:00AM - 07:00PM
                    </p>
                    <p>
                        <strong>Sunday &amp; Public Holidays :</strong><br/>
                        09:00AM - 06:00PM
                    </p>        
                </div>   
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
                    Locate Us
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className="footer-accordion-info">
                    <p>
                        Main Showroom<br />
                        33 Ubi Ave , #01-47/48 Vertex Singapore 408868
                    </p>
                    <p>
                        BWWS Workshop<br />
                        291-293 Kaki Bukit Ave 1, Shun Li Industrial Park, Singapore 416080
                    </p>   
                </div>   
            </AccordionDetails>
        </Accordion>
    </div>
  </ThemeProvider>
  );
};