import React from "react";
import Moment from 'moment'

const Index = () =>{
    return (
        <div className="comero-nav" style={{width: '100%', display:'flex', flexDirection:"row", justifyContent:'space-between', padding:10}}>
            <div style={{width: 100}}>
                <span style={{color:"white",}}>NAME</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>CREATED DATE</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>EMAIL</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>CONTACT</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>SERVICE</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>INTEREST</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>SCHEDULED</span>
            </div>
            <div style={{width: 100}}>
                <span style={{color:"white"}}>STATUS</span>
            </div>
        </div>
    );
}

export default Index


