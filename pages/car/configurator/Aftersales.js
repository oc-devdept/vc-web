import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';

class Aftersales extends Component {
    constructor(props){
        super(props);
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
                        <div className="coeTitle">2-Bid COE guaranteed package</div>
                        <div className="coeDetails">
                            <h3>$4000</h3>
                            <p>A 2 bid guaranteed COE package means that you will get your car in a month</p>                            
                        </div>
                        <button className="coeSelect">Selected</button>
                        <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="coebox">
                        <div className="coeTitle">2-Bid COE guaranteed package</div>
                        <div className="coeDetails">
                            <h3>$4000</h3>
                            <p>A 2 bid guaranteed COE package means that you will get your car in a month</p>                            
                        </div>
                        <button className="coeSelect">Selected</button>
                        <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="coebox">
                        <div className="coeTitle">2-Bid COE guaranteed package</div>
                        <div className="coeDetails">
                            <h3>$4000</h3>
                            <p>A 2 bid guaranteed COE package means that you will get your car in a month</p>                            
                        </div>
                        <button className="coeSelect">Selected</button>
                        <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                    </div>
                </div>
            </div>
            <div className="configure-sect row">
            <div className="col-lg-12 text-center" style={{marginBottom:15}}>
                <h2>2. Choose a Servicing Package</h2>
                </div>
            <div className="col-lg-4">
                <div className="coebox">
                    <div className="coeTitle">2-Bid COE guaranteed package</div>
                    <div className="coeDetails">
                        <h3>$4000</h3>
                        <p>A 2 bid guaranteed COE package means that you will get your car in a month</p>                            
                    </div>
                    <button className="coeSelect">Selected</button>
                    <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                </div>
            </div>
            <div className="col-lg-4">
            <div className="coebox">
                    <div className="coeTitle">2-Bid COE guaranteed package</div>
                    <div className="coeDetails">
                        <h3>$4000</h3>
                        <p>A 2 bid guaranteed COE package means that you will get your car in a month</p>                            
                    </div>
                    <button className="coeSelect">Selected</button>
                    <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="coebox">
                    <div className="coeTitle">2-Bid COE guaranteed package</div>
                    <div className="coeDetails">
                        <h3>$4000</h3>
                        <p>A 2 bid guaranteed COE package means that you will get your car in a month</p>                            
                    </div>
                    <button className="coeSelect">Selected</button>
                    <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    }
}

export default Aftersales;