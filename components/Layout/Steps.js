import React, { Component } from 'react';
import Link from "next/link";
class Steps extends Component { 
    constructor(props) {
        super(props);   
        this.state = {
            list: [ 
                {id: "01 Select", step: "the Car", arrow:"˃", image: "/static/steps/step01.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."},
                {id: "02 Build",step: "the Exterior", arrow:"˃", image: "/static/steps/step02.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."},
                {id: "03 Build",step: "the Interior", arrow:"˅", image: "/static/steps/step03.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."},
                {id: "04 Configure",step: "the Rims", arrow:"˂", image: "/static/steps/step04.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."},
                {id: "05 Accessories",step: "Add-On", arrow:"˂", image: "/static/steps/step05.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."},
                {id: "06 Get",step: "Your Car", arrow:"", image: "/static/steps/step06.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum."},
            ]
            }
        } 
        
    render() {
        return (
            <section className="best-sellers-area">
                <div className="container">
                    <div className="section-title without-bg">
                        <h2>Get Your Preferred Cars in 6 Steps!</h2>
                    </div>
                    <div className="d-flex flex-row">                                          
                        {this.state.list.slice(0,3).map(l => 
                        <div className="step text-center m-2 p-2">
                            <h3 className="text-center"><span className="stepArrow font-weight-bold font-italic">{l.id}</span> {l.step} <span className="float-right stepArrow"> {l.arrow} </span> </h3>
                            <img className="stepImgs" src={l.image}></img>
                            <p className="text-justify">{l.description}</p>
                        </div>
                        )}    
                    </div>
                    <div className="reverseStepRow">                                         
                        {this.state.list.slice(3,6).map(l => 
                        <div className="step text-center m-2 p-2">
                            <h3 className="text-center"><span className="stepArrow font-weight-bold font-italic">{l.id}</span> {l.step} <span className="float-left stepArrow"> {l.arrow} </span> </h3>
                            <img className="stepImgs" src={l.image}></img>
                            <p className="text-justify">{l.description}</p>
                        </div>
                        )}    
                    </div>
                </div>
            </section>       
             
        );
    }
}

export default Steps;
