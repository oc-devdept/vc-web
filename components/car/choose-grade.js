import React, { Component } from "react";

import Link from "next/link";

import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-bi/arrow-right';
import carBrakeAbs from '@iconify/icons-mdi/car-brake-abs';
import parkingGarage11 from '@iconify/icons-maki/parking-garage-11';
import smartphoneShake from '@iconify/icons-gg/smartphone-shake';
import gitFork from '@iconify/icons-gg/git-fork';

class ChooseGrade extends Component {

    render() {
        const products = this.props.productData;
        return (
            <section className="choose-grade-area">
                <div className="container">
                    <div className="section-title without-bg" align="center">
                        <h2>CHOOSE YOUR GRADE</h2>
                    </div>
                </div>
                <div className="sub-box">
                    {
                        products.map(product => (
                            <div className="box" key={product.id}>
                                <div className="grade-box">
                                    <div className="grade-content">
                                        <img src={product.files[0].path}/>
                                        <h3>{product.name}</h3>
                                        <h5>fr ${product.selling_Price}</h5>

                                        <div className="button" align="center">
                                            <Link href="/">
                                                <a className="btn enquireBtn">
                                                    ENQUIRE
                                                </a>
                                            </Link>
                                            <Link href="/">
                                                <a className="btn buildBtn">
                                                    BUILD CAR &nbsp;&nbsp; <Icon icon={arrowRight} />
                                                </a>
                                            </Link>
                                        </div>

                                        <p className="sub-header">Features :</p>
                                        {
                                            product.productDetailValues.map(detail => (
                                                detail != null && (
                                                    <div className="bar" key={detail.id}>
                                                        <p>{detail.detailCategory.name}</p>
                                                        <h6>
                                                            <Icon icon={smartphoneShake} width="2.3rem"/>
                                                            &nbsp;&nbsp;
                                                            {detail.value}
                                                        </h6>
                                                    </div>
                                                )
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/*<div className="box">
                        <div className="grade-box">
                        <div className="grade-content">
                        <img src="/static/feature-cars/honda-fit.png"/>
                        <h3>HONDA FIT GRADE 1</h3>
                        <h5>fr $74, 000</h5>

                        <div className="button" align="center">
                            <Link href="/">
                            <a className="btn enquireBtn">
                                ENQUIRE
                            </a>
                            </Link>
                            <Link href="/">
                            <a className="btn buildBtn">
                                BUILD CAR &nbsp;&nbsp; <Icon icon={arrowRight} />
                            </a>
                            </Link>
                        </div>

                        <p className="sub-header">Features :</p>
                        <div className="bar">
                            <p>Vehicle Stability Assist (VSA)</p>
                            <h6>
                            <Icon icon={smartphoneShake} width="2.3rem"/>
                            &nbsp;&nbsp;
                            Lorem ipsum dolor sit
                            </h6>
                        </div>
                        <div className="bar">
                            <p>Anti-Lock Braking System (ABS)</p>
                            <h6>
                            <Icon icon={carBrakeAbs} width="2.3rem"/>
                            &nbsp;&nbsp;
                            Lorem ipsum dolor sit
                            </h6>
                        </div>
                        <div className="bar">
                            <p>Parking Sensors</p>
                            <h6>
                            <Icon icon={parkingGarage11} width="2.1rem"/>
                            &nbsp;&nbsp;
                            Venture Edition
                            </h6>
                        </div>

                        <p className="sub-header">Technology :</p>
                        <div className="bar">
                            <p>Infotainment</p>
                            <h6>
                            <Icon icon={gitFork} width="2.3rem"/>
                            &nbsp;&nbsp;
                            Venture Edition
                            </h6>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="box">
                        <div className="grade-box">
                        <div className="grade-content">
                        <img src="/static/feature-cars/honda-fit.png"/>
                        <h3>HONDA FIT GRADE 1</h3>
                        <h5>fr $74, 000</h5>

                        <div className="button">
                            <Link href="/">
                            <a className="btn enquireBtn">
                                ENQUIRE
                            </a>
                            </Link>
                            <Link href="/">
                            <a className="btn buildBtn">
                                BUILD CAR &nbsp;&nbsp; <Icon icon={arrowRight} />
                            </a>
                            </Link>
                        </div>

                        <p className="sub-header">Features :</p>
                        <div className="bar">
                            <p>Vehicle Stability Assist (VSA)</p>
                            <h6>
                            <Icon icon={smartphoneShake} width="2.3rem"/>
                            &nbsp;&nbsp;
                            Lorem ipsum dolor sit
                            </h6>
                        </div>
                        <div className="bar">
                            <p>Anti-Lock Braking System (ABS)</p>
                            <h6>
                            <Icon icon={carBrakeAbs} width="2.3rem"/>
                            &nbsp;&nbsp;
                            Lorem ipsum dolor sit
                            </h6>
                        </div>
                        <div className="bar">
                            <p>Parking Sensors</p>
                            <h6>
                            <Icon icon={parkingGarage11} width="2.1rem"/>
                            &nbsp;&nbsp;
                            Venture Edition
                            </h6>
                        </div>

                        <p className="sub-header">Technology :</p>
                        <div className="bar">
                            <p>Infotainment</p>
                            <h6>
                            <Icon icon={gitFork} width="2.3rem"/>
                            &nbsp;&nbsp;
                            Venture Edition
                            </h6>
                        </div>
                        </div>
                    </div>
                    </div>*/}
                </div>
            </section>
        );
    }
}

export default ChooseGrade;
