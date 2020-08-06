import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faShieldAlt, faConciergeBell, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

class Facility extends Component {
    render() {
        return (
            <section className="jumbotron jumbotron-fluid facility-area">
                <div className="container">
                    <div className="row">
                        <h2>SHOP YOUR NEW RIDE WITH US TODAY!</h2>
                        <p className="lead">Venture Cars was established in 2009 to meet the rise in demand for brand new cars in brands such as Toyota and Honda hybrid models.
As a Casetrust Accredited Parallel Importer, we're proud to have delivered over 1000 cars since the inception of Venture Cars. More than 10 years in the business,
we are familiar with buying, selling, insurance, financing, rental, leasing, limousine, workshop and accident claims.</p>
                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                                </div>
                                <h3>Lowest Depreciation</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMoneyCheckAlt} />                                    
                                </div>
                                <h3>Highest OMV in the market</h3>
                            </div> 
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faShieldAlt} />                                   
                                </div>
                                <h3>5 Years In-House Warranty</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                   <FontAwesomeIcon icon={faConciergeBell} />                                    
                                </div>
                                <h3>1 Year Free Servicing</h3>
                            </div>
                        </div>
                        <div className="text-center"> 
                            <button type="button" className="btn btn-primary">Book A Test Drive With Us!</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facility;
