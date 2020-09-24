import React, { Component } from 'react';
import Link from "next/link";

import FooterAccordion from './Footer-Accordion';
class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                {/* <div className="container"> */}
                    <div className="top">
                    
                    <Link href="/">
                        <a>
                            <img src="/static/logo.png"/>
                        </a>
                    </Link>

                    <h5>Sign Up For Our Newsletter</h5>
                    <p>Sign up to keep yourself unpated with our latest car models, promotions &amp; blog posts!</p>
                    
                    
                    <form>
                    <div class="footer-signup row">
                        <div class="col">
                        <div class="form-group">
                            <input width="100%" type="email" class="form-control" id="emailAddress" placeholder="Email Address"/>
                        </div>
                        </div>
                        <div class="col">
                            <button type="submit" class="btn custom-btn">SIGN ME UP!</button>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div className="row footer-info-group">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>
                                <div className="quick-links">
                                    <p><Link href="/"><a>Home</a></Link></p>
                                    <p><Link href="/build"><a>Build Car</a></Link></p>
                                    <p><Link href="/about"><a>About Us</a></Link></p>
                                    <p><Link href="/contact-us"><a>Contact Us</a></Link></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Showroom Hours</h3>
                                <p className="information-links">
                                    <strong>Monday - Saturday :</strong><br/>
                                    09:00AM - 07:00PM
                                </p>
                                <p className="information-links">
                                    <strong>Sunday &amp; Public Holidays :</strong><br/>
                                    09:00AM - 06:00PM
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Locate Us</h3>

                                <div className="footer-contact-info">
                                    <p>
                                        Main Showroom<br />
                                        33 Ubi Ave , #01-47/48 Vertex Singapore 408868
                                    </p>
                                    <p>
                                        BWWS Workshop<br />
                                        291-293 Kaki Bukit Ave 1, Shun Li Industrial Park, Singapore 416080
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mobile-footer">
                        <FooterAccordion />
                    </div>

                
                    <div className="copyright-area">
                        <div className="row">
                            <div className="left-section col-lg-6 col-md-6">
                                <Link href="/terms-n-conditions"><a>Terms &amp; Conditions</a></Link>
                                <Link href="/privacy-n-service-policies"><a>Privacy &amp; Service Policies</a></Link>
                                <Link href="/faq"><a>FAQs</a></Link>
                            </div>
                            <div className="right-section col-lg- col-md-6">
                                <p>Copyright @ 2020 Venture Cars</p>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </footer>
        );
    }
}

export default Footer;
