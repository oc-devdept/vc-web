import React, { Component, useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Booking from 'Components/booking/booking'
import UserProfile from 'Components/booking/profile'
import Moment from 'moment'
import { NotificationManager } from "react-notifications";

import api from "Api";


let InitBookService = {
    model: '',
    date: '', // schedule date
    timeslot: '9am', // AM/PM
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
    const [Timeslot, setTimeSlot] = useState(["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]);
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
        let item = e.target.value;
        setBookService({ ...BookService, timeslot: item});
               
    }


    const validateService = async () => {

        const newBooking = {
            service: 'Maintenance',
            status: 'Awaiting',
            contact: Profile,
            content: BookService,
        }

        const result = await api.post(`/bookings/createBooking`, {data: newBooking});
        console.log(result);

        switch(result.data.data.success){
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
    const matches = useMediaQuery('(max-width:425px)')

    return (

        <div className="d-flex flex-fill flex-column"> 
        
         {matches ? (<div className="d-flex justify-content-center">
                <button onClick={toggleBookService} style={{width: 250, padding: 8, margin:20, borderRadius: 10,}} className="btn-primary">Dashboard</button>
            </div>): (<div className="d-flex justify-content-start">
                <button onClick={toggleBookService} style={{width: 250, padding: 8, margin:20, borderRadius: 10,}} className="btn-primary">Dashboard</button>
            </div>)}  

            

            <div className="d-flex justify-content-center">
                <span style={{textAlign:'center'}}>Appointment Detail</span>
            </div>

            <div className="d-flex flex-column"  style={{margin: 32, padding:20, borderRadius:5, boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)'}}>
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
                    date={date}
                />
                
                <div className="d-flex justify-content-end">
                    <button onClick={validateService} style={{width: 250, padding: 10, margin:20, borderRadius: 10,}} className="btn-primary">Book Appointment</button>
                </div>
            </div>

        </div>

    )

}
  
export default Index
