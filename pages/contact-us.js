import React from "react";
// Page Layout
import DefaultLayout from "Components/Layout/PageTemplates/Default";

function ContactUs(props) {
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
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
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
                  You may find an answer in our <a href="/faq">FAQs</a> or drop
                  us an enquiry!
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
                          data-error="Please enter your name"
                          placeholder="Enter your name"
                        />
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
                          className="form-control"
                          required={true}
                          data-error="Please enter your email"
                          placeholder="Enter your Email Address"
                        />
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
                          className="form-control"
                          required={true}
                          data-error="Please enter your phone number"
                          placeholder="Enter your Phone Number"
                        />
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
                          required={true}
                          data-error="Please enter your message"
                          className="form-control"
                          placeholder="Enter your Message"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
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
