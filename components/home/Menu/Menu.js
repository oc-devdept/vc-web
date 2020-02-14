import React, {} from 'react';
import { useDispatch } from "react-redux";
import { handleAccountLogout} from "Ducks/user/UserActions"

export const Transactions = ["PURCHASES", "TEST DRIVE", "CAR SERVICING"]
export const Account = ["USER", "REWARDS","PAYMENT LOGS", "SETTINGS"]

const Index = ({Tab, setCurrentTab}) => {

    // const [Menu, setMenu] = useState(Tab);
    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-column justify-content-between" style={{backgroundColor:'rgba(33,42,49,1)', position:'relative'}}>
            
            <div className="d-flex flex-column">
                <div className="d-flex flex-column" style={{marginTop: 30}}>
                    <span style={{color:'white', padding:10, paddingLeft: 21, paddingRight:21}}>TRANSACTIONS</span>
                    {Transactions.map((item, index) => {
                        switch(Tab.Tab){
                            case "Transactions":
                                if(Tab.Index == index){
                                    return(
                                        <div key={index} onClick={() => setCurrentTab("Transactions", index)} style={{padding: 10, paddingLeft:40,  backgroundColor:'rgba(51,64,75,1)', paddingRight: 40, }}>
                                            <span style={{color:'rgba(236,139,38,1)', fontWeight: '300'}} >{item}</span>
                                        </div>
                                    )
                                } else {
                                    return(
                                        <div key={index} onClick={() => setCurrentTab("Transactions", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40, }}>
                                            <span style={{color:'white', fontWeight: '300'}}  >{item}</span>
                                        </div>
                                    )
                                }
                            default:
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Transactions", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40, }}>
                                        <span style={{color:'white', fontWeight: '300'}} key={index}>{item}</span>
                                    </div>
                                )
                        }
                    })}
                </div>
                <div className="d-flex flex-column" style={{marginTop: 30}}>
                <span style={{color:'white', padding:10, paddingLeft: 21, paddingRight:21}}>ACCOUNT</span>
                {Account.map((item, index) => {
                    switch(Tab.Tab){
                        case "Account":
                            if(Tab.Index == index){
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Account", index)} style={{padding: 10, paddingLeft:40, backgroundColor:'rgba(51,64,75,1)', paddingRight: 40}}>
                                        <span style={{color:'rgba(236,139,38, 1)',fontWeight: '300'}} key={index}>{item}</span>
                                    </div>
                                )
                            } else {
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Account", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40,  }}>
                                        <span style={{color:'white',fontWeight: '300'}} key={index}>{item}</span>
                                    </div>
                                )
                            }
                        default:
                            return(
                                <div key={index} onClick={() => setCurrentTab("Account", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40, }}>
                                    <span style={{color:'white', fontWeight: '300'}} key={index}>{item}</span>
                                </div>
                            )
                    }
                })}
            </div>
            </div>
            
            <button onClick={() => dispatch(handleAccountLogout())} style={{ fontSize: 16,  fontWeight:'500'}} className="btn-primary">LOGOUT</button>
            {/* <button onClick={() => dispatch(handleAccountLogout())} style={{width:'100%', color:'rgba(236,139,38,1)', background:'white', fontSize: 16, height: 45, fontWeight:'600'}}>LOGOUT</button>   */}
        </div>
    )
    
}

export default Index