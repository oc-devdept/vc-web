import React, { Component, useState, useEffect } from 'react';
import Menu from './Menu/Menu'


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


const Index = () => {

    const [Tab, setTab] = useState({Tab: 'Account', Index: 0});

    const setCurrentTab = (SetTab, Index) => {
        setTab(Tab => ({...Tab, Tab: SetTab, Index: Index}));
    }

    const renderWindow = () => {

        if(Tab.Tab === "Transactions"){
            switch(Tab.Index){
                case 0:
                    return(
                        <Purchases/>
                    )
                case 1:
                    return(
                        <Rent/>
                    )
                case 2:
                    return(
                        <Testdrive/>
                    )
                case 3:
                    return(
                        <CarServicing/>
                    )
                default:break
            }
        } else {
            switch(Tab.Index){
                case 0:
                    return(
                        <User/>
                    )
                case 1:
                    return(
                        <Rewards/>
                    )
                case 2:
                    return(
                        <Payment/>
                    )
                case 3:
                    return(
                        <Saved/>
                    )
                case 4:
                    return(
                        <Settings/>
                    )
                default:break
            }
        }
    }

    return (
        <div className="d-flex flex-row" style={{paddingTop: 20}}>
            
            <Menu
                Tab={Tab}
                setCurrentTab={setCurrentTab}
            />

            <div className="d-flex" style={{flex: 1}}>
                {renderWindow()}
            </div>

            
        </div>
    )
    
}
  
export default Index