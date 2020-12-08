import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { formatPrice } from "Components/Helpers/helpers";
import { useRouter } from 'next/router'



import AccessoriesCartItem from "Components/configurator/AccessoriesCartItem";

// npm install --save-dev @iconify/react @iconify/icons-ant-design
import { Icon, InlineIcon } from '@iconify/react';
import downloadOutlined from '@iconify/icons-ant-design/download-outlined';
import moneyCheckAlt from '@iconify/icons-fa-solid/money-check-alt';
import carRepair15 from '@iconify/icons-maki/car-repair-15';

import Popover from '@material-ui/core/Popover';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const SummaryTable = props => {
  let data = {};
  const router = useRouter()

  let subtotal = parseInt(props.ProductState.ProductGrade.price);
  if(props.ProductState.ProductExterior.selected){
        
    Object.entries(props.ProductState.ProductExterior.selected).map(([variance, data]) => {
      if(data != null){
        subtotal += data.price;
      }
      
    })
  }
  if(props.ProductState.ProductInterior.selected){
      Object.entries(props.ProductState.ProductInterior.selected).map(([variance, data]) => {
        if(data != null){
          subtotal += data.price;
        }
        
      })
  }
  if(props.ProductState.ProductRims.selected){
      Object.entries(props.ProductState.ProductRims.selected).map(([variance, data]) => {
        if(data != null){
          subtotal += data.price;
        }
        
      })
  }
  if(props.ProductState.CoeSelected.price > 0){
    subtotal += props.ProductState.CoeSelected.price;
  }
  if(props.ProductState.AftersaleSelected.warranty != null){
    subtotal += props.ProductState.AftersaleSelected.warranty.price;
  }
  if(props.ProductState.AftersaleSelected.servicing != null){
    subtotal += props.ProductState.AftersaleSelected.servicing.price;
  }
  const misc = 0;
  const gst = (subtotal + misc) * 0;
  const total = subtotal + misc + gst;
  const allFees = useRef({
    subtotal: subtotal,
    misc: misc,
    gst: gst,
    total: total
  });

  // Update product total
  useEffect(() => {
    if (!!props.updateProductTotal) {
      props.updateProductTotal(allFees);
    }
  }, [allFees]);
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
      props.printConfigurator(userEmail);
      setSendCount(1);
    }
  }

  const sendConfig = useSelector(state => state.ProductState.sendConfigurator);
