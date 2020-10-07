import React, { Component, useState } from "react";

import { Icon } from '@iconify/react';
import bxsPhone from '@iconify/icons-bx/bxs-phone';
import phoneFax from '@iconify/icons-si-glyph/phone-fax';
import mailIcon from '@iconify/icons-foundation/mail';
import locationIcon from '@iconify/icons-gridicons/location';
import { NotificationManager } from "react-notifications";

import api from 'Api'
import { red } from "color-name";


class ContactUsDetails extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        nameError: {},
        emailError: {},
        checkboxError: {}
    }

    onChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formValidation = () => {
        const { name, email } = this.state;
        let isValid = true;
        const nameError = {};
        const emailError = {};
        const checkboxError = {};

        var checkBox = document.getElementById('gridCheck');

        if (!name.match(/^[a-zA-z0-9]+$/)) {
            nameError.nameInvalid = "*Please enter a valid name";
            isValid = false;
        }

        if (!email.includes('@')) {
            emailError.emailInvalid = "*Email is invalid";
            isValid = false;
        }

        if (!checkBox.checked) {
            checkboxError.checkboxInvalid = "*Please check the terms and conditions"
            isValid = false;
        }

        this.setState({ nameError });
        this.setState({ emailError });
        this.setState({ checkboxError });
        return isValid;
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        const isValid = this.formValidation();

        if (isValid) {
            try {
                console.log('Send to server! ', this.state)
                await api.post(`/contactus/createContactForm`, { data: { name: this.state.name, email: this.state.email, phone: " ", message: this.state.message } });
                // success
                this.setState(this.state);
                NotificationManager.success('Contact form sent successfully');

            } catch (e) {
                // failed
                NotificationManager.error('Network error, please try again');

            }

        }

    }

    render() {
        const { name, email, message, nameError, emailError, checkboxError } = this.state;
        return (
            <section className="contact-us-area">
                <div className="container">
                    <div className="section-title without-bg" align="center">
                        <h2>CONTACT US</h2>
                    </div>

                    <div className="contact-details">
                        <h6>CONTACT DETAILS</h6>
                        <p> We are here to help!</p>
                        <p>
                            <Icon icon={bxsPhone} />&nbsp;&nbsp;
                            (+65) 6552 8800
                </p>
                        <p>
                            <Icon icon={phoneFax} />&nbsp;&nbsp;
                            (+65) 6858 2120
                </p>
                        <p>
                            <Icon icon={mailIcon} />&nbsp;&nbsp;
                            enquiry@venturecars.com.sg
                </p>
                        <p>
                            <Icon icon={locationIcon} />&nbsp;&nbsp;
                            33 Ubi Ave , #01-47/48 Vertex Singapore 408868
                </p>
                    </div>
                    <hr />
                    <div className="contact-form-area">
                        <h6>HAVE A QUESTION?</h6>
                        <p>
                            Find your answers in our FAQ{" "}
                            <a className="d-inline" href="/faq">
                                here
                    </a>{" "}
                            , or drop us a message with your question.
                </p>

                        <p>YOUR DETAILS</p>

                        <form className="contact-form">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="name">Name *</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        value={name}
                                        onChange={this.onChangeForm}
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                        required={true}
                                    />
                                    {Object.keys(nameError).map((key) => {
                                        return <div style={{ color: "red" }} key={key}>{nameError[key]}</div>
                                    })}
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Email *</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        value={email}
                                        onChange={this.onChangeForm}
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email address"
                                        required={true}
                                    />
                                    {Object.keys(emailError).map((key) => {
                                        return <div style={{ color: "red" }} key={key}>{emailError[key]}</div>
                                    })}
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="ownerIdType">Owner ID Type</label>
                                    <select id="ownerIdType" class="form-control">
                                        <option selected>SINGAPORE CITIZEN</option>
                                        <option>SINGAPORE PERMANENT RESIDENT</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="coI">Car of Interest *</label>
                                    <select id="coI" class="form-control">
                                        <option selected>Honda Fit 1.3A</option>
                                        <option>Toyota Alphard</option>
                                        <option>Toyota Vellfire</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={this.onChangeForm}
                                    rows="4"
                                    placeholder="Message"></textarea>
                            </div>

                            <p className="trade-in-details">YOUR TRADE-IN CAR DETAILS</p>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="vpN">Vehicle Plate Number</label>
                                    <input type="text" class="form-control" id="vpN" placeholder="Enter your vehicle plate number" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="mileage">Mileage</label>
                                    <input type="text" class="form-control" id="mileage" placeholder="Enter your mileage" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="ownerIdType">Owner ID Type</label>
                                    <select id="ownerIdType" class="form-control">
                                        <option selected>SINGAPORE CITIZEN</option>
                                        <option>SINGAPORE PERMANENT RESIDENT</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="ownerNRIC">Owner NRIC (Last 4 characters, e.g. 123A)</label>
                                    <input type="text" class="form-control" id="ownerNRIC" placeholder="Enter your NRIC's last 4 charaacters" />
                                </div>

                            </div>

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Yes, I consent that we or our product and service partner may contact you for the purpose of your enquiry
                                        via voice call, email, text, SMS, MMS, fax message, regardless of when you register with the DNC registry.
                                        (Personal Data Protect Act 2012) Venture Cars adheres to our Privacy Policy, your information will not be missed.
                        </label>
                                </div>
                                {Object.keys(checkboxError).map((key) => {
                                    return <div style={{ color: "red" }}>{checkboxError[key]}</div>
                                })}
                            </div>
                            <div class="d-flex justify-content-center">
                                <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">SEND ENQUIRY</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        );
    }
}

export default ContactUsDetails; 