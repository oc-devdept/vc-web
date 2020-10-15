import React, { Component } from "react";

import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';
import { formatPrice } from 'Components/Helpers/helpers';

class Coe extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.coeData = [{name: "1-Bid COE guaranteed package", price: 32001},{name: "2-Bid COE guaranteed package", price: 31001}, {name: "4-Bid COE guaranteed package", price: 29001}, {name: "6-Bid COE guaranteed package", price: 28001},  {name: "DIY", price: 0}];
        if(props.selected && props.selected.price >= 0){
            this.state.selectedIndex = this.coeData.findIndex( (item) => item.name === props.selected.name);
        }
        else {
            props.selectedCoePackage(this.coeData[0]);
        }
    }

    selectPackage = (index) => {
        this.props.selectedCoePackage(this.coeData[index]);
        this.setState({
            selectedIndex: index
        });
    }

    render(){
        return (
            <div className="configure-sect row">
                <div className="col-lg-6">
                    <div className="coebox">
                        <div className="coeTitle">{this.coeData[0].name }</div>
                        <div className="coeDetails">
                            <h3>{formatPrice(this.coeData[0].price) }</h3>
                            <p>A 1 bid guranteed COE packages means that you will get your car immediately</p>                            
                        </div>
                        { this.state.selectedIndex == 0 ? 
                            <button className="coeSelected">Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectPackage(0); }}>Select</button>
                    }
                       
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="coebox">
                        <div className="coeTitle">{this.coeData[1].name }</div>
                        <div className="coeDetails">
                            <h3>{ formatPrice(this.coeData[1].price) }</h3>
                            <p>A 2 bid guaranteed COE package means that you will get your car in 1 month</p>                            
                        </div>
                        { this.state.selectedIndex == 1 ? 
                            <button className="coeSelected">Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectPackage(1); }}>Select</button>
                    }
                                                
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="coebox">
                        <div className="coeTitle">{this.coeData[2].name }</div>
                        <div className="coeDetails">
                            <h3>{formatPrice(this.coeData[2].price) }</h3>
                            <p>A 4 bid guaranteed COE package means that you will get your car in 2 months</p>                            
                        </div>
                        { this.state.selectedIndex == 2 ? 
                            <button className="coeSelected">Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectPackage(2); }}>Select</button>
                    }                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="coebox">
                        <div className="coeTitle">{this.coeData[3].name }</div>
                        <div className="coeDetails">
                            <h3>{formatPrice(this.coeData[3].price) }</h3>
                            <p>A 6 bid guaranteed COE package means that you will get your car in 3 months</p>                            
                        </div>
                        { this.state.selectedIndex == 3 ? 
                            <button className="coeSelected">Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectPackage(3); }}>Select</button>
                    }                        
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="coebox">
                        <div className="coeTitle">{this.coeData[4].name }</div>
                        <div className="coeDetails">
                            <h3>{formatPrice(this.coeData[4].price) }</h3>
                            <p>There is no guarantee on when your COE will be available</p>                            
                        </div>
                        { this.state.selectedIndex == 4 ? 
                            <button className="coeSelected">Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectPackage(4); }}>Select</button>
                    }                        
                    </div>
                </div>
                

            </div>
            
        )
    }
}

export default Coe;
/*  <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button> */