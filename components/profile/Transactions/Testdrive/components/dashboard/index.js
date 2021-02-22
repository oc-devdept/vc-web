import React, { Component, useState, useEffect } from 'react';
import api from "Api";
import moment from 'moment';

import Booking from './components/booking'
import SingleBooking from './components/singleBooking';
import ConfirmDeleteModal from '../../../components/confirmDeleteModal';
import ChangeTimeModal from '../../../components/changeTimeModal';
import ScheduleChangeModal from '../../../components/scheduleChangeModal';

const Index = ({customerId, toggleBookService}) => {

    if(!customerId) {return <div>Loading ... </div>}

    const [Bookings, setBookings] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [BookingId, setBookingId] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showChangeTime, setChangeTime] = useState(false);
    const [Timeslot] = useState(["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]);
    const [selectedTime, setTime] = useState();
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState("");
    const [showChangedConfirm, setShowChangeConfirm] = useState(false);
    // all bookings under service?
    // const dispatch = useDispatch();
    // useEffect(() => {dispatch(retrieveUserProfile(userId))}, []);
    // const customerId = useSelector(state => state.UserState.customerId);
    // const customerId = useSelector(state => state.UserState.customerId);
    // console.log('customerId', customerId)

    // FetchTestDrive

    useEffect(() => {
        async function fetchData() {
            const result = await api.get(`/bookings/FetchTestDrive`);
            setBookings(result.data.fields)
            setLoading(() => false)
        }
        fetchData();
    }, [customerId]);


    const RestartBookingId = () => {
        setBookingId(()=> null)
    }

    const SetBookingId = (id) =>{
        setBookingId(()=> id)
    }

    const cancelBooking = (id) => {
        setBookingId(id);
        setShowConfirm(true);
    }

    const confirmCancel = async () => {
        setShowConfirm(false);
        const result = await api.post('/bookings/changeBookingStatus', { data: {
            id: BookingId,
            status: "Cancelled"}
        });

        let allbookings = Bookings.map(book => {
            if(result.data.fields && result.data.fields.id == book.id){                
                return result.data.fields;
            }
            else {
                return book;
            }
        })       
        setBookings(allbookings);
        

    }

    const changeBook = (id) => {
        let bookingInfo = Bookings.filter(item => item.id == id);        
        let dateObj = new Date(bookingInfo[0].content.date);
        let cDate = moment(bookingInfo[0].content.date).format('LL');
        let timeStr = dateObj.getHours();
        if(timeStr > 12){
            timeStr = timeStr - 12;
            timeStr = timeStr+"pm";
        }
        else {
            timeStr = timeStr+"am";
        }
        setBookingId(id);
        setTime(timeStr);
        setSelectedDate(dateObj);
        setCurrentDate(cDate);
        setChangeTime(true);
    }

    const confirmChangeBook = async (remarks) => {        
        
        const result = await api.post(`/bookings/changeRequest`, {
            bookingId: BookingId,
            newDate: selectedDate.toISOString(),
            newTime: selectedTime,
            remarks: remarks
        }); 
        
        let allbookings = Bookings.map(book => {
            if(result.data.data && result.data.data.id == book.id){                
                return result.data.data;
            }
            else {
                return book;
            }
        })       
        setBookings(allbookings);
        
        setChangeTime(false);
        setShowChangeConfirm(true);

        //show change popup
    }

    const handleTimeChange = (val) => {
        setTime(val);
    }

    const handleDayChange = (date) => {
        setSelectedDate(date);
        setCurrentDate(moment(date).format('LL'));
    }


    return (

        <div className="d-flex flex-fill flex-column">
            
            <div className="d-flex justify-content-start">
                <button onClick={toggleBookService} style={{width: 250, padding: 8, margin:20, borderRadius: 10,}} className="btn-primary">Make Test Drive Appointment</button>
            </div>

            <div className="rct-block" style={{}}>
            
                    <div className="d-flex flex-fill flex-column">
                        <Booking
                            tableData={Bookings}
                            loading={Loading}
                            SetSingleBooking={SetBookingId}
                            cancelBooking={cancelBooking}
                            changeBook={changeBook}
                        />
                    </div>
            

                
            </div>
            <ConfirmDeleteModal show={showConfirm} onHide={()=> setShowConfirm(false)} onConfirm={confirmCancel} />
            <ScheduleChangeModal show={showChangedConfirm} onHide={()=> setShowChangeConfirm(false)}  />
            <ChangeTimeModal show={showChangeTime} onHide={()=> setChangeTime(false)} 
                Timeslot={Timeslot} 
                selectedDate={selectedDate} 
                selectedTime={selectedTime}
                currentDate={currentDate}
                handleDayChange={handleDayChange}
                handleTimeChange={handleTimeChange}
                onConfirm={confirmChangeBook}
                />      
        </div>

    )

}
  
export default Index





// const [cookies, setCookie] = useCookies(['name']);
// setCookie('name', 'COOKIES!', { path: '/' });
// console.log(cookies)
// return (
//     <div className="d-flex justify-content-center align-items-center" style={{flex:1}}>
//         Maintenance booking system!
//         {cookies.name && <h1>Hello {cookies.name}!</h1>}
//     </div>
// );

