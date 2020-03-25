import React, { useState } from "react";
import api from "Api";
import { NotificationManager } from "react-notifications";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = ({
  setCreateAccount,
  setCreateSuccess,
  _handleLoginForm
}) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [addForm, setAddForm] = useState({
    passwordEmail: "",
    restartPassword: false,
    restartPasswordDone: false,
    resendLink: false,
    resendLinkDone: false
  });

  const _handleVerificationLink = async e => {
    try {
      const email = addForm.passwordEmail;
      await api.post(`/basecustomerusers/verify`, { email: email });
      setAddForm({
        ...addForm,
        resendLink: false,
        resendLinkDone: true,
        passwordEmail: ""
      });
      NotificationManager.success("A verification email has been sent out");
    } catch (e) {
      console.log(e);
      NotificationManager.error(
        "Please check your network or input correct email address"
      );
    }
  };

  const _handlePasswordForm = async e => {
    try {
      const email = addForm.passwordEmail;
      await api.post(`/basecustomerusers/reset`, { email: email });
      setAddForm({
        ...addForm,
        restartPassword: false,
        restartPasswordDone: true,
        passwordEmail: ""
      });
      NotificationManager.success("A reset password email has been sent out");
    } catch (e) {
      console.log(e);
      NotificationManager.error(
        "Please check your network or input correct email address"
      );
    }
  };

  return (
    <React.Fragment>
      <div className="login-overlay">
        <div className="section-title">
          <h2>Login</h2>
        </div>
        <div className="mb-4">
          <Form className="signup-form">
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
              onClick={e => _handleLoginForm(e, loginForm)}
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
              onClick={() =>
                setAddForm({
                  passwordEmail: "",
                  restartPassword: true,
                  resendLink: false,
                  restartPasswordDone: false,
                  resendLinkDone: false
                })
              }
              className="forgot-password"
            >
              Lost your password?
            </button>

            <button
              onClick={() =>
                setAddForm({
                  passwordEmail: "",
                  restartPassword: false,
                  resendLink: true,
                  restartPasswordDone: false,
                  resendLinkDone: false
                })
              }
              className="forgot-password"
            >
              Resend verification link
            </button>
          </div>
          {addForm.restartPassword && (
            <div className="add-form signup-form">
              <div
                style={{
                  marginTop: 50,
                  border: "1px solid rgba(0,0,0,0.2)",
                  marginLeft: 25,
                  marginRight: 25
                }}
              ></div>
              <Form className="add-form-reset" style={{ marginTop: 50 }}>
                <Form.Group controlId="email-reset">
                  <Form.Label>Account Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={addForm.passwordEmail}
                    onChange={e =>
                      setAddForm({
                        ...addForm,
                        passwordEmail: e.target.value
                      })
                    }
                  />
                </Form.Group>
                <Button onClick={() => _handlePasswordForm(addForm)}>
                  Reset my password
                </Button>
              </Form>
            </div>
          )}

          {addForm.restartPasswordDone && (
            <React.Fragment>
              <div
                style={{
                  marginTop: 50,
                  border: "1px solid rgba(0,0,0,0.2)",
                  marginLeft: 25,
                  marginRight: 25
                }}
              ></div>

              <div className="signup-form" style={{ marginTop: 50 }}>
                <p>
                  A reset password link has sent to your email. Please login
                  after successful account reset.
                </p>
              </div>
            </React.Fragment>
          )}

          {addForm.resendLink && (
            <div className="add-form signup-form">
              <div
                style={{
                  marginTop: 50,
                  border: "1px solid rgba(0,0,0,0.2)",
                  marginLeft: 25,
                  marginRight: 25
                }}
              ></div>
              <Form className="add-form-resend" style={{ marginTop: 50 }}>
                <Form.Group controlId="email-resend">
                  <Form.Label>Account Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={addForm.passwordEmail}
                    onChange={e =>
                      setAddForm({
                        ...addForm,
                        passwordEmail: e.target.value
                      })
                    }
                  />
                </Form.Group>
                <Button onClick={() => _handleVerificationLink(addForm)}>
                  Send me verification link
                </Button>
              </Form>
            </div>
          )}

          {addForm.resendLinkDone && (
            <React.Fragment>
              <div
                style={{
                  marginTop: 50,
                  border: "1px solid rgba(0,0,0,0.2)",
                  marginLeft: 25,
                  marginRight: 25
                }}
              ></div>

              <div className="signup-form" style={{ marginTop: 50 }}>
                <p className="text-justify">
                  You will receive a new verification link in your email if you
                  have registered with us previously. Please login after
                  successful verification.
                </p>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      <div className="create-acc-overlay pb-60">
        <div className="section-title">
          <h2>New Customer</h2>
        </div>
        <span
          style={{
            display: "block",
            fontSize: 17,
            fontWeight: 600,
            marginBottom: "0.5rem"
          }}
        >
          Create an Account
        </span>
        <p>
          Sign up for a free account at our store. Registration is quick and
          easy. It allows you to be able to order from our shop. To start
          shopping click register.
        </p>
        <Button
          onClick={() => {
            setCreateAccount(true);
            setCreateSuccess(false);
          }}
          variant="light"
        >
          Create Account
        </Button>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
