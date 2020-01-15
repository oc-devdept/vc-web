import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
// Page Layout
import Default from "Components/Layout/PageTemplates/Default";
import { connect } from 'react-redux';

class faq extends Component {
  render() {
    return <Default>
    <section className="faq-area  pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2> Frequently Asked Questions</h2>
                        </div>

                        <div className="faq-accordion">
                            <ul className="accordion">
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Does Your Lease Scheme Include Vehicle Servicing and Maintainence?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    Our leasing package comes with the following for an extra peace of mind:
                                   <ul>   
                                        <li>First Year Free Servicing or 20,000km</li>
                                        <li>5 Year Warranty or 100,000km </li>
                                        <li>We will also provide a replace vhicle when the vehicle is being sent for the regular maintainence, repairs and/or accident repairs. </li>
                                    </ul>  
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What Are Your Terms & Conditions For Insurance?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>Insurance is not included in this lease package.</p>
                                    <p>Our terms & conditions are as follows;</p>
                                    <ol>
                                    <li>Hirer has to be above 22 year old with a minimum driving experience of 2 years. </li> 
                                    <li>Excess: Section I (Own Damage Claim) S$3,000; Section II (Third Party Claim) S$2,000; Windscreen Excess S$100. Excess will be doubled for unnamed drivers and usage in Malaysia. </li>
                                    <li>Coverage: Up to West Malaysia, Thailand and East Malaysia are not covered. </li> 
                                    <li>Additional Name Driver: No charge for the first named driver; subsequent names driver S$200 each (annually) </li>
                                    </ol>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                            </ul>
                        </div>
                    </div>
                </section>
    </Default>;
  }
}


function mapStateToProps({TestState}) {
    console.log('faq mapStateToProps')
   
    const{ProductState} = TestState
    console.log(ProductState)
    // const pId = ownProps.match.params.id;
    // const product = state.posts[pId];

    return { 
        ProductState
    };
}

export default connect(
mapStateToProps,
)(faq);

