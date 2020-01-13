import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-four/Banner';
import OfferArea from '../components/shop-style-one/OfferArea';
import Products from '../components/shop-style-one/Products';
import CategoryProducts from '../components/shop-style-four/CategoryProducts';
import TrendingProducts from '../components/shop-style-one/TrendingProducts';
import BestSeller from '../components/shop-style-four/BestSellers';
import Facility from '../components/Common/Facility';
import Testimonials from '../components/Common/Testimonials';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                {/*<BestSeller />*/}
                <CategoryProducts/>
                <Facility />
                <Testimonials />
                <Subscribe />
                <Footer />
                {/*<AddsModal />*/}
            </React.Fragment>
            
        );
        
    }
}

export default Index;
