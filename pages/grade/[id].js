import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {models} from '../../js/models'
import {makes} from '../../js/makes'
import {grades} from '../../js/grades'
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