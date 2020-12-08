import React, { useState, useEffect } from "react";
import { formatPrice } from 'Components/Helpers/helpers';

const BottomSummary = props => {
    let total = parseInt(props.productState.ProductGrade.price);
    let exteriorName = "";
    let exteriorPrice = 0;;
    let interiorName = "";
    let interiorPrice = 0;
    let rimsName = "";
    let rimsPrice = 0;
    if(props.productState.ProductExterior.selected){
        
        Object.entries(props.productState.ProductExterior.selected).map(([variance, data]) => {
            if(data != null){
                exteriorName = variance+": "+data.name;
                exteriorPrice = data.price;
                total += exteriorPrice;
            }            
        })
    }
    if(props.productState.ProductInterior.selected){
        Object.entries(props.productState.ProductInterior.selected).map(([variance, data]) => {
            if(data != null){
                interiorName = variance+": "+data.name;
                interiorPrice = data.price;
                total += interiorPrice;
            }
            
        })
    }
    if(props.productState.ProductRims.selected){
        Object.entries(props.productState.ProductRims.selected).map(([variance, data]) => {
            if(data != null){
                rimsName = variance+": "+data.name;
                rimsPrice = data.price;
                total += rimsPrice;
            }            
        })
    }
    if(props.productState.CoeSelected.price > 0){
        total += props.productState.CoeSelected.price;
    }
    if(props.productState.AftersaleSelected.warranty != null){
        total += props.productState.AftersaleSelected.warranty.price;
    }
    if(props.productState.AftersaleSelected.servicing != null){
        total += props.productState.AftersaleSelected.servicing.price;
    }
    
    if(props.productState.ProductAccessories.selected != null) {

        Object.keys(props.productState.ProductAccessories.selected).map(key => {
            props.productState.ProductAccessories.selected[key].map(item => {
                total += item.price;
            });
        })                                    

    }

    //props.updateProductTotal({total: total});
        

    return (
        <div className="bottomSummary">
            <h5>Summary</h5>
            <ol>
                <li>Car Grade
                    <ul>
                        <li><div className="info">{props.productState.ProductGrade.name}</div>
                        <div className="price">{formatPrice(props.productState.ProductGrade.price)}</div>
                        </li>
                    </ul>
                </li>
                {
                    exteriorName != "" && (
                        <li>Exterior
                        <ul>
                            <li><div className="info">{exteriorName }</div>
                                <div className="price">{formatPrice(exteriorPrice)}</div>
                            </li>
                        </ul>
                        </li>
                    )
                }
                {
                    interiorName != "" && (
                        <li>Interior
                        <ul>
                            <li><div className="info">{interiorName }</div>
                                <div className="price">{formatPrice(interiorPrice)}</div>
                            </li>
                        </ul>
                        </li>
                    )
                }
                {
                    rimsName != "" && (
                        <li>Rims
                        <ul>
                            <li><div className="info">{rimsName }</div>
                                <div className="price">{formatPrice(rimsPrice)}</div>
                            </li>
                        </ul>
                        </li>
                    )
                }
                {
                    props.productState.ProductAccessories.selected != null && (
                        <li>Accessories
                        <ul>
                            {
                                Object.keys(props.productState.ProductAccessories.selected).map(key => {
                                    return props.productState.ProductAccessories.selected[key].map(item => {
                                        return (
                                            <li><div className="info">{key +": "+item.name }</div>
                                                <div className="price">{formatPrice(item.price)}</div>
                                            </li>
                                        )
                                    })
                                })                                    
                            }
                        </ul>
                        </li>
                    )
                }
                {
                    props.productState.CoeSelected.price >= 0 && (
                        <li>COE
                        <ul>
                            <li><div className="info">{props.productState.CoeSelected.name }</div>
                                <div className="price">{formatPrice(props.productState.CoeSelected.price)}</div>
                            </li>
                        </ul>
                        </li>
                    )
                }
                {
                    props.productState.AftersaleSelected.warranty != null && props.productState.AftersaleSelected.warranty.price >= 0 && (
                        <li>Warranty
                        <ul>
                            <li><div className="info">{props.productState.AftersaleSelected.warranty.name }</div>
                                <div className="price">{formatPrice(props.productState.AftersaleSelected.warranty.price)}</div>
                            </li>
                        </ul>
                        </li>
                    )
                }
                {
                    props.productState.AftersaleSelected.servicing != null && props.productState.AftersaleSelected.servicing.price >= 0 && (
                        <li>Servicing
                        <ul>
                            <li><div className="info">{props.productState.AftersaleSelected.servicing.name }</div>
                                <div className="price">{formatPrice(props.productState.AftersaleSelected.servicing.price)}</div>
                            </li>
                        </ul>
                        </li>
                    )
                }
 

                
            </ol>
            <hr />
            <div className="totalRow">
            <div className="grandTotal">Grand Total</div>
            <div className="price">{formatPrice(total)}</div>

            {/* {console.log(total)} */}
            </div>
        </div>
    )
}
export default BottomSummary;