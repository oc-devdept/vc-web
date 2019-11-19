import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true
    };

    handleCart = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { products } = this.props;
        return (
            <React.Fragment>
            <div className="navbar-area">
                <div id="navbar" className="comero-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">                                  
                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Cars <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Collection Layouts</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/collections-style-one">
                                                                        <a>Collections Type 1</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/collections-style-two">
                                                                        <a>Collections Type 2</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Left Sidebar</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Left Sidebar With HTML Block</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Right Sidebar</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Right Sidebar With HTML Block</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Without Sidebar</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>With Sidebar Full Width</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Without Sidebar Full Width</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Other Pages</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/cart">
                                                                        <a>Cart</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/checkout">
                                                                        <a>Checkout</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/compare">
                                                                        <a>Compare</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/login">
                                                                        <a>Login</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/signup">
                                                                        <a>Signup</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/customer-service">
                                                                        <a>Customer Service</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Top Brands</h6>

                                                            <ul className="megamenu-submenu top-brands">
                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner1.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner2.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner3.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner4.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner5.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a>
                                                                            <img src={require("../../images/partner6.png")} alt="image" />
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Services <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/contact-us">
                                                    <a className="nav-link">Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item p-relative">
                                        <Link href="/about">
                                            <a className="nav-link">About Us</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item p-relative">
                                        <Link href="/contact-us">
                                            <a className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-option">

                                    <div className="option-item">
                                        
                                       {/* <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn fas fa-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />

                                                    <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div> */} 
                                        <Link href="/contact.js">
                                             <a className="btn btn-primary"><span>Book Test Drive</span></a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <Link href="/contact.js">
                                             <a className="btn btn-light"><span>Book A Service</span></a>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(MegaMenu)
