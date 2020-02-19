import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';
import Footer from 'Components/Layout/Footer';

import Router from 'next/router'
import Home from 'Components/home'

import { connect } from "react-redux"

class Index extends Component {

    componentDidMount(){
        if (!this.props.accessToken) {
            Router.push('/login') 
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.props.accessToken == null ) {
            return true
        }
        return false
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            Router.push('/login') 
        }
    }

    render() {
        return (
            <div className="d-flex flex-column" style={{height:'100vh'}}>
                <Navbar />
                <div className="d-flex flex-fill">
                    {this.props.accessToken? <Home/> : <div>Loading ...</div>}
                </div>
            </div>   
        )
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