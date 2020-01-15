import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

import api from 'axios'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: 'gianjie',
                email: 'igc14.gianjie@gmail.com',
                password: '123',
            }
        }
      }

      
    _handleSubmitForm = async(e) => {

        try {

            const item = await api.post('http://localhost:3001/api/basecustomerusers/signup', {data: this.state.form})
            console.log(item)

        } catch (e) {

            console.log(e)
        }
     
    }

    _handleForm = (e, element) => {
        let form = {...this.state.form}
        form[element] = e
        this.setState({form:form})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Signup" />
                <section className="signup-area ptb-60">
                    <div className="container">
                        <div className="signup-content">
                            <div className="section-title">
                                <h2><span className="dot"></span> Create an Account</h2>
                            </div>

                            <div className="signup-form">

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={this.state.form.name} onChange={(e) => this._handleForm(e.target.value, 'name')} className="form-control" placeholder="Enter your name" id="fname" name="fname" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={this.state.form.email} onChange={(e) => this._handleForm(e.target.value, 'email')}  className="form-control" placeholder="Enter your name" id="name" name="name" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" value={this.state.form.password} onChange={(e) => this._handleForm(e.target.value, 'password')} className="form-control" placeholder="Enter your password" id="password" name="password" />
                                </div>

                                <button onClick={this._handleSubmitForm} className="btn btn-primary">Signup</button>

                                <Link href="/login">
                                    <a className="return-store">Have an account, login here</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


            </React.Fragment>
        );
    }
}

export default Index;
