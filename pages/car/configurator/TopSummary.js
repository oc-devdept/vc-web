import React, { useState, useEffect } from "react";
import { formatPrice } from 'Components/Helpers/helpers';

const TopSummary = props => {
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
    return (
        <div className="topSummary">
            <div className="totalRow">
            <div className="grandTotal">Grand Total: {formatPrice(total)}</div>
            {console.log(props.productState)}
            {/* {console.log(total)} */}
            </div>
        </div>
    )
}
export default TopSummary;