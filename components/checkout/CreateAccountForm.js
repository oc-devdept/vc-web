import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateAccountForm = ({
  createSuccess,
  setCreateAccount,
  _handleCreateAccForm
}) => {
  const [createAccountForm, setCreateAccountForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  return (
    <React.Fragment>
      {/* checks to render the correct overlay (form or successful creation) 
      <div className="signup-overlay signup-form">
          <div className="section-title">
            <h2>A verification link has been sent to your email account</h2>
          </div>
          <p>
            Please click on the link that has just been sent to your email
            account to verify your email. Click the link below after
            verification to continue the checkout process.
          </p>
          <a className="return-store" onClick={() => setCreateAccount(false)}>
            Back to Login
          </a>
        </div>
        
      */}
      {createSuccess ? (
        <div className="signup-overlay signup-form">
        <div className="section-title">
          <h2>Logging you in...</h2>
          </div>
          </div>
      ) : (
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
              onClick={e => _handleCreateAccForm(e, createAccountForm)}
            >
              Signup
            </Button>
            <a className="return-store" onClick={() => setCreateAccount(false)}>
              Have an account? Login here
            </a>
          </Form>
        </div>
      )}
    </React.Fragment>
  );
};

export default CreateAccountForm;
