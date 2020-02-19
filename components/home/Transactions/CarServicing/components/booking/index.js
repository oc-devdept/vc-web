import React, { Component, useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Booking from 'Components/booking/booking'
import UserProfile from 'Components/booking/profile'
import Moment from 'moment'
import { NotificationManager } from "react-notifications";

import api from "Api";


let InitBookService = {
    model: '',
    date: '', // schedule date
    timeslot: '', // AM/PM
    description: '',
}

let InitUserProfile = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
}


const Index = ({_ReturnDashBoard, toggleBookService}) => {

   
    const reduxProfile = useSelector(state => state.UserState.profile);

    // const {lastName, firstName, email, phone} = reduxProfile.customer.baseContact
    const [Timeslot, setTimeSlot] = useState(["AM","PM"]);
    const [Profile, setUserProfile] = useState({...InitUserProfile, ...reduxProfile.baseContact});
    const [currentDate, setDate] = useState(Moment(new Date).format('LL'));
    const [BookService, setBookService] = useState(InitBookService);

    const _HandleInputProfile = (element, e) => {
        setUserProfile(Profile => ({ ...Profile, [element]: e }));
    };
    
    const _HandleDayChange = (date) => {
        setDate(() => Moment(date).format('LL'))
        setBookService(BookService => ({ ...BookService, date: date }));
    }

    const _HandleInputForm = (element, e) => {
        setBookService(BookService => ({ ...BookService, [element]: e }));
    };

    const _setItemTimeSlot = (e) => {
        setBookService(BookService => ({ ...BookService, timeslot: e.target.value }));
    }


    const validateService = async () => {

        const newBooking = {
            service: 'Maintenance',
            status: 'Awaiting',
            contact: Profile,
            content: BookService,
        }

        const result = await api.post(`/bookings/createBooking`, {data: newBooking});

        switch(result.data.success){
            case 0:
                // this.setState({error: true})
                NotificationManager.error('Unable to make booking request');
                break
            case 1:
                // this.props._FetchProfile()
                NotificationManager.success('Booking created successfully');
                _ReturnDashBoard()
                break
            default:
                break
        }
        
    }


    const {lastName, firstName, email, phone} = Profile
    const {model, date, timeslot, description} = BookService

    return (

        <div className="d-flex flex-fill flex-column">   

            <div className="d-flex justify-content-start">
                <button onClick={toggleBookService} style={{width: 250, padding: 8, margin:20, borderRadius: 10,}} className="btn-primary">Dashboard</button>
            </div>

            <div className="d-flex justify-content-center">
                <span style={{textAlign:'center'}}>APPOINTMENT DETAIL</span>
            </div>

            <div className="d-flex flex-column"  style={{margin: 20, padding:20, borderRadius:5, boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)'}}>
                <UserProfile
                    _HandleInputProfile={_HandleInputProfile}
                    lastName={lastName}
                    firstName={firstName}
                    email={email}
                    phone={phone}
                />

                <Booking
                    _HandleDayChange={_HandleDayChange}
                    _HandleInputForm={_HandleInputForm}
                    _setItemTimeSlot={_setItemTimeSlot}
                    Timeslot={Timeslot}
                    currentDate={currentDate}
                    model={model}
                    timeslot={timeslot}
                    description={description}
                />
                
                <div className="d-flex justify-content-end">
                    <button onClick={validateService} style={{width: 250, padding: 10, margin:20, borderRadius: 10,}} className="btn-primary">BOOK APPOINTMENT</button>
                </div>
            </div>

        </div>

    )

}
  
export default Index
