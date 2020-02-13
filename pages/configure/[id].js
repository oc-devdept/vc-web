import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import { useRouter } from 'next/router';

import Link from 'next/link';

export default() => {
const router = useRouter()
const  pid = router.query.id
    return (
    <React.Fragment>    
        <Navbar />
        {/* <section className="best-sellers-area pb-60">
            <div className="container">
            {models.filter(model => model.id == pid).map(model => (
                <div className="section-title"> 
                    <h2>{model.name}</h2>
                </div>        
            ))}
                <div className="row">
                    {grades.filter(g => g.modelId == pid).map(g => (
                        
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
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
                                    <p>{g.price.unit} ${g.price.value}</p>
                                    <p>Engine Capacity: {g.engineCap.value}{g.engineCap.unit}</p>
                                    <p>Power: {g.power.value}{g.power.unit}</p>
                                    <p>Fuel Consumption: {g.fuelConspt.value}{g.fuelConspt.unit}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> */}
        <Footer />
        </React.Fragment>    
    );

}