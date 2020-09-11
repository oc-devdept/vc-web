import React, { Component } from "react";
import Link from "next/link";
import MegaTab from "./MegaTab";
/*iconify*/
import { Icon } from "@iconify/react";
import { ExpandMore } from "@material-ui/icons";
import accountCircleOutline from "@iconify/icons-mdi/account-circle-outline";
import baselineKeyboardArrowDown from '@iconify/icons-ic/baseline-keyboard-arrow-down';
import hamburgerMenu from '@iconify/icons-cil/hamburger-menu';

class MegaMenu extends Component {
  state = {
    display: false,
    collapsed: true,
  };

  handleCart = () => {
    this.setState((prevState) => {
      return {
        display: !prevState.display,
      };
    });
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
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
                
                <Link href="/">
                  <a className="navbar-brand-mobile">
                    <img src={"/static/logo-mobile.png"} alt="logo" />
                  </a>
                </Link>
                <Link href="/profile">
                  <a className="nav-profile-icon">
                    <Icon
                      className="medIcon-mobile"
                      icon={accountCircleOutline}
                    />
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
                  {/* <span className="navbar-toggler-icon"> */}
                    <Icon icon={hamburgerMenu} color="#ffffff" width="2rem"/>
                  {/* </span> */}
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <hr className="navbar-hr" />
                  <ul className="navbar-nav">
                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          New <Icon icon={baselineKeyboardArrowDown} />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <MegaTab />
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          Pre-owned <Icon icon={baselineKeyboardArrowDown} />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">

                        </li>
                      </ul>
                    </li>

                    <li className="nav-item p-relative">
                      <Link href="/virtual-showroom">
                        <a className="nav-link">Virtual Showroom</a>
                      </Link>
                    </li>

                    <li className="nav-item megamenu">
                    <Link href="#">
                        <a className="nav-link">
                          Aftersales <Icon icon={baselineKeyboardArrowDown} />
                        </a>
                    </Link>
                    <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/book-car-servicing">
                            <a className="nav-link">Book Car Servicing</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/about-car-servicing">
                            <a className="nav-link">About Car Servicing</a>
                          </Link>
                        </li>
                    </ul>
                  </li>
                    <li className="nav-item megamenu">
                      <Link href="#">
                        <a className="nav-link">
                          About Us <Icon icon={baselineKeyboardArrowDown} />
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/about-us">
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/faq">
                            <a className="nav-link">Frequently Asked Questions</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/terms-n-conditions">
                            <a className="nav-link">Terms &amp; Conditions</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/privacy-n-service-policies">
                            <a className="nav-link">Privacy &amp; Service Policies</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item p-relative">
                      <Link href="/blog">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                    
                    <li className="nav-item profile-icon p-relative">
                      <Link href="/profile">
                        <a>
                          <Icon
                            className="medIcon"
                            icon={accountCircleOutline}
                          />
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/build">
                        <a className="btn nav-btn">
                          <span>Build</span>
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

export default MegaMenu;
