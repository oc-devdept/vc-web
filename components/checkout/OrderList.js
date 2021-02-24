import React from "react";

import { formatPrice } from "Components/Helpers/helpers";
import AccessoriesCartItem from "Components/configurator/AccessoriesCartItem";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Icon, InlineIcon } from '@iconify/react';
import downloadOutlined from '@iconify/icons-ant-design/download-outlined';
import moneyCheckAlt from '@iconify/icons-fa-solid/money-check-alt';
import carRepair15 from '@iconify/icons-maki/car-repair-15';
import Popover from '@material-ui/core/Popover';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { printConfigurator } from "Ducks/product/ProductActions";
import { useDispatch, useSelector } from "react-redux";

export default function OrderList(props) {
  const dispatch = useDispatch();
 
  const {    
    ProductGrade,
    ProductExterior,
    ProductInterior,
    ProductRims,
    ProductAccessories,
    CoeSelected,
    AftersaleSelected    
  } = props.checkoutState;


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const sendConfigurator = () => {
    if(userEmail != ""){
      dispatch(printConfigurator(userEmail));
      setSendCount(1);
    }
  }

  const sendConfig = useSelector(state => state.ProductState.sendConfigurator);

  const [sendCount, setSendCount] = React.useState(0);
  const [userEmail, setUserEmail ] = React.useState(props.user_email);

  const theme = createMuiTheme({
    overrides: {
        MuiPopover: {
            paper: {
                backgroundColor: "#ffffff",
                padding:15,
                maxWidth:"120%",
                maxHeight:"120%",
                border:"2px solid #f29d30",
                borderRadius:5
            },
        },      
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      
        { ProductGrade ? (
          <div className="summaryTableCard">
       <button className="summaryDownload" onClick={handleClick}><Icon icon={downloadOutlined} height="1.2em" /> Download Summary in PDF</button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {
         sendConfig.loading ? <p className="popTitleMsg">Sending email ...</p>
         : sendConfig.message != "" ? <p className="popTitleMsg">{ sendConfig.message }</p>
         : ""
      }
       {sendConfig.message == "" &&  <p className="popTitle">Send Summary to this email address</p> }
        <input type="text" onChange={(evt) => { setUserEmail(evt.target.value)}} value={userEmail} disabled={(sendCount > 0)} /> <button onClick={sendConfigurator} disabled={(sendCount > 0)}>Send</button>
      </Popover>
        <div className="summaryTable">
          <ol>
            <li>
                Car Grade
                <div className="summaryDetail">
                   <img src={ProductGrade.thumbs } />
                   <p className="details">
                     Car Grade <br />
                     <span className="detailDescription">{ProductGrade.name}</span>
                   </p>
                   <p className="price">{formatPrice(ProductGrade.price)}</p>
                </div>
            </li>
            {
              ProductExterior  && (
                <li>
                Exterior
                { Object.entries(ProductExterior).map(([variance, data]) => {
                  if(data != null) {            
                    return (
                      <div className="summaryDetail">
                      <img src={data.thumbnail} />
                      <p className="details">
                        { variance } <br />
                          <span className="detailDescription">{data.name}</span>
                        </p>
                        <p className="price">{formatPrice(data.price)}</p>
                      </div>
                    )
                    }
                    else {
                      return (<div></div>)
                    }
                  }) 
            
              }
            </li>
              )
            }

          {
              ProductInterior  && (
                <li>
                Interior
                { Object.entries(ProductInterior).map(([variance, data]) => {  
                  if(data != null) {          
                    return (
                      <div className="summaryDetail">
                      <img src={data.thumbnail} />
                      <p className="details">
                        { variance } <br />
                          <span className="detailDescription">{data.name}</span>
                        </p>
                        <p className="price">{formatPrice(data.price)}</p>
                      </div>
                    )
                    }
                    else {
                      return (<div></div>)
                    }
                  }) 
            
              }
            </li>
              )
            }

{
              ProductRims  && (
                <li>
                Rims
                { Object.entries(ProductRims).map(([variance, data]) => { 
                  if(data != null) {           
                    return (
                      <div className="summaryDetail">
                      <img src={data.thumbnail} />
                      <p className="details">
                        { variance } <br />
                          <span className="detailDescription">{data.name}</span>
                        </p>
                        <p className="price">{formatPrice(data.price)}</p>
                      </div>
                    )
                  } else {
                    return (<div></div>)
                  }
                  }) 
            
              }
            </li>
              )
            }
            {
              ProductAccessories  && (
                <li>
                Accessories & Options
                { Object.entries(ProductAccessories).map(([variance, data]) => {
                       return ProductAccessories[variance].map(item => (
                        <div className="summaryDetail">
                        <img src={item.thumbnail} />
                        <p className="details">
                          { variance } <br />
                            <span className="detailDescription">{item.name}</span>
                          </p>
                          <p className="price">{formatPrice(item.price)}</p>
                        </div>
                       ))       
                    
                     
                    
                  }) 
            
              }
            </li>
              )
            }
          
            {
                    CoeSelected.price >= 0 && (
                        <li>COE
                            <div className="summaryDetail">
                        <Icon icon={moneyCheckAlt} width="71" />
                        <p className="details">
                        {CoeSelected.name } <br />
                            <span className="detailDescription"></span>
                          </p>
                          <p className="price">{formatPrice(CoeSelected.price)}</p>
                        </div>
                        </li>
                    )
                }
          {
                   ( AftersaleSelected.warranty != null || AftersaleSelected.servicing != null) && (
                        <li>Aftersales Package

                          {
                            AftersaleSelected.warranty != null && AftersaleSelected.warranty.price >= 0 && (
                              <div className="summaryDetail">
                                <Icon icon={carRepair15} width="71" />
                                <p className="details">
                                  Warranty Package
                                 <br />
                                    <span className="detailDescription">{AftersaleSelected.warranty.name }</span>
                                  </p>
                                  <p className="price">{formatPrice(AftersaleSelected.warranty.price)}</p>
                                </div>
                            )
                          }

                    {
                          AftersaleSelected.servicing != null && AftersaleSelected.servicing.price >= 0 && (
                            <div className="summaryDetail">
                              <Icon icon={carRepair15} width="71" />
                              <p className="details">
                                Servicing Package
                                <br />
                                  <span className="detailDescription">{AftersaleSelected.servicing.name }</span>
                                </p>
                                <p className="price">{formatPrice(AftersaleSelected.servicing.price)}</p>
                              </div>
                          )
                        }
                          
                        </li>
                    )
                }
            
          </ol>
        </div>
        <div className="financingTable">
          {/* <h3>FINANCING DETAILS</h3>           */}
          <h3>Financing Details</h3>          
          <div className="financeDetails">
            <div className="totalPrice financeRow">
              <div className="fItem">Total Car Price</div>
              <div className="fPrice">{props.checkoutState.total ? formatPrice(props.checkoutState.total) : "-"}</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Downpayment</div>
              <div className="fPrice">{ props.checkoutState.downPayment ? formatPrice(props.checkoutState.downPayment) : "-" }</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Monthly Installments</div>
              <div className="fPrice">{props.checkoutState.monthlyInstallment ? formatPrice(props.checkoutState.monthlyInstallment): "-"}</div>
            </div>
            <div className=" financeRow">
              <div className="fItem">Loan Amount</div>
              <div className="fPrice">{props.checkoutState.loanAmount ? formatPrice(props.checkoutState.loanAmount) : "-" }</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Online Payable Deposit</div>
              <div className="fPrice">{ props.checkoutState.deposit ? formatPrice(props.checkoutState.deposit): "-" }</div>
            </div>
          </div>
        </div>
        </div>
        ) : ( <div className="summaryTableCard"><h2 style={{color: "white"}}>Your cart is empty</h2></div>)}
        
      
    </ThemeProvider>
  );
}
/*
 <React.Fragment>
      <Card className="rounded-0 border-0">
        <Card.Header
          className="py-3 px-0 rounded-0 d-flex"
          style={{ backgroundColor: "transparent" }}
        >
          <p
            style={{
              fontWeight: 600,
              color: "#4b6674",
              margin: 0,
              display: "inline-block"
            }}
          >
            ORDER SUMMARY OF YOUR CUSTOMISED CAR
          </p>
        </Card.Header>

        <ListGroup variant="flush">
          <ListGroup.Item className="configure-summary-options p-2">
            {!!checkoutState.productGradeId &&
              dataStructuring(checkoutState).map((item, key) => (
                <AccessoriesCartItem
                  key={key}
                  number={item.number}
                  image={item.image}
                  title={item.title}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </ListGroup.Item>
          <ListGroup.Item className="configure-summary-subtotal p-2">
            {!!checkoutState.productGradeId &&
              costStructuring(checkoutState).map((item, key) => (
                <div key={key} className="d-flex flex-row align-items-center">
                  <div className="col-1 p-0 mr-1"></div>
                  <div className="col-2 p-0 mr-1"></div>
                  <div className="col-5 pr-3 mr-1 text-right">
                    <p style={{ fontWeight: 600, color: "#4B6674" }}>
                      {item.name}
                    </p>
                  </div>
                  <div className="col-4 p-0 mr-1">
                    <p>{formatPrice(item.amount)}</p>
                  </div>
                </div>
              ))}
          </ListGroup.Item>
          <ListGroup.Item className="configure-summary-total p-2">
            <div className="d-flex flex-row align-items-center">
              <div className="col-1 p-0 mr-1"></div>
              <div className="col-2 p-0 mr-1"></div>
              <div className="col-5 pr-3 mr-1 text-right">
                <p style={{ fontWeight: 700, color: "#4B6674" }}>
                  TOTAL CAR PRICE
                </p>
              </div>
              <div className="col-4 p-0 mr-1">
                <p>{formatPrice(checkoutState.total)}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      
  
*/