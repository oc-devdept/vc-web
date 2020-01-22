import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';

import Link from 'next/link';

import Home from 'Components/home'

import { connect } from "react-redux"

class Index extends Component {


    render() {

        if (!this.props.accessToken) {
            return (
                <React.Fragment>
                    <Navbar />
                    <Breadcrumb title="User Homepage" />
                    <section className="about-area pb-60">
                        <div className="container" style={{display:'flex', justifyContent:'center', flexDirection:"column", alignItems:'center'}}>
                            <div className="row align-items-center">
                                Please login to access your profile
                            </div>

                            <Link href="/login">
                                <a className="return-store">Click here to login here</a>
                            </Link>

                        </div>
                    </section>
                </React.Fragment>
            );
        }

        return (
            <Home
                  
            />
        );
    }
}


const mapStateToProps = state => {
    const { UserState } = state
    const { accessToken } = UserState
    return { accessToken }
}
  
export default connect(
  mapStateToProps,
  {  }
)(Index)