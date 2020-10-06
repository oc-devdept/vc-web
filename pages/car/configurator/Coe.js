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
                            <p>A 2 bid guaranteed COE package means that you will get your car in 1 month</p>                            
                        </div>
                        <button className="coeSelect">Selected</button>
                        <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="coebox">
                        <div className="coeTitle">4-Bid COE guaranteed package</div>
                        <div className="coeDetails">
                            <h3>$3000</h3>
                            <p>A 4 bid guaranteed COE package means that you will get your car in 2 months</p>                            
                        </div>
                        <button className="coeSelect">Selected</button>
                        <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="coebox">
                        <div className="coeTitle">6-Bid COE guaranteed package</div>
                        <div className="coeDetails">
                            <h3>$2000</h3>
                            <p>A 6 bid guaranteed COE package means that you will get your car in 3 months</p>                            
                        </div>
                        <button className="coeSelect">Selected</button>
                        <button className="readmore"><Icon icon={magnifyIcon} height="2em" /> Read more</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="coebox">
                        <div className="coeTitle">Non guaranteed package</div>
                        <div className="coeDetails">
                            <h3>$0</h3>
                            <p>There is no guarantee on when your COE will be available</p>                            
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