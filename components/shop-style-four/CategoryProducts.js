import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addToCompare } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import QuickView from '../Modal/QuickView';
import fetch from 'isomorphic-unfetch';
import {category} from '../../CategoryProducts'

//

class CategoryProducts extends Component {
    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    };

    componentDidMount(){
        // call api
        console.log(category)
    }

    static async getInitialProps() {
        // let res = await fetch('http://localhost:3000/CategoryProducts.json')
        // let brandsObj = await res.json()
        console.log(category)
        //console.log(brandsObj)
        //return {brands: brandsObj}
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

                    
                </div>
            </section>
        );
    }
}



export default CategoryProducts;


                    