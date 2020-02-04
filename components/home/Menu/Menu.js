import React, {} from 'react';
import { useDispatch } from "react-redux";
import { handleAccountLogout} from "Ducks/user/UserActions"

const TransOptions = ["PURCHASES", "RENT", "TEST DRIVE", "CAR SERVICING"]
const AccOptions = ["USER", "REWARDS","PAYMENT LOGS", "SAVED", "SETTINGS"]

const Index = ({Tab, setCurrentTab}) => {

    // const [Menu, setMenu] = useState(Tab);
    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-column" style={{backgroundColor:'rgba(33,42,49,1)', height: '92.5vh', position:'relative'}}>
            <div className="d-flex flex-column" style={{marginTop: 30}}>
                <span style={{color:'white', padding:10, paddingLeft: 21, paddingRight:21}}>TRANSACTIONS</span>
                {TransOptions.map((item, index) => {
                    switch(Tab.Tab){
                        case "Transactions":
                            if(Tab.Index == index){
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Transactions", index)} style={{padding: 10, paddingLeft:40,  backgroundColor:'rgba(51,64,75,1)', paddingRight: 40, }}>
                                        <span style={{color:'rgba(236,139,38,1)', fontWeight: '400'}} >{item}</span>
                                    </div>
                                )
                            } else {
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Transactions", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40, }}>
                                        <span style={{color:'white', fontWeight: '400'}}  >{item}</span>
                                    </div>
                                )
                            }
                        default:
                            return(
                                <div key={index} onClick={() => setCurrentTab("Transactions", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40, }}>
                                    <span style={{color:'white', fontWeight: '400'}} key={index}>{item}</span>
                                </div>
                            )
                    }
                })}
            </div>

            <div className="d-flex flex-column" style={{marginTop: 30}}>
                <span style={{color:'white', padding:10, paddingLeft: 21, paddingRight:21}}>ACCOUNT</span>
                {AccOptions.map((item, index) => {
                    switch(Tab.Tab){
                        case "Account":
                            if(Tab.Index == index){
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Account", index)} style={{padding: 10, paddingLeft:40, backgroundColor:'rgba(51,64,75,1)', paddingRight: 40}}>
                                        <span style={{color:'rgba(236,139,38, 1)',fontWeight: '400'}} key={index}>{item}</span>
                                    </div>
                                )
                            } else {
                                return(
                                    <div key={index} onClick={() => setCurrentTab("Account", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40,  }}>
                                        <span style={{color:'white',fontWeight: '400'}} key={index}>{item}</span>
                                    </div>
                                )
                            }
                        default:
                            return(
                                <div key={index} onClick={() => setCurrentTab("Account", index)} style={{padding: 10, paddingLeft:40, paddingRight: 40, }}>
                                    <span style={{color:'white', fontWeight: '400'}} key={index}>{item}</span>
                                </div>
                            )
                    }
                })}
            </div>
            
            <div style={{position:'absolute', bottom:0, right:0, left:0}}>
                <button onClick={() => dispatch(handleAccountLogout())} style={{width:'100%', color:'rgba(236,139,38,1)', background:'white', fontSize: 16, height: 45, fontWeight:'600'}}>LOGOUT</button>  
            </div>
        </div>
    )
    
}
  
export default Index