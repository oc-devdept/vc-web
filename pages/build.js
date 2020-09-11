import React, { Component } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Link from "next/link";

import { Icon } from '@iconify/react';
import fuel15 from '@iconify/icons-maki/fuel-15';
import engineIcon from '@iconify/icons-mdi/engine';
import powerIcon from '@iconify/icons-icomoon-free/power';
import arrowRight from '@iconify/icons-bi/arrow-right';
import searchIcon from '@iconify/icons-gg/search';
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';
import resetIcon from '@iconify/icons-carbon/reset';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';
import { shadows } from '@material-ui/system';

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      root: {
        height: 2,
        padding: '15px 0',
        margin: '16px 10px 20px',
        width: '70%',
      },
      thumb: {
        color: "#f29d30"
      },
      track: {
        color: "#f29d30",
        height: 5,
      },
      rail: {
        color: "grey",
        height: 5,
        borderRadius: 50,
      }
    },
    MuiPaper: {
      root: {
        padding: "20px",
      }
    },
    MuiCheckbox: {
      root: {
        color: "#f29d30",
        '&$checked': {
          color: "#f29d30",
        },
        // checked: { color: "#f29d30 !important" }
      },
    },
    MuiPagination: {
      root: {
        color: "#212C33 !important",
      },
    },
    MuiPaginationItem: {
      root: {
        "&:hover": {
          backgroundColor: "#212C33 !important",
          color: "#ffffff !important",
        },
        "&$selected": {
          "backgroundColor": "#212C33 !important",
          color: "#ffffff !important",
        }
      },
    },
  }
});

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: '20px 0 20px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: "#ffffff",
    color: "#f29d30",
    "&:hover, &:focus": {
      color: "#ffffff",
      hoverBackgroundColor: "#f29d30",
      backgroundColor: "#f29d30",

    },
  },
  arrowDown: {
    marginLeft: "20px",
  },
  checkbox: {
    color: "#595959",
    fontSize: "10px",
    marginTop: "10px",
  },
  checkboxTitle: {
    margin: "20px",
  },
  paginationArea: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

const StyledButton = withStyles({
  root: {
    backgroundColor: "#ffffff !important",
    color: "#f29d30",
    "&:hover, &:focus": {
      color: "#ffffff",
      backgroundColor: "#f29d30 !important",
    },
  },
})(Button);

const StyledMenu = withStyles({
  paper: {
    boxShadow: '0 3px 5px 2px rgba(105, 105, 105, .2)',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}

    {...props}
  />
));

