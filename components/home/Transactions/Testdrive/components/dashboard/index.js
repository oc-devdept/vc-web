import React, { Component, useState, useEffect } from 'react';
import api from "Api";

import Booking from './components/booking'
import SingleBooking from './components/singleBooking'

const Index = ({customerId, toggleBookService}) => {

    if(!customerId) {return <div>Loading ... </div>}

    const [Bookings, setBookings] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [BookingId, setBookingId] = useState(null);

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
            setBookings(Bookings => [...Bookings, ...result.data.fields])
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


    return (

        <div className="d-flex flex-fill flex-column">
            
            <div className="d-flex justify-content-start">
                <button onClick={toggleBookService} style={{width: 250, padding: 8, margin:20, borderRadius: 10,}} className="btn-primary">Make Test Drive Appointment</button>
            </div>

            <div className="rct-block" style={{}}>
                {!BookingId && 
                    <div className="d-flex flex-fill flex-column">
                        <Booking
                            tableData={Bookings}
                            loading={Loading}
                            SetSingleBooking={SetBookingId}
                        />
                    </div>
                }  

                {BookingId && 
                    <div className="d-flex flex-fill flex-column">
                    <SingleBooking
                            id={BookingId}
                            RestartBookingId={RestartBookingId}
                    />
                    </div>
                }   
            </div>      
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

