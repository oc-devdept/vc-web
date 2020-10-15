import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';

class Aftersales extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedWarranty: 0,
            selectedServicing: 0
        }
        this.warrantyData = [{name: "3 Yrs/60,000km", price: 0}, {name: "5 Years/ Unlimited km", price: 1200}];
        this.servicingData = [{name: "1 Yr/20,000km BSP", price: 0}, {name: "3 Yrs/60,000km BSP", price: 600}, {name: "5 Yrs/100,000km BSP", price: 1200}];
        if(props.selected){
            if(props.selected.warranty != null){
                this.selectedWarranty = this.warrantyData.find((item) => item.name === props.selected.warranty.name);
            }
            if(props.selected.servicing != null){
                this.selectedServicing = this.servicingData.find((item) => item.name === props.selected.servicing.name);
            }
        }
    }

    selectWarranty = (index) => {
        let wData = null;
        let sData = this.state.selectedServicing >= 0 ? this.servicingData[this.state.selectedServicing] : null;
        if(index >= 0){
            wData = this.warrantyData[index];                        
        }
        
        this.setState({
            selectedWarranty: index
        });
        this.props.selectedServicingPackage({ warranty: wData, servicing: sData});
    }

    selectServicing = (index) => {
        let sData = null;
        let wData = this.state.selectedWarranty >= 0 ? this.warrantyData[this.state.selectedWarranty] : null;
        if(index >= 0){
            
            sData = this.servicingData[index];
            
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
                
                <div className="col-lg-4">
                    <div className="coebox">
                        <div className="coeTitle">{this.warrantyData[0].name }</div>
                        <div className="coeDetails">
                            <h3>${this.warrantyData[0].price }</h3>
                                                      
                        </div>
                        { this.state.selectedWarranty == 0 ? 
                            <button className="coeSelected" onClick={ ()=> {this.selectWarranty(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectWarranty(0); }}>Select</button>
                    }
                       
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="coebox">
                    <div className="coeTitle">{this.warrantyData[1].name }</div>
                        <div className="coeDetails">
                            <h3>${this.warrantyData[1].price }</h3>
                                                      
                        </div>
                        { this.state.selectedWarranty == 1 ? 
                            <button className="coeSelected" onClick={ ()=> {this.selectWarranty(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectWarranty(1); }}>Select</button>
                    }
                       
                    </div>
                </div>
            </div>
            <div className="configure-sect row">
            <div className="col-lg-12 text-center" style={{marginBottom:15}}>
                <h2>2. Choose a Servicing Package</h2>
                </div>
            <div className="col-lg-4">
                <div className="coebox">
                    <div className="coeTitle">{this.servicingData[0].name }</div>
                        <div className="coeDetails">
                            <h3>${this.servicingData[0].price }</h3>
                                                      
                        </div>
                    { this.state.selectedServicing == 0 ? 
                            <button className="coeSelected" onClick={ ()=> {this.selectServicing(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectServicing(0); }}>Select</button>
                    }
                   
                </div>
            </div>
            <div className="col-lg-4">
            <div className="coebox">
                <div className="coeTitle">{this.servicingData[1].name }</div>
                        <div className="coeDetails">
                            <h3>${this.servicingData[1].price }</h3>
                                                      
                        </div>
                    { this.state.selectedServicing == 1 ? 
                            <button className="coeSelected" onClick={ ()=> {this.selectServicing(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectServicing(1); }}>Select</button>
                    }
                    
                </div>
            </div>
            <div className="col-lg-4">
                <div className="coebox">
                    <div className="coeTitle">{this.servicingData[2].name }</div>
                        <div className="coeDetails">
                            <h3>${this.servicingData[2].price }</h3>
                                                      
                        </div>
                    { this.state.selectedServicing == 2 ? 
                            <button className="coeSelected" onClick={ ()=> {this.selectServicing(-1); }}>Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectServicing(2); }}>Select</button>
                    }
                   
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    }
}

export default Aftersales;