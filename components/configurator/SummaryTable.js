import React, { useEffect, useRef } from "react";

import { formatPrice } from "Components/Helpers/helpers";
import AccessoriesCartItem from "Components/configurator/AccessoriesCartItem";

// npm install --save-dev @iconify/react @iconify/icons-ant-design
import { Icon, InlineIcon } from '@iconify/react';
import downloadOutlined from '@iconify/icons-ant-design/download-outlined';
import moneyCheckAlt from '@iconify/icons-fa-solid/money-check-alt';
import carRepair15 from '@iconify/icons-maki/car-repair-15';



const SummaryTable = props => {
  let data = {};
  let subtotal = parseInt(props.ProductState.ProductGrade.price);
  if(props.ProductState.ProductExterior.selected){
        
    Object.entries(props.ProductState.ProductExterior.selected).map(([variance, data]) => {
      subtotal += data.price;
    })
  }
  if(props.ProductState.ProductInterior.selected){
      Object.entries(props.ProductState.ProductInterior.selected).map(([variance, data]) => {
        subtotal += data.price;
      })
  }
  if(props.ProductState.ProductRims.selected){
      Object.entries(props.ProductState.ProductRims.selected).map(([variance, data]) => {
        subtotal += data.price;
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
/*
  const dataStructuring = ProductState => {
    const {
      ProductModel,
      ProductGrade,
      ProductExterior,
      ProductInterior,
      ProductAccessories
    } = ProductState;

    let renderData = [];
    let counter = 1;
    let subtotal = 0;
    renderData.push({
      number: counter,
      image: ProductModel.image,
      title: "CAR MAKE & MODEL",
      name: ProductModel.name
    });
    counter++;
    renderData.push({
      number: counter,
      image: ProductGrade.images[0],
      title: "GRADE",
      name: ProductGrade.name,
      price: ProductGrade.price
    });
    subtotal += ProductGrade.price;
    counter++;

    Object.entries(ProductExterior.selected).map(([key, value]) => {
      renderData.push({
        number: counter,
        image: value.thumbnail,
        title: key,
        name: value.name,
        price: value.price
      });
      subtotal += value.price;
      counter++;
    });
    Object.entries(ProductInterior.selected).map(([key, value]) => {
      renderData.push({
        number: counter,
        image: value.thumbnail,
        title: key,
        name: value.name,
        price: value.price
      });
      subtotal += value.price;
      counter++;
    });
    if (props.page === "summary" && ProductAccessories.selected != null) {
      Object.entries(ProductAccessories.selected).map(([key, value]) => {     

        renderData.push({
          number: counter,
          image: value.thumbnail,
          title: "ACCESSORIES: "+key,
          name: value.name,
          price: value.price
        });
        subtotal += value.price;
        counter++;
      });
    }

    return { renderData: renderData, subtotal: subtotal };
  };

  Object.assign(data, dataStructuring(props.ProductState));

  

  const subtotalData = [
    {
      name: "SUBTOTAL",
      amount: data.subtotal
    },
    {
      name: "MISC. FEES",
      amount: misc+
    },
    {
      name: "GST",
      amount: gst
    }
  ];

  
*/
// Transform selected options into CheckoutState after product total update
useEffect(() => {
  if (!!props.getCheckoutData) {
    props.getCheckoutData(props.ProductState);
  }
}, [props.ProductState.ProductTotal]);

  return (
    <React.Fragment>
      <div className="summaryTableCard">
        <button className="summaryDownload" onClick={props.printConfigurator}><Icon icon={downloadOutlined} height="1.2em" /> Download Summary in PDF</button>
        <div className="summaryTable">
          <ol>
            <li>
                Car Grade
                <div className="summaryDetail">
                   <img src={props.ProductState.ProductGrade.images[0].path } />
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
              props.ProductState.ProductInterior.selected  && (
                <li>
                Interior
                { Object.entries(props.ProductState.ProductInterior.selected).map(([variance, data]) => {            
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
              props.ProductState.ProductRims.selected  && (
                <li>
                Rims
                { Object.entries(props.ProductState.ProductRims.selected).map(([variance, data]) => {            
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
              props.ProductState.ProductAccessories.selected  && (
                <li>
                Accessories & Options
                { Object.entries(props.ProductState.ProductAccessories.selected).map(([variance, data]) => {            
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
            
          </ol>
        </div>
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
      </div>
    </React.Fragment>
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
