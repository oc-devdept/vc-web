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
    backgroundColor: "#666666",
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


export default function CustomAccordion(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let html = props.data;

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
                { html.length > 0 && html[0].title }
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
                <div className="footer-accordion-info">
                {
                                    html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[0].html}} />)
                                }  
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
                { html.length > 1 && html[1].title }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className="footer-accordion-info">
                {
                      html.length > 1 && (<div dangerouslySetInnerHTML={{__html: html[1].html}} />)
                      }   
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
                { html.length > 2 && html[2].title }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className="footer-accordion-info">
                {
                      html.length > 2 && (<div dangerouslySetInnerHTML={{__html: html[2].html}} />)
                      }
                </div>   
            </AccordionDetails>
        </Accordion>
    </div>
  </ThemeProvider>
  );
};