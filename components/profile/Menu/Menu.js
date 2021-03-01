import React from "react";
import { useDispatch } from "react-redux";
import { handleAccountLogout } from "Ducks/user/UserActions";


export const Transactions = ["Purchases", "Test Drive", "Car Servicing"];
export const Account = ["User", "Rewards", "Payment Logs", "Settings"];

import useMediaQuery from '@material-ui/core/useMediaQuery';
import zIndex from "@material-ui/core/styles/zIndex";
import { Row } from "react-bootstrap";


const ProfileMenu = ({ menuTabs, setCurrentTab, activeView }) => {
const dispatch = useDispatch();
const mobileScreen = useMediaQuery('(max-width:600px)');
const aboveMobileScreen = useMediaQuery('(min-width:600px');

//TODO refactor into maps!

  return (
    <React.Fragment>
      <div className="container-fluid" style={{backgroundColor: "#000000", padding: "1rem", color:"white" ,borderTop:"2px  solid #ffffff" }}>
        <div className="row"
         style={{display:"flex",flexDirection:"row",justifyContent:"space-between" }}
         >
          {/* bookings section */}
          <div className="booking" style={{paddingLeft:"20px"}}>
           <h5 style={{color: "white"}}> {menuTabs[0].title}</h5>
            
            <div style={{paddingLeft: "1rem"}}>
                <span 
                  style={{
                    paddingLeft: "1rem",
                    color: activeView == menuTabs[0].routes[0].state ? "rgba(236,139,38,1)" : "white"
                    }}
                  onClick={() => setCurrentTab(menuTabs[0].routes[0].state, menuTabs[0].routes[0].name)} 
                  className="profile-page-link-route" 
                  > 
                  {menuTabs[0].routes[0].name}
                </span>
                <span 
                  style={{
                      paddingLeft: "1rem",
                      color: activeView == menuTabs[0].routes[1].state ? "rgba(236,139,38,1)" : "white"
                    }}
                  onClick={() => setCurrentTab(menuTabs[0].routes[1].state, menuTabs[0].routes[1].name)}  
                  className="profile-page-link-route" 
                > 
                  {menuTabs[0].routes[1].name}
                </span>
            </div>

          </div>

          {/* Account Section */}
          <div className="account" style={{paddingLeft:"20px",paddingRight:"20px"}}>
            <h5 style={{color: "white"}}> {menuTabs[1].title} </h5>
              <div style={{paddingLeft: "1rem"}}>
                <span style={{
                  paddingLeft: "1rem",
                  color: activeView == menuTabs[1].routes[0].state ? "rgba(236,139,38,1)" : "white"
                }}
                onClick={() => setCurrentTab(menuTabs[1].routes[0].state, menuTabs[1].routes[0].name)}  
                className="profile-page-link-route" 
                > 
                  {menuTabs[1].routes[0].name}  
                </span>

                <span 
                  style={{
                    paddingLeft: "1rem",
                    color: activeView == menuTabs[1].routes[1].state ? "rgba(236,139,38,1)" : "white"
                  }}  
                  onClick={() => setCurrentTab(menuTabs[1].routes[1].state, menuTabs[1].routes[1].name)}  
                  className="profile-page-link-route" 
                > 
                  {menuTabs[1].routes[1].name}
                </span>
              </div>
          </div>

        <div className={ aboveMobileScreen? "logout justify-content-end" : "col-md-8 d-flex justify-content-center"} style={{paddingRight:"20px"}}>
          <button
            onClick={() => dispatch(handleAccountLogout())}
            style={{ 
              fontSize: 16, 
              fontWeight: 
              "500",border:"1px solid #ffffff", 
              marginTop: mobileScreen ? "1rem" : "" 
            }}
            className="btn-primary"
          >
            Logout
          </button> 
        </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default ProfileMenu;


{/* <div
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
</div> */}