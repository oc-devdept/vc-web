import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
import api from "Api";
import { handleCheckoutLogin } from "Ducks/user/UserActions";

import CreateAccountForm from "Components/checkout/CreateAccountForm";
import LoginForm from "Components/checkout/LoginForm";
import data from "@iconify/icons-bx/bxs-phone";

const LoginOverlay = ({ handleCheckoutLogin }) => {
  const [createAccount, setCreateAccount] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);


  const _handleLoginForm = async (e, loginForm) => {
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

  const _handleCreateAccForm = async (e, createAccountForm) => {
    e.preventDefault();
    try {
      await api.post("/basecustomerusers/signup", { data: createAccountForm });
      setCreateSuccess(true);
      NotificationManager.success("Signup Successful");

      //auto login
      handleCheckoutLogin({email: createAccountForm.email, password: createAccountForm.password}, "checkout");
    } catch (e) {
      NotificationManager.error(e.response.data.error.message);
    }
  };

  return (
    <React.Fragment>
      <section className="login-area pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="login-status py-3 d-flex align-items-center">
                <span style={{ fontSize: 17, fontWeight: 600 }}>
                  Please log in or create an account to continue with checkout
                  process
                </span>
              </div>
              {/* checks to render the correct overlay (create account or login) */}
              {createAccount ? (
                <CreateAccountForm
                  createSuccess={createSuccess}
                  setCreateAccount={setCreateAccount}
                  _handleCreateAccForm={_handleCreateAccForm}
                />
              ) : (
                <LoginForm
                  setCreateAccount={setCreateAccount}
                  setCreateSuccess={setCreateSuccess}
                  _handleLoginForm={_handleLoginForm}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  handleCheckoutLogin
})(LoginOverlay);
