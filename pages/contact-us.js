import React, { useState } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";
import { NotificationManager } from "react-notifications";

import api from 'Api'




const InitForm = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

const Errors = {
  nameError: '',
  emailError: '',
  phoneError: ''
}

function ContactUs({ }) {

  const [Form, setForm] = useState(InitForm);
  const { name, email, phone, message } = Form


  const onChangeForm = (element, value) => {
    setForm(Form => ({ ...Form, [element]: value }));
  }

  // Setting errors to use a state of null
  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});
  const [checkboxErr, setCheckBoxErr] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      try {
        
        await api.post(`/contactus/createContactForm`, { data: Form });
        // success
        
        setForm({...InitForm});
        NotificationManager.success('Contact form sent successfully');

      } catch (e) {
        // failed
        NotificationManager.error('Network error, please try again');

      }

    }

  }



  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const phoneErr = {};
    const checkboxErr = {};
    let isValid = true;

    var checkBox = document.getElementById('exampleCheck1');

    if (name == "") {
      nameErr.nameInvalid = "*Please enter a valid name";
      isValid = false;
    }

    if (!email.includes('@')) {
      emailErr.emailInvalid = "*Email is invalid";
      isValid = false;
    }

    if (!phone.match(/^[0-9+-]+$/)) {
      phoneErr.phoneInvalid = "*Please enter a valid phone number";
      isValid = false
    }

    if (!checkBox.checked) {
      checkboxErr.checkboxInvalid = "*Please check the terms and conditions"
      isValid = false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setPhoneErr(phoneErr);
    setCheckBoxErr(checkboxErr);
    return isValid;
  }


  return (
    <DefaultLayout crumbs="Contact Us">
      <section className="contact-area pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="contact-info">
                <h3>Here to Help</h3>
                <ul className="contact-list">
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 33 Ubi Ave ,
                    #01-47/48 Vertex Singapore 408868
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>{" "}
                    <a href="tel:6565528800">(+65) 6552-8800</a>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>{" "}
                    <a href="mailto:sales@bw.com.sg">sales@bw.com.sg</a>
                  </li>
                  <li>
                    <i className="fas fa-fax"></i>{" "}
                    <a href="#">(+65) 6858 2120</a>
                  </li>
                </ul>

                <h3>Opening Hours:</h3>
                <ul className="opening-hours">
                  <li>
                    <dt>Monday, Friday, Saturday and Sunday:</dt>
                    <dd>09:00AM - 07:00PM</dd>
                  </li>
                  <li>
                    <dt>Tuesday - Thursday</dt>
                    <dd>09:00AM - 08:00PM</dd>
                  </li>
                </ul>

                <h3>Follow Us:</h3>
                <ul className="social d-inline">
                  <li className="mr-3">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="mr-3">
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="contact-form">
                <h3>Have a question?</h3>
                <p>
                  You may find an answer in our{" "}
                  <a className="d-inline" href="/faq">
                    FAQs
                  </a>{" "}
                  or drop us an enquiry!
                </p>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Name <span>(required)*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required={true}
                          value={name}
                          onChange={(e) => onChangeForm('name', e.target.value)}
                          data-error="Please enter your name"
                          placeholder="Enter your name"
                        />
                        {Object.keys(nameErr).map((key) => {
                          return <div style={{ color: "red" }}>{nameErr[key]}</div>
                        })}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Email <span>(required)*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => onChangeForm('email', e.target.value)}
                          className="form-control"
                          required={true}
                          data-error="Please enter your email"
                          placeholder="Enter your Email Address"
                        />
                        {Object.keys(emailErr).map((key) => {
                          return <div style={{ color: "red" }}>{emailErr[key]}</div>
                        })}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Phone Number <span>(required)*</span>
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          value={phone}
                          onChange={(e) => onChangeForm('phone', e.target.value)}
                          className="form-control"
                          required={true}
                          data-error="Please enter your phone number"
                          placeholder="Enter your Phone Number"
                        />
                        {Object.keys(phoneErr).map((key) => {
                          return <div style={{ color: "red" }}>{phoneErr[key]}</div>
                        })}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Your Message <span>(required)*</span>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="8"
                          value={message}
                          required={true}
                          onChange={(e) => onChangeForm('message', e.target.value)}
                          data-error="Please enter your message"
                          className="form-control"
                          placeholder="Enter your Message"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">
                          I agree with Venture Car's{" "}
                          <a className="d-inline" href="/">
                            Privacy &amp; Service Policies
                                    </a>{" "}
                          and{" "}
                          <a className="d-inline" href="/terms-n-conditions">
                            Terms &amp; Conditions
                                    </a>{" "}
                        </label>
                        {Object.keys(checkboxErr).map((key) => {
                          return <div style={{ color: "red" }}>{checkboxErr[key]}</div>
                        })}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button onClick={onSubmit} className="btn btn-primary">
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
export default ContactUs;
