import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner main-banner-three item-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content white-color">
                                <span>HONDA FIT</span>
                                <h1>EVERYONE'S FAVOURITE FAMILY HATCHBACK</h1>                           
                                <Link href="/contact-us">
                                    <a className="btn btn-primary"><span>Enquire Now</span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
