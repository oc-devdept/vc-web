import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickView from '../Modal/QuickView';
import dynamic from 'next/dynamic';
import {grades} from '../../js/grades';
const OwlCarousel = dynamic(import('react-owl-carousel3'));


const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class BestSeller extends Component {
    state = {
        price: 0,
        idd: null,
        display: false,
    };


    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="best-sellers-area pb-60">
                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="section-title without-bg">
                        <h2><span className="dot"></span> Best Sellers</h2>
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                        className="best-sellers-products-slides-two owl-carousel owl-theme"
                        {...options}
                    >
                        {grades.filter(g => g.feat == true).map(g => (
                            <div className="col-lg-12 col-md-12">
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <Link href={`/grade/${g.id}`}>
                                            <a>
                                                <img src={g.image} alt="image" />
                                                <img src={g.imageHover} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href={`/grade/${g.id}`}>
                                                <a>{g.title}</a>
                                            </Link>
                                        </h3>

                                        <div className="product-price">
                                            <span className="new-price">{g.price.unit} ${g.price.value}</span>
                                        </div>

                                        <Link href={`/grade/${g.id}`}>
                                            <a className="btn btn-primary">
                                                Explore
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         products: state.products
//     }
// }

// const mapDispatchToProps= (dispatch) => {
//     return {
//         addToCart: (id) => { dispatch(addToCart(id)) }
//     }
// }

export default  BestSeller;