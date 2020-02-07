import React, { Component, useState, useEffect } from 'react';
import Menu from './Menu/Menu'
import Breadcrumb from 'Components/Common/Breadcrumb';

// Transactions
// import User from './Transactions/Bookings/index'
import Purchases from './Transactions/Purchases/index'
import Rent from './Transactions/Rent/index'
import Testdrive from './Transactions/Testdrive/index'
import CarServicing from './Transactions/CarServicing/index'

// Account
import User from './Account/User/index'
import Rewards from './Account/Rewards/index'
import Payment from './Account/Payment/index'
import Saved from './Account/Saved/index'
import Settings from './Account/Settings/index'
import { useDispatch, useSelector } from "react-redux";
import { retrieveUserProfile} from "Ducks/user/UserActions"

const Title = {
    Transactions:  ["Purchases", "Rent", "Test Drive", "Car Servicing"],
    Account : ["User", "Rewards", "Payment", "Saved", "Settings"]
}


const Index = () => {

    // what other information can be initally called
    // call redux api for profile
    const dispatch = useDispatch();
    const userId = useSelector(state => state.UserState.userId);
    useEffect(() => {dispatch(retrieveUserProfile(userId))}, []);



    const [Tab, setTab] = useState({Tab: 'Transactions', Index: 3});
    const setCurrentTab = (SetTab, Index) => {
        setTab(Tab => ({...Tab, Tab: SetTab, Index: Index}));
    }

    
    const renderNewWindow = () => {
        switch(Tab.Tab){
            case 'Transactions':
                return (
                    <div className="d-flex flex-fill">
                        {
                            {
                                0 : <Purchases/>,
                                1 : <Rent/>,
                                2 : <Testdrive/>,
                                3 : <CarServicing/>
                            }[Tab.Index]
                        }
                    </div>
                )
            case 'Account':
                return (
                    <div className="d-flex flex-fill">
                        {
                            {
                                0 : <User/>,
                                1 : <Rewards/>,
                                2 : <Payment/>,
                                3 : <Saved/>,
                                4 : <Settings/>,
                            }[Tab.Index]
                        }
                    </div>
                )
            default:break
        }
        
    }

    return (
        <div className="d-flex flex-fill flex-column">
            <Breadcrumb title={Title[Tab.Tab][Tab.Index]} />

            <div className="d-flex flex-row flex-fill" style={{}}>
                <Menu
                    Tab={Tab}
                    setCurrentTab={setCurrentTab}
                />

                {renderNewWindow()}
                
            </div>
        </div>
        
    )
    
}
  
export default Index