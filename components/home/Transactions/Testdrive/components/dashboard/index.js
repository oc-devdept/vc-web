import React, { Component, useState, useEffect } from 'react';
import api from "Api";

import BookingKeys from './components/bookingKeys'
import BookingList from './components/bookingList'


const Index = ({customerId}) => {

    if(!customerId) {return <div>Loading ... </div>}

    const [Bookings, setBookings] = useState([]);

    // all bookings under service?
    // const dispatch = useDispatch();
    // useEffect(() => {dispatch(retrieveUserProfile(userId))}, []);
    // const customerId = useSelector(state => state.UserState.customerId);

    // const customerId = useSelector(state => state.UserState.customerId);
    // console.log('customerId', customerId)

    useEffect(() => {
        async function fetchData() {
            const result = await api.get(`/customers/${customerId}/bookings`);
            setBookings(Bookings => [...Bookings, ...result.data])
        }
        fetchData();
    }, [customerId]);




    return (

        <div className="d-flex flex-fill flex-column">            

            <div className="d-flex flex-column" style={{overflow:'hidden',margin: 20, borderRadius:10, boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)'}}>
                <BookingKeys/>
                <BookingList
                    Bookings={Bookings}
                />
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

