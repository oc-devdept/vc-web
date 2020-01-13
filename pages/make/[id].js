import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {models} from '../../js/models'
import {makes} from '../../js/makes'
export default() => {
const router = useRouter()
const  pid = router.query.id
// var filteredArray = models.filter(function( obj ) {
//     return obj.brandId == pid;
// }).map(function( obj ) {
//     return obj.title;
// });

// console.log( filteredArray ); // a list of ids
    return (
    <React.Fragment>    
        <Navbar />
        <section className="best-sellers-area pb-60">
            <div className="container">
            {makes.filter(make => make.id == pid).map(make => (
                <div className="section-title"> 
                    <h2>All Models by {make.make}</h2>
                </div>        
            ))}
                <div className="row">
                    {models.filter(m => m.brandId == pid).map(m => (
                        
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="single-product-box">
                                <div className="product-image">
                                        <Link href={`/model/${m.id}`}>
                                            <a>
                                                <img src={m.image} alt="image" />
                                                <img src={m.imageHover} alt="image" />
                                            </a>
                                        </Link>
                                </div>
                                <div className="product-content">
                                    <h3>
                                        <Link href={`/model/${m.id}`}>
                                            <a>{m.name}</a>
                                        </Link>
                                    </h3>
                                    <p>From: {m.price.unit} ${m.price.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
        </React.Fragment>    
    );

}