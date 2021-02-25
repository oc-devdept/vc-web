import React from "react";
import { useDispatch } from "react-redux";
import { handleAccountLogout } from "Ducks/user/UserActions";

export const Transactions = ["Purchases", "Test Drive", "Car Servicing"];
export const Account = ["User", "Rewards", "Payment Logs", "Settings"];

const ProfileMenu = ({ menuTabs, setCurrentTab, activeView }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ backgroundColor: "rgba(33,42,49,1)", position: "relative" }}
    >
      <div className="d-flex flex-column" 
      >
        {menuTabs.map((tab, key) => (
          <div
            key={key}
            className="d-flex flex-column"
            style={{ marginTop: 30 }}
          >
            <span
              style={{
                color: "white",
                padding: 10,
                paddingLeft: 21,
                paddingRight: 21
              }}
            >
              {tab.title}
            </span>
            {tab.routes.map((item, index) => (
              <div
                type="button"
                key={index}
                onClick={() => setCurrentTab(item.state, item.name)}
                style={{
                  padding: 10,
                  paddingLeft: 40,
                  paddingRight: 40,
                  backgroundColor:
                    activeView == item.state && "rgba(51,64,75,1)"
                }}
              >
                <span
                  style={{
                    color:
                      activeView == item.state ? "rgba(236,139,38,1)" : "white",
                    fontWeight: "300"
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={() => dispatch(handleAccountLogout())}
        style={{ fontSize: 16, fontWeight: "500" ,marginBottom:30 ,border:"1px solid #ffffff" }}
        className="btn-primary"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileMenu;
