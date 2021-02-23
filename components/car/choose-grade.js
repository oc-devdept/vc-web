import React, { Component } from "react";

import Link from "next/link";

import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-bi/arrow-right';

import gitFork from '@iconify/icons-gg/git-fork';
import manageProtection from '@iconify/icons-carbon/manage-protection';
import smallgearIcon from '@iconify/icons-raphael/smallgear';


class ChooseGrade extends Component {

    render() {
        const products = this.props.productData;

        return (
            <section className="choose-grade-area">
                <div className="container">
                    <div className="section-title without-bg" align="center">
                        {/* <h2>CHOOSE YOUR GRADE</h2> */}
                        <h2>Choose Your Garde</h2>
                    </div>
                </div>
                { products.length > 1
                    ? <div className="sub-box" style={{
                        display:"flex",justifyContent:"between"
                    }}>
                        {
                            products.map(product => (
                                <div className="box" key={product.id}>
                                    <div className="grade-box">
                                        <div className="grade-content" style={{
                                            display:"flex" ,flexDirection:"column"
                                        }}>
                                            <div  className="grade-content-image-header">
                                                 <img src={product.files[0].path} />
                                            </div>
                                            <div className="grade-content-text-container">
                                            <h3>{product.name}</h3>
                                            <h5>fr ${product.selling_Price}</h5>
                                            </div>
                                           
                                            
                                            <div className="button" align="center">
                                                <a className="btn enquireBtn" href="#enquireForm" onClick={() => this.props.enquireModel(product.name)}>
                                                    Enquire
                                                </a>

                                                <Link href={"/car/configurator/" + this.props.url}>
                                                    <a className="btn buildBtn">
                                                        BUILD CAR &nbsp;&nbsp; <Icon icon={arrowRight} />
                                                    </a>
                                                </Link>
                                            </div>

                                            <p className="sub-header">Features :</p>
                                            {
                                                product.productDetailValues.map(detail => (

                                                    <div className="bar" key={detail.id}>
                                                        <p>{detail.detailCategory.name}
                                                        </p>
                                                        <h6>
                                                            {detail.catname == "Main Equipment" ? <Icon icon={gitFork} width="2.3rem" /> :
                                                                detail.catname == "Safety Features" ? <Icon icon={manageProtection} width="2.3rem" /> :
                                                                    <Icon icon={smallgearIcon} width="1.8rem" />
                                                            }
                                                            &nbsp;&nbsp;
                                                            {detail.value} {detail.detailCategory.unit != "." &&
                                                                detail.detailCategory.unit
                                                            }
                                                        </h6>
                                                    </div>

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
                    : <div className="sub-box">
                        {
                            products.map(product => (
                                <div className="col-md-12" key={product.id}>
                                    <div className="grade-box">
                                        <div className="grade-content">
                                            <div class="grade-content-imgBox"  >
                                                <img src={product.files[0].path} />
                                            </div>
                                            <div class="grade-content-btnBox" >
                                                <h3>{product.name}</h3>
                                                <h5>fr ${product.selling_Price}</h5>

                                                <div className="button" align="center">

                                                    <a className="btn enquireBtn" href="#enquireForm" onClick={() => this.props.enquireModel(product.name)}>
                                                    Enquire
                                            </a>

                                                    <Link href={"/car/configurator/" + this.props.url}>
                                                        <a className="btn buildBtn">
                                                            BUILD CAR &nbsp;&nbsp; <Icon icon={arrowRight} />
                                                        </a>
                                                    </Link>
                                                </div>

                                            </div>
                                            <div class="grade-content-featuresBox" >
                                                <p className="sub-header">Features :</p>
                                                {
                                                    product.productDetailValues.map(detail => (

                                                        <div className="bar" key={detail.id}>
                                                            <p>{detail.detailCategory.name}
                                                            </p>
                                                            <h6>
                                                                {detail.catname == "Main Equipment" ? <Icon icon={gitFork} width="2.3rem" /> :
                                                                    detail.catname == "Safety Features" ? <Icon icon={manageProtection} width="2.3rem" /> :
                                                                        <Icon icon={smallgearIcon} width="1.8rem" />
                                                                }
                                                        &nbsp;&nbsp;
                                                        {detail.value} {detail.detailCategory.unit != "." &&
                                                                    detail.detailCategory.unit
                                                                }
                                                            </h6>
                                                        </div>

                                                    ))
                                                }

                                            </div>
                                            <div class="grade-content-techBox" >
                                                <p className="sub-header">Technology :</p>
                                                <div className="bar">
                                                    <p>Infotainment</p>
                                                    <h6>
                                                        <Icon icon={gitFork} width="2.3rem" />
                                                    &nbsp;&nbsp;
                                                     Venture Edition
                                                </h6>

                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                }

            </section>
        );
    }
}

export default ChooseGrade;
