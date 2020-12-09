import React, { memo} from 'react';


const Index = memo(({_HandleInputProfile, lastName, firstName, email, phone}) => {

    return (
        <div className="d-flex flex-column">
            
            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => _HandleInputProfile('firstName', e.target.value)}  className="form-control" placeholder="Enter your first name" id="firstName" name="firstName" />
                </div>

                <div class="col-12 col-md-6 mb-3">
                <label>Last Name</label>
                <input type="text" value={lastName}  onChange={(e) => _HandleInputProfile('lastName', e.target.value)} className="form-control" placeholder="Enter your last name" id="lastName" name="lastName" />
                </div>                
            </div>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                <label>Phone</label>
                                <input type="text" value={phone}  onChange={(e) => _HandleInputProfile('phone', e.target.value)} className="form-control" placeholder="Enter your phone number" id="phone" name="phone" />
                </div>

                <div class="col-12 col-md-6 mb-3">
                <label>Email</label>
                                <input type="text" value={email}  onChange={(e) => _HandleInputProfile('email', e.target.value)} className="form-control" placeholder="Enter your email" id="email" name="email" />
                </div>                
            </div>

            {/* 
            <div className="d-flex flex-column flex-sm-column">
                <div style={{flex: 1, padding: 25}}>
                        <div  className="d-flex flex-row flex-fill">
                            <div className="form-group d-flex flex-column" style={{flex:1, marginRight:25}}>
                                <label>First Name</label>
                                <input type="text" value={firstName} onChange={(e) => _HandleInputProfile('firstName', e.target.value)}  className="form-control" placeholder="Enter your first name" id="firstName" name="firstName" />
                            </div>
                            <div className="form-group d-flex flex-column" style={{flex:1}}>
                                <label>Last Name</label>
                                <input type="text" value={lastName}  onChange={(e) => _HandleInputProfile('lastName', e.target.value)} className="form-control" placeholder="Enter your last name" id="lastName" name="lastName" />
                            </div>
                        </div>

                        <div  className="d-flex flex-row flex-fill">
                            <div className="form-group d-flex flex-column" style={{flex:0.3,  marginRight:25}}>
                                <label>Phone</label>
                                <input type="text" value={phone}  onChange={(e) => _HandleInputProfile('phone', e.target.value)} className="form-control" placeholder="Enter your phone number" id="phone" name="phone" />
                            </div>

                            <div className="form-group d-flex flex-column" style={{flex:0.7}}>
                                <label>Email</label>
                                <input type="text" value={email}  onChange={(e) => _HandleInputProfile('email', e.target.value)} className="form-control" placeholder="Enter your email" id="email" name="email" />
                            </div>
                        </div>
                    </div>
            </div>
            
            
             */}


        </div>
    )
    
})
  

export default Index