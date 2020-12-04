import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Link from "next/link";
import { formatPrice } from 'Components/Helpers/helpers';

import { Icon } from '@iconify/react';
import fuel15 from '@iconify/icons-maki/fuel-15';
import engineIcon from '@iconify/icons-mdi/engine';
import powerIcon from '@iconify/icons-icomoon-free/power';
import arrowRight from '@iconify/icons-bi/arrow-right';
import searchIcon from '@iconify/icons-gg/search';
import smallgearIcon from '@iconify/icons-raphael/smallgear';
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
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';
import RctSectionLoader from "Components/RctSectionLoader";
import { getAllCars, getMakes, getTags, getAllPreownedCars } from "Ducks/product/ProductActions";

// Material UI Popover
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// React Day Picker Input
import DayPicker from "react-day-picker";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/it';
import { NotificationManager } from "react-notifications";
import api from 'Api'


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
    MuiBackdrop: {
      root:{
      backgroundColor: "#80 000000 !important"
      }
    }
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


// Styles for popover
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// Form Stuff
const Contact = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const Content = {
  model: '',
  date: '',
  timeslot: 'AM',
  description: '',
}


function Build() {

  // Function for popover
  const [openpopover, setOpenPopOver] = React.useState(false);

  const handleOpenPopOver = () => {
    setOpenPopOver(true);
  };
  const handleClosePopOver = () => {
    setOpenPopOver(false);
  };

  // Form Stuff Contact
  const [Form, setForm] = useState(Contact);
  const { firstName, lastName, email, phone } = Form
  // Content
  const [content, setContent] = useState(Content);
  const { model, date, timeslot } = content

  const dispatch = useDispatch();
  const [dataOptions, setDataOptions] = useState({
    limit: 20,
    skip: 0,
    filter: [],
    searchText: "",
    orderBy: []
  });

  // For React day picker input
  const [day, setDay] = useState();
  const currentYear = new Date().getFullYear();
  const currentMonth = (new Date().getMonth()) + 1;
  const currentDay = new Date().getUTCDate();

  const onChangeForm = (element, value) => {
    setForm(Form => ({ ...Form, [element]: value }));
  }

  const onChangeContent = (element, value) => {
    setContent(content => ({ ...content, [element]: value }));
  }

  // Set State for DayPickerInput
  const handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    content.date = selectedDay;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Send to server! ', Form)
      await api.post(`/bookings/createBooking`, { data: { contact: Form, content: content, service: 'Maintenance', status: 'Awaiting' } });
      // success
      setForm(() => Contact);
      NotificationManager.success('Contact form sent successfully');

    } catch (e) {
      // failed
      NotificationManager.error('Network error, please try again');

    }

  }

  useEffect(() => {
    dispatch(getAllPreownedCars(20, dataOptions.skip, filters, dataOptions.searchText, ["selling_Price ASC"]));
    dispatch(getMakes());
    dispatch(getTags());
  }, []);

  const preownedCarList = useSelector(state => {
    //turn carlist into pairs
    //return state.ProductState.allCarList.tableData;
    let list = [];
    let set = [];
    let tableData = state.ProductState.allPreownedCarList.tableData;
    for (let i = 0; i < tableData.length; i++) {
      set.push(tableData[i]);
      if (i % 2 == 1) {
        list.push(set);
        set = [];
      }
    }
    if (tableData.length % 2 == 1) {
      list.push([tableData[tableData.length - 1]]);
    }
    return list;
  });

  const pageLoading = useSelector(state => state.ProductState.allPreownedCarList.loading);

  const totalPages = useSelector(state => {
    let total = state.ProductState.allPreownedCarList.totalCount;
    if (total > 0) {
      total = Math.ceil(total / 20);
    }
    return total;
  })

  const allMakes = useSelector(state => state.ProductState.allMakes.data);
  const allTags = useSelector(state => state.ProductState.allTags.data);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [aEl, setAEl] = React.useState(null);
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

  const [orderBy, setOrderBy] = React.useState({ name: "None", value: "" });

  const [page, setPage] = React.useState(1);

  // // Get all data and calculate pages
  // const result = api.get("/products/getallPreowned");
  // let products = Product.find();
  // console.log("total amount of preowned cars in db here")
  // console.log(products.length)


  // Function for pagination, calls redux
  const handlePage = (event, page) => {
    setPage(page);
    dataOptions.skip = (page-1)*20
    dispatch(getAllPreownedCars(dataOptions.limit, dataOptions.skip, filters, dataOptions.searchText, ["selling_Price ASC"]));
  }

  const onChangeOrder = (name, val) => {
    setOrderBy({ name: name, value: val });
    setDataOptions({
      ...dataOptions,
      orderBy: [val]
    })
    dispatch(getAllPreownedCars(dataOptions.limit, dataOptions.skip, filters, dataOptions.searchText, [val]));
  }

  const [filters, setFilters] = React.useState({});

  const checkMakes = (event) => {
    if (event.target.checked) {
      if (filters.brand) {
        let fil = [...filters.brand];
        fil.push(event.target.value);
        setFilters({
          ...filters,
          brand: fil
        })
      }
      else {
        setFilters({
          ...filters,
          brand: [event.target.value]
        })
      }
    }
    else {
      if (filters.brand) {
        let fil = [...filters.brand];
        let index = fil.indexOf(event.target.value);
        if (index > -1) {
          fil.splice(index, 1);
        }
        setFilters({
          ...filters,
          brand: fil
        })
      }
    }
  };

  const checkTags = (event) => {
    if (event.target.checked) {
      if (filters.tag) {
        let fil = [...filters.tag];
        fil.push(event.target.value);
        setFilters({
          ...filters,
          tag: fil
        })
      }
      else {
        setFilters({
          ...filters,
          tag: [event.target.value]
        })
      }
    }
    else {
      if (filters.tag) {
        let fil = [...filters.tag];
        let index = fil.indexOf(event.target.value);
        if (index > -1) {
          fil.splice(index, 1);
        }
        setFilters({
          ...filters,
          tag: fil
        })
      }
    }
  }

  const changePrice = (event) => {
    if (event.target.name == "min-price") {

      setFilters({
        ...filters,
        minPrice: event.target.value
      })

    }
    else if (event.target.name == "max-price") {
      setFilters({
        ...filters,
        maxPrice: event.target.value
      })
    }
  }

  const applyFilters = () => {
    dispatch(getAllPreownedCars(dataOptions.limit, dataOptions.skip, filters, dataOptions.searchText, dataOptions.orderBy));
  }

  const resetFilters = () => {
    setFilters({});
    dispatch(getAllPreownedCars(dataOptions.limit, dataOptions.skip));
  }

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
                    <p className="filter-type-title">Price: </p>
                    <FormControl >
                      <InputLabel htmlFor="min-price">Min Price</InputLabel>
                      <Select
                        native
                        onChange={changePrice}
                        value={filters.minPrice ? filters.minPrice : ""}
                        inputProps={{
                          name: 'min-price',
                          id: 'min-price',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={30000}>$30,000</option>
                        <option value={50000}>$50,000</option>
                        <option value={70000}>$70,000</option>
                        <option value={100000}>$100,000</option>
                        <option value={150000}>$150,000</option>
                      </Select>
                    </FormControl>
                    &nbsp; &nbsp;
                  <FormControl >
                      <InputLabel htmlFor="max-price">Max Price</InputLabel>
                      <Select
                        native
                        onChange={changePrice}
                        value={filters.maxPrice ? filters.maxPrice : ""}
                        inputProps={{
                          name: 'max-price',
                          id: 'max-price',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={70000}>$70,000</option>
                        <option value={100000}>$100,000</option>
                        <option value={150000}>$150,000</option>
                        <option value={180000}>$180,000</option>
                        <option value={240000}>$240,000</option>
                        <option value={300000}>$300,000</option>
                      </Select>
                    </FormControl>
                  </FormGroup>

                  <FormGroup row>
                    <p className="filter-type-title">Car Brand: </p>
                    <div className="filter-checkbox">
                      {
                        allMakes.map(make => (
                          <FormControlLabel
                            control={<CustomCheckbox
                              onChange={checkMakes}
                              name={make.name}
                              value={make.id}
                              checked={filters.brand && filters.brand.includes(make.id)}

                            />}
                            label={make.name}
                            className={classes.checkbox}
                          />
                        ))
                      }

                    </div>
                  </FormGroup>
                  <FormGroup row>
                    <p className="filter-type-title">Car Type: </p>
                    <div className="filter-checkbox">
                      {
                        allTags.map(tag => (
                          <FormControlLabel
                            control={<CustomCheckbox onChange={checkTags} name={tag.name} value={tag.id} />}
                            label={tag.name}
                            className={classes.checkbox}
                          />
                        ))
                      }
                    </div>
                  </FormGroup>
                  <div className="filter-button" align="right">

                    <a className="btn gw-without-bg-btn" onClick={resetFilters}>
                      <Icon icon={resetIcon} /> &nbsp;&nbsp; Reset
                    </a>


                    <a className="btn buildBtn" onClick={applyFilters}>
                      Apply Changes
                    </a>

                  </div>
                </Popover>
              </div>
              <div class="sortBy">
                <span class="sortBy-Btn-text">Sort By :</span>
                <StyledButton variant="contained" className="sortBy-Btn" aria-controls="simple-menu" aria-haspopup="true" onClick={onOpen}>
                  {orderBy.name} <Icon className={classes.arrowDown} icon={arrowDownAlt2} />
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
                  <MenuItem onClick={() => onChangeOrder("Price (Lowest to Highest)", "selling_Price ASC")}>Price (Lowest to Highest)</MenuItem>
                  <MenuItem onClick={() => onChangeOrder("Price (Highest to Lowest)", "selling_Price DESC")}>Price (Highest to Lowest)</MenuItem>
                </StyledMenu>
              </div>
            </div>
            {
              preownedCarList.map(car => {
                return (<div class="row">
                  <div class="column">
                    <div class="left">
                      <img src={car[0].image} />
                    </div>
                    <div class="right">
                      <p className="types">{car[0].tag ? (car[0].tag).toUpperCase() : ""}</p>
                      <h3 className="car-name">{(car[0].make + " " + car[0].model + " " + car[0].name).toUpperCase()}</h3>
                      <h5 className="car-price"> fr {formatPrice(car[0].selling_price)} </h5>
                    </div>
                    <div class="build-content">
                      {
                        car[0].productDetailValue && car[0].productDetailValue.map(detail => (
                          <p class="part1"><span class="engCap">
                            {detail.detailCategory.name.indexOf("Engine") >= 0 ?
                              <Icon icon={engineIcon} color="#595959" /> :
                              detail.detailCategory.name.indexOf("Power") >= 0 ?
                                <Icon icon={powerIcon} color="#595959" /> :
                                detail.detailCategory.name.indexOf("Fuel") >= 0 ?
                                  <Icon icon={fuel15} color="#595959" /> :
                                  <Icon icon={smallgearIcon} color="#595959" />
                            }
                            &nbsp; {detail.detailCategory.name}: {detail.value + (detail.detailCategory.unit != "." ? detail.detailCategory.unit : "")}
                          </span></p>
                        ))
                      }

                    </div>
                    <div className="button">
                      <Button variant="outlined" color="primary" onClick={handleOpenPopOver}>
                        <Icon icon={searchIcon} width="1.5rem" /> &nbsp;&nbsp; ENQUIRY
                    </Button>
                      <Dialog onClose={handleClosePopOver} aria-labelledby="customized-dialog-title" open={openpopover} maxWidth={'md'} fullWidth={'md'}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClosePopOver}>
                          Preowned Car Enquiry Form
                      </DialogTitle>
                        <DialogContent dividers>
                          <h6>PERSONAL DETAILS</h6>
                          <Typography gutterBottom>
                            <div class="form-row">
                              <div class="form-group col-md-2">
                                <label for="inputTitle">Title</label>
                                <select id="inputTitle" class="form-control">
                                  <option>Mr.</option>
                                  <option>Mrs.</option>
                                  <option>Ms.</option>
                                  <option>Dr.</option>
                                </select>
                              </div>
                              <div class="form-group col-md-5">
                                <label for="inputFirstName">First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  required={true}
                                  value={firstName}
                                  onChange={(e) => onChangeForm('firstName', e.target.value)}
                                  placeholder="Enter your first name" />
                              </div>
                              <div class="form-group col-md-5">
                                <label for="inputLastName">Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  required={true}
                                  value={lastName}
                                  onChange={(e) => onChangeForm('lastName', e.target.value)}
                                  placeholder="Enter your last name" />
                              </div>
                            </div>
                          </Typography>
                          <Typography gutterBottom>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputPhoneNumber">Phone Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phoneNumber"
                                  required={true}
                                  value={phone}
                                  onChange={(e) => onChangeForm('phone', e.target.value)}
                                  placeholder="Enter your phone number" />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputEmailAddess">Email Address</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="emailAddress"
                                  required={true}
                                  value={email}
                                  onChange={(e) => onChangeForm('email', e.target.value)}
                                  placeholder="Enter your email address" />
                              </div>
                            </div>
                          </Typography>
                          <h6>BOOK CAR DETAILS</h6>
                          <Typography gutterBottom>
                            <div class="form-row">
                              <div class="form-group col-md-4">
                                <label for="inputCarModel">Your Car Model</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="carModel"
                                  required={true}
                                  value={car[0].make + " " + car[0].model + " " + car[0].name}
                                  // onChange={(e) => onChangeContent('model', e.target.value)}
                                  placeholder="Enter your car model" />
                              </div>
                              <div class="form-group col-md-4">
                                <label for="inputDate"> View Dates</label>
                                <DayPickerInput
                                  formatDate={formatDate}
                                  parseDate={parseDate}
                                  //classNames={ {container: "form-control"} }
                                  inputProps={{
                                    type: "email",
                                    class: "form-control",
                                    id: "date",
                                  }}
                                  //onChange={(e) => onChangeContent('date', e.target.value)}
                                  value={date}
                                  onDayChange={(e) => handleDayChange(e)}
                                  selectedDay={day}
                                  dayPickerProps={{
                                    modifiers: {
                                      disabled: [
                                        {
                                          before: new Date(),
                                          after: new Date(currentYear, currentMonth, currentDay)
                                        }
                                      ]
                                    }
                                  }}
                                  placeholder={`${formatDate(new Date())}`}
                                />
                              </div>
                              <div class="form-group col-md-4">
                                <label for="inputTimesort">View Timeslots</label>
                                <select
                                  id="inputTimesort"
                                  value={timeslot}
                                  onChange={(e) => onChangeContent('timeslot', e.target.value)}
                                  class="form-control">
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                            </div>
                          </Typography>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClosePopOver} color="primary">
                            Book Appointment
                        </Button>
                        </DialogActions>
                      </Dialog>
                    </div>

                  </div>
                  {car.length > 1 && (
                    <div class="column">
                      <div class="left">
                        <img src={car[1].image} />
                      </div>
                      <div class="right">
                        <p className="types">{car[1].tag ? (car[1].tag).toUpperCase() : ""}</p>
                        <h3 className="car-name">{(car[1].make + " " + car[1].model + " " + car[1].name).toUpperCase()}</h3>
                        <h5 className="car-price"> fr {formatPrice(car[1].selling_price)} </h5>
                      </div>
                      <div class="build-content">
                        {
                          car[1].productDetailValue && car[1].productDetailValue.map(detail => (
                            <p class="part1"><span class="engCap">
                              {detail.detailCategory.name.indexOf("Engine") >= 0 ?
                                <Icon icon={engineIcon} color="#595959" /> :
                                detail.detailCategory.name.indexOf("Power") >= 0 ?
                                  <Icon icon={powerIcon} color="#595959" /> :
                                  detail.detailCategory.name.indexOf("Fuel") >= 0 ?
                                    <Icon icon={fuel15} color="#595959" /> :
                                    <Icon icon={smallgearIcon} color="#595959" />
                              }
                              &nbsp; {detail.detailCategory.name}: {detail.value + (detail.detailCategory.unit != "." ? detail.detailCategory.unit : "")}
                            </span></p>
                          ))
                        }
                      </div>
                      <div className="button">
                        <Button variant="outlined" color="primary" onClick={handleOpenPopOver}>
                          <Icon icon={searchIcon} width="1.5rem" /> &nbsp;&nbsp; ENQUIRY
                        </Button>
                        <Dialog onClose={handleClosePopOver} aria-labelledby="customized-dialog-title" open={openpopover} maxWidth={'md'} fullWidth={'md'}>
                          <DialogTitle id="customized-dialog-title" onClose={handleClosePopOver}>
                            Preowned Car Enquiry Form
                        </DialogTitle>
                          <DialogContent dividers>
                            <h6>PERSONAL DETAILS</h6>
                            <Typography gutterBottom>
                              <div class="form-row">
                                <div class="form-group col-md-2">
                                  <label for="inputTitle">Title</label>
                                  <select id="inputTitle" class="form-control">
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                    <option>Dr.</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-5">
                                  <label for="inputFirstName">First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    required={true}
                                    value={firstName}
                                    onChange={(e) => onChangeForm('firstName', e.target.value)}
                                    placeholder="Enter your first name" />
                                </div>
                                <div class="form-group col-md-5">
                                  <label for="inputLastName">Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    required={true}
                                    value={lastName}
                                    onChange={(e) => onChangeForm('lastName', e.target.value)}
                                    placeholder="Enter your last name" />
                                </div>
                              </div>
                            </Typography>
                            <Typography gutterBottom>
                              <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label for="inputPhoneNumber">Phone Number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    required={true}
                                    value={phone}
                                    onChange={(e) => onChangeForm('phone', e.target.value)}
                                    placeholder="Enter your phone number" />
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="inputEmailAddess">Email Address</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="emailAddress"
                                    required={true}
                                    value={email}
                                    onChange={(e) => onChangeForm('email', e.target.value)}
                                    placeholder="Enter your email address" />
                                </div>
                              </div>
                            </Typography>
                            <h6>BOOK CAR DETAILS</h6>
                            <Typography gutterBottom>
                              <div class="form-row">
                                <div class="form-group col-md-4">
                                  <label for="inputCarModel">Your Car Model</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="carModel"
                                    required={true}
                                    value={car[1].make + " " + car[1].model + " " + car[1].name}
                                    // onChange={(e) => onChangeContent('model', e.target.value)}
                                    placeholder="Enter your car model" />
                                </div>
                                <div class="form-group col-md-4">
                                  <label for="inputDate"> View Dates</label>
                                  <DayPickerInput
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    //classNames={ {container: "form-control"} }
                                    inputProps={{
                                      type: "email",
                                      class: "form-control",
                                      id: "date",
                                    }}
                                    //onChange={(e) => onChangeContent('date', e.target.value)}
                                    value={date}
                                    onDayChange={(e) => handleDayChange(e)}
                                    selectedDay={day}
                                    dayPickerProps={{
                                      modifiers: {
                                        disabled: [
                                          {
                                            before: new Date(),
                                            after: new Date(currentYear, currentMonth, currentDay)
                                          }
                                        ]
                                      }
                                    }}
                                    placeholder={`${formatDate(new Date())}`}
                                  />
                                </div>
                                <div class="form-group col-md-4">
                                  <label for="inputTimesort">View Timeslots</label>
                                  <select
                                    id="inputTimesort"
                                    value={timeslot}
                                    onChange={(e) => onChangeContent('timeslot', e.target.value)}
                                    class="form-control">
                                    <option>AM</option>
                                    <option>PM</option>
                                  </select>
                                </div>
                              </div>
                            </Typography>
                          </DialogContent>
                          <DialogActions>
                            <Button autoFocus onClick={onSubmit} color="primary">
                              Book Appointment
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </div>)
                  }
                </div>)
              })
            }
            <div className={classes.paginationArea} >
              <Pagination 
                count={totalPages} 
                page={page}
                onChange={handlePage} />
            </div>
          </div>
        </section>
      </DefaultLayout>
    </MuiThemeProvider>
  );
}

export default Build;
