import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

class BestSeller extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        console.log("props:",this.props);
        return (
            <section className="best-sellers-area">
                        {/* {this.props.data.fields.map(( item, id ) => (
                            <div className="col-lg-12 col-md-12">
                                <div className="single-product-box">
                                    <div className="product-image">
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href={`/grade/${item.id}`}>
                                                <a>{item.name}</a>
                                            </Link>
                                        </h3>

                                        <div className="product-price">
                                            <span className="new-price">${item.selling_price}</span>
                                        </div>

                                        <Link href={`/grade/${item.id}`}>
                                            <a className="btn btn-primary">
                                                Explore
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))} */}

            </section>
        );
    }
}
BestSeller.getInitialProps = async function() {
    const res = await fetch(`http://159.65.14.175:3001/api/products/getAllFeaturedCars`);
    const data = await res.json()
    console.log("data:",data);
    return {data};
  };
export default  BestSeller;