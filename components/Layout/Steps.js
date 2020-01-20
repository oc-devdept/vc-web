import React, { Component } from 'react';
import Link from "next/link";
class Steps extends Component { 
    constructor(props) {
        super(props);   
        this.state = {
            list: [ 
                {id: "01", steps: "Select the Car", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum. Proin feugiat auctor ante, congue rutrum lectus pellentesque ac. Nullam in risus ex."},
                {id: "02",steps: "Build the Exterior", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum. Proin feugiat auctor ante, congue rutrum lectus pellentesque ac. Nullam in risus ex."},
                {id: "03",steps: "Build the Interior", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum. Proin feugiat auctor ante, congue rutrum lectus pellentesque ac. Nullam in risus ex."},
                {id: "04",steps: "Configure the Rims", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum. Proin feugiat auctor ante, congue rutrum lectus pellentesque ac. Nullam in risus ex."},
                {id: "05",steps: "Accessories Add-On", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum. Proin feugiat auctor ante, congue rutrum lectus pellentesque ac. Nullam in risus ex."},
                {id: "06",steps: "Get Your Car", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim egestas quam in interdum. Proin feugiat auctor ante, congue rutrum lectus pellentesque ac. Nullam in risus ex."},
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
                    <div className="row">                   
                        {this.state.list.map(l => 
                        <div className="step">
                            <h3 className="text-center">{l.id} {l.steps}</h3>
                            <p>{l.description}</p>
                        </div>
                        )}

                        
                        </div>
                </div>
            </section>       
             
        );
    }
}

export default Steps;
