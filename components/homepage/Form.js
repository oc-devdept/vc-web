import React, { Component } from "react";

import api from 'Api'
import { NotificationManager } from "react-notifications";
import { red } from "color-name";

const INIT_STATE = {
    name: '',
    email: '',
    phone: '',
    message: '',
    nameError: {},
    emailError: {},
    phoneError: {},
    checkboxError: {}
}
class Form extends Component {

    state = {
        ...INIT_STATE
    }

    onChangeForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    formValidation = () => {
        const { name, email, phone } = this.state;
        let isValid = true;
        const nameError = {};
        const emailError = {};
        const phoneError = {};
        const checkboxError = {};

        var checkBox = document.getElementById('exampleCheck1');

        if (name == "") {
            nameError.nameInvalid = "*Please enter a valid name";
            isValid = false;
        }

        if (!email.includes('@')) {
            emailError.emailInvalid = "*Email is invalid";
            isValid = false;
        }

        if (!phone.match(/^[0-9+-]+$/)) {
            phoneError.phoneInvalid = "*Please enter a valid phone number";
            isValid = false
        }

        if (!checkBox.checked) {
            checkboxError.checkboxInvalid = "*Please check the terms and conditions"
            isValid = false;
        }

        this.setState({ nameError });
        this.setState({ emailError });
        this.setState({ phoneError });
        this.setState({ checkboxError });
        return isValid;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.formValidation();

        if (isValid) {
            try {                
                await api.post(`/contactus/createContactForm`, { data: { 
                    name: this.state.name, 
                    email: this.state.email, 
                    phone: this.state.phone, 
                    message: this.state.message } });
                // success
                this.setState({...INIT_STATE});
                NotificationManager.success('Your enquiry has been sent');

            } catch (e) {
                // failed
                NotificationManager.error('Please try again');

            }

        }

    }

    render() {
        const { name, email, phone, message, nameError, emailError, phoneError, checkboxError } = this.state;
        return (
            <section className="question-area">
                <div className="container">
                    <div className="section-title without-bg" align="center">
                        <h2>HAVE A QUESTION?</h2>
                        <p>
                            Find your answers in our FAQ{" "}
                            <a className="d-inline" href="/faq">
                                here
                            </a>{" "}
                            , or drop us a message with your question.
                        </p>

                        <form className="question_form">
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="name"
                                    id="fullName"
                                    value={name}
                                    onChange={this.onChangeForm}
                                    placeholder="Full Name" />
                                {Object.keys(nameError).map((key) => {
                                    return <div style={{ color: "red" }} key={key}>{nameError[key]}</div>
                                })}
                            </div>
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="emailAddress"
                                    value={email}
                                    onChange={this.onChangeForm}
                                    placeholder="Email Address" />
                                {Object.keys(emailError).map((key) => {
                                    return <div style={{ color: "red" }} key={key}>{emailError[key]}</div>
                                })}
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="phone"
                                    id="phoneNumber"
                                    value={phone}
                                    onChange={this.onChangeForm}
                                    placeholder="Phone Number" />
                                {Object.keys(phoneError).map((key) => {
                                    return <div style={{ color: "red" }} key={key}>{phoneError[key]}</div>
                                })}
                            </div>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    name="message"
                                    id="message"
                                    value={message}
                                    onChange={this.onChangeForm}
                                    rows="4"
                                    placeholder="Message">
                                </textarea>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">
                                    I agree with Venture Car's{" "}
                                    <a className="d-inline" href="/privacy-n-service-policies">
                                        Privacy &amp; Service Policies
                                    </a>{" "}
                                    and{" "}
                                    <a className="d-inline" href="/terms-n-conditions">
                                        Terms &amp; Conditions
                                    </a>{" "}
                                </label>
                                {Object.keys(checkboxError).map((key) => {
                                    return <div style={{ color: "red" }} key={key}>{checkboxError[key]}</div>
                                })}
                            </div>
                            <button onClick={this.handleSubmit} type="submit" class="btn btn-primary" style={{borderRadius:10 , padding: "11px 23px"}}>Send Enquiry</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;