import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { useRouter } from 'next/router';
export default() => {
const router = useRouter()
const  pid = router.query.id
    return (
    <React.Fragment>    
        <Navbar />
        
        <Footer />
        </React.Fragment>    
    );

}