import React, { useState } from "react";
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { handleCheckoutLogin } from "Ducks/user/UserActions";

import api from "Api";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginOverlay = ({ handleCheckoutLogin }) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [createAccountForm, setCreateAccountForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [createAccount, setCreateAccount] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  const _handleLoginForm = async e => {
    e.preventDefault();
    try {
      handleCheckoutLogin(loginForm, "checkout");
    } catch (e) {
      if (e.response) {
        NotificationManager.error(e.response.data.error.message);
      } else {
        NotificationManager.error("Network error");
      }
    }
  };

  const _handleCreateAccForm = async e => {
    e.preventDefault();
    try {
      await api.post("/basecustomerusers/signup", { data: createAccountForm });
      setCreateSuccess(true);
      NotificationManager.success("Signup Successfully");
    } catch (e) {
      NotificationManager.error(e.response.data.error.message);
    }
  };

  return (
    <React.Fragment>
      <section className="login-area pb-60">
        <div className="container">
          {/* {!this.props.loading ? ( */}
          <div className="row">
            <div className="col-12">
              <div className="login-status py-3 d-flex align-items-center">
                <p>
                  Please log in or create an account to continue with checkout
                  process
                </p>
              </div>
              {/* checks to render the correct overlay (create account or login) */}
              {createAccount ? (
                <React.Fragment>
                  {/* checks to render the correct overlay (form or successful creation) */}
                  {createSuccess ? (
                    <React.Fragment>
                      <div className="signup-overlay signup-form">
                        <div className="section-title">
                          <h2>
                            A verification link has been sent to your email
                            account
                          </h2>
                        </div>
                        <p>
                          Please click on the link that has just been sent to
                          your email account to verify your email. Click the
                          link below after verification to continue the checkout
                          process.
                        </p>
                        <a
                          className="return-store"
                          onClick={() => setCreateAccount(false)}
                        >
                          Back to Login
                        </a>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="signup-overlay">
                        <div className="section-title">
                          <h2>Create an Account</h2>
                        </div>
                        <Form className="signup-form">
                          <div className="d-flex flex-row flex-fill">
                            <Form.Group
                              controlId="firstName"
                              className="form-group d-flex flex-column"
                              style={{ flex: 1, marginRight: 25 }}
                            >
                              <Form.Label>First Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={createAccountForm.firstName}
                                onChange={e =>
                                  setCreateAccountForm({
                                    ...createAccountForm,
                                    firstName: e.target.value
                                  })
                                }
                              />
                            </Form.Group>
                            <Form.Group
                              controlId="lastName"
                              className="form-group d-flex flex-column"
                              style={{ flex: 1 }}
                            >
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={createAccountForm.lName}
                                onChange={e =>
                                  setCreateAccountForm({
                                    ...createAccountForm,
                                    lastName: e.target.value
                                  })
                                }
                              />
                            </Form.Group>
                          </div>
                          <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter your email"
                              value={createAccountForm.email}
                              onChange={e =>
                                setCreateAccountForm({
                                  ...createAccountForm,
                                  email: e.target.value
                                })
                              }
                            />
                          </Form.Group>
                          <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Enter your password"
                              value={createAccountForm.password}
                              onChange={e =>
                                setCreateAccountForm({
                                  ...createAccountForm,
                                  password: e.target.value
                                })
                              }
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={_handleCreateAccForm}
                          >
                            Signup
                          </Button>
                          <a
                            className="return-store"
                            onClick={() => setCreateAccount(false)}
                          >
                            Have an account? Login here
                          </a>
                        </Form>
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="login-overlay">
                    <div className="section-title">
                      <h2>Login</h2>
                    </div>
                    <div>
                      <Form>
                        <Form.Group controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={loginForm.email}
                            onChange={e =>
                              setLoginForm({
                                ...loginForm,
                                email: e.target.value
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={loginForm.password}
                            onChange={e =>
                              setLoginForm({
                                ...loginForm,
                                password: e.target.value
                              })
                            }
                          />
                        </Form.Group>
                        <Button
                          onClick={_handleLoginForm}
                          className="primary"
                          style={{ width: "100%" }}
                        >
                          Login
                        </Button>
                      </Form>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly"
                        }}
                        className="my-4"
                      >
                        <button
                          // onClick={() =>
                          //   this.setState({
                          //     restartPassword: true,
                          //     resendLink: false,
                          //     restartPasswordDone: false
                          //   })
                          // }
                          className="forgot-password"
                        >
                          Lost your password?
                        </button>

                        <button
                          // onClick={() =>
                          //   this.setState({
                          //     resendLink: true,
                          //     restartPassword: false,
                          //     resendLinkDone: false
                          //   })
                          // }
                          className="forgot-password"
                        >
                          Resend verification link
                        </button>
                      </div>

                      {/* {this.state.resendLink && (
                    <div>
                      <div
                        style={{
                          marginTop: 50,
                          border: "1px solid rgba(0,0,0,0.2)",
                          marginLeft: 25,
                          marginRight: 25
                        }}
                      ></div>

                      <div className="login-form" style={{ marginTop: 50 }}>
                        <div className="form-group">
                          <label>Account Email</label>
                          <input
                            type="email"
                            className="form-control"
                            value={this.state.passwordEmail}
                            onChange={e =>
                              this.setState({
                                passwordEmail: e.target.value
                              })
                            }
                            placeholder="Enter your email"
                            id="email"
                            name="email"
                          />
                        </div>

                        <button
                          onClick={this._handleVerificationLink}
                          className="btn btn-primary"
                        >
                          Send me verification link
                        </button>
                      </div>
                    </div>
                  )} */}

                      {/* {this.state.restartPassword && (
                    <div>
                      <div
                        style={{
                          marginTop: 50,
                          border: "1px solid rgba(0,0,0,0.2)",
                          marginLeft: 25,
                          marginRight: 25
                        }}
                      ></div>

                      <div className="login-form" style={{ marginTop: 50 }}>
                        <div className="form-group">
                          <label>Account Email</label>
                          <input
                            type="email"
                            className="form-control"
                            value={this.state.passwordEmail}
                            onChange={e =>
                              this.setState({
                                passwordEmail: e.target.value
                              })
                            }
                            placeholder="Enter your email"
                            id="email"
                            name="email"
                          />
                        </div>

                        <button
                          onClick={this._handlePasswordForm}
                          className="btn btn-primary"
                        >
                          Reset my password
                        </button>
                      </div>
                    </div>
                  )} */}

                      {/* {this.state.restartPasswordDone && (
                    <div>
                      <div
                        style={{
                          marginTop: 50,
                          border: "1px solid rgba(0,0,0,0.2)",
                          marginLeft: 25,
                          marginRight: 25
                        }}
                      ></div>

                      <div className="login-form" style={{ marginTop: 50 }}>
                        <div className="form-group">
                          <label>
                            A reset password link has sent to your emaill
                          </label>
                        </div>

                        <button
                          onClick={() =>
                            this.setState({ restartPasswordDone: false })
                          }
                          className="btn btn-primary"
                        >
                          Back to menu
                        </button>
                      </div>
                    </div>
                  )} */}

                      {/* {this.state.resendLinkDone && (
                    <div>
                      <div
                        style={{
                          marginTop: 50,
                          border: "1px solid rgba(0,0,0,0.2)",
                          marginLeft: 25,
                          marginRight: 25
                        }}
                      ></div>

                      <div className="login-form" style={{ marginTop: 50 }}>
                        <div className="form-group">
                          <label>
                            You will receive a new verification link in your
                            email, if you have registered with us previously
                          </label>
                        </div>

                        <button
                          onClick={() =>
                            this.setState({ resendLinkDone: false })
                          }
                          className="btn btn-primary"
                        >
                          Back to menu
                        </button>
                      </div>
                    </div>
                  )} */}
                    </div>
                  </div>
                  <div className="create-acc-overlay pb-60">
                    <div className="section-title">
                      <h2>New Customer</h2>
                    </div>

                    <span>Create a Account</span>
                    <p>
                      Sign up for a free account at our store. Registration is
                      quick and easy. It allows you to be able to order from our
                      shop. To start shopping click register.
                    </p>
                    <button
                      onClick={() => {
                        setCreateAccount(true);
                        setCreateSuccess(false);
                      }}
                      className="btn btn-light"
                    >
                      Create Account
                    </button>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          {/* ) : (
              <div>Loading ...</div>
            )} */}
        </div>
      </section>
    </React.Fragment>
  );
};

// export default LoginOverlay;

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  handleCheckoutLogin
})(LoginOverlay);
