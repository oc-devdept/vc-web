import React, {useState, useEffect } from 'react';
import api from 'Api'
import Moment from 'moment'
import { ArrowBack } from "@material-ui/icons";


const Booking = ({id, RestartBookingId}) => {

    const [SingleBooking, setSingleBooking] = useState(null);
    const [Loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            const result = await api.get(`/bookings/${id}`);
            setSingleBooking(() => result.data)
            setLoading(() => false)
        }
        fetchData();
    }, [id]);
    
    return (
        <div style={{margin: 20}}>

            <div className="d-flex flex-row">
                <div onClick={RestartBookingId} className="d-flex justify-content-center" style={{padding:5, boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)', width: 70}}>
                    <ArrowBack
                        fontSize="small"
                        style={{ color: "rgba(0, 0, 0, 0.8)" }}
                    />
                </div>

                <div className="d-flex flex-fill justify-content-center" style={{marginRight:70}}>
                    <span style={{textAlign:'center'}}>VIEW SERVICE BOOKING</span>
                </div>
            </div>
            
            
            {Loading && 
                <div>Loading ... </div>
            }

            {!Loading && 
                <div>
                    <BookingDetail
                        Booking={SingleBooking}
                    />
                </div>
            }

        </div>
    );
};

export default Booking;


const BookingDetail = ({Booking}) => {
    console.log(Booking)
    const {created_at, service, status, contact, content, id} = Booking
    const {firstName, lastName, email, phone} = contact
    const {model, date, timeslot, description} = content

    return (
        <div className="d-flex flex-row" style={{marginTop:20}}>

            <div className="d-flex flex-fill flex-column" style={{boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)', marginRight: 25}}>
                <div className="d-flex flex-fill justify-content-center" style={{backgroundColor:'rgba(76,109,126,1)', padding: 10}}>
                    <span style={{textAlign:'center', color:'white'}}>BOOKING DETAILS</span>
                </div>

                <div style={{margin:25}}>
                    <Forms
                        Style={"row"}
                        Details={{                            
                            Scheduled: date,
                            Timeslot: timeslot,
                            Service: service,
                            Model: model,
                            Status: status,
                            Description: description,

                        }}
                    />
                </div>
            </div>
            
            <div className="d-flex flex-column" style={{boxShadow: '0 5px 9px 0 rgba(0,0,0,0.15), 0 8px 25px 0 rgba(0,0,0,0.15)'}}>
                <div className="d-flex justify-content-center" style={{backgroundColor:'rgba(76,109,126,1)', padding: 10}}>
                    <span style={{textAlign:'center', color:'white'}}>USER DETAIL</span>
                </div>

                <div style={{margin:25}}>
                    <Forms
                        Style={"column"}
                        Details={{
                            Name : `${firstName} ${lastName}`,
                            Email: email,
                            Phone: phone,
                        }}
                    />
                </div>
            </div> 

        </div>
    );
}

const Forms = ({Details, Style}) => {  
    const BookingEntries = Object.entries(Details)

    if(Style == 'column'){
        return (
            <>
                {
                    BookingEntries.map((e, index) => {
                        const key = e[0]
                        const value = e[1]
                        return (
                            <div className="d-flex flex-column justify-content-between" key={index} style={{padding: 10}}>
                                <span>{key}</span>
                                <span style={{marginLeft: 15, marginTop: 5}}>{value}</span>
                            </div>
                        )
                    })
                }
            </>
        );

    } else {

        return (
            <>
                {
                    BookingEntries.map((e, index) => {
                        const key = e[0]
                        const value = e[1]

                        if (key == 'Created' || key == 'Scheduled'){
                            return (
                                <div className="d-flex flex-row justify-content-between" key={index} style={{padding: 10}}>
                                    <span>{key}</span>
                                    <span>{Moment(value).format('LL')}</span>
                                </div>
                            )
                        } else {
                            return (
                                <div className="d-flex flex-row justify-content-between" key={index} style={{padding: 10}}>
                                    <span>{key}</span>
                                    <span>{value}</span>
                                </div>
                            )
                        }
                    })
                }
            </>
        );
    }
}
