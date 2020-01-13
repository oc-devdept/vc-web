import React, { Component } from 'react';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';

class TopHeader extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li>
                                        <Link href="#">
                                            <a 
                                                data-toggle="modal" 
                                                data-target="#shoppingWishlistModal"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.handleWishlist()
                                                }}
                                            >
                                                Wishlist <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare">
                                            <a>Compare <i className="fas fa-balance-scale"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
            </React.Fragment>
        );
    }
}

export default TopHeader;
