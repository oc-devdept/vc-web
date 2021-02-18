import React, {useState} from "react";

import DefaultLayout from "Components/Layout/PageTemplates/Default";
import PageBanner from "Components/Shared/PageBanner";

import Booking from 'Components/booking/booking'
import UserProfile from 'Components/booking/profile'
import { NotificationManager } from "react-notifications";

import Moment from 'moment'
import api from "Api";

var bookNowBanner = "/static/service/booknowBanner.png";

let InitBookService = {
  model: '',
  date: new Date, // schedule date
  timeslot: '', // AM/PM
  description: '',
}


let InitUserProfile = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
}

function BookNow(props) {
  const [Toggle, setToggle] = useState(false);
  const [Timeslot] = useState(["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]);
  const [currentDate, setDate] = useState(Moment(new Date).format('LL'));
  const [BookService, setBookService] = useState(InitBookService);
  const [Profile, setUserProfile] = useState({...InitUserProfile});

 
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

const _RestartToggle = () =>{
  setToggle(() => !Toggle)
}

  const onSubmitForm = async() =>{
   
    const newBooking = {
        service: 'Maintenance',
        status: 'Awaiting',
        contact: Profile,
        content: BookService,
  }

  const result = await api.post(`/bookings/createBooking`, {data: newBooking});

    switch(result.data.success){
        case 0:
            NotificationManager.error('Unable to make booking request, please try again later');
            break
        case 1:
            NotificationManager.success('Your booking has submitted successfully');
            setBookService(() => ({ ...InitBookService}));
            setUserProfile(() => ({ ...InitUserProfile}));
            _RestartToggle()
            break
        default:
            break
    }

  }
  
  // const customerId = useSelector(state => state.UserState.customerId);
  const {model, date, timeslot, description} = BookService
  const {lastName, firstName, email, phone} = Profile

  return (
    <DefaultLayout crumbs="Book a service">
      <section className="contact-area pb-60">
        <PageBanner
          overlay
          title="BOOK A CAR SERVICING WITH US TODAY"
          bgImgUrl={bookNowBanner}
        />

        <div className="container"> 
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
                  <button onClick={onSubmitForm} style={{width: 250, padding: 10, margin:20, borderRadius: 10,}} className="btn-primary">BOOK APPOINTMENT</button>
              </div>    
        </div>
      </section>
    </DefaultLayout>
  );
}

export default BookNow;
