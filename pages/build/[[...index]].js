import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import Link from "next/link";

import { formatPrice } from 'Components/Helpers/helpers';
import { useRouter } from 'next/router'

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
import {
  getAllCars, getMakes, getTags
  
} from "Ducks/product/ProductActions";
import { shadows } from '@material-ui/system';

import {
  useParams
} from "react-router-dom";
 
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
    MuiFormLabel: {
      root: {
        color: "#f29d30",
      }
    },
    MuiSelect: {
      select: {
        width:100
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
  const router = useRouter()
  const {  index } = router.query;

  const dispatch = useDispatch();
  const [dataOptions, setDataOptions ] = useState({
    limit: 20,
    skip: 0,
    filter: [], 
    searchText: "", 
    orderBy: []
  });

  useEffect((props) => {
    dispatch(getAllCars(dataOptions.limit, dataOptions.skip));
    dispatch(getMakes());
    dispatch(getTags());


  }, []);



  const carList = useSelector(state => {
    //turn carlist into pairs
    //return state.ProductState.allCarList.tableData;
    
    let list = [];
    let set = [];
    let tableData = state.ProductState.allCarList.tableData;
    for(let i=0; i < tableData.length; i++){
      set.push(tableData[i]);
      if(i % 2 == 1){
        list.push(set);
        set = [];
      }
    }
    if(tableData.length % 2 == 1){
      list.push([tableData[tableData.length-1]]);
    }
    return list;
    
  });

  const pageLoading = useSelector(state => state.ProductState.allCarList.loading);

  const totalPages = useSelector(state => {
    let total = state.ProductState.allCarList.totalCount;
    if(total > 0){
      total = Math.ceil(total / 20);
    }
    return total;
  })
  const [filters, setFilters] = React.useState({});
  const allMakes = useSelector(state => state.ProductState.allMakes.data);
  const allTags = useSelector(state => state.ProductState.allTags.data);

  useEffect( (props) => {


    if(allMakes.length < 1) return;
    
    const carMake = index[0];
    //Only one  arg
    if(carMake == "all" && index.length ==1 ) return;
    var carTag ="";
    if(index.length == 2 ){
      carTag = index[1];
    }
    // SEARCH FOR ALL CARS
    if(carMake == "all" && carTag == "all"){
      return; 
    }
      // if (allMakes && lastItem != "all"){
      var result = allMakes.filter(make => {
        return make.name == carMake
      })
  
      var tag = allTags.filter(tag => {
        return tag.name == carTag
      })
      //NO SEARCH RESULTS FOR BOTH CAR MAKE AND CAR TAG AND IT IS NOT ALL 
   if(result.length < 1 && carMake!= "all" || (index.length > 1 && tag.length < 1 && carTag!= "all") ){
    router.push('[index]','all', { shallow: true })
    return;
   }
      // router.push('all', undefined, { shallow: true })
      
    var event = { 

      target: {
        checked: false,
        value: ""
      }
    };
          
    var tagEvent = { 

      target: {
        checked: false,
        value: ""
      }
    };
    var brand = [];
    var vtype = [];
    //There is a hit on car make
    if( result.length > 0){
    brand.push(result[0].id);
    event.target.value = result[0].id

    }
    //hit on car tag which isnt all 
    if(tag.length > 0 ){
      vtype.push(tag[0].id);
      tagEvent.target.value = tag[0].id
    }
    var losd= {
      brand: brand,
      tag: vtype
    }
    
    event.target.checked = true;

      checkMakes(event)

      
      // checkTags(tagEvent)
      dispatch(getAllCars(dataOptions.limit, dataOptions.skip, losd, dataOptions.searchText, dataOptions.orderBy));
    // }
  }, 
  [allMakes,  allTags]);

 
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

  const [orderBy, setOrderBy] = React.useState({name: "None", value: ""});

  const onChangeOrder = (name, val) => {
    setOrderBy({ name: name, value: val});
    setDataOptions({
      ...dataOptions,
      orderBy: [val]
    })
    dispatch(getAllCars(dataOptions.limit, dataOptions.skip, filters, dataOptions.searchText, [val]));
  }
  



  const checkMakes = (event) => {
  
    if(event.target.checked){
    
      if(filters.brand){

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

      if(filters.brand){
        let fil = [...filters.brand];
        let index = fil.indexOf(event.target.value);
        if(index > -1){
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

    if(event.target.checked){
      if(filters.tag){
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
      if(filters.tag){
        let fil = [...filters.tag];
        let index = fil.indexOf(event.target.value);
        if(index > -1){
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
    if(event.target.name == "min-price"){
      
        setFilters({
          ...filters,
          minPrice: event.target.value
        })
      
    }
    else if(event.target.name == "max-price"){
      setFilters({
        ...filters,
        maxPrice: event.target.value
      })
    }
  }

  const applyFilters = () => {

    if( (filters.brand && filters.brand.length == 1) &&  (filters.tag && filters.tag.length == 1)){

      var result = allMakes.filter( make => {
        return make.id == filters.brand[0]
      })
      // console.log(result)
      var tag = allTags.filter(tag => {
        return tag.id == filters.tag[0]
      })
 
      // `/images/${path}`
      // router.push('build/[[...index]]',`/${result[0].name}/${tag[0].name}`, { shallow: true })
      router.push('index',`${result[0].name}/${tag[0].name}`, { shallow: true })
    }else if( (filters.brand && filters.brand.length == 1) &&   !filters.tag ){
      
      var result = allMakes.filter( make => {
        return make.id == filters.brand[0]
      })
      router.push('index',`${result[0].name}`, { shallow: true })
    }else if( filters.tag.length == 1 &&   !filters.brand){

          
      var result = allTags.filter( make => {
        return make.id == filters.tag[0]
      })
      router.push('index',`all/${result[0].name}`, { shallow: true })
    }
    dispatch(getAllCars(dataOptions.limit, dataOptions.skip, filters, dataOptions.searchText, dataOptions.orderBy));
  }

  const resetFilters = () => {
    setFilters({});
    router.push('[all]','all' , { shallow: true })
    dispatch(getAllCars(dataOptions.limit, dataOptions.skip));
  }

  return (
    <MuiThemeProvider theme={muiTheme}>
    <DefaultLayout>
      { pageLoading && <RctSectionLoader />}
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
              carList.map(car => {
                return (<div class="row">
                  <div class="column">
                    <div class="left">
                      <img src={car[0].image } />
                    </div>
                    <div class="right">
                      <p className="types">{ car[0].tag ? (car[0].tag).toUpperCase() : "" }</p>
              <h3 className="car-name">{ (car[0].make +" "+ car[0].model).toUpperCase()  }</h3>
              <h5 className="car-price"> fr {formatPrice(car[0].selling_price)} </h5>
              </div>
              <div class="build-content">
                 {
                   car[0].productDetailValue && car[0].productDetailValue.map(detail => (
                    <p class="part1"><span class="engCap">
                      { detail.detailCategory.name.indexOf("Engine") >= 0 ? 
                          <Icon icon={engineIcon} color="#595959"/>:
                          detail.detailCategory.name.indexOf("Power") >= 0 ? 
                          <Icon icon={powerIcon} color="#595959"/> :
                          detail.detailCategory.name.indexOf("Fuel") >= 0 ?
                          <Icon icon={fuel15} color="#595959"/> : 
                          <Icon icon={smallgearIcon} color="#595959"/>
                         }
                           &nbsp; { detail.detailCategory.name }: {detail.value + (detail.detailCategory.unit != "." ? detail.detailCategory.unit : "")} 
                    </span></p>
                   ))
                 }

                </div>
                <div className="button">
                  {
                    car[0].page && ( 
                    <Link href={car[0].page }>
                    <a className="btn gw-without-bg-btn">
                      <Icon icon={searchIcon} width="1.5rem"/> &nbsp;&nbsp; VIEW DETAILS
                    </a>
                    </Link>)
                  }
                 {car[0].build && (
                  <Link href={car[0].build}>
                  <a className="btn buildBtn">
                      BUILD NOW &nbsp;&nbsp; <Icon className="arrow-icon" icon={arrowRight} width="1.5rem"/>
                  </a>
                  </Link>
                 )}
                </div>
                  </div>
                 { car.length > 1 && (
                  <div class="column">
                  <div class="left">
                      <img src={car[1].image} />
                    </div>
                    <div class="right">
                      <p className="types">{ car[1].tag ? (car[1].tag).toUpperCase() : "" }</p>
              <h3 className="car-name">{ (car[1].make +" "+ car[1].model).toUpperCase()  }</h3>
              <h5 className="car-price"> fr {formatPrice(car[1].selling_price)} </h5>
              </div>
              <div class="build-content">
              {
                   car[1].productDetailValue && car[1].productDetailValue.map(detail => (
                    <p class="part1"><span class="engCap">
                      { detail.detailCategory.name.indexOf("Engine") >= 0 ? 
                          <Icon icon={engineIcon} color="#595959"/>:
                          detail.detailCategory.name.indexOf("Power") >= 0 ? 
                          <Icon icon={powerIcon} color="#595959"/> :
                          detail.detailCategory.name.indexOf("Fuel") >= 0 ?
                          <Icon icon={fuel15} color="#595959"/> : 
                          <Icon icon={smallgearIcon} color="#595959"/>
                         }
                           &nbsp; { detail.detailCategory.name }: {detail.value + (detail.detailCategory.unit != "." ? detail.detailCategory.unit : "")} 
                    </span></p>
                   ))
                 }
                </div>
                <div className="button">
                {
                    car[1].page && ( 
                    <Link href={car[1].page}>
                    <a className="btn gw-without-bg-btn">
                      <Icon icon={searchIcon} width="1.5rem"/> &nbsp;&nbsp; VIEW DETAILS
                    </a>
                    </Link>)
                  }
                  {car[1].build && (
                  <Link href={car[1].build}>
                  <a className="btn buildBtn">
                      BUILD NOW &nbsp;&nbsp; <Icon className="arrow-icon" icon={arrowRight} width="1.5rem"/>
                  </a>
                  </Link>
                  )}
                </div>
                  </div>)
               }
                </div>)
              })
            }

            <div className={classes.paginationArea} >
              <Pagination count={totalPages} />
            </div>
          </div>
      </section>
    </DefaultLayout>
    </MuiThemeProvider>
  );
}



export default Build;
/*
<
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

*/