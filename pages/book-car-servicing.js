import React, { Component, useState } from "react";
import DefaultLayout from "Components/Layout/PageTemplates/Default";

import PageBanner from "Components/Shared/PageBanner";
import DayPicker from "react-day-picker";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';
  
import 'moment/locale/it';

import { NotificationManager } from "react-notifications";
import SuccessfulBooking from "./book-successful";

import api from 'Api'


const Contact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    //date: new Moment()
}

const Content = {
    model: '',
    //date: '',
    date: '',
    timeslot: 'AM',
    description: '',
}

const Service = {
    service: 'Maintenance'
}

const Status = {
    status: 'Awaiting',
}

function BookCarServicing() {
    // Contact
    const [Form, setForm] = useState(Contact);
    const { firstName, lastName, email, phone } = Form
    // Content
    const [content, setContent] = useState(Content);
    const { model, date, timeslot, description } = content

    const [day, setDay] = useState();
    

    const onChangeForm = (element, value) => {
        setForm(Form => ({ ...Form, [element]: value }));
    }
    
    const onChangeContent = (element, value) => {
        setContent(content => ({ ...content, [element]: value }));
    }


    // Set State for DayPickerInput
    const handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
        console.log(selectedDay.toLocaleDateString());
        content.date = selectedDay;
        console.log(content);
    }

    // Setting errors to use a state of null
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [phoneErr, setPhoneErr] = useState({});
    const [visible, setVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState({date});

    const onSubmit = async (event) => {
        event.preventDefault();
        const isValid = formValidation();
        // Make the booking successful logo appear if there is not any validation errors
        if (isValid == true){
            setVisible(true);
        }

        if (isValid) {
            try {
              console.log('Send to server! ', Form)
              await api.post(`/bookings/createBooking`, { data: { contact: Form, content: content, service: 'Maintenance', status: 'Awaiting' } });
              // success
              setForm(() => Contact);
              NotificationManager.success('Contact form sent successfully');
      
            } catch (e) {
              // failed
              NotificationManager.error('Network error, please try again');
      
            }
      
        }

    }

    const formValidation = () => {
        const nameErr = {};
        const emailErr = {};
        const phoneErr = {};
        let isValid = true;

        if (!firstName.match(/^[a-zA-z0-9]+$/) || !lastName.match(/^[a-zA-z0-9]+$/)) {
            nameErr.namefirstInvalid = "*Please enter a valid name";
            isValid = false;
        }
      
        if (!email.includes('@')) {
            emailErr.emailInvalid = "*Email is invalid";
            isValid = false;
        }
      
        if (!phone.match(/^[0-9+-]+$/)) {
            phoneErr.phoneInvalid = "*Please enter a valid phone number";
            isValid = false
        }

        setNameErr(nameErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        return isValid;
    }

    // For Day picker
    /*const _HandleDayChange = (date) => {
        setDate(() => Moment(date).format('LL'))
        setBookService(BookService => ({ ...BookService, date: date }));
    }*/

    return (
        <DefaultLayout>
        <div className="bookCarServicing-area">
            <PageBanner
                overlay
                title="BOOK A CAR SERVICING
                APPOINTMENT WITH US TODAY"
                /*caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula arcu, 
                tincidunt vitae porttitor vitae, cursus eu dolor. Nullam et felis ipsum. Vestibulum dapibus metus ligula, 
                vitae porttitor quam consectetur nec."*/
                bgImgUrl={"/static/service/booknowBanner.png"}
            />
            <div className="header-bar">
                <h6>DRIVER'S DETAILS</h6>
            </div>
            <div className="driver-details">
                <form className="driver-details-form">
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="inputTitle">Title</label>
                            <select id="inputTitle" class="form-control">
                                <option>Mr.</option>
                                <option>Ms.</option>
                                <option>Miss</option>
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputFirstName">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                required={true}
                                value={firstName}
                                onChange={(e) => onChangeForm('firstName', e.target.value)}
                                placeholder="Enter your first name" />
                                {Object.keys(nameErr).map((key) => {
                                    return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                })}
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputLastName">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="lastName" 
                                required={true}
                                value={lastName}
                                onChange={(e) => onChangeForm('lastName', e.target.value)}
                                placeholder="Enter your last name" />
                                {Object.keys(nameErr).map((key) => {
                                    return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                })}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPhoneNumber">Phone Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="phoneNumber" 
                                required={true}
                                value={phone}
                                onChange={(e) => onChangeForm('phone', e.target.value)}
                                placeholder="Enter your phone number" />
                                {Object.keys(phoneErr).map((key) => {
                                    return <div style={{ color: "red" }}>{phoneErr[key]}</div>
                                })}
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmailAddess">Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="emailAddress" 
                                required={true}
                                value={email}
                                onChange={(e) => onChangeForm('email', e.target.value)}
                                placeholder="Enter your email address" />
                                {Object.keys(emailErr).map((key) => {
                                    return <div style={{ color: "red" }}>{emailErr[key]}</div>
                                })}
                        </div>
                    </div>
                </form>
            </div>
            <div className="header-bar">
                <h6>CAR SERVICING DETAILS</h6>
            </div>
            <div className="driver-details">
                <form className="driver-details-form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCarModel">Your Car Model</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="carModel" 
                                required={true}
                                value={model}
                                onChange={(e) => onChangeContent('model', e.target.value)}
                                placeholder="Enter your car model" />
                        </div>
                    </div>
                    <div class="form-row">

                        <div class="form-group col-md-6">
                            <label for="inputDate">Date</label>
                            {/*<input 
                                type="email" 
                                class="form-control" 
                                id="date" 
                                placeholder="Enter your preferred date" />*/}
                            <br></br>
                            <DayPickerInput
                                formatDate={formatDate}
                                parseDate={parseDate}
                                //classNames={ {container: "form-control"} }
                                inputProps={{ 
                                    type: "email", 
                                    class: "form-control", 
                                    id: "date", 
                                    style: {width: 675} }}
                                //onChange={(e) => onChangeContent('date', e.target.value)}
                                value={date}
                                onDayChange={(e) => handleDayChange(e)}
                                selectedDay={day}
                                placeholder={`${formatDate(new Date())}`}
                            />
                        </div>
                        
                        <div class="form-group col-md-6">
                            <label for="inputTimesort">Timeslot</label>
                            <select 
                                id="inputTimesort" 
                                value={timeslot}
                                onChange={(e) => onChangeContent('timeslot', e.target.value)}
                                class="form-control">
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row last-row">
                        <div class="form-group col-md-12">
                            <label for="inputDescription">Description</label>
                            <textarea 
                                className="form-control" 
                                id="description" 
                                rows="5" 
                                required={true}
                                value={description}
                                onChange={(e) => onChangeContent('description', e.target.value)}
                                placeholder="Enter your message">
                            </textarea>
                        </div>

                    </div>
                    <div align="center">
                        <button 
                            onClick={onSubmit} 
                            type="submit" 
                            class="btn btn-primary bookAppBtn">BOOK APPOINTMENT
                        </button>
                        {/*{console.log(visible)}
                        <SuccessfulBooking visible={visible}/>*/}
                    </div>
                </form>
                
                {visible && (
                <div className="successfulMessage" align="center">
                    <div className="section-title without-bg" align="center">
                        <h2>BOOKING SUCCESSFUL</h2>
                    </div>
                    <img src="/static/service/successful_tick.png" />
                    <p>Your appointment has been successfully registered.</p>
                    <button type="submit" class="btn btn-primary"> Return to the homepage</button>
                </div>
                )}

            </div>
        </div>
        </DefaultLayout>
    );
}

export default BookCarServicing;
