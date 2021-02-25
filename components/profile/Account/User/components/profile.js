import React, { Component, useState, useEffect } from 'react';

// this.props.retrieveUserProfile(this.props.user)

let InitUserProfile = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    address: '',
}

const Index = ({Profile, _SaveUserDetails}) => {

    if(!Profile){return (<div>Loading ...</div>)}

    const {lastName, firstName, email, phone, address} = Profile.baseContact
    const [UserProfile, setUserProfile] = useState({...InitUserProfile, lastName, firstName, email, phone, address});

    const _HandleInput = (element, e) => {
        setUserProfile(UserProfile => ({ ...UserProfile, [element]: e }));
    };
    return (
        <div className="d-flex flex-column" style={{flex:1, padding: 25}}>
            
            <div className="d-flex flex-column" style={{padding: 20, borderRadius:5, boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)' }}>
                <span style={{textAlign:'center'}}>User Profile Settings</span>
                <div className="d-flex flex-row">
                    <div style={{flex: 1, padding: 25}}>
                        {/* <div  className="d-flex flex-row flex-fill"> */}
                        <div class="row">
                            {/* <div className="form-group d-flex flex-column" style={{flex:1, marginRight:25}}> */}
                            <div class="col-12 col-md-6 mb-3">
                                <label>First Name</label>
                                <input type="text" value={UserProfile.firstName} onChange={(e) => _HandleInput('firstName', e.target.value)}  className="form-control" placeholder="Enter your first name" id="firstName" name="firstName" />
                            </div>
                            {/* <div className="form-group d-flex flex-column" style={{flex:1}}> */}
                            <div class="col-12 col-md-6 mb-3">
                                <label>Last Name</label>
                                <input type="text" value={UserProfile.lastName}  onChange={(e) => _HandleInput('lastName', e.target.value)} className="form-control" placeholder="Enter your last name" id="lastName" name="lastName" />
                            </div>
                        </div>

                        {/* <div  className="d-flex flex-row flex-fill"> */}
                        <div class="row">
                            {/* <div className="form-group d-flex flex-column" style={{flex:0.3,  marginRight:25}}> */}
                            <div class="col-12 col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="text" value={UserProfile.phone}  onChange={(e) => _HandleInput('phone', e.target.value)} className="form-control" placeholder="Enter your phone number" id="phone" name="phone" />
                            </div>

                            {/* <div className="form-group d-flex flex-column" style={{flex:0.7}}> */}
                            <div class="col-12 col-md-6 mb-3">
                                <label>Email</label>
                                <input type="text" value={UserProfile.email}  onChange={(e) => _HandleInput('email', e.target.value)} className="form-control" placeholder="Enter your email" id="email" name="email" />
                            </div>
                        </div>

                        <div  className="d-flex flex-row flex-fill">
                            <div className="form-group d-flex flex-column" style={{flex:1}}>
                                <label>Address</label>
                                <input type="text" value={UserProfile.address}  onChange={(e) => _HandleInput('address', e.target.value)} className="form-control" placeholder="Enter your address" id="address" name="address" />
                            </div>
                        </div>

                        <button onClick={()=> _SaveUserDetails(UserProfile)} className="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>

         


        </div>
    )
    
}
  
export default Index