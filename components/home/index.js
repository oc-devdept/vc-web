import React, { Component } from 'react';
import Navbar from 'Components/Layout/Navbar';
import Breadcrumb from 'Components/Common/Breadcrumb';



import { connect } from "react-redux"
import { handleAccountLogout, retrieveUserProfile} from "Ducks/user/UserActions"

import Booking from './Bookings'
import BookingForm from './Bookings/Booking_Form'


class Index extends Component {

    async componentDidMount() {     
        this.props.retrieveUserProfile(this.props.user)
    }

    _HandleLogout = () => {  
        this.props.handleAccountLogout()
    }

    _FetchProfile = () => {
        this.props.retrieveUserProfile(this.props.user)
    }

    render() {
        
        if(this.props.profile){
            console.log(this.props.profile)
            const bookings = this.props.profile.bookings
            return (
                <React.Fragment>
                    <Navbar />
                    <Breadcrumb title="User Homepage" />
                    <section className="about-area pb-60" style={{border:'1px solid black'}}>
                        
                        <div className="container" style={{border:'1px solid black'}}>

                            <div style={{display:"flex", flex: 1, flexDirection:'row'}}>
                                                                                            
                                <div className="row align-items-center flex-column" style={{flex:0.3}}>

                                    <span>User Profile</span>
                                    <span>Name</span>
                                    <span>Gmail</span>

                                    <div>
                                        Hello world
                                        {this.props.profile.userInfo && 
                                            <div style={{display:"flex", flexDirection:'column'}}>
                                                <h2>Your Agent</h2>
                                                {this.props.profile.userInfo.name}
                                            </div>
                                        }                             
                                    </div>
                                </div>

                                <div style={{flex: 0.7}}>

                                    <Booking
                                        AllBookings={bookings}
                                    />

                                    <BookingForm
                                        _FetchProfile={this._FetchProfile}
                                    />
                                </div>
                               

                            </div>
                            
                            <button onClick={this._HandleLogout} className="btn btn-primary">logout</button>

                        </div>
                    </section>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Navbar />
                    <Breadcrumb title="User Homepage" />
                    <section className="about-area pb-60" style={{border:'1px solid black'}}>
                        <div className="container" style={{border:'1px solid black'}}>
                            Loading ...
                        </div>
                    </section>
                </React.Fragment>
            )
        }
    }
}


const mapStateToProps = state => {
    const { UserState } = state
    const { user, profile } = UserState
    return { user, profile }
}
  
export default connect(
  mapStateToProps,
  {
    handleAccountLogout,
    retrieveUserProfile
  }
)(Index)