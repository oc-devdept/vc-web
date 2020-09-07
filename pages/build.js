import React, { Component } from "react";
import Navbar from "Components/Layout/Navbar";
import Footer from "Components/Layout/Footer";
import Link from "next/link";

import { Icon } from '@iconify/react';
import fuel15 from '@iconify/icons-maki/fuel-15';
import engineIcon from '@iconify/icons-mdi/engine';
import powerIcon from '@iconify/icons-icomoon-free/power';
import arrowRight from '@iconify/icons-bi/arrow-right';
import searchIcon from '@iconify/icons-gg/search';


class Build extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
          <section className="build-area">
          <div className="container">
              <div className="section-title without-bg" align="center">
                  <h2>CHOOSE A MODEL TO BUILD</h2>
              </div>

              <div class="row">
                <div class="column">
                  <div class="left">
                    <img src="/static/feature-cars/honda-fit.png"/>
                  </div>
                  <div class="right">
                    <p className="types">MPV / SUV</p>
                    <h3 className="car-name">TOYOTA ALPHARD</h3>
                    <h5 className="car-price"> fr $175,888</h5>
                  </div>
                  <div class="build-content">
                    <p class="part1-left"><span class="engCap"><Icon icon={engineIcon} color="#595959"/> &nbsp; Eng Cap: 2493cc</span></p>
                    <p class="part1-right"><span class="power"><Icon icon={powerIcon} color="#595959"/> &nbsp; Power: 180bhp</span></p>
                    <p class="part2-left"><Icon icon={fuel15} color="#595959"/> &nbsp; Fuel Consumption: 11.6 km / litre</p>
                  </div>
                  <div className="button">
                    <Link href="/">
                    <a className="btn gw-without-bg-btn">
                      <Icon icon={searchIcon} width="1.5rem"/> &nbsp;&nbsp; VIEW DETAILS
                    </a>
                    </Link>
                    <Link href="/">
                    <a className="btn buildBtn">
                        BUILD NOW &nbsp;&nbsp; <Icon className="arrow-icon" icon={arrowRight} width="1.5rem"/>
                    </a>
                    </Link>
                  </div>
                </div>
                <div class="column">
                  <div class="left">
                    <img src="/static/feature-cars/honda-fit.png"/>
                  </div>
                  <div class="right">
                    <p className="types">MPV / SUV</p>
                    <h3 className="car-name">TOYOTA ALPHARD</h3>
                    <h5 className="car-price"> fr $175,888</h5>
                  </div>
                  <div class="build-content">
                    <p class="part1-left"><span class="engCap"><Icon icon={engineIcon} color="#595959"/> &nbsp; Eng Cap: 2493cc</span></p>
                    <p class="part1-right"><span class="power"><Icon icon={powerIcon} color="#595959"/> &nbsp; Power: 180bhp</span></p>
                    <p class="part2-left"><Icon icon={fuel15} color="#595959"/> &nbsp; Fuel Consumption: 11.6 km / litre</p>
                  </div>
                  <div className="button">
                    <Link href="/">
                    <a className="btn gw-without-bg-btn">
                      <Icon icon={searchIcon} width="1.5rem"/> &nbsp;&nbsp; VIEW DETAILS
                    </a>
                    </Link>
                    <Link href="/">
                    <a className="btn buildBtn">
                        BUILD NOW &nbsp;&nbsp; <Icon className="arrow-icon" icon={arrowRight} width="1.5rem"/>
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Build;
