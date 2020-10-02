import React, { Component } from "react";

class AboutHondaFit extends Component {
    render() {
        const { carName, about } = this.props;
        return (
            <section className="about-honda-fit-area">
                <div className="container">
                    <div className="section-title without-bg" align="center">
                        <h2>ABOUT {carName}</h2>
                    </div>
                    <div className="about-table">
                        <div  dangerouslySetInnerHTML={{__html: about}} />
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutHondaFit;
