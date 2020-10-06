import React, { useState, useEffect } from "react";

const BottomSummary = props => {
    let total = parseInt(props.productState.ProductGrade.price);
    let exteriorName = "";
    let exteriorPrice = 0;;
    let interiorName = "";
    let interiorPrice = 0;
    if(props.productState.ProductExterior.selected){
        
        Object.entries(props.productState.ProductExterior.selected).map(([variance, data]) => {
            console.log(variance);
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