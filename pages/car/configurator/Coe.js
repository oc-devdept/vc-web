import React, { Component } from "react";

import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';
import { formatPrice } from 'Components/Helpers/helpers';

class Coe extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0,
            diyInput: 40000,
            coeData: props.list.data
        }
        if(this.state.coeData[this.state.coeData.length-1].name != "DIY"){
            this.state.coeData.push( {name: "DIY", description:"There is no guarantee on when your COE will be available. Enter your price above", price: 40000});
        }
        //this.coeData = [{name: "1-Bid COE guaranteed package", price: 32001},{name: "2-Bid COE guaranteed package", price: 31001}, {name: "4-Bid COE guaranteed package", price: 29001}, {name: "6-Bid COE guaranteed package", price: 28001},  {name: "DIY", price: 40000}];
        if(props.selected && props.selected.price >= 0){
            this.state.selectedIndex = this.state.coeData.findIndex( (item) => item.name === props.selected.name);
            if(props.selected.name == "DIY"){
                this.state.diyInput = props.selected.price;
            }
        }
        else {
            props.selectedCoePackage(this.state.coeData[0]);
        }
    }

    selectPackage = (index) => {
        this.props.selectedCoePackage(this.state.coeData[index]);
        this.updateCoeDiy(this.state.diyInput);
        this.setState({
            selectedIndex: index
        });
    }

    updateCoeDiy(val){

        this.state.coeData[this.state.coeData.length - 1].price = parseInt(val);
    }

    changeDiy = (evt) => {
        this.setState({
            diyInput: evt.target.value
        });
        if(this.state.selectedIndex == this.state.coeData.length - 1){
            this.updateCoeDiy(evt.target.value);
            this.props.selectedCoePackage(this.state.coeData[this.state.selectedIndex]);
        }
    }

    render(){
        return (
            <div className="configure-sect row">
                {
                    this.state.coeData.map((item, index) => (
                        <div className="col-lg-6 col-sm-6">
                            <div className="coebox">
                                <div className="coeTitle">{item.name }</div>
                                <div className="coeDetails">
                               { index == this.state.coeData.length -1 ? (<h3><input type="text" name="coeprice" value={this.state.diyInput} onChange={this.changeDiy} />   </h3>) :
                                    (<h3>{formatPrice(item.price) }</h3>)
                                    }
                                    <p>{item.description }</p>                            
                                </div>
                                { this.state.selectedIndex == index ? 
                                    <button className="coeSelected">Selected</button> : <button className="coeSelect" onClick={ ()=> {this.selectPackage(index); }}>Select</button>
                            }
                            
                            </div>
                        </div>
                    ))
                }
                

            </div>
            
        )
    }
}

export default Coe;
/*  <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button> */