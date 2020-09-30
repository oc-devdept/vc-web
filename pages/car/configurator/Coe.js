import React, { Component } from "react";

import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi/magnify';


class Coe extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="configure-sect row">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
            
        )
    }
}

export default Coe;