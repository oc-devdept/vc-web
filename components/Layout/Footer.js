import React, { Component } from 'react';
import { connect } from "react-redux";
import Link from "next/link";
import { NotificationManager } from "react-notifications";
import FooterAccordion from './Footer-Accordion';
import api from 'Api'

// Get redux stuff
import { getFooterHtml } from "Ducks/homepage"

const userDetails = {
    name: '',
    email: '',
    source: '',
}

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            // ...userDetails
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getFooterHtml();
    }

    handleChange(e) {
        this.setState({ email: e.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.email)

        try {
            console.log('Send to server! ', this.state)
            await api.post(`/customers/newsletterSignup`, { data: this.state });
            // console.log(test)
            // success
            // setForm(() => Contact);
            // this.setState({...userDetails});
            NotificationManager.success('Signed Up');

        } catch (e) {
            // failed
            NotificationManager.error('Please try again');
        }

    }

    render() {
        let html = this.props.footerHtml.html;
        //return (<div dangerouslySetInnerHTML={{__html: html}} />);
           return( <footer className="footer-area">
              
                <div className="top">

                    <Link href="/">
                        <a>
                        <img src="/static/VC-Main-Logo.png" />
                        </a>
                    </Link>
                    <h5>Sign Up For Our Newsletter</h5>
                    <p>Sign up to keep yourself updated with our latest car models, promotions &amp; blog posts!</p>


                    <form>
                        <div class="footer-signup row">
                            <div class="col">
                                <div class="form-group">
                                    <input
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        width="100%"
                                        type="email"
                                        class="form-control"
                                        id="emailAddress"
                                        placeholder="Email Address" />
                                </div>
                            </div>
                            <div class="col">
                                <button type="submit" class="btn custom-btn" onClick={this.handleSubmit} >SIGN ME UP!</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row footer-info-group">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                        <h3>{ html.length > 0 && html[0].title } </h3>
                           
                                {
                                    html.length > 0 && (<div dangerouslySetInnerHTML={{__html: html[0].html}} />)
                                }                               
                           
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                        <h3>{ html.length > 1 && html[1].title } </h3>
                                {
                                    html.length > 1 && (<div dangerouslySetInnerHTML={{__html: html[1].html}} />)
                                } 
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h3>{ html.length > 2 && html[2].title }</h3>

                            {
                                    html.length > 2 && (<div dangerouslySetInnerHTML={{__html: html[2].html}} />)
                                } 
                        </div>
                    </div>
                </div>


                <div className="mobile-footer">
                    <FooterAccordion data={html} />
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
              
            </footer>
           )
    }
}

// export default Footer;

// export default connect(mapStateToProps, { getFeaturedHtml })(BestSeller);


const mapStateToProps = ({ HomeState }) => {
    const { FooterState } = HomeState;
    const { footerHtml } = FooterState;
    return { footerHtml };
};

export default connect(mapStateToProps, { getFooterHtml })(Footer);
