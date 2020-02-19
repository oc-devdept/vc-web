import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import MegaTab from "./MegaTab";
/*iconify*/
import { Icon, InlineIcon } from "@iconify/react";
import accountCircleOutline from "@iconify/icons-mdi/account-circle-outline";

class MegaMenu extends Component {
  state = {
    display: false,
    searchForm: false,
    collapsed: true
  };

  handleCart = () => {
    this.setState(prevState => {
      return {
        display: !prevState.display
      };
    });
  };

  handleSearchForm = () => {
    this.setState(prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

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
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    let { products } = this.props;
    return (
      <React.Fragment>
        <div className="navbar-area fixed-top">
          <div id="navbar" className="comero-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img src={"/static/logo.png"} alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
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
                          New <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <div className="container">
                            <div className="row">
                              <div className="col-12 megaTab">
                                {/* <ul className="megamenu-submenu top-brands">
                                                              {makes.map((make, id) => (    
                                                                  <li key={id}>
                                                                      <Link href={`/make/${make.id}`}>
                                                                          <a>
                                                                                  <img src={make.image} alt="image" />
                                                                          </a>
                                                                      </Link>
                                                                  </li>
                                                                  ))}
                                                              </ul> */}

                                <MegaTab />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    {/* <li className="nav-item p-relative">
                        <Link href="#">
                          <a className="nav-link">Used</a>
                        </Link>
                      </li> */}

                    {/* <li className="nav-item p-relative">
                        <Link href="#">
                          <a className="nav-link">Rent</a>
                        </Link>
                      </li> */}

                    <li className="nav-item p-relative">
                      <Link href="/services">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>

                    <li className="nav-item p-relative">
                      <Link href="/about">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>

                    <li className="nav-item p-relative">
                      <Link href="/contact-us">
                        <a className="nav-link">Contact Us</a>
                      </Link>
                    </li>

                    {/* <li className="nav-item p-relative">
                        <Link href="/compare">
                        <Link href="#">
                          <a className="nav-link">
                            Compare <i className="fas fa-balance-scale"></i>
                          </a>
                        </Link>
                      </li> */}

                    {/* <li className="nav-item highlight p-relative">
                        <Link href="/contact.js">
                          <a className="btn btn-primary">
                            <span>Get Quote</span>
                          </a>
                        </Link>
                      </li> */}

                    <li className="nav-item highlight p-relative">
                      <Link href="/book-now">
                        <a className="btn btn-primary">
                          <span>Book A Service</span>
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item p-relative">
                      <Link href="/login">
                        <a>
                          <Icon
                            className="medIcon"
                            icon={accountCircleOutline}
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: []
  };
};

export default connect(mapStateToProps)(MegaMenu);