const CustomCheckbox = withStyles({
  root: {
    color: "#f29d30",
    '&$checked': {
      color: "#f29d30",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Build() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl ] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [aEl, setAEl ] = React.useState(null);
  const onOpen = (e) => {
    setAEl(e.currentTarget);
  }

  const onClose = () => {
    setAEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  return (
    <MuiThemeProvider theme={muiTheme}>
    <DefaultLayout>
        <section className="build-area">
          <div className="container">
            <div className="section-title without-bg" align="center">
                <h2>CHOOSE A MODEL TO BUILD</h2>
            </div>
            <div class="first_row">
              <div class="filter">
                <StyledButton aria-describedby={id} variant="contained" onClick={handleClick}>
                  Filter <Icon className={classes.arrowDown} icon={arrowDownAlt2} />
                </StyledButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Typography className={classes.typography}>Show me only these options:</Typography>
                  <FormGroup row>
                    <p className="filter-type-title">Price Range: </p>
                    <Slider 
                      defaultValue={[0,200000]} 
                      valueLabelDisplay="on"
                      // min={50000}
                      // max={200000}
                      // marks={marks}
                    />
                  </FormGroup>
                  <FormGroup row>
                    <p className="filter-type-title">Car Brand: </p>
                    <div className="filter-checkbox">
                    <FormControlLabel
                      control={<CustomCheckbox onChange={handleChange} />}
                      label="Toyota"
                      className={classes.checkbox}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox onChange={handleChange} />}
                      label="Honda"
                      className={classes.checkbox}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox onChange={handleChange} />}
                      label="Suzuki"
                      className={classes.checkbox}
                    />
                    </div>
                  </FormGroup>
                  <FormGroup row>
                    <p className="filter-type-title">Car Type: </p>
                    <div className="filter-checkbox">
                      <FormControlLabel
                        control={<CustomCheckbox onChange={handleChange} />}
                        label="MPV / SUV"
                        className={classes.checkbox}
                      />
                      <FormControlLabel
                        control={<CustomCheckbox onChange={handleChange} />}
                        label="Stationwagon"
                        className={classes.checkbox}
                      />
                      <FormControlLabel
                        control={<CustomCheckbox onChange={handleChange} />}
                        label="Hatchback"
                        className={classes.checkbox}
                      /> 
                    </div>
                  </FormGroup>
                  <div className="filter-button" align="right">
                    <Link href="/">
                    <a className="btn gw-without-bg-btn">
                      <Icon icon={resetIcon} /> &nbsp;&nbsp; Reset
                    </a>
                    </Link>
                    <Link href="/">
                    <a className="btn buildBtn">
                        Apply Changes
                    </a>
                    </Link>
                  </div>
                </Popover>
              </div>

              <div class="sortBy">
                <span class="sortBy-Btn-text">Sort By :</span>
                <StyledButton variant="contained" className="sortBy-Btn" aria-controls="simple-menu" aria-haspopup="true" onClick={onOpen}>
                  View All <Icon className={classes.arrowDown} icon={arrowDownAlt2} />
                </StyledButton>
                <StyledMenu
                  id="simple-menu"
                  anchorEl={aEl}
                  open={Boolean(aEl)}
                  onClose={onClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={onClose}>Price (Lowest to Highest)</MenuItem>
                  <MenuItem onClick={onClose}>Price (Highest to Lowest)</MenuItem>
                  <MenuItem onClick={onClose}>Release Date (Newest to Oldest)</MenuItem>
                  <MenuItem onClick={onClose}>Release Date (Oldest to Newest)</MenuItem>
                </StyledMenu>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="left">
                  <img src="/static/feature-cars/honda-fit.png"/>
                </div>
                <div class="right">
                  <p className="types">MPV / SUV</p>
                  <h3 className="car-name">TOYOTA ALPHARD</h3>
                  <h5 className="car-price"> fr $175,888</h5>
                </div>
                <div class="build-content">
                  <p class="part1-left"><span class="engCap"><Icon icon={engineIcon} color="#595959"/> &nbsp; Eng Cap: 2493cc</span></p>
                  <p class="part1-right"><span class="power"><Icon icon={powerIcon} color="#595959"/> &nbsp; Power: 180bhp</span></p>
                  <p class="part2-left"><Icon icon={fuel15} color="#595959"/> &nbsp; Fuel Consumption: 11.6 km / litre</p>
                </div>
                <div className="button">
                  <Link href="/">
                  <a className="btn gw-without-bg-btn">
                    <Icon icon={searchIcon} width="1.5rem"/> &nbsp;&nbsp; VIEW DETAILS
                  </a>
                  </Link>
                  <Link href="/">
                  <a className="btn buildBtn">
                      BUILD NOW &nbsp;&nbsp; <Icon className="arrow-icon" icon={arrowRight} width="1.5rem"/>
                  </a>
                  </Link>
                </div>
              </div>
              <div class="column">
                <div class="left">
                  <img src="/static/feature-cars/honda-fit.png"/>
                </div>
                <div class="right">
                  <p className="types">MPV / SUV</p>
                  <h3 className="car-name">TOYOTA ALPHARD</h3>
                  <h5 className="car-price"> fr $175,888</h5>
                </div>
                <div class="build-content">
                  <p class="part1-left"><span class="engCap"><Icon icon={engineIcon} color="#595959"/> &nbsp; Eng Cap: 2493cc</span></p>
                  <p class="part1-right"><span class="power"><Icon icon={powerIcon} color="#595959"/> &nbsp; Power: 180bhp</span></p>
                  <p class="part2-left"><Icon icon={fuel15} color="#595959"/> &nbsp; Fuel Consumption: 11.6 km / litre</p>
                </div>
                <div className="button">
                  <Link href="/">
                  <a className="btn gw-without-bg-btn">
                    <Icon icon={searchIcon} width="1.5rem"/> &nbsp;&nbsp; VIEW DETAILS
                  </a>
                  </Link>
                  <Link href="/">
                  <a className="btn buildBtn">
                      BUILD NOW &nbsp;&nbsp; <Icon className="arrow-icon" icon={arrowRight} width="1.5rem"/>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.paginationArea} >
              <Pagination count={3} />
            </div>
          </div>
      </section>
    </DefaultLayout>
    </MuiThemeProvider>
  );
}

export default Build;
