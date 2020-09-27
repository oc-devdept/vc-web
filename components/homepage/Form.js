import React, { Component } from "react";

class Form extends Component {

    render() {
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
                                <input type="text" class="form-control" id="fullName" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="emailAddress" placeholder="Email Address" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="phoneNumber" placeholder="Phone Number" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="message" rows="4" placeholder="Message"></textarea>
                            </div>
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
                            </div>
                            <button type="submit" class="btn btn-primary">SEND ENQUIRY</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;