import React, { useState, useEffect } from "react";

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
            exteriorName = variance+": "+data.name;
            exteriorPrice = data.price;
            total += exteriorPrice;
        })
    }
    if(props.productState.ProductInterior.selected){
        Object.entries(props.productState.ProductInterior.selected).map(([variance, data]) => {
            interiorName = variance+": "+data.name;
            interiorPrice = data.price;
            total += interiorPrice;
        })
    }
    if(props.productState.ProductRims.selected){
        Object.entries(props.productState.ProductRims.selected).map(([variance, data]) => {
            rimsName = variance+": "+data.name;
            rimsPrice = data.price;
            total += rimsPrice;
        })
    }
    return (
        <div className="bottomSummary">
            <h5>Summary</h5>
            <ol>
                <li>Car Grade
                    <ul>
                        <li><div className="info">{props.productState.ProductGrade.name}</div>
                        <div className="price">${props.productState.ProductGrade.price}</div>
                        </li>
                    </ul>
                </li>
                {
                    exteriorName != "" && (
                        <li>Exterior
                        <ul>
                            <li><div className="info">{exteriorName }</div>
                                <div className="price">${exteriorPrice}</div>
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
                                <div className="price">${interiorPrice}</div>
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
                                <div className="price">${rimsPrice}</div>
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
                                        total += item.price;
                                        return (
                                            <li><div className="info">{key +": "+item.name }</div>
                                                <div className="price">${item.price}</div>
                                            </li>
                                        )
                                    })
                                })                                    
                            }
                        </ul>
                        </li>
                    )
                }


                
            </ol>
            <hr />
            <div className="totalRow">
            <div className="grandTotal">Grand Total</div>
            <div className="price">${total}</div>
            </div>
        </div>
    )
}
export default BottomSummary;