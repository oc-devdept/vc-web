import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/shop-style-four/Banner';
import Makes from '../components/shop-style-four/Makes';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Makes/>
                <Footer />
                {/*<AddsModal />*/}
            </React.Fragment>
            
        );
        
    }
}

export default Index;