// Transform selected options into CheckoutState after product total update
useEffect(() => {
  if (!!props.getCheckoutData) {
    props.getCheckoutData(props.ProductState);
  }    
}, [props.ProductState.ProductTotal]);

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
       
          {props.ProductState.sendConfigurator.id &&  (
               <div>
               <ul>
            <li>
           
      <h5> Link to This Page:   {"http://localhost:3000"+ router.asPath + "/" + props.ProductState.sendConfigurator.id}</h5></li></ul></div>)}

          <ol>
            <li>
        
                Car Grade 
                <div className="summaryDetail">
                   <img src={props.ProductState.ProductGrade.thumbs } />
                   <p className="details">
                     Car Grade <br />
                     <span className="detailDescription">{props.ProductState.ProductGrade.name}</span>
                   </p>
                   <p className="price">{formatPrice(props.ProductState.ProductGrade.price)}</p>
                </div>
            </li>
            {
              props.ProductState.ProductExterior.selected  && (
                <li>
                Exterior
                { Object.entries(props.ProductState.ProductExterior.selected).map(([variance, data]) => {            
                  if(data != null){
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
              props.ProductState.ProductInterior.selected  && (
                <li>
                Interior
                { Object.entries(props.ProductState.ProductInterior.selected).map(([variance, data]) => {            
                  if(data != null){
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
              props.ProductState.ProductRims.selected  && (
                <li>
                Rims
                { Object.entries(props.ProductState.ProductRims.selected).map(([variance, data]) => {            
                  if(data != null){                  
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
              props.ProductState.ProductAccessories.selected  && (
                <li>
                Accessories & Options
                { Object.entries(props.ProductState.ProductAccessories.selected).map(([variance, data]) => {
                       return props.ProductState.ProductAccessories.selected[variance].map(item => (
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
                    props.ProductState.CoeSelected.price >= 0 && (
                        <li>COE
                            <div className="summaryDetail">
                        <Icon icon={moneyCheckAlt} width="71" />
                        <p className="details">
                        {props.ProductState.CoeSelected.name } <br />
                            <span className="detailDescription"></span>
                          </p>
                          <p className="price">{formatPrice(props.ProductState.CoeSelected.price)}</p>
                        </div>
                        </li>
                    )
                }
          {
                   ( props.ProductState.AftersaleSelected.warranty != null || props.ProductState.AftersaleSelected.servicing != null) && (
                        <li>Aftersales Package

                          {
                            props.ProductState.AftersaleSelected.warranty != null && props.ProductState.AftersaleSelected.warranty.price >= 0 && (
                              <div className="summaryDetail">
                                <Icon icon={carRepair15} width="71" />
                                <p className="details">
                                  Warranty Package
                                 <br />
                                    <span className="detailDescription">{props.ProductState.AftersaleSelected.warranty.name }</span>
                                  </p>
                                  <p className="price">{formatPrice(props.ProductState.AftersaleSelected.warranty.price)}</p>
                                </div>
                            )
                          }

                    {
                          props.ProductState.AftersaleSelected.servicing != null && props.ProductState.AftersaleSelected.servicing.price >= 0 && (
                            <div className="summaryDetail">
                              <Icon icon={carRepair15} width="71" />
                              <p className="details">
                                Servicing Package
                                <br />
                                  <span className="detailDescription">{props.ProductState.AftersaleSelected.servicing.name }</span>
                                </p>
                                <p className="price">{formatPrice(props.ProductState.AftersaleSelected.servicing.price)}</p>
                              </div>
                          )
                        }
                          
                        </li>
                    )
                }
       <div className="financingTable">
          <h3>FINANCING DETAILS</h3>
          The final calculated amount below is based on the input values under "Car Loan Calculator".
          <div className="financeDetails">
            <div className="totalPrice financeRow">
              <div className="fItem">Total Car Price</div>
              <div className="fPrice">{formatPrice(total)}</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Downpayment</div>
              <div className="fPrice">{ formatPrice(props.loanCalculator.downPayment) }</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Monthly Installments</div>
              <div className="fPrice">{formatPrice(props.loanCalculator.monthlyInstallment)}</div>
            </div>
            <div className=" financeRow">
              <div className="fItem">Loan Amount</div>
              <div className="fPrice">{formatPrice(props.loanCalculator.loanAmount) }</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Online Payable Deposit</div>
              <div className="fPrice">{ formatPrice(props.loanCalculator.deposit) }</div>
            </div>
          </div>
        </div>

          </ol>
        </div>
      </div>
      </ThemeProvider>
  );
};

export default SummaryTable;

/*
<Card className={`rounded-0 ${props.page === "summary" && "border-0"}`}>
        {props.page === "accessories" ? (
          <Card.Header
            className="py-1 px-3 rounded-0"
            style={{ backgroundColor: "#4B6674" }}
          >
            <p style={{ fontWeight: 600, color: "#ffffff" }}>TOTAL (SGD)</p>
          </Card.Header>
        ) : (
          <Card.Header
            className="py-3 px-0 rounded-0 text-center"
            style={{ backgroundColor: "transparent" }}
          >
            
            <span className="summarySubtitle">CUSTOMIZATION OVERVIEW</span>
          

            
          </Card.Header>
        )}
        <ListGroup variant="flush">
          <ListGroup.Item className="configure-summary-options p-2">
            {data.renderData.map((item, key) => (
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
            {subtotalData.map((item, key) => (
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
                <p>{formatPrice(total)}</p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>

        
         
         
*/
