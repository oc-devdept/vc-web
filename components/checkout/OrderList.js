import React from "react";

import { formatPrice } from "Components/Helpers/helpers";
import AccessoriesCartItem from "Components/configurator/AccessoriesCartItem";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Icon, InlineIcon } from '@iconify/react';
import downloadOutlined from '@iconify/icons-ant-design/download-outlined';
import moneyCheckAlt from '@iconify/icons-fa-solid/money-check-alt';
import carRepair15 from '@iconify/icons-maki/car-repair-15';

import { printConfigurator } from "Ducks/product/ProductActions";
import { useDispatch, useSelector } from "react-redux";

export default function OrderList({ checkoutState }) {
  const dispatch = useDispatch();
 
  const {    
    ProductGrade,
    ProductExterior,
    ProductInterior,
    ProductRims,
    ProductAccessories,
    CoeSelected,
    AftersaleSelected    
  } = checkoutState;


  /*
  const dataStructuring = checkoutState => {
    const {
      ProductModel,
      ProductGrade,
      productVariance,
      productAccessories
    } = checkoutState;
    let data = [];
    let counter = 1;
    data.push({
      number: counter,
      image: ProductModel.image,
      title: "CAR MAKE & MODEL",
      name: ProductModel.name
    });
    counter++;
    data.push({
      number: counter,
      image: ProductGrade.images[0],
      title: "GRADE",
      name: ProductGrade.name,
      price: ProductGrade.price
    });
    counter++;
    productVariance.forEach(element => {
      data.push({
        number: counter,
        image: element.thumbnail,
        title: "VARIANCE",
        name: element.name,
        price: element.price
      });
      counter++;
    });
    productAccessories.forEach(element => {
      data.push({
        number: counter,
        image: element.thumbnail,
        title: "ACCESSORY",
        name: element.name,
        price: element.price
      });
      counter++;
    });
    return data;
  };
  
  const costStructuring = checkoutState => {
    const { subtotal, misc, gst } = checkoutState;
    let data = [
      { name: "SUBTOTAL", amount: subtotal },
      { name: "MISC. FEES", amount: misc },
      { name: "GST", amount: gst }
    ];
    return data;
  };
*/
  return (
    <React.Fragment>
      <div className="summaryTableCard">
        <button className="summaryDownload" onClick={()=> {dispatch(printConfigurator())}}><Icon icon={downloadOutlined} height="1.2em" /> Download Summary in PDF</button>
        <div className="summaryTable">
          <ol>
            <li>
                Car Grade
                <div className="summaryDetail">
                   <img src={ProductGrade.images[0].path } />
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
          <h3>FINANCING DETAILS</h3>          
          <div className="financeDetails">
            <div className="totalPrice financeRow">
              <div className="fItem">Total Car Price</div>
              <div className="fPrice">{checkoutState.total ? formatPrice(checkoutState.total) : "-"}</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Downpayment</div>
              <div className="fPrice">{ checkoutState.downPayment ? formatPrice(checkoutState.downPayment) : "-" }</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Monthly Installments</div>
              <div className="fPrice">{checkoutState.monthlyInstallment ? formatPrice(checkoutState.monthlyInstallment): "-"}</div>
            </div>
            <div className=" financeRow">
              <div className="fItem">Loan Amount</div>
              <div className="fPrice">{checkoutState.loanAmount ? formatPrice(checkoutState.loanAmount) : "-" }</div>
            </div>
            <div className="financeRow">
              <div className="fItem">Online Payable Deposit</div>
              <div className="fPrice">{ checkoutState.deposit ? formatPrice(checkoutState.deposit): "-" }</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
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