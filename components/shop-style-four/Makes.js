import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addToCompare } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import {makes} from '../../js/makes'


class Makes extends Component {
    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    };

    componentDidMount(){
        // call api
        //console.log(category);
    }

    render() {
        return (
            <section className="best-sellers-area pb-60">
                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> All Brands</h2>
                    </div>
                    <div className="row">
                        {makes.map((make, id) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={id}>
                                <div className="single-product-box single-make-box">
                                    <div className="product-image">
                                        <Link href={`/make/${make.id}`}>
                                            <a>
                                                <img src={make.image} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            {/*as={`/make/${make.make}`} */}
                                            <Link href={`/model/${make.id}`}>
                                                <a>{make.make}</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    
                </div>
            </section>
        );
    }
}



export default Makes;


                    