import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';
import { formatPrice } from 'Components/Helpers/helpers';

class Aftersales extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedWarranty: 0,
            selectedServicing: 0,
            warrantyData: props.warrantyList.data,
            servicingData: props.servicingList.data
        }
        //this.warrantyData = [{name: "3 Yrs/60,000km", price: 0}, {name: "5 Years/ Unlimited km", price: 1200}];
        //this.servicingData = [{name: "1 Yr/20,000km BSP", price: 0}, {name: "3 Yrs/60,000km BSP", price: 600}, {name: "5 Yrs/100,000km BSP", price: 1200}];
        if(props.selected){
            if(props.selected.warranty != null){
                this.state.selectedWarranty = this.state.warrantyData.find((item) => item.name === props.selected.warranty.name);
            }
            if(props.selected.servicing != null){
                this.state.selectedServicing = this.state.servicingData.find((item) => item.name === props.selected.servicing.name);
            }
            this.props.selectedServicingPackage({ warranty: this.state.warrantyData[this.state.selectedWarranty], servicing: this.state.servicingData[this.state.selectedServicing]});
        }
        else {            
            this.props.selectedServicingPackage({ warranty: this.state.warrantyData[0], servicing: this.state.servicingData[0]});
        }
        
    }

    selectWarranty = (index) => {
        let wData = null;
        let sData = this.state.selectedServicing >= 0 ? this.state.servicingData[this.state.selectedServicing] : null;
        if(index >= 0){
            wData = this.state.warrantyData[index];                        
        }
        
        this.setState({
            selectedWarranty: index
        });
        this.props.selectedServicingPackage({ warranty: wData, servicing: sData});
    }

    selectServicing = (index) => {
        let sData = null;
        let wData = this.state.selectedWarranty >= 0 ? this.state.warrantyData[this.state.selectedWarranty] : null;
        if(index >= 0){
            
            sData = this.state.servicingData[index];
            
        }
        this.setState({
            selectedServicing: index
        });
        this.props.selectedServicingPackage({ warranty: wData, servicing: sData});
    }

    render(){
        return (
            <React.Fragment>
            <div className="configure-sect row">
                <div className="col-lg-12 text-center" style={{marginBottom:15}}>
                <h2>1. Choose a Warranty Package</h2>
                </div>
                
                {
                    this.state.warrantyData.map((item, index)=> (
                        <div className="col-lg-4">
                            <div className="coebox">
                                <div className="coeTitle">{item.name }</div>
                                <div className="coeDetails">
                                    <h3>{formatPrice(item.price) }</h3>
                                                            
                                </div>
                                { this.state.selectedWarranty == index ? 
                                    <button className="coeSelected" onClick={ ()=> {this.selectWarranty(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectWarranty(index); }}>Select</button>
                            }
                            
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className="configure-sect row">
            <div className="col-lg-12 text-center" style={{marginBottom:15}}>
                <h2>2. Choose a Servicing Package</h2>
                </div>
                {
                    this.state.servicingData.map((item, index)=> (
                        <div className="col-lg-4">
                            <div className="coebox">
                                <div className="coeTitle">{item.name }</div>
                                <div className="coeDetails">
                                    <h3>{formatPrice(item.price) }</h3>
                                                            
                                </div>
                                { this.state.selectedServicing == index ? 
                                    <button className="coeSelected" onClick={ ()=> {this.selectServicing(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectServicing(index); }}>Select</button>
                            }
                            
                            </div>
                        </div>
                    ))
                }
            
        </div>
        </React.Fragment>
        )
    }
}

export default Aftersales;